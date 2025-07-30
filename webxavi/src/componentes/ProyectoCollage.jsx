import React from "react";
import Botonera from "./Botonera";

function ProyectoCollage() {
  return (
    <div className="p-4 mb-4">
       <img
        src="/xavi/vidacollage1.png"
        alt="Soul Drawing - Ladron de Almas"
        className="w-50 h-auto object-cover flex justify-center mx-auto my-8"
      />
      <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">      
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/P1k_hS1YQbQ"
          title="Soul Drawing - Ladron de Almas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
       <p className="text-lg text-gray-700 mt-4">
          Un collage hecho a medida con fragmentos de tu vida:
          fotos, palabras, recuerdos, lugares, objetos que solo tú comprendes.
          Escucho tu historia y la convierto en un collage íntimo y simbólico.
          Tu vida es arte, aunque no lo sepas todavía
      </p>
      <hr className="my-4 text-gray-300" />
      <Botonera downloadUrl="/xavi/vidacollage1.png" />
    </div>
  );
}

export default ProyectoCollage;
