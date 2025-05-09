// components/Module.js
import React from 'react';
import { motion } from 'framer-motion';

const Module = ({ children, title, isOpen, onClick, icon: Icon }) => {
  const moduleVariants = {
    closed: {
      scale: 1,
      opacity: 1,
      zIndex: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    open: {
      scale: 1.2,  // or larger, for the zoom effect
      opacity: 1,
      zIndex: 10,  // Ensure it's above other modules
      transition: { duration: 0.5, ease: "easeOut" },
      //  This needs the parallax code to make sense
    },
  };

  return (
    <motion.div
      className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4  rounded-2xl overflow-hidden shadow-xl bg-dark border border-neon-blue cursor-pointer transition-all duration-300 transform hover:scale-105`}
      variants={moduleVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          {Icon && <Icon className="h-6 w-6 text-neon-blue" />}
          <span className="text-lg font-semibold text-cloud-white">{title}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Module;