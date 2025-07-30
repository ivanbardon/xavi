import React from 'react'
import './index.css'
import NavBar from './componentes/ui/NavBar'
import Hero from './componentes/ui/Hero'
import Footer from './componentes/ui/Footer'
import SeccionProyectos from './componentes/views/SeccionProyectos'
import Bio from './componentes/ui/Bio'

function App() {
  

  return (
    <>
    <Hero />
    <div style={{ height: '45vh' }} /> {/* Espacio para completar la animación */}
    <NavBar />
    <Bio />
    <SeccionProyectos />
    <Footer />
    
    </>
  )
}

export default App;
