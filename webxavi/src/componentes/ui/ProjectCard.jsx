import React from 'react';

function ProjectCard({ title, description, onClick }) {
  return (
    <div
      className="bg-white border-e-zinc-400 border-1 p-4 rounded-lg shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ProjectCard;
