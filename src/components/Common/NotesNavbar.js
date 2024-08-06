import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, onColorSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    'red-300', 'green-300', 'purple-300', 'blue-300', 
    'yellow-300', 'pink-300', 'orange-300'
  ];

  const handleColorClick = (color) => {
    onColorSelect(color);
  };

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen NotesNavbar">
      <div className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white md:hidden">
        <span className="text-lg font-bold">noteapp</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="https://img.icons8.com/?size=100&id=Myz5ZZ4p8yRq&format=png&color=000000" alt="" />
        </button>
      </div>

      <div className={`items-center bg-white md:w-20 md:h-screen ${isOpen ? 'block' : 'hidden'} ${darkMode ? "bg-black" : ""} md:block`}>
        <span className={`mt-4 text-xl font-bold hidden md:block ${darkMode ? "text-white" : ""}`}>noteapp</span>
        <div className="mt-4 flex flex-col gap-5 items-center">
          {colors.map((color) => (
            <button key={color} onClick={() => handleColorClick(color)} className="mb-2">
              <div className={`w-8 h-8 bg-${color} rounded-full`}></div>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <button className=''>
            <svg className='ml-auto' xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 448 512"><path fill="#fa1e1e" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
