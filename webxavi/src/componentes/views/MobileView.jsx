import React from 'react';
import NavBar from '../ui/NavBar';
import Hero from '../ui/Hero';
import Bio from '../ui/Bio';
import Footer from '../ui/Footer';
import SeccionProyectos from './SeccionProyectos';

function MobileView() {
  return (
    <div className='main container bg-white'>
      <Hero />
      <div style={{ height: '45vh' }} /> {/* Espacio para completar la animación */}
      <NavBar />
      <Bio />
      <SeccionProyectos />
      <Footer />
    </div>
  );
}

export default MobileView;
