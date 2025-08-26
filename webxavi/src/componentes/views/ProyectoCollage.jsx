import React from "react";
import Botonera from "../ui/Botonera";

function ProyectoCollage() {
  return (
    <div className="px-4 mb-4">
       <img
        src="vidacollage1.png"
        alt="Soul Drawing - Ladrón de Almas"
        className="w-40 h-auto object-cover flex justify-center mx-auto my-8"
      />
      <div className="aspect-w-4 aspect-h-3 w-full max-w-3xl mx-auto">      
        <iframe
          className="w-full h-40 rounded-2xl"
          src="https://www.youtube.com/embed/P1k_hS1YQbQ"
          title="Vida Collage"
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
      <Botonera downloadUrl="VidaCollage.pdf" />
    </div>
  );
}

export default ProyectoCollage;
