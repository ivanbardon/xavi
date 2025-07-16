import React from 'react';


function Hero() {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold text-center">Aquí pondremos el video</h1>
      </div>
    </header>
  );
}

export default Hero;
