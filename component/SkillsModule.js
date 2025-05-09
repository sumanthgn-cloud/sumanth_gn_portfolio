// components/SkillsModule.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer } from 'react-icons/fa';

const SkillsModule = ({ isOpen }) => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="p-6"
      variants={{
        closed: { opacity: 0, scale: 0.8 },
        open: { opacity: 1, scale: 1 },
      }}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.h3
        className="text-xl font-semibold text-cloud-white mb-4"
        variants={skillVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        Skills
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example Skill with animated bars */}
        <SkillBar title="AWS" level={85} isOpen={isOpen} />
        <SkillBar title="Kubernetes" level={70} isOpen={isOpen} />
        <SkillBar title="Terraform" level={75} isOpen={isOpen} />
        <SkillBar title="CI/CD" level={80} isOpen={isOpen} />
        {/* Add more skills here */}
      </div>
    </motion.div>
  );
};

const SkillBar = ({ title, level, isOpen }) => {
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }, //Staggered effect
    },
  };
  return (
    <div className="skill-item">
      <motion.div
        className="mb-2 text-sm text-cloud-white"
        variants={skillVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        {title}
      </motion.div>
      <motion.div
        className="h-3 bg-gray-700 rounded-full overflow-hidden"
        variants={skillVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <motion.div
          className="h-full bg-neon-green"
          variants={barVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        />
      </motion.div>
    </div>
  );
};

export default SkillsModule;