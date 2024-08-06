import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white md:hidden">
        <span className="text-lg font-bold">noteapp</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="https://img.icons8.com/?size=100&id=Myz5ZZ4p8yRq&format=png&color=000000" alt="" />
        </button>
      </div>
      <div className={`items-center bg-white md:w-20 md:h-screen ${isOpen ? 'block' : 'hidden'} md:block`}>
        <span className="mt-4 text-xl font-bold hidden md:block">noteapp</span>
        <div className="mt-4 flex flex-col">
          <button className="mb-2">
            <div className="w-8 h-8 bg-red-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-green-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
          </button>
          <button className="mb-2">
            <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
          </button>
        </div>
        <div className="mt-auto mb-4">
          <button>
            <FaTrash className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
