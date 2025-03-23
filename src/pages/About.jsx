import React, { useState } from "react";
import Bulb from "../components/Bulb";
import { motion } from "framer-motion";
import Ghost from "../components/Ghost";
import MovingCar from "../components/MovingCar";
import TechSkills from "../components/TechSkills";

const About = () => {
  const [showTech, setShowTech] = useState(false);

  return (
    <>
      <main
        className="relative min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 
        dark:from-gray-900 dark:via-gray-950 dark:to-black 
        text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden pt-12 pb-16 md:pt-0 md:pb-0"
      >
        {/* Background Ghosts */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <Ghost />
          <Ghost />
          <div>
            <Ghost />
          </div>
        </div>

        <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center md:text-left">
          <Bulb />

          {/* Conditional Rendering: About Me or Tech Skills */}
          {!showTech ? (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-5xl mx-auto flex flex-col items-center md:items-start gap-8 p-8 
              bg-white/60 dark:bg-gray-900/60 shadow-xl rounded-2xl bg-opacity-40 backdrop-blur-md 
              border border-gray-300 dark:border-gray-700 relative"
            >
              <h1 className="text-4xl font-extrabold text-gray-800 dark:text-purple-300 mb-4">
                About Me
              </h1>
              <p className="text-lg lg:text-xl font-medium max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m{" "}
                <span className="text-indigo-600 dark:text-yellow-400 font-bold">
                  Kishore
                </span>
                , a passionate web developer specializing in crafting
                high-performance, responsive, and visually appealing websites.
                My expertise in front-end and back-end technologies helps me
                build seamless digital experiences.
              </p>

              {/* Learn More Button */}
              <button
                onClick={() => setShowTech(true)}
                className="bg-black/40 border-2 border-gray-400 px-6 py-1 rounded-full text-yellow-400"
              >
                Learn More
              </button>
            </motion.div>
          ) : (
            <TechSkills setShowTech={setShowTech} /> // ✅ Pass setShowTech as a prop
          )}
        </div>

        {/* Moving Car at Bottom */}
     
      </main>
    </>
  );
};

export default About;
