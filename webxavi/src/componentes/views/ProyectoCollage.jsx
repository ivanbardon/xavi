import React from "react";
import Botonera from "../ui/Botonera";

function ProyectoCollage() {
  return (
    <div className="w-full h-dvh bg-white flex flex-col p-4">
       <img
        src="/xavi/vidacollage1.png"
        alt="Soul Drawing - Ladron de Almas"
        className="w-50 h-auto object-cover flex justify-center mx-auto mb-8"
      />
      <div className="w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg flex-col mb-8">      
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/P1k_hS1YQbQ?modestbranding=1&rel=0"
          title="Soul Drawing - Ladron de Almas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-col mb-8">
        <p className="text-lg text-gray-700 mt-4">
            Un collage hecho a medida con fragmentos de tu vida:
            fotos, palabras, recuerdos, lugares, objetos que solo tú comprendes.
            Escucho tu historia y la convierto en un collage íntimo y simbólico.
            Tu vida es arte, aunque no lo sepas todavía
        </p>
        <hr className="my-8 text-gray-300" />
        <Botonera downloadUrl="/xavi/vidacollage1.png" />
      </div>
    </div>
  );
}

export default ProyectoCollage;
