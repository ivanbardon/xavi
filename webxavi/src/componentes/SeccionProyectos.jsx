import React, { useState, useEffect } from "react";
import ProyectoSoul from "./ProyectoSoul";
import ProyectoCollage from "./ProyectoCollage";
import ProyectoMar from "./ProyectoMar";
import ProyectoFotoDesmadre from "./ProyectoFotoDesmadre";

function SeccionProyectos() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (proyecto) => setOpenModal(proyecto);
  const handleClose = () => setOpenModal(null);

  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <section className="container mx-auto p-4 bg-white relative z-1">
      <hr className="border-gray-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("Soul Drawing")}
        >
          <h3 className="text-xl font-semibold">Soul Drawing</h3>
          <p className="text-gray-600">Ladrón de Almas</p>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("La Vida Collage")}
        >
          <h3 className="text-xl font-semibold">La Vida Collage</h3>
          <p className="text-gray-600">Tu vida en un cuadro</p>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("La Mar de Net")}
        >
          <h3 className="text-xl font-semibold">La Mar de Net</h3>
          <p className="text-gray-600">Arte sostenible</p>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("Foto Desmadre")}
        >
          <h3 className="text-xl font-semibold">Foto Desmadre</h3>
          <p className="text-gray-600">Tu foto más loca</p>
        </div>
      </div>

      {/* Popups */}
      {openModal && (
        <div className="fixed inset-0 bg-white bg-opacity-40 z-4 pt-14">
          <div className="bg-white w-full h-full">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={handleClose}
              aria-label="Cerrar"
            >
              ✖️
            </button>
            {openModal === "Soul Drawing" && (
              <div className="text-center">
                <ProyectoSoul />
              </div>
            )}
            {openModal === "La Vida Collage" && (
              <div className="text-center">
                <ProyectoCollage />
              </div>
            )}
            {openModal === "La Mar de Net" && (
              <div className="text-center">
                <ProyectoMar />
              </div>
            )}
            {openModal === "Foto Desmadre" && (
              <div className="text-center">
                <ProyectoFotoDesmadre />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default SeccionProyectos;
