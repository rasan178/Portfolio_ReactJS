import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Crafting responsive, high-performance web applications using modern frameworks like React and Node.js, tailored to your business needs.'
    },
    {
      title: 'Mobile App Development',
      description: 'Building cross-platform mobile apps with React Native and Flutter, ensuring seamless functionality and engaging user experiences.'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive, visually stunning interfaces with Figma and Adobe XD, focusing on user-centered design principles.'
    },
    {
      title: 'Video Editing',
      description: 'Producing professional-grade video content using Adobe Premiere and After Effects, with motion graphics and cinematic effects.'
    },
    {
      title: 'Database Design',
      description: 'Architecting scalable, secure databases with MongoDB and SQL, optimized for performance and data integrity.'
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side solutions with Node.js and Express, ensuring efficient APIs and seamless data flow.'
    }
  ];

  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="service-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;