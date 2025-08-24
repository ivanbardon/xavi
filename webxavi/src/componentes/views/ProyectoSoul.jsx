import React from "react";
import Botonera from "../ui/Botonera";

function ProyectoSoul() {
  return (
    <div className="px-4  mb-4">
      <img
        src="/xavi/logo-soul2.png"
        alt="Soul Drawing - Ladron de Almas"
        className="w-50 h-auto object-cover flex flex-col justify-center mx-auto mb-4"
      />
      <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto flex flex-col">
        <iframe
          className="w-full h-70 rounded-2xl"
          src="https://www.youtube.com/embed/vXi0vCGeoz4?modestbranding=1&rel=0"
          title="Soul Drawing - Ladrón de Almas"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>       
      </div>
      <div className="flex flex-col">
        <p className="text-lg text-gray-700 mt-4">
          Soul Drawings es una performance de arte abstracto en la que Xavier Carrillo plasma sobre el lienzo lo que siente de la persona en ese instante de sus vidas. A través de la mirada y de un solo trazo, el artista representa el alma del público de una forma auténtica y cautivadora
        </p>
        <hr className="my-4 text-gray-300" />
        <Botonera downloadUrl="/xavi/logo-soul2.png" />
      </div>  
    </div>
  );
}

export default ProyectoSoul;
