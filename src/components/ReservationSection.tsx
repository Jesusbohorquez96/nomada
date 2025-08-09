import { useState } from "react";
import { useNotification } from "../context/NotificationContext";

// Tipos para nuestro formulario
interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  eventType: string;
  message: string;
  budget?: string;
}

export default function ReservationSection() {
  const { showNotification } = useNotification();
  
  // Estado inicial del formulario
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    eventType: "general",
    message: "",
    budget: "",
  });

  // Estado para seguimiento del envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBudget, setShowBudget] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Si el tipo de evento cambia, determinamos si mostrar el campo de presupuesto
    if (name === "eventType") {
      const needsBudget = ["birthday", "anniversary", "corporate"].includes(value);
      setShowBudget(needsBudget);
    }
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Convertir tipo de evento a texto legible
  const getEventTypeText = (type: string): string => {
    const types: Record<string, string> = {
      general: "Cena regular",
      birthday: "Cumpleaños",
      anniversary: "Aniversario / Cena romántica",
      corporate: "Evento corporativo",
      other: "Otro",
    };
    return types[type] || type;
  };

  // Formatear presupuesto para mensaje
  const formatBudget = (budget: string): string => {
    const budgets: Record<string, string> = {
      "50000-100000": "$50.000 - $100.000",
      "100000-150000": "$100.000 - $150.000",
      "150000+": "Más de $150.000",
    };
    return budgets[budget] || "";
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí normalmente enviarías los datos a tu backend
      // Por ahora simulamos una petición exitosa
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Preparar mensaje para WhatsApp
      const eventTypeText = getEventTypeText(formData.eventType);
      const dateObj = new Date(formData.date);
      const formattedDate = dateObj.toLocaleDateString('es-CO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Construir mensaje de WhatsApp
      let whatsappMessage = `*SOLICITUD DE RESERVA - NÓMADA*\n\n`;
      whatsappMessage += `*Nombre:* ${formData.name}\n`;
      whatsappMessage += `*Teléfono:* ${formData.phone}\n`;
      whatsappMessage += `*Email:* ${formData.email}\n`;
      whatsappMessage += `*Fecha:* ${formattedDate}\n`;
      whatsappMessage += `*Hora:* ${formData.time}\n`;
      whatsappMessage += `*Personas:* ${formData.guests}\n`;
      whatsappMessage += `*Tipo de evento:* ${eventTypeText}\n`;
      
      if (formData.budget && showBudget) {
        whatsappMessage += `*Presupuesto:* ${formatBudget(formData.budget)}\n`;
      }
      
      if (formData.message) {
        whatsappMessage += `\n*Solicitudes especiales:*\n${formData.message}\n`;
      }

      // Número de WhatsApp del restaurante (utilizar el mismo que está en AboutSection)
      const phoneNumber = "573222450393"; // El número que aparece en AboutSection sin el "+"

      // Codificar mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // URL de WhatsApp
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappURL, "_blank");
      
      // Mostrar mensaje de éxito
      showNotification({
        message: "Tu reserva ha sido recibida. Te contactaremos pronto para confirmarla.",
        type: "success",
      });
      
      // Resetear formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 2,
        eventType: "general",
        message: "",
        budget: "",
      });
      setShowBudget(false);
    } catch (error) {
      showNotification({
        message: "Hubo un problema al procesar tu reserva. Intenta nuevamente.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculamos fecha mínima (hoy) para el selector de fecha
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-3">RESERVACIONES</h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Reserva tu mesa y déjanos preparar una experiencia gastronómica inolvidable para ti y tus acompañantes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Info Column */}
          <div className="md:col-span-2 bg-stone-800 p-8 rounded-lg border border-stone-700 h-fit">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">INFORMACIÓN DE RESERVAS</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-bold text-amber-400 mb-2">HORARIOS DE ATENCIÓN</h4>
              <p className="text-stone-300 mb-1">
                <span className="font-bold">Todos los días:</span> 𝟱:𝟬𝟬𝙥𝙢 𝙖 𝟭𝟬:𝟯𝟬𝙥𝙢
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-amber-400 mb-2">TIPOS DE EVENTOS</h4>
              <ul className="text-stone-300 space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <span className="font-bold">Cenas Regulares:</span> Reserva tu mesa para disfrutar de nuestra oferta gastronómica.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <span className="font-bold">Cumpleaños:</span> Celebra tu día especial con un menú personalizado.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <span className="font-bold">Aniversarios:</span> Crea recuerdos inolvidables en un ambiente romántico.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <span className="font-bold">Eventos Corporativos:</span> Impresiona a tus clientes o reúne a tu equipo.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-amber-400 mb-2">IMPORTANTE</h4>
              <ul className="text-stone-300 space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Para grupos de más de 8 personas, se recomienda reservar con al menos 48 horas de anticipación.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Se requiere un depósito para eventos especiales y grupos grandes.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mt-1.5 mr-2"></span>
                  <span>Te contactaremos para confirmar tu reserva.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-amber-400 mb-2">CONTACTO DIRECTO</h4>
              <p className="text-stone-300">
                Si prefieres hacer tu reserva directamente:
                <br />
                <a 
                  href="https://wa.me/573222450393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-bold">+57 322 245 0393</span>
                </a>
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-3 bg-stone-800 p-8 rounded-lg border border-stone-700">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">SOLICITUD DE RESERVA</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-1">
                    Teléfono de contacto *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  />
                </div>

                {/* Cantidad de personas */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-300 mb-1">
                    Número de personas *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} {i === 0 ? "persona" : "personas"}
                      </option>
                    ))}
                    <option value="21">Más de 20 personas</option>
                  </select>
                </div>

                {/* Fecha */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-stone-300 mb-1">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  />
                </div>

                {/* Hora */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-stone-300 mb-1">
                    Hora *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                {/* Tipo de Evento */}
                <div className="md:col-span-2">
                  <label htmlFor="eventType" className="block text-sm font-medium text-stone-300 mb-1">
                    Tipo de evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                  >
                    <option value="general">Cena regular</option>
                    <option value="birthday">Cumpleaños</option>
                    <option value="anniversary">Aniversario / Cena romántica</option>
                    <option value="corporate">Evento corporativo</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                {/* Presupuesto (condicional) */}
                {showBudget && (
                  <div className="md:col-span-2">
                    <label htmlFor="budget" className="block text-sm font-medium text-stone-300 mb-1">
                      Presupuesto estimado por persona
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none"
                    >
                      <option value="">Seleccionar presupuesto</option>
                      <option value="50000-100000">$50.000 - $100.000</option>
                      <option value="100000-150000">$100.000 - $150.000</option>
                      <option value="150000+">Más de $150.000</option>
                    </select>
                  </div>
                )}

                {/* Mensaje / Solicitud Especial */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1">
                    Solicitudes especiales o comentarios
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-stone-700 border border-stone-600 rounded-md px-4 py-2 text-stone-200 focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none resize-none"
                    placeholder="Indícanos cualquier preferencia dietética, alergia, decoración especial o cualquier otra solicitud que tengas para tu reserva."
                  ></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-stone-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      PROCESANDO...
                    </>
                  ) : (
                    <>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="mr-2"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      ENVIAR SOLICITUD POR WHATSAPP
                    </>
                  )}
                </button>
              </div>
              
              <div className="text-xs text-stone-400 text-center">
                * Campos obligatorios. Al enviar el formulario, se abrirá WhatsApp con tu información de reserva.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
