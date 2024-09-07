import React from "react";
import backgroundImage from "./1.jpeg"; // Import the background image

const Hero = () => {
  const handleButtonClick = () => {
    const section = document.querySelector("#contact-section");
    section?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the contact section
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: 'overlay', // Apply a blending mode to the background image
        backgroundColor: 'rgba(0, 0, 0, 0.3)' // Add a light mask
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-10">
          <h1 className="text-5xl font-bold mb-4">Embarking on Digital Adventures</h1>
          <p className="text-2xl">Exploring the vast landscapes of code, technology, and innovation.</p>
          <button
            className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded"
            onClick={handleButtonClick}
          >
            Let's Create Something Amazing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
