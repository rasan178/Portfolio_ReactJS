import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './SplashScreen.css';

function SplashScreen() {
  const [text, setText] = useState('');
  const fullText = "Welcome to My Futuristic Portfolio";
  const controls = useAnimation();

  useEffect(() => {
    // Typing effect
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(type, 150);
      }
    };
    type();

    // Gradient animation
    controls.start({
      background: [
        'linear-gradient(135deg, #1e3a8a, #7e22ce)',
        'linear-gradient(135deg, #7e22ce, #ec4899)',
        'linear-gradient(135deg, #ec4899, #06b6d4)',
        'linear-gradient(135deg, #06b6d4, #1e3a8a)',
      ],
      transition: { duration: 8, repeat: Infinity, repeatType: 'loop' },
    });
  }, [controls]);

  return (
    <motion.div
      className="splash-screen fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl border border-gray-500 border-opacity-20"
      animate={controls}
      style={{ overflow: 'hidden' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl font-bold text-white mb-8 tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {text}
          <span className="animate-pulse text-cyan-400">|</span>
        </motion.h1>
        <motion.div
          className="w-20 h-20 border-4 border-t-transparent border-cyan-400 rounded-full mx-auto"
          initial={{ scale: 0, rotateX: 0 }}
          animate={{ scale: 1, rotateX: 360 }}
          transition={{ duration: 2, delay: 0.7, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        ></motion.div>
        <motion.p
          className="text-xl text-gray-200 mt-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
        >
          Crafting an Immersive Digital Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default SplashScreen;