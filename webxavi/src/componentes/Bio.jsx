import React from 'react'

function Bio() {
  return (
    <section className="bio-section z-0 relative flex flex-col items-center justify-center p-8 bg-white">
      <img
        src="/xavi/xavi-contacto.png"   // Reemplaza con la URL de tu foto
        alt="Mi foto" 
        className="w-screen h-auto">
        </img>
       
      <p className="text-lg text-gray-700">
        Xavier Carrillo es un artista multidisciplinar que trabaja entre el arte plástico, el collage digital y la performance. Con sede en Valencia, su obra combina una estética contemporánea con una fuerte carga emocional y conciencia ecológica.
      </p>
    </section>
  );
}

export default Bio;