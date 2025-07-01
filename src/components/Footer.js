import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'fab fa-twitter' },
  ];

  return (
    <footer className="bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-lg py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
          <p className="text-gray-300">
            A passionate Software Engineering undergraduate creating innovative solutions with a futuristic vision.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 text-2xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={link.icon}></i>
              </motion.a>
            ))}
          </div>
          <p className="text-gray-300 mt-4">
            <i className="fas fa-envelope mr-2"></i> your.email@example.com
          </p>
          <p className="text-gray-300">
            <i className="fas fa-phone mr-2"></i> +1234567890
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>© 2025 Your Name. All rights reserved. | Icons by <a href="https://www.flaticon.com" className="text-cyan-400 hover:text-cyan-600">Flaticon</a></p>
      </div>
    </footer>
  );
}

export default Footer;