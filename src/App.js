// src/App.js
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectGallery from "./components/ProjectsGallery";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectGallery/>
      <Contact />
    </div>
  );
}

export default App;
