import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import { TableProvider } from "./context/TableContext";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";
import AboutSection from "./components/AboutSection";
import { useScrollRestoration } from "./hooks/useScrollRestoration";
import { useEffect } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Manejar redirecciones desde 404.html
  useEffect(() => {
    // Verificar si hay una ruta guardada en sessionStorage
    const redirectPath = sessionStorage.getItem("redirectPath");

    // Si hay una ruta guardada y estamos en la raíz, redirigir a esa ruta
    if (redirectPath && location.pathname === "/") {
      // Limpiamos el storage para evitar redirecciones infinitas
      sessionStorage.removeItem("redirectPath");

      // Extraer la ruta base sin el dominio
      const path = redirectPath.replace(/^https?:\/\/[^/]+/, "");

      // Navegar a la ruta guardada
      navigate(path);
    }
  }, [location.pathname, navigate]);

  // Restaurar la posición del scroll entre navegaciones
  useScrollRestoration();

  // Determinar la sección actual basada en la URL
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === "/cart") return "carrito";
    if (path === "/about") return "nosotros";
    return "productos"; // default o para ruta '/'
  };

  return (
    <NotificationProvider>
      <TableProvider>
        <CartProvider>
          <div className="min-h-screen bg-stone-900">
            <Header currentSection={getCurrentSection()} />
            <main className="pt-8">
              <Routes>
                <Route path="/" element={<ProductsSection />} />
                <Route path="/menu" element={<ProductsSection />} />
                <Route path="/cart" element={<CartSection />} />
                <Route path="/about" element={<AboutSection />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <ScrollToTopButton />
          </div>
        </CartProvider>
      </TableProvider>
    </NotificationProvider>
  );
}

export default App;
