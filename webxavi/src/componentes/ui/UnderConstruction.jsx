import React from 'react';
import logo from '../../assets/logo.png'; // Assuming the logo is relevant for branding

function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800">
      <img
        src={logo}
        alt="Logo"
        className="w-60 mb-8" // Adjust size as needed
      />
      <div className="text-center p-8 bg-white">
        <h1 className="text-2xl font-bold mb-4 elegantshadow">¡Sitio en Construcción!</h1>
        <p className="text-lg mb-6">Estamos trabajando arduamente para mejorar tu experiencia. Volveremos pronto.</p>
        <p className="text-md text-gray-700">Para consultas, contáctanos en: <a href="mailto:hola@xaviercarrillo.com" className="text-blue-600 hover:underline">hola@xaviercarrillo.com</a></p>
        <p className="mt-6 text-sm text-gray-500">Gracias por tu paciencia.</p>
      </div>
    </div>
  );
}

export default UnderConstruction;
