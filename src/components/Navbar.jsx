import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id); // Set active section on click
    setMenuOpen(false); // Close mobile menu
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top < window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 p-4 border-b border-gray-600 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <button
          onClick={() => handleScroll("home")}
          className="text-2xl text-white font-bold dark:text-purple-100"
        >
          Port<span className="text-yellow-400 text-3xl">folio</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleScroll(item.id)}
                className={`text-white font-medium uppercase hover:text-gray-300  duration-300 ${
                  activeSection === item.id
                    ? "border-b-2 border-yellow-400"
                    : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? "✖" : "☰"}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-95 p-4 rounded-lg shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`text-white text-lg font-semibold uppercase tracking-wide hover:text-gray-400 transition-colors duration-300 ${
                    activeSection === item.id
                      ? "border-b-2 border-yellow-400"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
