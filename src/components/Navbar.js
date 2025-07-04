import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Resume', 'Contact'];

  return (
    <nav className="bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg fixed top-0 w-full z-50 h-14">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        <motion.h1
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <i className={isOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'}></i>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 md:items-center ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 bg-opacity-80 md:bg-transparent backdrop-filter md:backdrop-blur-none p-4 md:p-0`}>
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="relative text-white py-2 md:py-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </a>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;