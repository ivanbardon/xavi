import React from 'react';

function Botonera() {
  return (
    <div className="flex justify-center relative z-5">
      <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-50">
        Ver más proyectos
      </button>
      <button className="bg-white text-green-500 border border-green-500 px-4 py-2 rounded-lg shadow ml-4 hover:bg-green-50">
        Contactar
      </button>
    </div>
  );
}

export default Botonera;
