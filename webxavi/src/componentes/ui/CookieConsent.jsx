import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
    // Optionally, disable non-essential cookies here
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-black p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm mb-3 md:mb-0 md:mr-4 text-center md:text-left">
        NO Utilizamos tus cookies para nada, ni hacemos negocios con ellas. Aceptar o Rechazar, viene a ser lo mismo. Feliz día 
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Aceptar
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
