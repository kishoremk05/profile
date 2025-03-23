import { FaLinkedinIn, FaGithub, FaInstagram, FaEye } from "react-icons/fa";
import React, { useState } from "react";

export default function Socialicons() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="lg:my-8 mt-7 mb-15 flex flex-row-reverse items-center justify-end space-x-reverse space-x-8">
        {/* Social Icons Container  */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/kishore-m-340129288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://github.com/kishoremk05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/duh.its_kishore__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* See More Button  */}
        <button
          className={`flex items-center justify-center gap-3 px-6 py-2.5 rounded-full 
          transition-all duration-300 ease-in-out
          border-2 ${
            isHovered
              ? "bg-purple-600 border-purple-600"
              : "bg-black border-purple-400 hover:bg-purple-600/90 hover:border-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => (window.location.href = "#about")}
        >
          <span className="text-white font-bold text-base whitespace-nowrap">
            <span className="text-amber-300"> View</span> more
          </span>
          <FaEye
            className={`text-white text-lg transform transition-all duration-300
            ${isHovered ? "scale-110 rotate-12" : "scale-100"}`}
          />
        </button>
      </div>
    </>
  );
}
