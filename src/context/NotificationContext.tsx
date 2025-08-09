import { createContext, useContext, ReactNode, useState } from "react";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

type NotificationType = "success" | "error" | "warning" | "info";

interface ModalOptions {
  title?: string;
  type?: NotificationType;
}

interface ToastOptions {
  type?: NotificationType;
  duration?: number;
}

interface NotificationContextType {
  showModal: (message: string, options?: ModalOptions) => void;
  closeModal: () => void;
  showToast: (message: string, options?: ToastOptions) => void;
}

export const NotificationContext =
  createContext<NotificationContextType | null>(null);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification debe ser usado dentro de un NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    title: "Aviso",
    type: "info" as NotificationType,
  });

  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      message: string;
      type: NotificationType;
      duration: number;
    }>
  >([]);

  // ID counter for toasts - usando useRef para mantener el valor entre renderizados
  const nextIdRef = useState(() => ({
    current: 0,
  }))[0];

  const showModal = (message: string, options?: ModalOptions) => {
    setModalState({
      isOpen: true,
      message,
      title: options?.title || "Aviso",
      type: options?.type || "info",
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const showToast = (message: string, options?: ToastOptions) => {
    const id = nextIdRef.current++;
    const type = options?.type || "info";
    const duration = options?.duration || 2500;

    // Eliminar notificaciones duplicadas (mismo mensaje y tipo)
    setToasts((prev) => {
      // Filtrar notificaciones duplicadas
      const filteredToasts = prev.filter(
        (toast) => !(toast.message === message && toast.type === type)
      );

      // Limitar a máximo 3 notificaciones a la vez
      const newToasts = [...filteredToasts, { id, message, type, duration }];
      if (newToasts.length > 3) {
        return newToasts.slice(newToasts.length - 3);
      }
      return newToasts;
    });
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{
        showModal,
        closeModal,
        showToast,
      }}
    >
      {children}

      {/* Modal component */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        type={modalState.type as NotificationType}
      >
        <p>{modalState.message}</p>
      </Modal>

      {/* Toast container */}
      <div className="fixed right-0 top-16 z-50 flex flex-col items-end space-y-4 p-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
