import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGoogle, FaCheck } from "react-icons/fa";
import logo from '../assets/logo.png';

function NavBar() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modal) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);

  return (
    <nav className="border-2 border-gray-200 p-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
      {/* Logo a la izquierda */}
      <img src={logo} alt="Logo" className="w-40" />

      {/* Botones redondos a la derecha */}
      <div className="flex space-x-4">
        <button
          className=" rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => handleOpen("Instagram")}
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </button>
        <button
          className="rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => handleOpen("Facebook")}
          aria-label="Facebook"
        >
          <FaFacebook className="text-3xl" />
        </button>
        <button
          className="rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => handleOpen("Whatsapp")}
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
        <button
          className="rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => handleOpen("Google")}
          aria-label="Google"
        >
          <FaGoogle className="text-3xl" />
        </button>
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
              <FaCheck className="text-2xl" />
            </button>
            {openModal === "Instagram" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Instagram</h2>
                <p className="text-lg">Contenido del Instagram.</p>
              </div>
            )}
            {openModal === "Facebook" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Facebook</h2>
                <p className="text-lg">Contenido de Facebook.</p>
              </div>
            )}
            {openModal === "Whatsapp" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">WhatsApp</h2>
                <p className="text-lg">Contenido de WhatsApp.</p>
              </div>
            )}
            {openModal === "Google" && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Google</h2>
                <p className="text-lg">Contenido de Google.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;