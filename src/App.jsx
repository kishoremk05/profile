import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="min-h-screen">
        <Home />
      </div>
      <div id="about" className="min-h-screen">
        <About />
      </div>
      <div id="projects" className="min-h-screen">
        <Projects />
      </div>
      <div id="contact" className="min-h-screen">
        <ContactUs />
      </div>
    </>
  );
}

export default App;
