import { FaPhone, FaWhatsapp, FaEnvelope, FaPalette } from "react-icons/fa";

export default function ContactCard({ name, email, phone }) {
  const handleCall = () => {
    window.open(`tel:${phone}`, "_self");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phone}?text=Hola!%20Me%20gustaría%20contactarte`, "_blank");
  };

  const handleEmail = () => {
    window.open(`mailto:${email}?subject=Contacto&body=Hola!%20Me%20gustaría%20contactarte`, "_self");
  };

  const handleGallery = () => {
    window.open("https://galeria-arte.com", "_blank");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white">
      {/* Información del perfil */}
      <div className="text-center mb-8 w-full">
        <h1 className="text-2xl font-bold text-black mb-2">{name}</h1>
        <p className="text-black font-semibold mb-2">Artista multidisciplinar</p>
        <p className="text-gray-700 text-sm leading-relaxed px-4">
          Contacto: <span className="font-semibold">{email}</span>
        </p>
      </div>

      {/* Botones de acción */}
      <div className="space-y-4 w-full max-w-md mx-auto">
        <button
          onClick={handleCall}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black border border-black font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaPhone className="w-5 h-5" />
          <span>Llamar</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black border border-black font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleEmail}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black border border-black font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaEnvelope className="w-5 h-5" />
          <span>Enviar Email</span>
        </button>

        <button
          onClick={handleGallery}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black border border-black font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaPalette className="w-5 h-5" />
          <span>Galería de Arte</span>
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 pt-6 border-t border-gray-200 w-full max-w-md mx-auto">
        <div className="flex justify-center space-x-6 text-sm text-gray-700">
          <div className="text-center">
            <div className="font-semibold text-black">150+</div>
            <div>Proyectos</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-black">5</div>
            <div>Años exp.</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-black">98%</div>
            <div>Satisfacción</div>
          </div>
        </div>
      </div>
    </div>
  );
}
