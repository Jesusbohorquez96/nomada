import React from "react";
import "../styles/og-image.css";

// Este componente es únicamente para generar la imagen OG
// No se usa directamente en la aplicación, sino para exportarlo como imagen

const OgImage: React.FC = () => {
  return (
    <div className="og-container">
      <div className="og-inner">
        <div className="og-logo">
          <img src="/logo.jpg" alt="Nómada Logo" />
        </div>
        <h1 className="og-title">NÓMADA</h1>
        <h2 className="og-subtitle">MERCADO GASTRONÓMICO</h2>
        <p className="og-description">
          Una experiencia culinaria única con hamburguesas y sabores globales
        </p>
      </div>
    </div>
  );
};

export default OgImage;
