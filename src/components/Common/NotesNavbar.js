import React, { useState, useEffect } from "react";
import dustbin from "../Images/dustbin.png";

const Navbar = ({ darkMode, onColorSelect, handleTrash }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    "bg-red-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-blue-300",
    "bg-[#FFD966]",
    "bg-pink-300",
    "bg-orange-300",
  ];

  const handleColorClick = (color) => {
    onColorSelect(color);
  };

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen NotesNavbar mt-5">
      {/* Mobile Menu Button */}
      <div className="flex flex-row justify-between items-center p-4  text-white md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <img
            src="https://img.icons8.com/?size=100&id=Myz5ZZ4p8yRq&format=png&color=ffffff"
            alt="Close"
          />
        </button>
        <div className="flex flex-col items-center mt-10">
          <span className="text-2xl font-medium mb-6">Noteify</span>
          <div className="mt-14 flex flex-col gap-5 items-center">
            <div className="bg-white rounded-full border-2 border-black p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={30}
                width={30}
                viewBox="0 0 448 512"
              >
                <path
                  fill="#000000"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                />
              </svg>
            </div>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className="mb-2"
              >
                <div className={`w-8 h-8 ${color} rounded-full`}></div>
              </button>
            ))}
          </div>
          <div className="text-center flex justify-center mt-10">
            <button onClick={handleTrash}>
              <img className="h-[50px]" src={dustbin} alt="Trash" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className={`items-center md:w-20 mt-5 md:h-screen ${
          darkMode ? "bg-black" : ""
        } hidden md:flex flex-col gap-5`}
      >
        <span
          className={`mt-4 text-2xl font-medium ${
            darkMode ? "text-white" : ""
          }`}
        >
          Noteify
        </span>
        <div className="mt-14 flex flex-col gap-5 items-center">
          <div className="bg-white rounded-full border-2 border-black p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              width={30}
              viewBox="0 0 448 512"
            >
              <path
                fill="#000000"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
              />
            </svg>
          </div>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorClick(color)}
              className="mb-2"
            >
              <div className={`w-8 h-8 ${color} rounded-full`}></div>
            </button>
          ))}
        </div>
        <div className="text-center flex justify-center mt-10">
          <button onClick={handleTrash}>
            <img className="h-[50px]" src={dustbin} alt="Trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
