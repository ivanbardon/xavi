import React from "react";
import Botonera from "./Botonera";

function ProyectoMar() {
  return (
    <div className="p-4 mb-4">
      <img
        src="/xavi/lamardenet1.png"
        alt="La Mar de Net - Proyecto de Arte Sostenible"
        className="w-70 h-auto object-cover flex justify-center mx-auto my-8"
      />
      <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/lZZQvRce5IA"
          title="La Mar de Net - Proyecto de Arte Sostenible"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-lg text-gray-700 mt-4">
          Es un proyecto artístico y educativo que busca concienciar sobre el problema del plástico en el mar desde una perspectiva creativa y no impositiva. A través de una exposición artística, un cuento infantil ilustrado, talleres participativos y actividades para todos los públicos, invita a reflexionar sobre la sostenibilidad y el respeto por nuestro entorno marino. El proyecto se basa en el poder del arte para transformar, emocionar y educar.
        </p>
      <hr className="my-4 text-gray-300" />
      <Botonera downloadUrl="/xavi/lamardenet1.png" />
    </div>
  );
}
export default ProyectoMar;
