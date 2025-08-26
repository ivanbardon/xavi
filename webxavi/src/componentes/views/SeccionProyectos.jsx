import React, { useState, useEffect } from "react";
import ProyectoSoul from "./ProyectoSoul";
import ProyectoCollage from "./ProyectoCollage";
import ProyectoMar from "./ProyectoMar";
import ProyectoFotoDesmadre from "./ProyectoFotoDesmadre";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

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
    <section className="container mx-auto p-4 bg-white relative z-10">
      <hr className="border-gray-400 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          title="Soul Drawing"
          description="Ladrón de Almas"
          onClick={() => handleOpen("Soul Drawing")}
        />
        <ProjectCard
          title="Vida Collage"
          description="Tu vida en un cuadro"
          onClick={() => handleOpen("Vida Collage")}
        />
        <ProjectCard
          title="La Mar de Net"
          description="Arte sostenible"
          onClick={() => handleOpen("La Mar de Net")}
        />
        <ProjectCard
          title="Wild Shot"
          description="Tu foto más salvaje"
          onClick={() => handleOpen("Wild Shot")}
        />
      </div>

      {/* Popups */}
      {openModal && (
        <ProjectModal onClose={handleClose}>
          {openModal === "Soul Drawing" && (
            <div className="text-center">
              <ProyectoSoul />
            </div>
          )}
          {openModal === "Vida Collage" && (
            <div className="text-center">
              <ProyectoCollage />
            </div>
          )}
          {openModal === "La Mar de Net" && (
            <div className="text-center">
              <ProyectoMar />
            </div>
          )}
          {openModal === "Wild Shot" && (
            <div className="text-center">
              <ProyectoFotoDesmadre />
            </div>
          )}
        </ProjectModal>
      )}
    </section>
  );
}

export default SeccionProyectos;
