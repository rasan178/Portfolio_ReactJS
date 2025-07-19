import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

function Projects() {
  const [category, setCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A web application built with HTML, CSS, and Firebase, featuring a responsive UI and secure user authentication for an online shopping experience.',
      image: 'https://supplychainbeyond.com/wp-content/uploads/2019/07/ecommerce-online-grocery-logistics.jpg',
      languages: ['HTML', 'CSS', 'Firebase'],
      github: 'https://github.com/rasan178/FreshMart-Html-Javascript-Firebase',
      livePreview: 'https://rasan178.github.io/FreshMart-Html-Javascript-Firebase/',
      category: 'full-stack',
    },
    {
      title: 'Portfolio Website',
      description: 'A futuristic single-page portfolio built with React and CSS, showcasing advanced UI/UX with smooth animations and hover effects.',
      image: 'https://static.vecteezy.com/system/resources/previews/013/228/102/non_2x/software-developer-2d-isolated-illustration-computer-programmer-flat-character-on-cartoon-background-learning-coding-colourful-editable-scene-for-mobile-website-presentation-vector.jpg',
      languages: ['React', 'CSS'],
      github: 'https://github.com/rasan178/Portfolio_ReactJS',
      livePreview: 'https://portfolio-react-js-psi-sepia.vercel.app/',
      category: 'ui-ux',
    },
    {
      title: 'MERN Login with Roles',
      description: 'A mini MERN stack solution for user authentication with role-based access control. Features secure login, registration, and role assignment for users (e.g., admin, user, manager, accountant, operator).',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg',
      languages: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/rasan178/mern-login-system',
      livePreview: '', 
      category: 'mini',
    },
    {
      title: 'MARN Login',
      description: 'A mini MARN stack solution for user authentication. Features login and registration using MongoDB, Angular, React, and Node.js.',
      image: 'https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?semt=ais_hybrid&w=740',
      languages: ['MongoDB', 'Angular', 'React', 'Node.js'],
      github: 'https://github.com/rasan178/Login_Register-Using-MERN-Stack',
      livePreview: '', 
      category: 'mini',
    },
    {
      title: 'PHP Login System',
      description: 'A simple login and registration system built with PHP, HTML, JS and CSS. Features user authentication and basic form validation.',
      image: 'https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740',
      languages: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/rasan178/Login-html-CSS-php', 
      livePreview: '', 
      category: 'mini',
    },
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-3xl font-bold text-white mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore my recent work and contributions
      </motion.p>
      <div className="toggle-container">
        <button
          className={`toggle-btn ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory('all')}
        >
          All
        </button>
        <button
          className={`toggle-btn ${category === 'full-stack' ? 'active' : ''}`}
          onClick={() => setCategory('full-stack')}
        >
          Full Stack Solutions
        </button>
        <button
          className={`toggle-btn ${category === 'ui-ux' ? 'active' : ''}`}
          onClick={() => setCategory('ui-ux')}
        >
          UI/UX Designs
        </button>
        <button
          className={`toggle-btn ${category === 'mini' ? 'active' : ''}`}
          onClick={() => setCategory('mini')}
        >
          Mini Solutions
        </button>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card relative"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-image"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
                  />
                  <h3 className="card-title">{project.title}</h3>
                  <div className="card-languages">
                    {project.languages.map((lang, i) => (
                      <span key={i} className="language-tag">{lang}</span>
                    ))}
                  </div>
                </div>
                <div className="card-back">
                  <p className="card-description">{project.description}</p>
                  <div className="card-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github"
                    >
                      View on GitHub
                      <i className="fab fa-github ml-2"></i>
                    </a>
                    {project.livePreview && (
                      <a
                        href={project.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-preview"
                      >
                        Live Preview
                        <i className="fas fa-external-link-alt ml-2"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;