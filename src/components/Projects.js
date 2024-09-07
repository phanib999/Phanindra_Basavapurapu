// src/components/Projects.js
import React from "react";
import { FaHtml5, FaChalkboardTeacher, FaServer, FaCode } from "react-icons/fa"; // Icons for each project
import { motion } from "framer-motion"; // Animations

const Projects = () => {
  const projects = [
    {
      name: "Trailblazing HTML Campsites",
      description: "Built foundational websites, crafting digital terrains with HTML, CSS, and JavaScript.",
      icon: <FaHtml5 size={48} />,
    },
    {
      name: "Learning Management System Peaks",
      description: "Developed an LMS to scale educational heights, enabling smooth learning experiences.",
      icon: <FaChalkboardTeacher size={48} />,
    },
    {
      name: "Back-End API Expeditions",
      description: "Designed resilient APIs using Spring Boot, paving the way for secure, scalable systems.",
      icon: <FaServer size={48} />,
    },
    {
      name: "MERN Stack Frontier",
      description: "Conquered the full-stack wilderness with MERN, from front-end forests to back-end deserts.",
      icon: <FaCode size={48} />,
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#2C3531]">Conquered Territories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#116466] text-white mr-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#2C3531]">{project.name}</h3>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
