import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'About', href: '#about', icon: 'fas fa-user' },
    { name: 'Skills', href: '#skills', icon: 'fas fa-tools' },
    { name: 'Services', href: '#services', icon: 'fas fa-cogs' },
    { name: 'Projects', href: '#projects', icon: 'fas fa-code' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/rasan178', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rasan-samarakkody-1b6b99256/', icon: 'fab fa-linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/your-profile', icon: 'fab fa-twitter' },
    { name: 'Facebook', href: 'https://www.facebook.com/rasan.samarakkody/', icon: 'fab fa-facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/__raasss__/', icon: 'fab fa-instagram' },
  ];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleScrollTop = () => {
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Placeholder for newsletter subscription logic
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div className="footer-card" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h3 className="footer-title" variants={itemVariants}>
            Rasan Samarakkody
          </motion.h3>
          <motion.p className="footer-text" variants={itemVariants}>
            A passionate Software Engineering undergraduate creating innovative solutions with a futuristic vision.
          </motion.p>
        </motion.div>
        <motion.div className="footer-card" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h3 className="footer-title" variants={itemVariants}>
            Quick Links
          </motion.h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <motion.li
                key={link.name}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="footer-link"
              >
                <a href={link.href} aria-label={link.name}>
                  <i className={`${link.icon} mr-2`}></i>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="footer-card" variants={containerVariants} initial="hidden" animate="visible">
          <motion.h3 className="footer-title" variants={itemVariants}>
            Connect
          </motion.h3>
          <motion.div className="social-links" variants={itemVariants}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label={link.name}
              >
                <i className={link.icon}></i>
                <span className="tooltip">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.p className="footer-text mt-4" variants={itemVariants}>
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:rkrsamarakkody@students.nsbm.ac.lk">rkrsamarakkody@students.nsbm.ac.lk</a>
          </motion.p>
          <motion.p className="footer-text" variants={itemVariants}>
            <i className="fas fa-phone mr-2"></i>
            <a href="tel:+94774736178">+94 774736178</a>
          </motion.p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="md:col-span-3">
          <motion.h3 className="footer-title text-center" variants={itemVariants}>
            Stay Updated
          </motion.h3>
          <motion.form
            onSubmit={handleNewsletterSubmit}
            className="newsletter-form"
            variants={itemVariants}
          >
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder=" "
                required
                disabled={isLoading}
              />
              <label className="form-label">Enter your email</label>
            </div>
            <motion.button
              type="submit"
              className="newsletter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } }}
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </motion.form>
          {formStatus === 'success' && (
            <motion.div
              className="form-message text-emerald-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Subscribed successfully!
            </motion.div>
          )}
          {formStatus === 'error' && (
            <motion.div
              className="form-message text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Failed to subscribe. Please try again.
            </motion.div>
          )}
        </motion.div>
      </div>
      <motion.div
        className="footer-bottom text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p>© {currentYear} Rasan Samarakkody. All rights reserved.</p>
        <motion.p
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
        </motion.p>
      </motion.div>
      <motion.button
        className="back-to-top"
        onClick={handleScrollTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0], transition: { duration: 1.5, repeat: Infinity } }}
        aria-label="Back to top"
      >
        <svg className="progress-ring" width="48" height="48">
          <circle
            className="progress-ring-circle"
            stroke="#d1d5db"
            strokeWidth="4"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
          />
          <circle
            className="progress-ring-progress"
            stroke="#06b6d4"
            strokeWidth="4"
            fill="transparent"
            r="20"
            cx="24"
            cy="24"
            style={{ strokeDasharray: 125.6, strokeDashoffset: 125.6 * (1 - scrollProgress / 100) }}
          />
        </svg>
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </footer>
  );
}

export default Footer;