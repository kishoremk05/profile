import React from "react";
import Bulb from "../components/Bulb";
import Ghost from "../components/Ghost";
import MovingCar from "../components/MovingCar";
import { FaUserGroup } from "react-icons/fa6";

const Projects = () => {
  // List of projects with image and link
  const projectList = [
    {
      title: "Group Portfolio",
      imageUrl: "/grp_portfolio.png", // Ensure the path is correct
      link: "https://kishoremk05.github.io/graffity/",
    },
    {
      title: "Simple Chatbot",
      imageUrl: "/chatbot.png", // Add an image for this project (replace with actual path)
      link: "https://chatho.neocities.org/sih/",
    },
    {
      title: "Guess Game",
      imageUrl: "/guessgame.png", // Add an image for this project (replace with actual path)
      link: "https://kishoremk05.github.io/Guessgame/",
    },
  ];

  // Handle the click on project div
  const handleProjectClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden pt-12 pb-16 md:pt-0 md:pb-0">
      {/* Ghosts for all screens */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-30 pointer-events-none">
        <Ghost />
        <Ghost />
        <Ghost />
        <Ghost />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto mb-15 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 text-center md:text-left">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-5xl mb-15 text-amber-200 font-extrabold">
          My Projects
        </h1>

        {/* Light Mode Toggle */}
        <Bulb />

        {/* Project List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {projectList.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.link)}
              className="cursor-pointer border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}

              {/* Project Title and Link */}
              <div className="p-4 border-2 border-t-0 border-gray-700 rounded-b-lg">
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-blue-300">
                  View Project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 w-full">
        <MovingCar />
      </div>
    </main>
  );
};

export default Projects;
