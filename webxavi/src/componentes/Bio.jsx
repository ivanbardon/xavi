import React from 'react'

function Bio() {
  return (
    <section className="bio-section relative z-1 bg-white">
      <img
        src="/xavi/xavi-contacto.png"
        alt="Mi foto"
        className="w-full h-auto object-cover rounded-none shadow-none"
      />
       
      <p className="text-lg text-gray-700 p-8 text-center">
        <span className="block mb-2 text-primary-700 font-bold">Xavier Carrillo</span>
        Es un <span className="font-bold text-primary-700">artista multidisciplinar</span> que trabaja entre el arte plástico, el collage digital y la performance.<br />
        <span className="block mt-2">Con sede en Valencia, su obra combina una estética contemporánea con una fuerte carga emocional y conciencia ecológica.</span>
      </p>
    </section>
  );
}

export default Bio;