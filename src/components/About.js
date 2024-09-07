import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImage from "./5.jpg"; // Import your image

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const [hasGlittered, setHasGlittered] = useState(false); // State to track glitter effect

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && !hasGlittered) {
      setHasGlittered(true); // Apply glitter effect only once
    }
  }, [isInView, hasGlittered]);

  const handleTouchStart = () => {
    setIsHovered(true); // Start hover effect on touch
  };

  const handleTouchEnd = () => {
    setIsHovered(false); // End hover effect on touch
  };

  return (
    <div id="about-section" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Image Section */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)} // Start hover effect
          onMouseLeave={() => setIsHovered(false)}  // End hover effect
          onTouchStart={handleTouchStart} // Start hover effect on touch
          onTouchEnd={handleTouchEnd} // End hover effect on touch
        >
          <motion.img
            src={myImage}
            alt="Phanindra"
            className="w-32 h-32 mx-auto rounded-full border-4 border-[#D9B08C] shadow-lg"
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            animate={isHovered ? { rotateY: 180 } : { rotateY: 0 }} // Flip on hover
            transition={{ duration: 0.6 }}
          />

          {/* Name on hover */}
          {isHovered && (
            <motion.div
              className={`absolute inset-0 flex items-center justify-center ${hasGlittered ? 'glitter-effect' : ''}`}
              style={{
                background: 'linear-gradient(to right, #FF6347, #D9B08C)', // Gradient background
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Lobster', cursive", // Stylish font applied
                fontSize: '2rem',
                zIndex: 1,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.5 }}
            >
              Phanindra Basavapurapu
            </motion.div>
          )}
        </motion.div>

        {/* Text Section */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#2C3531]"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          The Explorer's Origin
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          My journey as a software developer has been an epic expedition across diverse terrains. I embarked on my
          adventure by crafting intuitive and engaging web interfaces, laying the groundwork for my skills. My quest
          then led me to the rugged landscapes of Spring Boot, where I built robust APIs that powered dynamic websites.
          Most recently, I’ve navigated the vast expanse of the MERN stack, mastering the intricacies of modern web
          development. Each phase of my journey has been a thrilling expedition, continually expanding my horizons and
          fueling my passion for discovery.
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes glitter {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .glitter-effect {
          background: linear-gradient(90deg, #ffcc00, #ffcc00 50%, #ff99ff 50%, #ff99ff);
          background-size: 200% 100%;
          color: transparent;
          font-size: 2rem;
          font-family: 'Lobster', cursive;
          background-clip: text;
          -webkit-background-clip: text;
          animation: glitter 4.0s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default About;
