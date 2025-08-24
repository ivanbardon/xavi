import React from "react";
import Botonera from "../ui/Botonera";

function ProyectoSoul() {
  return (
    <div className="w-full h-dvh bg-white flex flex-col p-4">
      <img
        src="/xavi/logo-soul2.png"
        alt="Soul Drawing - Ladron de Almas"
        className="w-40 h-auto object-cover flex-col justify-center mx-auto mb-8"
      />
      <div className="w- full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg flex-col mb-8">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/vXi0vCGeoz4?modestbranding=1&rel=0"
          title="Soul Drawing - Ladrón de Almas"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>       
      </div>
      <div className="flex-col">
        <p className="text-lg text-gray-700 mt-4">
          Soul Drawings es una performance de arte abstracto en la que Xavier Carrillo plasma sobre el lienzo lo que siente de la persona en ese instante de sus vidas. A través de la mirada y de un solo trazo, el artista representa el alma del público de una forma auténtica y cautivadora
        </p>
        <hr className="my-8 text-gray-300" />
        <Botonera downloadUrl="/xavi/logo-soul2.png" />
      </div>  
    </div>
  );
}

export default ProyectoSoul;
