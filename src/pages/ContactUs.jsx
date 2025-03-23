import React from "react";
import Bulb from "../components/Bulb";
import { motion } from "framer-motion";
import Ghost from "../components/Ghost";
import { FaReddit, FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        
        {/* Ghosts for Large Screens */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none hidden md:block">
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
        </div>

        <div className="relative z-10 w-full max-w-5xl flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center md:text-left">
          {/* Light Mode Toggle */}
          <Bulb />

          <div className="bg-black/50 text-white p-6 md:p-10 rounded-lg shadow-lg mx-auto relative border border-gray-800 w-full"> 
            {/* Corner Brackets */}
            <div className="absolute top-[-5px] left-[-5px] w-[20px] h-[20px] border-2 border-white border-r-0 border-b-0"></div>
            <div className="absolute bottom-[-5px] right-[-5px] w-[20px] h-[20px] border-2 border-white border-l-0 border-t-0"></div>

            <h2 className="text-3xl md:text-3xl text-amber-300 font-bold mb-6 md:mb-8">Contact</h2>

            {/* Contact Form */}
          <ContactForm/>
          </div>
             {/* Social Icons */}
             <div className="flex justify-center md:justify-end space-x-6 mt-10 md:mt-6">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
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
                <a
                  href="https://www.reddit.com/u/kishore_mk_/s/ssTKZdJ8wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FaReddit className="text-2xl" />
                </a>
              </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;