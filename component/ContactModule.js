// components/ContactModule.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactModule = ({ isOpen }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    status: null, // 'success', 'error', null
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, status: 'pending' }); // set sending state

    try {
      const response = await fetch('/api/contact', { // Point to your serverless function endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormState({ ...formState, status: 'success' });
        // Clear form after a successful submit (optional)
        setTimeout(() => {
          setFormState({ name: '', email: '', message: '', status: null });
        }, 2000);
      } else {
        setFormState({ ...formState, status: 'error' });
      }
    } catch (error) {
      setFormState({ ...formState, status: 'error' });
    }
  };

  const formVariants = {
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
        variants={formVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        Contact
      </motion.h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formState.status === 'success' && (
          <motion.div
            className="text-green-500 text-sm"
            variants={formVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            Message sent!
          </motion.div>
        )}
        {formState.status === 'error' && (
          <motion.div
            className="text-red-500 text-sm"
            variants={formVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
          >
            Error sending message. Please try again.
          </motion.div>
        )}

        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md bg-gray-700 border-gray-600 text-cloud-white focus:border-neon-blue focus:ring-neon-blue"
          />
        </motion.div>
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md bg-gray-700 border-gray-600 text-cloud-white focus:border-neon-blue focus:ring-neon-blue"
          />
        </motion.div>
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 rounded-md bg-gray-700 border-gray-600 text-cloud-white focus:border-neon-blue focus:ring-neon-blue"
          />
        </motion.div>
        <motion.button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cloud-white bg-neon-blue hover:bg-neon-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          variants={formVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        >
          <FaEnvelope className="mr-2" />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactModule;