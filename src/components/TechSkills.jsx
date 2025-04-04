import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Skill data with positions (desktop)
const skillsData = [
  { name: "CSS", position: { x: -220, y: -140 } },
  { name: "OS", position: { x: -40, y: -220 } },
  { name: "FIGMA", position: { x: 220, y: -160 } },
  { name: "GIT", position: { x: 80, y: -140 } },
  { name: "JS", position: { x: 180, y: -50 } },
  { name: "SQL", position: { x: -250, y: 20 } },
  { name: "React", position: { x: -120, y: -60 } },
  { name: "Python", position: { x: -140, y: 60 } },
  { name: "Django", position: { x: 120, y: 90 } },
  { name: "CLOUD", position: { x: 250, y: 40 } },
  { name: "DBMS", position: { x: -240, y: 140 } },
  { name: "HTML", position: { x: -70, y: 150 } },
];

const TechSkills = ({ setShowTech }) => {
  const [exploded, setExploded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust for tablets & mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full px-4 sm:px-0 bg-transparent ">
      {/* Center Button */}
      <motion.div
  onClick={() => setExploded(!exploded)}
  className="absolute z-10 flex flex-col justify-center items-center w-24 h-24 sm:w-28 sm:h-28
  bg-black text-white rounded-full text-center font-bold text-sm sm:text-xl
  border border-gray-600 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.4)]
  ring-2 ring-white/30 backdrop-blur-sm animate-pulse transition-transform duration-300 ease-in-out"
  whileHover={{
    scale: 1.2,
    boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.9)",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
  }}
>
  <span className="tracking-wide">MY TECH</span>
  <span className="tracking-wide">SKILLS</span>
</motion.div>


      {/* Skill Bubbles */}
      {skillsData.map((skill, index) => {
        const scaleFactor = isMobile ? 0.6 : 1; // Scales down bubbles for mobile
        const x = skill.position.x * scaleFactor;
        const y = skill.position.y * scaleFactor;

        const size = isMobile
          ? "w-14 h-14 text-[10px] p-1"
          : "w-20 h-20 text-sm sm:w-24 sm:h-24 sm:text-base";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: exploded ? x : 0,
              y: exploded ? y : 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            whileHover={{
              scale: 1.3,
              rotate: Math.random() * 10 - 5,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.85)",
            }}
            className={`absolute flex justify-center m-2 items-center ${size}
              bg-white text-black rounded-full font-semibold 
              border border-gray-300 shadow-md transition-all backdrop-blur-md`}
          >
            {skill.name}
          </motion.div>
        );
      })}

      {/* Back Button */}
      <motion.button
        onClick={() => setShowTech(false)}
        className="absolute bottom-8 sm:bottom-12 px-6 py-2 bg-gray-800 text-white 
        rounded-full border border-gray-500 text-sm sm:text-lg hover:bg-gray-700
        transition duration-300 ease-in-out shadow-md"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)" }}
      >
        ← Back
      </motion.button>
    </div>
  );
};

export default TechSkills;
