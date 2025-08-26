import React, { useState, Suspense, lazy } from 'react';
import Bio from '../ui/Bio';
import SocialButtons from '../ui/SocialButtons';

// Lazy load project components for better performance
const InicioDesktop = lazy(() => import('./InicioDesktop'));
const ProyectoSoul = lazy(() => import('./ProyectoSoul'));
const ProyectoCollage = lazy(() => import('./ProyectoCollage'));
const ProyectoMar = lazy(() => import('./ProyectoMar'));
const ProyectoFotoDesmadre = lazy(() => import('./ProyectoFotoDesmadre'));

const projectSections = [
  { title: 'Inicio', component: InicioDesktop },
  { title: 'Soul Drawing', component: ProyectoSoul },
  { title: 'Vida Collage', component: ProyectoCollage },
  { title: 'La Mar de Net', component: ProyectoMar },
  { title: 'Wild Shot', component: ProyectoFotoDesmadre },
];

function DesktopView() {
  const [activeSection, setActiveSection] = useState(projectSections[0].title); // Default active section

  const ActiveComponent = projectSections.find(section => section.title === activeSection)?.component;

  return (
    <div className='w-dvw h-dvh desktop-view bg-white hidden md:block'>
      <div className="logo flex justify-center items-center pt-4">
        <img src="logoxavi.png" alt="logo xavi" className='w-90 h-auto'/>
      </div>
      <div className="flex h-auto">
        <div className="w-1/3 flex flex-col h-auto">
          <Bio />
          <SocialButtons />
        </div>
        <div className="w-2/3 h-full flex flex-col">
          {/* Button section */}
          <div className="flex justify-center border-b border-gray-200 p-4">
            {projectSections.map((section) => (
              <button
                key={section.title}
                className={`py-2 px-8 text-lg font-normal focus:outline-none ${
                  activeSection === section.title
                    ? 'border-b-2 border-e-zinc-500 text-e-zinc-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveSection(section.title)}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Content section */}
          <div className="p-4 h-150">
            <Suspense fallback={<div>Loading...</div>}>
              {ActiveComponent && <ActiveComponent />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
