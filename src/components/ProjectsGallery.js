import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaRocket, FaUniversity, FaGlobe, FaUtensils } from 'react-icons/fa'; // Import icons

// Updated project data with icons
const projectGalleryData = [
  {
    title: 'Transformative Learning Platform',
    icon: <FaBook className="text-6xl text-[#2C3531]" />, // Larger icon for impact
    description: 'An advanced LMS crafted with ReactJS and Spring Boot to enhance educational experiences for both teachers and students.',
  },
  {
    title: 'Code in the Cloud',
    icon: <FaCode className="text-6xl text-[#2C3531]" />, // Larger icon for impact
    description: 'A sophisticated coding IDE developed on the MERN stack, designed for a seamless coding experience from anywhere.',
  },
  {
    title: 'Digital Knowledge Showcase',
    icon: <FaGlobe className="text-6xl text-[#2C3531]" />, // Larger icon for impact
    description: 'A dynamic landing site for a company specializing in digital educational products, aimed at modern learners.',
  },
  {
    title: 'College Information Hub',
    icon: <FaUniversity className="text-6xl text-[#2C3531]" />, // Larger icon for impact
    description: 'A comprehensive college website featuring detailed information about the institution, its courses, faculty, and more.',
  },
  {
    title: 'University Course Explorer',
    icon: <FaRocket className="text-6xl text-[#2C3531]" />, // Larger icon for impact
    description: 'A visually engaging website for showcasing and managing university courses effectively.',
  },
  {
    title: 'Nutritious Dining Experience',
    icon: <FaUtensils className="text-6xl text-[#2C3531]" />, // Updated icon for nutrition-based restaurant
    description: 'A subscription-based restaurant website focused on nutrition management and personalized dining experiences for subscribers.',
  },
];

const ProjectGallery = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#d1e8e2] to-white" id="gallery-section"> {/* Gradient background */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2C3531]">
          Exciting Journeys in Code
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectGalleryData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center w-24 h-24 mb-6 bg-[#f0f0f0] rounded-full shadow-md">
                {project.icon}
              </div>
              <div className="text-[#2C3531] text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-800">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
