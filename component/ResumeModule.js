// components/ResumeModule.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

const ResumeModule = ({ isOpen }) => {
    const textVariants = {
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
                variants={textVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                Resume
            </motion.h3>
            <motion.p
                className="text-sm text-gray-300 leading-relaxed"
                variants={textVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                Download my resume for a detailed overview of my skills and experience.
            </motion.p>
            <motion.a
                href="/path/to/your/resume.pdf" // Replace with the path to your PDF
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cloud-white bg-neon-blue hover:bg-neon-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                variants={textVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                <FaFilePdf className="mr-2" />
                Download Resume
            </motion.a>
        </motion.div>
    );
};

export default ResumeModule;