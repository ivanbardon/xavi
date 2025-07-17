import React from 'react'
import './index.css'
import NavBar from './componentes/NavBar'
import Hero from './componentes/Hero'
import Footer from './componentes/Footer'
import SeccionProyectos from './componentes/SeccionProyectos'

function App() {
  

  return (
    <>
      <Hero />
      <NavBar />
      <main className='sticky z-20 bg-white p-4 text-justify'> 
        <h1 className='text-3xl font-bold py-4 text-center'>XavierCarrillo.com</h1>
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
        <SeccionProyectos />
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
        <p className='text-center text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut consequatur reprehenderit voluptates totam nam? Cum suscipit voluptatum molestiae quasi consequuntur temporibus aliquam beatae dolores iure, deleniti eos fuga quis!</p>
      </main>
      <Footer />
    </>
  )
}

export default App;
