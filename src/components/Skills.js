// src/components/Skills.js
import React from "react";
import { FaRocket, FaCode } from "react-icons/fa"; // Importing icons from react-icons
import { motion } from "framer-motion"; // For animations

const Skills = () => {
  const skills = [
    {
      name: "Spring Boot",
      description: "I harness the power of Spring Boot to forge dynamic back-end systems that form the very foundation of innovative digital landscapes. By weaving together complex microservices and resilient RESTful APIs, I create a seamless network where data flows effortlessly, and applications thrive in the fast-paced world of technology.",
      icon: <FaRocket size={48} />
    },
    {
      name: "MERN Stack",
      description: "Venturing into the MERN stack allows me to build full-stack applications that are nothing short of digital marvels. With MongoDB, Express, React, and Node.js as my compass, I navigate through the realms of data and user experience, crafting vibrant, interactive web applications that captivate and perform with precision across every digital frontier.",
      icon: <FaCode size={48} />
    },
  ];

  return (
    <div className="py-20 bg-[#D1E8E2]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#2C3531]">Tools of the Trade</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#116466] text-white mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#2C3531]">{skill.name}</h3>
              </div>
              <p className="text-gray-700">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
