import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      name: 'Front End',
      icon: 'fas fa-code',
      skills: [
        { name: 'React', level: 90, icon: 'fab fa-react' },
        { name: 'HTML', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS', level: 90, icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
        { name: 'Dart', level: 80, icon: 'fas fa-code' },
        { name: 'Java', level: 75, icon: 'fab fa-java' },
      ],
    },
    {
      name: 'Back End',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 80, icon: 'fab fa-node' },
        { name: 'Python', level: 75, icon: 'fab fa-python' },
        { name: 'Php', level: 70, icon: 'fab fa-php' },
        { name: 'SQL', level: 65, icon: 'fas fa-database' },
        { name: 'Firebase', level: 75, icon: 'fas fa-fire' },
      ],
    },
    {
      name: 'Design',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: 'Figma', level: 85, icon: 'fab fa-figma' },
        { name: 'Adobe XD', level: 80, icon: 'fas fa-pen-ruler' },
        { name: 'Photoshop', level: 75, icon: 'fas fa-image' },
      ],
    },
    {
      name: 'Editing',
      icon: 'fas fa-video',
      skills: [
        { name: 'Adobe Premiere', level: 70, icon: 'fas fa-video' },
        { name: 'CapCut', level: 75, icon: 'fas fa-cut' },
      ],
    },
    {
      name: 'Version Control',
      icon: 'fas fa-code-branch',
      skills: [
        { name: 'Git', level: 85, icon: 'fab fa-git' },
        { name: 'GitHub', level: 80, icon: 'fab fa-github' },
      ],
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const cardWidth = 300 + 16; // Card width (300px) + gap (16px from space-x-4)
    const middleIndex = 2; // Index of Design card (third card, 0-based)
    const initialScroll = middleIndex * cardWidth - window.innerWidth / 2 + cardWidth / 2;

    // Set initial scroll to center the Design card
    carousel.scrollTo({ left: initialScroll, behavior: 'auto' });
  }, []);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({ left: -(300 + 16), behavior: 'smooth' });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    carousel.scrollBy({ left: 300 + 16, behavior: 'smooth' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const barAnimation = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: 'easeOut' },
    }),
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
      <div className="carousel-wrapper max-w-6xl mx-auto relative">
        <button
          onClick={scrollLeft}
          className="carousel-btn carousel-btn-left absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={scrollRight}
          className="carousel-btn carousel-btn-right absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div
          className="carousel-container overflow-x-auto snap-x snap-mandatory flex space-x-4 px-4"
          ref={carouselRef}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="skill-card p-6 snap-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <i className={`${category.icon} text-cyan-400 text-4xl mb-4 mx-auto block`}></i>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.name}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-cyan-400 text-lg mr-2`}></i>
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="level-number ml-auto text-[10px] -translate-y-1">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1 relative">
                      <motion.div
                        className="level-bar h-2.5 rounded-full"
                        variants={barAnimation}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;