import React, { useEffect, useRef, useState, useCallback } from 'react';
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
        { name: 'PHP', level: 70, icon: 'fab fa-php' },
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [touchStartTime, setTouchStartTime] = useState(0);

  // Calculate card width based on screen size
  const getCardWidth = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 481) return 320; // Mobile
    if (screenWidth < 641) return 300; // Small screens
    if (screenWidth < 769) return 320; // Medium screens
    if (screenWidth < 1024) return 340; // Large screens
    return 360; // Extra large screens
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = getCardWidth();
    const gap = 16; // Gap between cards
    const totalCardWidth = cardWidth + gap;
    const middleIndex = Math.floor(skillCategories.length / 2);
    const initialScroll = middleIndex * totalCardWidth - window.innerWidth / 2 + cardWidth / 2;

    // Smooth scroll to center
    carousel.scrollTo({ left: Math.max(0, initialScroll), behavior: 'smooth' });

    // Handle window resize
    const handleResize = () => {
      const newCardWidth = getCardWidth();
      const newTotalCardWidth = newCardWidth + gap;
      const newInitialScroll = middleIndex * newTotalCardWidth - window.innerWidth / 2 + newCardWidth / 2;
      carousel.scrollTo({ left: Math.max(0, newInitialScroll), behavior: 'smooth' });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getCardWidth, skillCategories.length]);

  // Enhanced touch handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setDragDistance(0);
    setTouchStartTime(Date.now());
    
    // Prevent momentum scrolling
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Responsive drag sensitivity
    const newScrollLeft = scrollLeft - walk;
    
    setDragDistance(Math.abs(walk));
    carouselRef.current.scrollLeft = newScrollLeft;
    
    // Prevent default scroll behavior
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;
    
    // Handle tap vs drag
    if (dragDistance < 10 && touchDuration < 300) {
      // This was a tap, not a drag
      const target = e.target.closest('.skill-card');
      if (target) {
        handleCardTap(target);
      }
    } else if (dragDistance > 50) {
      // Snap to nearest card after drag
      snapToNearestCard();
    }
  };

  const handleCardTap = (cardElement) => {
    const cardIndex = Array.from(cardElement.parentElement.children).indexOf(cardElement);
    setActiveCard(cardIndex);
    
    // Add visual feedback
    cardElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
      cardElement.style.transform = '';
    }, 150);
    
    // Optional: Add haptic feedback on supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  const snapToNearestCard = () => {
    const carousel = carouselRef.current;
    const cardWidth = getCardWidth();
    const gap = 16;
    const totalCardWidth = cardWidth + gap;
    const currentScroll = carousel.scrollLeft;
    const nearestCardIndex = Math.round(currentScroll / totalCardWidth);
    const targetScroll = nearestCardIndex * totalCardWidth;
    
    carousel.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  const scrollLeftClick = () => {
    const carousel = carouselRef.current;
    const cardWidth = getCardWidth();
    const gap = 16;
    carousel.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
  };

  const scrollRightClick = () => {
    const carousel = carouselRef.current;
    const cardWidth = getCardWidth();
    const gap = 16;
    carousel.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut'
      } 
    },
  };

  const barAnimation = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.8, 
        ease: 'easeOut', 
        delay: 0.3 
      },
    }),
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: { 
        duration: 0.3, 
        ease: 'easeOut' 
      } 
    },
    tap: { 
      scale: 0.98, 
      y: -4,
      transition: { 
        duration: 0.1 
      } 
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Skills
      </motion.h2>
      <motion.p
        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 text-center px-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        A showcase of my technical expertise and creative capabilities across multiple domains
      </motion.p>
      
      <div className="carousel-wrapper max-w-full sm:max-w-4xl md:max-w-6xl mx-auto relative px-2 sm:px-4">
        <button
          onClick={scrollLeftClick}
          className="carousel-btn carousel-btn-left absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 hidden sm:flex"
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button
          onClick={scrollRightClick}
          className="carousel-btn carousel-btn-right absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 hidden sm:flex"
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        <div
          className="carousel-container overflow-x-auto snap-x snap-mandatory flex space-x-4 px-2 sm:px-4"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`skill-card snap-center ${activeCard === index ? 'active' : ''}`}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              animate="rest"
              style={{ scrollSnapAlign: 'center' }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <i className={`${category.icon} category-icon text-center block`}></i>
              </motion.div>
              
              <motion.h3 
                className="font-semibold text-white text-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {category.name}
              </motion.h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.7 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} skill-icon text-level-bar`}></i>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="level-number">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-level-bar">
                      <motion.div
                        className="level-bar rounded-full h-full"
                        variants={barAnimation}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Touch indicators for mobile */}
        <div className="flex justify-center mt-4 space-x-2 sm:hidden">
          {skillCategories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeCard === index ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;