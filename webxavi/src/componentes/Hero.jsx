import React from 'react';

function preloadImages(frameCount, pathFn) {
  const promises = [];
  for (let i = 1; i <= frameCount; i++) {
    const src = pathFn(i);
    promises.push(
      new Promise((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      })
    );
  }
  return Promise.all(promises);
}

function Hero() {
  const ticking = React.useRef(false);
  const [textOpacity, setTextOpacity] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const frameCount = 83;

  React.useEffect(() => {
    // Bloquea el scroll
    document.body.style.overflow = 'hidden';

    preloadImages(frameCount, (i) =>
      `frames2/ezgif-frame-${String(i).padStart(3, '0')}.webp`
    ).then(() => {
      setLoading(false);
      // Habilita el scroll
      document.body.style.overflow = '';
    });

    // Limpieza por si el componente se desmonta antes de terminar
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        // Limita el scroll solo al alto del Hero (viewport)
        const maxScroll = window.innerHeight;
        const scrollPercent = Math.min(scrollTop / maxScroll, 1);
        const fadeDistance = 100; // Distancia para el fade-out
        const opacity = Math.max(0, 1 - scrollTop / fadeDistance);
        setTextOpacity(opacity);

        const frameIndex = Math.floor(scrollPercent * frameCount);
        const frameSrc = `frames2/ezgif-frame-${String(frameIndex + 1).padStart(3, '0')}.webp`;
        const img = document.querySelector('.hero-frame img');
        if (img) img.src = frameSrc;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  React.useEffect(() => {
    if (!loading) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [loading]);

  if (loading) {
    return (
      <section className="w-dvw h-dvh flex items-center justify-center bg-white">
        <span className="text-black text-2xl">Cargando animación...</span>
      </section>
    );
  }

  return (
    <section className="w-dvw h-dvh relative overflow-hidden hero-frame">
      <img
        className="w-dvw h-100 object-cover fixed top-0 left-0 z-0"
        src="frames2/ezgif-frame-001.webp"
        alt="Hero Frame"
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-2 transition-opacity duration-100"
        style={{ opacity: textOpacity }}
      >
        <h2 className="text-4xl font-bold text-black drop-shadow-lg p-1 text-center">Arte eres tú</h2>
        <h2 className="text-4xl font-bold text-black drop-shadow-lg p-1 text-center">cuando sonries</h2>
        <p className="text-xl text-black drop-shadow">Desliza para descubrir más</p>
      </div>
    </section>
  );
}

export default Hero;
