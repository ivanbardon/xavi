import React, { useState, useEffect, useCallback } from 'react'
import './index.css'
import NavBar from './componentes/ui/NavBar'
import Hero from './componentes/ui/Hero'
import Bio from './componentes/ui/Bio'
import Footer from './componentes/ui/Footer' // Keep Footer for mobile view
import SeccionProyectos from './componentes/views/SeccionProyectos' // Keep SeccionProyectos for mobile view
import CookieConsent from './componentes/ui/CookieConsent'
import SocialButtons from './componentes/ui/SocialButtons'
import { Tabs, TabPanel } from './componentes/ui/Tabs'
import UnderConstruction from './componentes/ui/UnderConstruction'
import ProyectoSoul from './componentes/views/ProyectoSoul'
import ProyectoCollage from './componentes/views/ProyectoCollage'
import ProyectoMar from './componentes/views/ProyectoMar'
import ProyectoFotoDesmadre from './componentes/views/ProyectoFotoDesmadre'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px

  useEffect(() => {
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
        <div className='main container bg-white'>
          <Hero />
          <div style={{ height: '45vh' }} /> {/* Espacio para completar la animación */}
          <NavBar />
          <Bio />
          <SeccionProyectos />
          <Footer />
        </div>
      ) : (
        <div className='w-dvw h-full desktop-view bg-white hidden md:block'> {/* Added h-screen to desktop-view */}
          <div className="logo flex justify-center items-center my-8">
            <img src="public/logoxavi.png" alt="logo xavi" className='w-100 h-auto'/>
          </div>
          <div className="flex h-full">
            <div className="flex-1/3 items-center justify-center">
              <video src='public/video1.mov' alt='video logo'></video>
              <Bio />
              <SocialButtons />
            </div>
            <div className="flex-2/3 h-full flex">
              <Tabs>
                <TabPanel title="Soul Drawing">
                  <ProyectoSoul />
                </TabPanel>
                <TabPanel title="Vida Collage">
                  <ProyectoCollage />
                </TabPanel>
                <TabPanel title="La Mar de Net">
                  <ProyectoMar />
                </TabPanel>
                <TabPanel title="Foto Desmadre">
                  <ProyectoFotoDesmadre />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      )}
      <CookieConsent />
    </>
  )
}

export default App;
