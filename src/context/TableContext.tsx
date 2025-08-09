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

  // Referencia para almacenar el timestamp de la última notificación
  const lastNotificationTime = useState(() => ({
    welcome: 0,
    change: 0,
    extend: 0,
  }))[0];

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
      const now = Date.now();
      const expiresAt = saveTableSession(tableId);
      setTimeRemaining(expiresAt - now);
    }
  }, [tableId, saveTableSession, showToast, lastNotificationTime]);

  // Función para cambiar a una nueva mesa
  const changeTable = useCallback(
    (newTableId: string) => {
      const now = Date.now();

      if (newTableId !== tableId) {
        // Si es una mesa diferente, actualizamos
        setTableId(newTableId);
        const expiresAt = saveTableSession(newTableId);
        setTimeRemaining(expiresAt - now);

        // Solo mostrar notificación si han pasado al menos 3 segundos desde la última
        if (now - lastNotificationTime.change > 3000) {
          showToast(`Has cambiado a la mesa #${newTableId}`, {
            type: "success",
            duration: 3000,
          });
          lastNotificationTime.change = now;
        }
        console.log(`Mesa cambiada a: ${newTableId}`);
      } else {
        // Si es la misma mesa, simplemente extendemos el timer
        resetTableTimer();
      }
    },
    [
      tableId,
      saveTableSession,
      showToast,
      resetTableTimer,
      lastNotificationTime,
    ]
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
        const now = Date.now();

        if (!tableId) {
          // Si no hay mesa, asignamos la nueva
          setTableId(decodedTableId);
          const expiresAt = saveTableSession(decodedTableId);
          setTimeRemaining(expiresAt - now);

          // Solo mostrar notificación si han pasado al menos 3 segundos desde la última
          if (now - lastNotificationTime.welcome > 3000) {
            showToast(`Bienvenido a la mesa #${decodedTableId}`, {
              type: "success",
              duration: 3000,
            });
            lastNotificationTime.welcome = now;
          }
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
  }, [saveTableSession, tableId, changeTable, showToast, lastNotificationTime]);

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
            duration: 2500,
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
