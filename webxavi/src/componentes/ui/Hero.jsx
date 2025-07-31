import React, { useState, useEffect, useRef } from 'react';


// --- Custom Hooks ---

/**
 * Hook para precargar una secuencia de imágenes.
 * @param {number} frameCount - El número total de imágenes a precargar.
 * @param {function} pathFn - Una función que devuelve la ruta de la imagen para un índice dado.
 * @returns {{loading: boolean}} - Un objeto con el estado de carga.
 */
function useImagePreloader(frameCount, pathFn) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const promises = [];
    for (let i = 1; i <= frameCount; i++) {
      promises.push(
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = pathFn(i);
          img.onload = resolve;
          img.onerror = resolve;
        })
      );
    }

    Promise.all(promises).then(() => {
      setLoading(false);
      document.body.style.overflow = '';
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [frameCount, pathFn]);

  return { loading };
}

/**
 * Hook para manejar la animación de scroll.
 * @param {number} frameCount - El número total de frames de la animación.
 * @param {boolean} isReady - Indica si la animación debe empezar (normalmente, después de la carga).
 * @returns {{scrollPosition: number}} - Un objeto con la posición actual del scroll.
 */
function useScrollAnimation(frameCount, isReady) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setScrollPosition(scrollTop);

          const maxScroll = window.innerHeight;
          const scrollPercent = Math.min(scrollTop / maxScroll, 1);
          const frameIndex = Math.floor(scrollPercent * frameCount);
          const frameSrc = `frames2/ezgif-frame-${String(frameIndex + 1).padStart(3, '0')}.webp`;
          const img = document.querySelector('.hero-frame img');
          if (img) img.src = frameSrc;
          
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    if (isReady) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isReady, frameCount]);

  return { scrollPosition };
}


// --- Sub-components ---

const LoadingScreen = () => (
  <section className="w-dvw h-dvh flex items-center justify-center bg-white">
    <span className="text-black text-2xl">Cargando animación...</span>
  </section>
);

const HeroText = ({ scrollPosition, show }) => {
  const isScrolling = scrollPosition > 0;
  const style = (delay) => ({
    transition: !isScrolling
      ? `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`
      : 'none',
    opacity: show ? 1 - Math.min(scrollPosition / 300, 1) : 0,
    transform: `translateY(${show ? -scrollPosition / 1 : 20}px)`,
  });

  return (
    <div className="absolute bottom-20 left-0 w-full h-full flex flex-col items-center justify-end z-20">
      <div style={style(0.2)}>
        <h2 className="elegantshadow text-5xl font-bold text-black mx-4 mb-8 text-center">Arte eres tú cuando sonries</h2>
      </div>
      <div style={style(0.6)}>
        <p className="text-2xl text-black drop-shadow mt-8">Desliza para descubrir más</p>
      </div>
    </div>
  );
};


// --- Main Component ---

function Hero() {
  const frameCount = 83;
  const { loading } = useImagePreloader(frameCount, (i) => `frames2/ezgif-frame-${String(i).padStart(3, '0')}.webp`);
  const { scrollPosition } = useScrollAnimation(frameCount, !loading);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowText(true), 100); // Delay for fade-in effect
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <section className="w-dvw h-dvh relative overflow-hidden hero-frame">
      <img
        className="w-dvw h-100 object-cover fixed top-0 left-0 z-0"
        src="frames2/ezgif-frame-001.webp"
        alt="Hero Frame"
      />
      <HeroText scrollPosition={scrollPosition} show={showText} />
    </section>
  );
}

export default Hero;
