import React, { useState } from 'react';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            className={`py-2 px-8 text-lg font-normal focus:outline-none ${
              index === activeTab
                ? 'border-b-2 border-e-zinc-500 text-e-zinc-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
}

function TabPanel({ children }) {
  return <div>{children}</div>;
}

export { Tabs, TabPanel };
