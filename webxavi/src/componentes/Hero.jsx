
import React from 'react';




function Hero() {
  // este componente actualiza la imagen con un listener del scroll
  // la imagen se carga desde una carpeta de frames, y se actualiza cada vez que el usuario hace scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / maxScroll;
    const frameIndex = Math.floor(scrollPercent * 200); // Assuming 200 frames
    const frameSrc = `frames/ezgif-split/ezgif-frame-${String(frameIndex + 1).padStart(3, '0')}.jpg`;
    document.querySelector('.hero-frame img').src = frameSrc;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-dvw h-3000 relative hero-frame">
      <img className='w-dvw h-dvh object-cover fixed top-0 left-0 z-0'
        src="frames/ezgif-split/ezgif-frame-001.jpg"
      />
    </section>
  ); 
}

export default Hero;
