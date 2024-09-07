import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true); // Trigger the animation when in view
        }
      },
      { threshold: 0.2 } // Adjust the threshold based on when you want the animation to trigger
    );

    const section = document.querySelector("#contact-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="contact-section" className="py-20 bg-yellow-500 relative">
      <div className="absolute inset-0 bg-yellow-400 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Create Something Amazing Together!
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Are you looking to bring your innovative ideas to life or hire a passionate individual who can fit seamlessly into your team's vision? Let’s turn your bold concepts into groundbreaking realities. Your idea sparks the vision, and my mission is to craft that vision into a powerful product. Together, we can create extraordinary outcomes and shape the future. Let's embark on this exciting journey and explore how my expertise can complement your organization's goals!
        </motion.p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-8 relative z-10">
          <motion.a
            href="https://www.facebook.com/phanib999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-600 hover:text-blue-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://github.com/phanib999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-900 hover:text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/phanib999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-700 hover:text-blue-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:phanib999@gmail.com"
            className="text-4xl text-red-600 hover:text-red-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGoogle />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
