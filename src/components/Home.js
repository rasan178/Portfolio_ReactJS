import React, { useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import './Home.css';

function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const [typedText, setTypedText] = useState('');
  const roles = ['Software Engineer', 'Web Developer', 'Innovator', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Tilt effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 100, damping: 20 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: xPos, y: yPos });
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setTypedText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setTypedText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 80 : 120);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
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

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/rasan178', icon: 'fab fa-github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'fab fa-linkedin' },
    { name: 'Facebook', href: 'https://facebook.com/your-profile', icon: 'fab fa-facebook' },
    { name: 'Instagram', href: 'https://instagram.com/your-profile', icon: 'fab fa-instagram' },
  ];

  return (
    <section id="home" className="relative" ref={ref}>
      <div className="hero-gradient"></div>
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Profile Image - Shows first on mobile, second on desktop */}
          <motion.div
            className="lg:w-1/2 flex justify-center order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="profile-img-container">
              <img
                src="https://github.com/rasan178/Images/blob/master/ChatGPT_Image_Jul_7__2025__05_00_45_PM-removebg-preview.png?raw=true"
                alt="Profile picture of Rasan Samarakkody"
                className="profile-img"
                tabIndex={0}
                aria-label="Profile picture of Rasan Samarakkody"
              />
              <div className="glyph glyph-1"></div>
              <div className="glyph glyph-2"></div>
              <div className="glyph glyph-3"></div>
              <div className="glyph glyph-4"></div>
            </div>
          </motion.div>
          
          {/* Hero Card - Shows second on mobile, first on desktop */}
          <motion.div
            className="lg:w-1/2 text-left order-2 lg:order-1"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="hero-card">
              <h1 className="hero-heading text-3xl lg:text-4xl font-bold mb-2">
                Hi, I'm
              </h1>
              <h1 className="hero-name text-3xl lg:text-4xl font-bold mb-2">
                Rasan Samarakkody
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold mb-6">
                <span className="hero-subheading">I'm a</span>
                <span className="hero-typed"> {typedText}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <p className="hero-body text-lg lg:text-xl max-w-lg mb-8">
                Passionate about crafting innovative solutions, transforming complex challenges into elegant, efficient code, and delivering seamless user experiences.
              </p>
              <div className="flex gap-4 flex-wrap mb-6">
                <a
                  href="#contact"
                  className="btn btn-primary inline-flex items-center justify-center"
                  aria-label="Get in touch with Rasan Samarakkody"
                >
                  <i className="fas fa-envelope mr-2"></i> Get In Touch
                </a>
                <a
                  href="#projects"
                  className="btn btn-outline inline-flex items-center justify-center"
                  aria-label="View Rasan Samarakkody's projects"
                >
                  <i className="fas fa-folder-open mr-2"></i> View My Work
                </a>
              </div>
              <div className="social-links flex gap-2">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    variants={fadeIn}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.6 + socialLinks.indexOf(link) * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    aria-label={link.name}
                  >
                    <i className={link.icon}></i>
                    <span className="tooltip">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;