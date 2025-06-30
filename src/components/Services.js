import React from 'react';

function Services() {
  const services = [
    { title: 'Web Development', description: 'Building responsive and modern web applications.' },
    { title: 'Mobile App Development', description: 'Creating cross-platform mobile applications.' },
    { title: 'UI/UX Design', description: 'Designing intuitive and user-friendly interfaces.' },
    { title: 'Video Editing', description: 'Producing high-quality video content.' },
  ];

  return (
    <section id="services">
      <h2 className="text-3xl font-bold">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.map((service) => (
          <div key={service.title} className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;