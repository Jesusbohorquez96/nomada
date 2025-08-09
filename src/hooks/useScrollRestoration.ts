import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollRestoration = () => {
  const { pathname } = useLocation();

  // Guardamos la posición del scroll cuando cambiamos de página
  useEffect(() => {
    const saveScrollPosition = () => {
      // Guardamos la posición actual del scroll para la ruta actual
      sessionStorage.setItem(
        `scrollPosition-${pathname}`,
        window.scrollY.toString()
      );
    };

    // Agregamos el evento antes de abandonar la página
    window.addEventListener("beforeunload", saveScrollPosition);

    // Al desmontar el componente, guardamos la posición
    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pathname]);

  // Restauramos la posición del scroll cuando regresamos a una página
  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scrollPosition-${pathname}`);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
};
