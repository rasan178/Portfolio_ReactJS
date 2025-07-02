import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack web application built with React, Node.js, and MongoDB, featuring user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
      link: 'https://rasan178.github.io/FreshMart-Html-Javascript-Firebase/'
    },
    {
      title: 'Portfolio Website',
      description: 'A futuristic single-page portfolio built with React and Tailwind CSS, showcasing advanced UI/UX with smooth animations and hover effects.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5241f4a3d63',
      link: 'https://portfolio-react-js-psi-sepia.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
            />
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:text-blue-600 transition-colors duration-300"
            >
              View Project <i className="fas fa-external-link-alt ml-2"></i>
            </a>
            <div className="absolute inset-0 border-2 border-transparent hover:border-blue-500 rounded-lg transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;