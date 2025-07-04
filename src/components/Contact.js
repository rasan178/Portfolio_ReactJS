import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/rasan178', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/rasan-samarakkody-1b6b99256/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section py-16">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">Contact Me</h2>
          <ReactTyped
            strings={['Get in touch', 'Let\'s Connect', 'Reach Out', 'Say Hello']}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-lg text-cyan-400"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="contact-info"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: 'fas fa-map-marker-alt', title: 'Location', content: 'Homagama, Colombo, Sri Lanka' },
              { icon: 'fas fa-envelope', title: 'Email', content: <a href="mailto:rkrsamarakkody@students.nsbm.ac.lk">rkrsamarakkody@students.nsbm.ac.lk</a> },
              { icon: 'fas fa-phone', title: 'Phone', content: <a href="tel:+94774736178">+94 774736178</a> },
              { icon: 'fas fa-clock', title: 'Working Hours', content: 'Mon - Fri: 9 AM - 6 PM' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-info-item mb-4 flex items-center"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="contact-info-icon mr-4">
                  <motion.i
                    className={`${item.icon} text-cyan-400 text-2xl`}
                    whileHover={{ scale: 1.2, color: '#22d3ee' }}
                    aria-label={item.title}
                  ></motion.i>
                </div>
                <div className="contact-info-content">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.content}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="social-links flex justify-center gap-4 mt-6"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.2, color: '#22d3ee' }}
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-cyan-400 text-2xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="contact-form card p-6 contact-card"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mzzrovvy" method="POST">
              {[
                { name: 'name', type: 'text', placeholder: 'Your Name' },
                { name: 'email', type: 'email', placeholder: 'Your Email' },
                { name: 'subject', type: 'text', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.name} className="form-group mb-4 relative">
                  <input
                    name={field.name}
                    type={field.type}
                    className="form-control w-full p-4 rounded-lg bg-gray-800 bg-opacity-20 text-white border border-gray-500 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    placeholder=" "
                    required
                  />
                  <label className="form-label">{field.placeholder}</label>
                </div>
              ))}
              <div className="form-group mb-4 relative">
                <textarea
                  name="message"
                  className="form-control w-full p-4 rounded-lg bg-gray-800 bg-opacity-20 text-white border border-gray-500 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                  rows="5"
                  placeholder=" "
                  required
                ></textarea>
                <label className="form-label">Your Message</label>
              </div>
              {formStatus === 'success' && (
                <motion.div
                  className="form-message text-emerald-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  className="form-message text-red-500 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
              <motion.button
                type="submit"
                className="btn btn-primary w-full contact-button px-6 py-4 rounded-lg text-white font-semibold text-base transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;