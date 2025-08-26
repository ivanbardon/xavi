import React from "react";

function Botonera({ downloadUrl }) {
  return (
    <div className="flex justify-center relative z-50">
      <a
        href={downloadUrl}
        download
        className="bg-white border border-black px-4 py-2 rounded-lg shadow hover:bg-blue-50 text-black"
      >
        Descarga más información
      </a>
    </div>
  );
}

export default Botonera;
