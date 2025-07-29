import React, { useState, useEffect } from "react";



function Botonera({ downloadUrl }) {
  const [openModal, setOpenModal] = useState(null);
  const handleOpen = (Telegram) => setOpenModal(Telegram);
  const handleClose = () => setOpenModal(null);
  const handleContact = () => {
    // Aquí puedes implementar la lógica para abrir el modal de contacto
    console.log("Abrir modal de contacto");
  };

  return (
    <div className="flex justify-center relative z-5">
      <a
        href={downloadUrl}
        download
        className="bg-white border border-black px-4 py-2 rounded-lg shadow hover:bg-blue-50 text-black"
      >
        Más información
      </a>
    </div>
  );
}

export default Botonera;
