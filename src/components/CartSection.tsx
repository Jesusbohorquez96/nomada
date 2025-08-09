import { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MapPin,
  Phone,
  MessageCircle,
  User,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNotification } from "../context/NotificationContext";

export default function CartSection() {
  const { items, updateQuantity, clearCart, total } = useCart();
  const { showModal, showToast } = useNotification();
  const [deliveryInfo, setDeliveryInfo] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    observaciones: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendWhatsApp = () => {
    // Validamos la información de entrega básica
    if (!deliveryInfo.nombre || !deliveryInfo.direccion) {
      showModal(
        "Por favor completa los campos obligatorios: nombre completo y dirección con barrio",
        { type: "error", title: "Campos obligatorios incompletos" }
      );
      return;
    }

    // Construimos el mensaje para WhatsApp
    let message = `*NUEVO PEDIDO - NÓMADA*\n\n`;

    // Información de entrega
    message += `*INFORMACIÓN DE ENTREGA:*\n`;
    message += `Nombre: ${deliveryInfo.nombre}\n`;
    message += `Dirección: ${deliveryInfo.direccion}\n`;
    if (deliveryInfo.telefono) {
      message += `Teléfono: ${deliveryInfo.telefono}\n`;
    }
    if (deliveryInfo.observaciones) {
      message += `Observaciones: ${deliveryInfo.observaciones}\n`;
    }

    // Listado de productos
    message += `\n*PRODUCTOS:*\n`;
    items.forEach((item, index) => {
      const optionLabel = getOptionLabel(item.selectedOption);
      message += `${index + 1}. ${item.name} (${optionLabel}) x ${
        item.quantity
      } = $${(item.selectedPrice * item.quantity).toFixed(2)}\n`;
    });

    // Total
    message += `\n*TOTAL: $${total.toFixed(2)}*`;

    // Codificamos el mensaje para URL - asegurándonos de que sea compatible con iOS
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp con código de país (Colombia +57)
    const whatsappNumber = "573222450393";

    // Detectamos si es iOS o móvil para usar el formato adecuado
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let whatsappUrl;

    if (isMobile) {
      // En dispositivos móviles usamos enlaces directos a la app
      if (isIOS) {
        // iOS: usar el esquema whatsapp://
        whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
      } else {
        // Android: usar el formato estándar intent://
        whatsappUrl = `intent://send?phone=${whatsappNumber}&text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
      }
    } else {
      // En navegadores de escritorio usar web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    }

    try {
      // Abrimos la URL de WhatsApp
      const newWindow = window.open(whatsappUrl, "_blank");

      // Verificamos si la ventana se abrió correctamente
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        // El navegador bloqueó la ventana emergente
        throw new Error("Bloqueado por el navegador");
      }

      // Fallback para dispositivos móviles si el esquema directo falla
      if (isMobile && !isIOS) {
        setTimeout(() => {
          // Si no se abrió WhatsApp, redirigimos a la versión web
          window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        }, 1500);
      }

      // Si llegamos aquí, consideramos que el intento fue exitoso
      showToast("¡Tu pedido ha sido enviado a WhatsApp!", { type: "success" });
      clearCart();
    } catch (error) {
      console.error("Error al abrir WhatsApp:", error);

      // Mostramos mensaje de error al usuario
      showModal(
        "Hubo un problema al abrir WhatsApp. Vamos a intentar abrirlo en el navegador web.",
        { type: "warning", title: "Error al abrir WhatsApp" }
      );

      // Esperamos un momento y luego usamos el fallback
      setTimeout(() => {
        // Fallback final a la versión web universal
        window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Notificamos al usuario y limpiamos el carrito de todas formas
        showToast("¡Pedido preparado para WhatsApp Web!", { type: "success" });
        clearCart();
      }, 1500);
    }

    // La lógica de apertura de WhatsApp y manejo de errores
    // se ha implementado completamente en el bloque try/catch anterior
  };

  const getOptionLabel = (option: string) => {
    switch (option) {
      case "solo":
        return "Solo Burger";
      case "conPapas":
        return "Burger + Papas";
      case "conPapasAdicionales":
        return "Burger + Papas Agrandadas";
      default:
        return option;
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-900">
        <div className="max-w-md mx-auto px-4 py-4 pt-12">
          <div className="text-center py-12">
            <ShoppingBag className="h-20 w-20 text-stone-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-amber-400 mb-2">
              Tu carrito está vacío
            </h2>
            <p className="text-stone-400 text-sm mb-4">
              Agrega algunos productos deliciosos a tu carrito
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900">
      <div className="max-w-md mx-auto px-4 py-4 pt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-amber-400">TU CARRITO</h2>
          <button
            onClick={() => {
              clearCart();
              showModal("Has vaciado el carrito", {
                type: "info",
                title: "Carrito vacío",
              });
            }}
            className="text-red-400 hover:text-red-300 flex items-center transition-colors text-sm"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            <span>Vaciar carrito</span>
          </button>
        </div>

        <div className="bg-stone-800 rounded shadow overflow-hidden">
          <div className="divide-y divide-stone-700">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedOption}-${index}`}
                className="p-4 flex items-start space-x-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-md font-bold text-amber-400 mb-1">
                    {item.name}
                  </h3>
                  <div className="text-xs text-stone-400">
                    {item.description.substring(0, 80)}
                    {item.description.length > 80 ? "..." : ""}
                  </div>
                  <div className="mt-2">
                    <span className="text-amber-500 font-bold">
                      ${item.selectedPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-xs bg-amber-600 text-stone-900 px-2 py-1 rounded font-medium">
                      {getOptionLabel(item.selectedOption)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedOption,
                        item.quantity - 1
                      )
                    }
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition-colors text-stone-300"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-6 text-center font-bold text-amber-400 mx-2">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedOption,
                        item.quantity + 1
                      )
                    }
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition-colors text-stone-300"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-stone-200">TOTAL:</span>
              <span className="text-2xl font-bold text-amber-400">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Información de entrega */}
            <div className="mb-4">
              <h3 className="text-amber-400 font-bold mb-3 text-lg">
                INFORMACIÓN DE ENTREGA
              </h3>

              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={deliveryInfo.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-stone-700 text-stone-100 rounded px-10 py-2 text-sm border border-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
                  <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección y barrio"
                    value={deliveryInfo.direccion}
                    onChange={handleInputChange}
                    className="w-full bg-stone-700 text-stone-100 rounded px-10 py-2 text-sm border border-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Número telefónico (opcional)"
                    value={deliveryInfo.telefono}
                    onChange={handleInputChange}
                    className="w-full bg-stone-700 text-stone-100 rounded px-10 py-2 text-sm border border-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
                  <textarea
                    name="observaciones"
                    placeholder="Observaciones (opcional)"
                    value={deliveryInfo.observaciones}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full bg-stone-700 text-stone-100 rounded px-10 py-2 text-sm border border-stone-600 focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded font-bold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>SOLICITAR PEDIDO POR WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
