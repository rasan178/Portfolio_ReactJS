import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Software Engineer', 'Web Developer', 'Innovator'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setTypedText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setTypedText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section id="home" className="py-16 relative">
      <div className="hero-gradient"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-left mb-8 md:mb-0"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Hi, I'm <span className="text-cyan-400">Rasan</span>
            </h1>
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">
              I'm a <span className="text-cyan-400">{typedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-md mb-6">
              Passionate about creating innovative solutions and turning complex problems into elegant, efficient code.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="btn btn-primary inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105"
              >
                <i className="fas fa-envelope mr-2"></i> Get In Touch
              </a>
              <a
                href="#projects"
                className="btn btn-outline inline-flex items-center px-4 py-2 rounded-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-300 transform hover:scale-105"
              >
                <i className="fas fa-folder-open mr-2"></i> View My Work
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Ashen"
              className="w-64 h-64 rounded-full object-cover transform hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;