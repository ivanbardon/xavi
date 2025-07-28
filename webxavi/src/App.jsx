import React from 'react'
import './index.css'
import NavBar from './componentes/NavBar'
import Hero from './componentes/Hero'
import Footer from './componentes/Footer'
import SeccionProyectos from './componentes/SeccionProyectos'
import Bio from './componentes/Bio'

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
