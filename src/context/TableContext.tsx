import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { useNotification } from "./NotificationContext";

// Duración de la sesión de mesa en milisegundos (1.5 horas)
const TABLE_SESSION_DURATION = 90 * 60 * 1000; // 90 minutos en milisegundos

interface TableContextType {
  tableId: string | null;
  hasTable: boolean;
  timeRemaining: number | null; // Tiempo restante en milisegundos
  resetTableTimer: () => void; // Función para reiniciar el timer
  changeTable: (newTableId: string) => void; // Función para cambiar de mesa
}

const TableContext = createContext<TableContextType>({
  tableId: null,
  hasTable: false,
  timeRemaining: null,
  resetTableTimer: () => {},
  changeTable: () => {},
});

export const useTable = () => useContext(TableContext);

interface TableProviderProps {
  children: ReactNode;
}

// Clave para almacenamiento local
const TABLE_STORAGE_KEY = "nomada_table_session";

interface TableSession {
  tableId: string;
  expiresAt: number; // Timestamp de expiración
}

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableId, setTableId] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const { showToast } = useNotification();

  // Función para guardar la sesión de mesa en localStorage
  const saveTableSession = useCallback((id: string) => {
    const expiresAt = Date.now() + TABLE_SESSION_DURATION;
    const session: TableSession = {
      tableId: id,
      expiresAt,
    };
    localStorage.setItem(TABLE_STORAGE_KEY, JSON.stringify(session));
    return expiresAt;
  }, []);

  // Función para reiniciar el timer de la mesa
  const resetTableTimer = useCallback(() => {
    if (tableId) {
      const expiresAt = saveTableSession(tableId);
      setTimeRemaining(expiresAt - Date.now());
      showToast(`Timer de mesa #${tableId} extendido por 1.5 horas.`, {
        type: "success",
      });
    }
  }, [tableId, saveTableSession, showToast]);

  // Función para cambiar a una nueva mesa
  const changeTable = useCallback(
    (newTableId: string) => {
      if (newTableId !== tableId) {
        // Si es una mesa diferente, actualizamos
        setTableId(newTableId);
        const expiresAt = saveTableSession(newTableId);
        setTimeRemaining(expiresAt - Date.now());
        showToast(`Has cambiado a la mesa #${newTableId}`, {
          type: "success",
        });
        console.log(`Mesa cambiada a: ${newTableId}`);
      } else {
        // Si es la misma mesa, simplemente extendemos el timer
        resetTableTimer();
        showToast(
          `Ya estás en la mesa #${tableId}. Se ha extendido el tiempo de la sesión.`,
          {
            type: "info",
          }
        );
      }
    },
    [tableId, saveTableSession, showToast, resetTableTimer]
  );

  useEffect(() => {
    // Primero verificamos si hay una sesión existente en localStorage
    const storedSession = localStorage.getItem(TABLE_STORAGE_KEY);

    if (storedSession) {
      try {
        const session: TableSession = JSON.parse(storedSession);
        const now = Date.now();

        // Si la sesión no ha expirado, usamos ese ID de mesa
        if (session.expiresAt > now) {
          setTableId(session.tableId);
          setTimeRemaining(session.expiresAt - now);
          console.log(`Mesa restaurada de sesión: ${session.tableId}`);
        } else {
          // Si la sesión expiró, la eliminamos
          localStorage.removeItem(TABLE_STORAGE_KEY);
          console.log("Sesión de mesa expirada, eliminada del almacenamiento");
        }
      } catch (error) {
        console.error("Error al restaurar la sesión de mesa:", error);
        localStorage.removeItem(TABLE_STORAGE_KEY);
      }
    }

    // Verificamos la URL independientemente de si ya hay una mesa asignada
    // Esto permite cambiar de mesa si el usuario escanea otro código QR
    const params = new URLSearchParams(window.location.search);
    const encodedTableId = params.get("mesa");

    if (encodedTableId) {
      try {
        // Decodificamos el ID de mesa que viene en base64
        const decodedTableId = atob(encodedTableId);

        if (!tableId) {
          // Si no hay mesa, asignamos la nueva
          setTableId(decodedTableId);
          const expiresAt = saveTableSession(decodedTableId);
          setTimeRemaining(expiresAt - Date.now());
          showToast(`Bienvenido a la mesa #${decodedTableId}`, {
            type: "success",
          });
          console.log(`Mesa detectada en URL: ${decodedTableId}`);
        } else {
          // Si ya hay una mesa asignada (ya sea la misma u otra), usamos changeTable
          // que tiene la lógica para manejar ambos casos
          changeTable(decodedTableId);
          console.log(`Mesa procesada en URL: ${decodedTableId}`);
        }
      } catch (error) {
        console.error("Error al decodificar el ID de mesa:", error);
      }
    }
  }, [saveTableSession, tableId, changeTable, showToast]);

  // Efecto para actualizar el tiempo restante cada segundo y limpiar cuando expire
  useEffect(() => {
    if (!tableId) return;

    // Actualizar el tiempo restante cada segundo
    const interval = setInterval(() => {
      const storedSession = localStorage.getItem(TABLE_STORAGE_KEY);

      if (!storedSession) {
        clearInterval(interval);
        setTableId(null);
        setTimeRemaining(null);
        return;
      }

      try {
        const session: TableSession = JSON.parse(storedSession);
        const remaining = session.expiresAt - Date.now();

        // Si quedan 5 minutos o menos, mostramos una notificación
        if (
          remaining > 0 &&
          remaining <= 5 * 60 * 1000 &&
          remaining % (60 * 1000) < 1000
        ) {
          const minutesLeft = Math.ceil(remaining / (60 * 1000));

          showToast(
            `Tu sesión de mesa expirará en ${minutesLeft} ${
              minutesLeft === 1 ? "minuto" : "minutos"
            }. Haz clic en + para extenderla.`,
            { type: "warning", duration: 5000 }
          );
        }

        if (remaining <= 0) {
          // La sesión expiró
          clearInterval(interval);
          localStorage.removeItem(TABLE_STORAGE_KEY);
          setTableId(null);
          setTimeRemaining(null);
          console.log("La sesión de mesa ha expirado automáticamente");

          // Notificamos al usuario
          showToast("Tu sesión de mesa ha expirado.", {
            type: "info",
            duration: 5000,
          });
        } else {
          setTimeRemaining(remaining);
        }
      } catch (error) {
        console.error("Error al actualizar tiempo restante:", error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [tableId, showToast]);

  // Usamos useMemo para evitar recrear el objeto de contexto en cada renderizado
  const value = useMemo(
    () => ({
      tableId,
      hasTable: tableId !== null,
      timeRemaining,
      resetTableTimer,
      changeTable,
    }),
    [tableId, timeRemaining, resetTableTimer, changeTable]
  );

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
