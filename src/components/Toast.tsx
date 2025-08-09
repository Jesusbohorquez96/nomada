import { useEffect, useState } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type = "info",
  duration = 5000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  // Manejar el cierre automático del toast
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Permitir que termine la animación antes de eliminar el componente
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  // Configurar estilos según el tipo de toast
  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          bgColor: "bg-green-100 border-green-500",
          textColor: "text-green-700",
          icon: <CheckCircle className="text-green-500" size={20} />,
        };
      case "error":
        return {
          bgColor: "bg-red-100 border-red-500",
          textColor: "text-red-700",
          icon: <AlertCircle className="text-red-500" size={20} />,
        };
      case "warning":
        return {
          bgColor: "bg-amber-100 border-amber-500",
          textColor: "text-amber-700",
          icon: <AlertTriangle className="text-amber-500" size={20} />,
        };
      case "info":
      default:
        return {
          bgColor: "bg-blue-100 border-blue-500",
          textColor: "text-blue-700",
          icon: <Info className="text-blue-500" size={20} />,
        };
    }
  };

  const { bgColor, textColor, icon } = getStyles();

  return (
    <div
      className={`fixed right-0 top-4 z-50 mx-4 flex w-full max-w-xs transform items-center rounded-lg border-l-4 ${bgColor} p-4 shadow-lg transition-all duration-300 ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="mr-3 flex-shrink-0">{icon}</div>
      <div className={`mr-2 flex-grow ${textColor}`}>{message}</div>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="flex-shrink-0"
      >
        <X size={16} className={textColor} />
      </button>
    </div>
  );
}
