import React, { useState } from "react";
import ProyectoSoul from "./ProyectoSoul";

function SeccionProyectos() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (proyecto) => setOpenModal(proyecto);
  const handleClose = () => setOpenModal(null);

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("Soul Drawing")}
        >
          <h3 className="text-xl font-semibold">Soul Drawing</h3>
          <p className="text-gray-600">Descripción del proyecto 1.</p>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("La Vida Collage")}
        >
          <h3 className="text-xl font-semibold">La Vida Collage</h3>
          <p className="text-gray-600">Descripción del proyecto 2.</p>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          onClick={() => handleOpen("La Mar de Net")}
        >
          <h3 className="text-xl font-semibold">La Mar de Net</h3>
          <p className="text-gray-600">Descripción del proyecto 3.</p>
        </div>
      </div>

      {/* Popups */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full flex flex-col justify-center items-center relative">
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
                <h2 className="text-3xl font-bold mb-4">La Vida Collage</h2>
                <p className="text-lg">Descripción del proyecto 2.</p>
              </div>
            )}
            {openModal === "La Mar de Net" && (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">La Mar de Net</h2>
                <p className="text-lg">Descripción del proyecto 3.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default SeccionProyectos;
