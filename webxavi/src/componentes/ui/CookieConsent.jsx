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
    // Optionally, you could redirect or disable certain functionalities here
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '15px 20px',
      textAlign: 'center',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
    }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
        NO Utilizamos tus cookies para Nada, ni se las vendemos a nadie. Aceptarlas o Rechazarlas viene a ser lo mismo. Feliz día
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
            padding: '8px 15px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => { e.target.style.backgroundColor = '#eee'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; }}
        >
          Aceptar
        </button>
        <button
          onClick={handleDecline}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            padding: '8px 15px',
            cursor: 'pointer',
            fontSize: '14px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseOver={(e) => { e.target.style.backgroundColor = '#333'; }}
          onMouseOut={(e) => { e.target.style.backgroundColor = 'black'; }}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
