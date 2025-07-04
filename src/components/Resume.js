import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const resumeItems = {
    education: [
      {
        year: '2022 - Present',
        title: 'BSc in Software Engineering',
        institution: 'NSBM Green University',
        description: 'Pursuing a degree in Software Engineering, focusing on advanced programming, system design, and software development methodologies.',
      },
      {
        year: '2019 - 2020',
        title: 'GCE AL - Maths Stream',
        institution: 'R/Eheliyagoda Central College',
        description: 'Completed Advanced Level examinations with a focus on mathematics and sciences, building a strong analytical foundation.',
      },
    ],
    experience: [],
  };

  return (
    <section id="resume" className="py-16">
      <motion.h2
        className="text-4xl font-bold text-white mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        A showcase of my academic journey and technical expertise, reflecting my passion for software engineering.
      </motion.p>
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1">
          <motion.h3
            className="text-2xl font-semibold text-white mb-6 text-center"
            variants={itemVariants}
          >
            Education
          </motion.h3>
          <div className="flex flex-col gap-6">
            {resumeItems.education.map((item, index) => (
              <motion.div
                key={index}
                className="resume-card p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                <h4 className="text-xl font-semibold text-white mt-2">{item.title}</h4>
                <h5 className="text-md text-gray-300 mt-1">{item.institution}</h5>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <motion.h3
            className="text-2xl font-semibold text-white mb-6 text-center"
            variants={itemVariants}
          >
            Experience
          </motion.h3>
          <motion.div
            className="resume-card p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <p className="text-md text-gray-300 text-center leading-relaxed">
              No professional experience listed yet. Check out my <a href="#projects" className="text-cyan-400 hover:text-cyan-500 transition-colors">projects</a> to see my skills in action!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;