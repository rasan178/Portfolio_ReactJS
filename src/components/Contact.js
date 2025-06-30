import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact</h2>
      <div className="mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Details</h3>
          <p className="mt-2"><i className="fas fa-map-marker-alt mr-2"></i> Your City, Your Country</p>
          <p><i className="fas fa-envelope mr-2"></i> your.email@example.com</p>
          <p><i className="fab fa-whatsapp mr-2"></i> +1234567890</p>
          <p><i className="fas fa-clock mr-2"></i> Mon-Fri, 9 AM - 5 PM</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
          <div className="mt-4 space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-700 text-white" />
            <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700 text-white" />
            <textarea placeholder="Message" className="w-full p-2 rounded bg-gray-700 text-white" rows="4"></textarea>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;