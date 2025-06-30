import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const resumeItems = {
    education: [
      {
        year: '2022 - Present',
        title: 'BSc in Software Engineering',
        institution: 'NSBM Green University',
        description: 'I am a third year student at NSBM Green University. I am pursuing my studies in the Software Engineering department.',
      },
      {
        year: '2019 - 2020',
        title: 'GCE AL - Maths Stream',
        institution: 'R/Eheliyagoda Central College',
        description: 'I successfully sat and passed my General Certificate of Education Advanced Level examination.',
      },
    ],
    experience: [
         // {
      //   year: '2023 - Present',
      //   title: 'Junior Software Developer (Part-time)',
      //   institution: 'InnoTech Solutions',
      //   description: 'Working on web application development using React.js and Node.js. Contributing to agile development cycles and participating in code reviews.',
      // },
      // {
      //   year: '2022 - 2023',
      //   title: 'Software Development Intern',
      //   institution: 'GlobalTech Corp',
      //   description: 'Assisted in developing and testing frontend components using HTML, CSS, and JavaScript. Collaborated with senior developers on feature implementation.',
      // },

    ],
  };

  return (
    <section id="resume" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Resume</h2>
      <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
          {resumeItems.education.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <span className="text-cyan-400 text-sm">{item.year}</span>
              <h4 className="text-lg font-semibold text-white mt-1">{item.title}</h4>
              <h5 className="text-md text-gray-300">{item.institution}</h5>
              <p className="text-sm text-gray-400 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
          {resumeItems.experience.length > 0 ? (
            resumeItems.experience.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 mb-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <span className="text-cyan-400 text-sm">{item.year}</span>
                <h4 className="text-lg font-semibold text-white mt-1">{item.title}</h4>
                <h5 className="text-md text-gray-300">{item.institution}</h5>
                <p className="text-sm text-gray-400 mt-2">{item.description}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">No professional experience listed yet. Check out my projects to see my skills in action!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;