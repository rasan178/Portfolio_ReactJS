import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Crafting responsive, high-performance web applications using modern frameworks like React and Node.js, tailored to your business needs.',
      details: 'I specialize in creating dynamic, responsive, and high-performance web applications using cutting-edge technologies such as React, Node.js, and Next.js. My services include custom website development, e-commerce solutions, and progressive web apps (PWAs), all tailored to meet your specific business requirements with a focus on scalability and user experience.'
    },
    {
      title: 'Mobile App Development',
      icon: 'fas fa-mobile-alt',
      description: 'Building cross-platform mobile apps with React Native and Flutter, ensuring seamless functionality and engaging user experiences.',
      details: 'I develop cross-platform mobile applications using React Native and Flutter, delivering seamless performance across iOS and Android. My services include building feature-rich apps with intuitive interfaces, integrating APIs, and ensuring optimal performance, accessibility, and user engagement for your mobile solutions.'
    },
    {
      title: 'UI/UX Design',
      icon: 'fas fa-pen-ruler',
      description: 'Designing intuitive, visually stunning interfaces with Figma and Adobe XD, focusing on user-centered design principles.',
      details: 'I create intuitive and visually appealing user interfaces using tools like Figma and Adobe XD. My UI/UX design process involves user research, wireframing, prototyping, and iterative testing to ensure user-centered designs that enhance usability, accessibility, and aesthetic appeal for your digital products.'
    },
    {
      title: 'Video Editing',
      icon: 'fas fa-video',
      description: 'Producing professional-grade video content using Adobe Premiere and After Effects, with motion graphics and cinematic effects.',
      details: 'I offer professional video editing services using Adobe Premiere and After Effects, creating engaging content with motion graphics, transitions, and cinematic effects. My services include promotional videos, social media content, and corporate videos, all crafted to captivate your audience and elevate your brand.'
    },
    {
      title: 'Database Design',
      icon: 'fas fa-database',
      description: 'Architecting scalable, secure databases with MongoDB and SQL, optimized for performance and data integrity.',
      details: 'I design and implement scalable, secure, and efficient database solutions using MongoDB, MySQL, and PostgreSQL. My services include database architecture, optimization, indexing, and ensuring data integrity, enabling robust data management for applications of any scale.'
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Developing robust server-side solutions with Node.js and Express, ensuring efficient APIs and seamless data flow.',
      details: 'I build robust and scalable backend systems using Node.js, Express, and other modern frameworks. My services include API development, server-side logic, authentication systems, and integration with databases and third-party services, ensuring efficient and secure data flow for your applications.'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const popupAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section id="services" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-white mb-4 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Services
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Comprehensive solutions to elevate your digital presence
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="service-card p-6 cursor-pointer"
            onClick={() => setSelectedService(service)}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 * services.indexOf(service) }}
            whileHover={{ scale: 1.05 }}
          >
            <i className={`${service.icon} text-cyan-400 text-4xl mb-4 mx-auto block`}></i>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
            <p className="text-gray-300 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="popup-content"
            variants={popupAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <i className={`${selectedService.icon} text-cyan-400 text-4xl mb-3 mx-auto block`}></i>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">{selectedService.title}</h3>
            <div className="popup-details">
              <p className="text-gray-200 text-sm">{selectedService.details}</p>
            </div>
            <button
              className="btn-close absolute bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white px-5 py-2 rounded-lg shadow-md"
              onClick={() => setSelectedService(null)}
            >
              Back
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Services;