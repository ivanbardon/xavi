import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import CookieConsent from './componentes/ui/CookieConsent'
import UnderConstruction from './componentes/ui/UnderConstruction'
import MobileView from './componentes/views/MobileView'
import DesktopView from './componentes/views/DesktopView'

// Utility function for debouncing
const debounce = (func, delay) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); // Breakpoint set to 1000px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    const debouncedHandleResize = debounce(handleResize, 200); // Debounce by 200ms

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  const UNDER_CONSTRUCTION = import.meta.env.VITE_APP_UNDER_CONSTRUCTION === 'true';

  if (UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  return (
    <>
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
      <CookieConsent />
    </>
  )
}

export default App;
