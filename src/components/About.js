import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import './About.css';

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        type: 'spring',
        stiffness: 120,
        damping: 15,
      } 
    },
  };

  const details = [
    { label: 'Name', value: 'Rasan Samarakkody', icon: 'fas fa-user' },
    { label: 'Age', value: '24', icon: 'fas fa-birthday-cake' },
    { label: 'Degree', value: 'B.Sc. Software Engineering', icon: 'fas fa-graduation-cap' },
    { label: 'University', value: 'NSBM Green University', icon: 'fas fa-university' },
    { label: 'Phone', value: '+94 774736178', icon: 'fas fa-phone' },
    { label: 'Location', value: 'Homagama, Sri Lanka', icon: 'fas fa-map-marker-alt' },
  ];

  const skills = [
    { name: 'React', icon: 'fab fa-react', tooltip: 'Frontend Framework' },
    { name: 'Node.js', icon: 'fab fa-node-js', tooltip: 'Backend Runtime' },
    { name: 'AI', icon: 'fas fa-brain', tooltip: 'Machine Learning' },
    { name: 'Cloud', icon: 'fas fa-cloud', tooltip: 'Cloud Computing' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/rasan178', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'fab fa-linkedin' },
    { name: 'Facebook', href: 'https://facebook.com/your-profile', icon: 'fab fa-facebook' },
    { name: 'Instagram', href: 'https://instagram.com/your-profile', icon: 'fab fa-instagram' },
  ];

  return (
    <section id="about" className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="about-title"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          About Me
        </motion.h1>
        <motion.div
          className="about-subtitle"
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <ReactTyped
            strings={['Innovating the Future', 'Crafting Digital Solutions', 'Driven by Passion']}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="text-lg text-cyan-400"
          />
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center mb-8 md:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="image-container">
              <img
                src="https://github.com/rasan178/Images/blob/master/ChatGPT_Image_Jul_7__2025__05_00_45_PM-removebg-preview.png?raw=true"
                alt="Rasan Samarakkody"
                className="about-image"
                tabIndex={0}
                aria-label="Profile picture of Rasan Samarakkody"
              />
              <div className="neural-line neural-line-1"></div>
              <div className="neural-line neural-line-2"></div>
              <div className="neural-line neural-line-3"></div>
              <div className="neural-line neural-line-4"></div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-2/3 max-w-2xl"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.6 }}
          >
            <div className="about-container text-left p-8">
              <h2 className="about-subheading">My Professional Journey</h2>
              <div className="progress-bar">
                <div className="progress-bar-fill"></div>
              </div>
              <p className="about-text">
                I'm a Software Engineering student with a strong foundation in both front-end and back-end development. My expertise includes modern web technologies like React and Node.js, where I focus on building seamless, high-performance applications.
              </p>
              <p className="about-text">
                With a commitment to continuous learning, I actively explore emerging technologies such as AI-driven development and cloud computing to deliver innovative, user-focused solutions that make a meaningful impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {details.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="detail-card flex items-center"
                    variants={fadeIn}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <i className={`${detail.icon} detail-icon mr-3`}></i>
                    <p className="about-detail">
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="skill-badges mb-6">
                <h3 className="skill-heading">Key Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-badge"
                      variants={fadeIn}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <i className={`${skill.icon} mr-2`}></i>
                      {skill.name}
                      <span className="tooltip">{skill.tooltip}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 1.4 }}
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1uhePZP5te9H-hpd4E-4UlwhMS8nnzTWQ"
                  download
                  className="btn-primary inline-flex items-center"
                  aria-label="Download CV"
                >
                  <i className="fas fa-download mr-2"></i> Download CV
                </a>
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center"
                  aria-label="Contact Me"
                >
                  <i className="fas fa-envelope mr-2"></i> Contact Me
                </a>
                <div className="social-links flex gap-2">
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
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;