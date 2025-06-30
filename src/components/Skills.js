import React from 'react';

function Skills() {
  const skills = [
    {
      name: 'Front End',
      icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260666.png',
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Back End',
      icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260667.png',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL']
    },
    {
      name: 'Design',
      icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260668.png',
      skills: ['Figma', 'Adobe XD', 'UI/UX Principles']
    },
    {
      name: 'Editing',
      icon: 'https://cdn-icons-png.flaticon.com/512/1260/1260669.png',
      skills: ['Adobe Premiere', 'After Effects', 'Photoshop']
    },
  ];

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 bg-gray-800 bg-opacity-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-4" onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }} />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <ul className="list-disc list-inside">
              {skill.skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;