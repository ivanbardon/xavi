import React from 'react';
import ReactDOM from 'react-dom';
import { LuX } from 'react-icons/lu';

function ProjectModal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-white bg-opacity-40 z-40">
      <div className="bg-white w-full h-full">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <LuX />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ProjectModal;
