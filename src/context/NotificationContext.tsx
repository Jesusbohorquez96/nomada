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

export const NotificationContext = createContext<NotificationContextType | null>(null);

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

  // ID counter for toasts
  let nextId = 0;

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
    const id = nextId++;
    const newToast = {
      id,
      message,
      type: options?.type || "info",
      duration: options?.duration || 2500,
    };

    setToasts((prev) => [...prev, newToast]);
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
      <div className="fixed right-0 top-0 z-50 flex flex-col items-end space-y-4 p-4">
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
