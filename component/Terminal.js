// components/Terminal.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const introText = "> Deploying Portfolio...\n> Welcome to My Cloud Space!";
  const typingSpeed = 35; // Adjust typing speed (milliseconds per character)

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < introText.length) {
        setText(prevText => prevText + introText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
        // Hide cursor after typing completes
        setTimeout(() => setCursorVisible(false), 500);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      className="terminal-container relative overflow-hidden rounded-lg p-4 bg-dark border border-neon-blue shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} // Smooth in
    >
      <div className="flex items-center mb-2">
        <span className="text-xs text-neon-blue mr-2">user@cloudspace:~$</span>
      </div>
      <p className="text-sm leading-relaxed">{text}</p>
      {cursorVisible && (
        <span className="absolute bottom-1 left-2 inline-block w-1 h-4 bg-cloud-white animate-blink"></span>
      )}
    </motion.div>
  );
};

export default Terminal;