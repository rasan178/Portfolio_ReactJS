import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const details = [
    { label: 'Name', value: 'Rasan Samarakkody', icon: 'fas fa-user' },
    { label: 'Age', value: '24', icon: 'fas fa-birthday-cake' },
    { label: 'Degree', value: 'B.Sc. Software Engineering', icon: 'fas fa-graduation-cap' },
    { label: 'University', value: 'NSBM Green University', icon: 'fas fa-university' },
    { label: 'Phone', value: '0774736178', icon: 'fas fa-phone' },
    { label: 'Location', value: 'Homagama, Sri Lanka', icon: 'fas fa-map-marker-alt' },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="Rasan Samarakkody"
              className="w-64 h-64 rounded-full object-cover transform hover:scale-110 transition-transform duration-300 shadow-lg"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/128'; }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-left"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-md mb-6">
              I'm a Software Engineering student with a keen interest in developing cutting-edge applications. My journey includes mastering both front-end and back-end technologies, with a focus on creating seamless user experiences.
            </p>
            <div className="space-y-3">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  className="flex items-center text-gray-300"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <i className={`${detail.icon} text-cyan-400 mr-3 text-lg`}></i>
                  <p>
                    <strong>{detail.label}:</strong> {detail.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;