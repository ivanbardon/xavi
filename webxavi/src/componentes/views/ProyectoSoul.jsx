import React from "react";
import Botonera from "../ui/Botonera";

function ProyectoSoul() {
  return (
    <div className="p-4 mb-4 bg-white">
      <img
        src="/xavi/logo-soul2.png"
        alt="Soul Drawing - Ladron de Almas"
        className="w-40 h-auto object-cover flex justify-center mx-auto mb-4"
      />
      <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/vXi0vCGeoz4"
          title="Soul Drawing - Ladron de Almas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>       
      </div>
      <p className="text-lg text-gray-700 mt-4">
        Soul Drawings es una performance de arte abstracto en la que Xavier Carrillo plasma sobre el lienzo lo que siente de la persona en ese instante de sus vidas. A través de la mirada y de un solo trazo, el artista representa el alma del público de una forma auténtica y cautivadora
      </p>
      <hr className="my-4 text-gray-300" />
      <Botonera downloadUrl="/xavi/logo-soul2.png" />
    </div>
  );
}

export default ProyectoSoul;
