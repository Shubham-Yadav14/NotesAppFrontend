import React, { useState, useEffect } from 'react';
import bin from "../Images/recycle-bin.png"

const Navbar = ({ darkMode, onColorSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    'bg-red-300', 'bg-green-300', 'bg-purple-300', 'bg-blue-300', 
    'bg-yellow-300', 'bg-pink-300', 'bg-orange-300'
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

      <div className={` bg-white md:w-20 md:h-screen ${isOpen ? 'block' : 'hidden'} ${darkMode ? "bg-black" : ""} md:block`}>
        <span className={`mt-4 text-xl font-bold hidden md:block ${darkMode ? "text-white" : ""}`}>noteapp</span>
        <div className="mt-4 flex flex-col gap-5 items-center">
          {colors.map((color) => (
            <button key={color} onClick={() => handleColorClick(color)} className="mb-2">
              <div className={`w-8 h-8 ${color} rounded-full`}></div>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <button className=''>
            <img src={bin} alt="recycleBin" className='w-1/2 mx-auto' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
