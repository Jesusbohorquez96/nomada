import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Función para mostrar el botón cuando el usuario ha hecho scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      // Calcular el 25% de la altura de la ventana (mínimo 250px)
      const scrollThreshold = Math.max(window.innerHeight * 0.25, 250);

      // Mostrar el botón cuando el usuario ha desplazado más del umbral
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ejecutar una vez para comprobar la posición inicial
    toggleVisibility();

    // Agregar el event listener
    window.addEventListener("scroll", toggleVisibility);
    // Actualizar también cuando cambie el tamaño de la ventana
    window.addEventListener("resize", toggleVisibility);

    // Limpiar los event listeners al desmontar
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  // Función para desplazarse suavemente hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 bg-amber-600 text-stone-900 rounded-full p-3 shadow-lg hover:bg-amber-500 transition-all duration-300 z-40 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Volver arriba"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default ScrollToTopButton;
