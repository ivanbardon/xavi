import React from 'react'
import './index.css'
import NavBar from './componentes/ui/NavBar'
import Hero from './componentes/ui/Hero'
import Footer from './componentes/ui/Footer'
import SeccionProyectos from './componentes/views/SeccionProyectos'
import Bio from './componentes/ui/Bio'
import CookieConsent from './componentes/ui/CookieConsent'

function App() {
  

  return (
    <>
    <div className='main container mx-auto bg-white'>
      <Hero />
      <div style={{ height: '45vh' }} /> {/* Espacio para completar la animación */}
      <NavBar />
      <Bio />
      <SeccionProyectos />
      <Footer />
    </div>
    <CookieConsent />
    </>
  )
}

export default App;
