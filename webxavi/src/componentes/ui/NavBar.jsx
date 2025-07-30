import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaCheck, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import logo from '../../assets/logo.png';
import ContactCard from "./ContactCard";

function NavBar() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modal) => setOpenModal(modal);
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
    <nav className="border-b-2 border-gray-200 p-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-30 navbar">
      {/* Logo a la izquierda */}
      <img
        src={logo}
        alt="Logo"
        className="w-40 cursor-pointer"
        onClick={() => window.location.reload()}
      />

      {/* Botones redondos a la derecha */}
      <div className="flex space-x-4">
        <a
          className="rounded-full h-8 w-8 flex items-center justify-center"
          href="https://www.instagram.com/xaviercarrillo.oficial/"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          className="rounded-full h-8 w-8 flex items-center justify-center"
          href="https://www.facebook.com/xaviercarrillo.oficial/"
          aria-label="Facebook"
        >
          <FaFacebook className="text-3xl" />
        </a>
        <a
          className="rounded-full h-8 w-8 flex items-center justify-center"
          href="https://www.tiktok.com/@xaviercarrillo.com"
          aria-label="Tiktok"
        >
          <FaTiktok className="text-3xl" />
        </a>
        <button
          className="rounded-full h-8 w-8 flex items-center justify-center"
          onClick={() => handleOpen("Telegram")}
          aria-label="Telegram"
        >
          <FaTelegramPlane className="text-3xl" />
        </button>
      </div>

      {/* Popups */}
      {openModal &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-white flex flex-col justify-center items-center overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={handleClose}
                aria-label="Cerrar"
              >
                <FaCheck className="text-2xl" />
              </button>
              {openModal === "Telegram" && (
                <div
                  id="contactModal"
                  className="w-full h-full flex items-center justify-center"
                >
                  <ContactCard
                    name="Xavier Carrillo"
                    email="hola@xaviercarrillo.com"
                    phone="+34604881468"
                  />
                </div>
              )}
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
    </nav>
  );
}

export default NavBar;
