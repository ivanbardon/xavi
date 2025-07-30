import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaPalette, FaTelegramPlane } from "react-icons/fa";

// Sub-componente para los botones de acción
const ActionButton = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex flex-row items-center justify-start gap-3 bg-white hover:bg-gray-100 text-black border border-black font-medium py-3 px-6 rounded-lg transition-all duration-200"
  >
    {icon}
    <span>{text}</span>
  </button>
);

// Sub-componente para la cabecera del perfil
const ProfileHeader = ({ name, email }) => (
  <div className="text-center mb-8 w-full">
    <h1 className="text-2xl font-bold text-black mb-2">{name}</h1>
    <p className="text-black font-semibold mb-2">Artista multidisciplinar</p>
    <p className="text-gray-700 text-sm leading-relaxed px-4">
      Contacto: <span className="font-semibold">{email}</span>
    </p>
  </div>
);

// Sub-componente para las estadísticas
const StatsFooter = () => (
  <div className="mt-8 pt-6 border-t border-gray-200 w-full max-w-md mx-auto">
    <div className="flex justify-center space-x-6 text-sm text-gray-700">
      <div className="text-center">
        <div className="font-semibold text-black">800+</div>
        <div>Obras</div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-black">27</div>
        <div>Años exp.</div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-black">100%</div>
        <div>Compromiso</div>
      </div>
    </div>
  </div>
);

export default function ContactCard({ name, email, phone }) {
  const actions = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      text: "Llamar",
      handler: () => window.open(`tel:${phone}`, "_self"),
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      text: "WhatsApp",
      handler: () => window.open(`https://wa.me/${phone}?text=Hola!%20Me%20gustaría%20contactarte`, "_self"),
    },
    {
      icon: <FaTelegramPlane className="w-5 h-5" />,
      text: "Email",
      handler: () => window.open(`mailto:${email}?subject=Contacto&body=Hola!%20Me%20gustaría%20contactarte`, "_self"),
    },
    {
      icon: <FaPalette className="w-5 h-5" />,
      text: "Galería de Arte",
      handler: () => window.open("https://g.co/kgs/5H3ub1d", "_self"),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white">
      <ProfileHeader name={name} email={email} />
      
      <div className="space-y-4 w-full max-w-md mx-auto">
        {actions.map((action, index) => (
          <ActionButton
            key={index}
            icon={action.icon}
            text={action.text}
            onClick={action.handler}
          />
        ))}
      </div>

      <StatsFooter />
    </div>
  );
}
