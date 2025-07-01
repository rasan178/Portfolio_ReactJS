import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const resumeItems = {
    education: [
      {
        year: '2022 - Present',
        title: 'BSc in Software Engineering',
        institution: 'NSBM Green University',
        description: 'Pursuing a degree in Software Engineering, focusing on advanced programming and system design.',
      },
      {
        year: '2019 - 2020',
        title: 'GCE AL - Maths Stream',
        institution: 'R/Eheliyagoda Central College',
        description: 'Completed Advanced Level examinations with a focus on mathematics and sciences.',
      },
    ],
    experience: [],
  };

  return (
    <section id="resume" className="py-16">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">Resume</h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
        A showcase of my academic journey and technical expertise, reflecting my passion for software engineering.
      </p>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-left">Education</h3>
          <div className="flex flex-col gap-6">
            {resumeItems.education.map((item, index) => (
              <motion.div
                key={index}
                className="resume-card p-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
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
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-right">Experience</h3>
          <motion.div
            className="resume-text p-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <p className="text-md text-gray-300 italic text-right leading-relaxed">
              No professional experience listed yet. Explore my projects to see my skills in action!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resume;