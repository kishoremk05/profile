import React from "react";
import { motion } from "framer-motion";

const skills = [
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Figma",
  "Git",
  "Python",
];

const generateRandomPosition = (index) => {
  // Define a radius for the scatter effect
  const radius =
    window.innerWidth < 640
      ? 70 + Math.random() * 20
      : 130 + Math.random() * 50; // Increased radius for more space

  // Center the middle skill (index 3) at (0,0)
  if (index === Math.floor(skills.length / 2)) {
    return { x: 0, y: 0 }; // Center the middle skill
  }

  // For other skills, scatter them randomly around the center with more space between
  const angle = (index / skills.length) * (2 * Math.PI) + Math.random() * 0.6; // Slightly larger randomness in angle

  // Apply an offset to prevent the skills from overlapping
  const spacingOffset = 10; // Adjust this value for more/less spacing

  return {
    x: (radius + spacingOffset) * Math.cos(angle), // X-position based on the angle
    y: (radius + spacingOffset) * Math.sin(angle), // Y-position based on the angle
  };
};

const TechSkills = ({ setShowTech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col justify-center items-center max-w-md sm:max-w-lg mx-auto p-6 bg-white/10 dark:bg-black/40 
      shadow-2xl rounded-3xl bg-opacity-40 backdrop-blur-xl border border-gray-400 dark:border-gray-600 mb-5"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-xl font-extrabold text-gray-900 dark:text-purple-300 text-center mb-6 sm:mb-8">
        My Tech Skills
      </h1>

      {/* Skill Bubbles */}
      <div className="relative w-full sm:w-[400px] h-[250px] sm:h-[300px] flex justify-center items-center mb-8">
        {skills.map((skill, index) => {
          const position = generateRandomPosition(index);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: position.x, y: position.y }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="absolute flex justify-center items-center w-14 sm:w-16 h-14 sm:h-16 bg-white dark:bg-gray-800 text-black dark:text-white 
              rounded-full shadow-lg hover:scale-110 cursor-pointer font-medium text-md border border-gray-300 dark:border-gray-500
              transition-all duration-300 hover:shadow-[0_0_20px_#FF00FF] hover:text-purple-300"
            >
              {skill}
            </motion.div>
          );
        })}
      </div>

      {/* Back Button */}
      <button
        onClick={() => setShowTech(false)}
        className="mt-6 bg-gradient-to-r from-pink-500 to-red-600 px-6 py-2 rounded-full text-white font-bold 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Back
      </button>
    </motion.div>
  );
};

export default TechSkills;
