import React from "react";
import Botonera from "./Botonera";

function ProyectoFotoDesmadre() {
  return (
    <div className="p-4 mb-4">
      <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
        <img
          src="/xavi/fotodesmadre1.png"
          alt="Foto Desmadre - Tu foto más loca"
          className="w-80-auto object-cover flex justify-center mx-auto mb-8"
        />
        <img
          src="/xavi/fotodesmadre4.png"
          alt="Foto Desmadre - Tu foto más loca"
          className="w-70 h-auto object-cover flex justify-center mx-auto mb-8"
        />
        <p className="text-lg text-gray-700 mt-4">
          Es un proyecto artístico y educativo que busca concienciar sobre el problema del plástico en el mar desde una perspectiva creativa y no impositiva
        </p>
        <hr className="my-4 text-gray-300" />
        <Botonera />
      </div>
    </div>
  );
}

export default ProyectoFotoDesmadre;
