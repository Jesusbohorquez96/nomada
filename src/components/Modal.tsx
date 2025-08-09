import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  type?: "success" | "error" | "warning" | "info";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  type = "info",
}: ModalProps) {
  useEffect(() => {
    // Bloquear el scroll cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  // Configurar colores según el tipo de modal
  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-amber-500";
      case "info":
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay semi-transparente */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Contenedor del modal */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white shadow-lg">
        {/* Cabecera del modal */}
        <div
          className={`relative flex items-center justify-between rounded-t-lg ${getBgColor()} p-4 text-white`}
        >
          <h3 className="text-lg font-medium">{title || "Aviso"}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-white hover:bg-opacity-20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-6">{children}</div>

        {/* Pie del modal con botón de cerrar */}
        <div className="flex justify-end rounded-b-lg border-t border-gray-200 bg-gray-50 p-4">
          <button
            onClick={onClose}
            className={`rounded px-4 py-2 text-white ${getBgColor()} hover:opacity-90`}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
