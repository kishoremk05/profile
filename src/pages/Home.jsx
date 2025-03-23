import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Bulb from "../components/Bulb";
import ProfileCard from "../components/ProfileCard";
import Socialicons from "../components/Socialicons";
import { motion } from "framer-motion";
import Ghost from "../components/Ghost";
import About from "./About";
import MovingCar from "../components/MovingCar";

export default function Home() {
  const name = "Kishore";

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
        {/* Ghosts in the Background */}
        <div className="absolute inset-0 z-0 opacity-60 dark:opacity-20 pointer-events-none">
          <Ghost />
          <div >
            <Ghost />
          </div>
        </div>

        <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center md:text-left">
          {/* Light Mode Toggle */}
          <Bulb />

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileCard />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <h1 className="text-4xl flex lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 leading-snug">
                Hi, I'm{" "}
                <span className="ml-2 text-black dark:text-yellow-400">
                  {name}
                </span>{" "}
                <span className="animate-pulse">👋</span>
              </h1>

              <div className="text-2xl lg:text-3xl font-extrabold text-purple-600 dark:text-purple-400 my-3">
                <Typewriter
                  words={[
                    "Web Developer 💻",
                    "Freelancer 🚀",
                    "Debugger 🔍",
                    "Tech Enthusiast 🎯",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={40}
                />
              </div>

              <p className="text-lg lg:text-xl font-medium max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                I specialize in building high-performance, responsive, and
                user-friendly websites, ensuring seamless experiences across all
                devices.
              </p>

              <Socialicons />
            </motion.div>
          </div>
        </div>
      </main>
{/* blur */}


      {/* Moving Car at Bottom */}
      {/* <div className="lg:hidden absolute -bottom-60 lg:-bottom-22 w-full">

  <MovingCar />
</div> */}

    </>
  );
}
