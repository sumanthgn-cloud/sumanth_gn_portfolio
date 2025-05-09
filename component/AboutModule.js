// components/AboutModule.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const AboutModule = ({ isOpen }) => {
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
                className="text-xl font-semibold text-cloud-white mb-2"
                variants={textVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                About Me
            </motion.h3>
            <motion.p
                className="text-sm text-gray-300 leading-relaxed"
                variants={textVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                Cloud Engineer with a passion for DevOps and building robust infrastructure. Skilled in AWS,
                Kubernetes, and automation.  Constantly exploring new technologies and contributing to the open-source community.
            </motion.p>
            {/* Add more details about your experience, interests, etc. */}
        </motion.div>
    );
};

export default AboutModule;