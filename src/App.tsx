import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import CartSection from "./components/CartSection";
import AboutSection from "./components/AboutSection";

function App() {
  const [currentSection, setCurrentSection] = useState("productos");

  const renderSection = () => {
    switch (currentSection) {
      case "productos":
        return <ProductsSection />;
      case "carrito":
        return <CartSection />;
      case "nosotros":
        return <AboutSection />;
      default:
        return <ProductsSection />;
    }
  };

  return (
    <NotificationProvider>
      <CartProvider>
        <div className="min-h-screen bg-stone-900">
          <Header
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
          />
          <main className="pt-6">{renderSection()}</main>
        </div>
      </CartProvider>
    </NotificationProvider>
  );
}

export default App;
