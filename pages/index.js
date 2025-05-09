// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import Module from '../components/Module';
import AboutModule from '../components/AboutModule';
import SkillsModule from '../components/SkillsModule';
import ProjectsModule from '../components/ProjectsModule';
import ResumeModule from '../components/ResumeModule';
import ContactModule from '../components/ContactModule';
import Terminal from '../components/Terminal';
import { FaCode, FaUser, FaTools, FaFilePdf, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    { id: 'about', title: 'About', component: <AboutModule isOpen={activeModule === 'about'} />, icon: FaUser },
    { id: 'skills', title: 'Skills', component: <SkillsModule isOpen={activeModule === 'skills'} />, icon: FaTools },
    { id: 'projects', title: 'Projects', component: <ProjectsModule isOpen={activeModule === 'projects'} />, icon: FaCode },
    { id: 'resume', title: 'Resume', component: <ResumeModule isOpen={activeModule === 'resume'} />, icon: FaFilePdf },
    { id: 'contact', title: 'Contact', component: <ContactModule isOpen={activeModule === 'contact'} />, icon: FaEnvelope },
  ];

  const handleModuleClick = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Head>
        <title>Sumanth GN - Cloud Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticleBackground />

      <motion.div
        className="relative z-10" // Ensure content appears above particles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Terminal />

        <div className="flex flex-wrap justify-center items-center py-16 px-4">
            {modules.map((module) => (
              <Module
                key={module.id}
                title={module.title}
                isOpen={activeModule === module.id}
                onClick={() => handleModuleClick(module.id)}
                icon={module.icon}
              >
                {module.component}
              </Module>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;