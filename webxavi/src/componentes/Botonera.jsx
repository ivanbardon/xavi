import React from 'react';

function Botonera() {
  return (
    <div className="flex justify-center relative z-5">
      <button className="bg-white border px-4 py-2 rounded-lg shadow hover:bg-blue-50">
        Más información
      </button>
      <button className="bg-white border px-4 py-2 rounded-lg shadow ml-4 hover:bg-green-50">
        Contactar
      </button>
    </div>
  );
}

export default Botonera;
