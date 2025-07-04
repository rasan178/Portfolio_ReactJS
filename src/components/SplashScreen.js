import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SplashScreen.css";

function SplashScreen() {
  const [bootLines, setBootLines] = useState([]);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const lines = [
      "Initializing portfolio kernel...",
      "Loading core modules [██░░░░░░░░] 25%",
      "Authenticating developer credentials...",
      "Welcome, Visitor",
      "User: Rasan Samarakkody",
      "Title: Software Engineering Undergraduate | Full Stack Dev | UI/UX Enthusiast",
      "Loading environment...",
      "System Ready ✅",
      "Entering Portfolio Environment...",
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      setBootLines((prev) => [...prev, lines[currentLine]]);
      currentLine++;
      if (currentLine === lines.length) {
        clearInterval(interval);
        setTimeout(() => setShowEnter(true), 1000);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const icons = [
    { icon: "fab fa-js", delay: 0 },
    { icon: "fab fa-python", delay: 0.2 },
    { icon: "fab fa-react", delay: 0.4 },
    { icon: "fab fa-node-js", delay: 0.6 },
    { icon: "fab fa-java", delay: 0.8 },
    { icon: "fab fa-js-square", delay: 1.0 }, // Proxy for TypeScript
    { icon: "fab fa-html5", delay: 1.2 },
    { icon: "fab fa-css3-alt", delay: 1.4 },
  ];

  const iconVariants = {
    hidden: { scale: 0, opacity: 0, x: 0, y: 0 },
    visible: (i) => ({
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      x: Math.cos((i * Math.PI) / 4) * 250,
      y: Math.sin((i * Math.PI) / 4) * 250,
      transition: { duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 1.5 },
    }),
  };

  return (
    <div className="splash-screen">
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      {icons.map((item, index) => (
        <motion.i
          key={index}
          className={`icon ${item.icon}`}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        />
      ))}
      <motion.div
        className="terminal-box"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {bootLines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span>{line}</span>
          </div>
        ))}
        {showEnter && (
          <div
            className="enter-btn"
            onClick={() => alert("Welcome to my portfolio!")}
            role="button"
            tabIndex={0}
            aria-label="Enter portfolio"
            onKeyDown={(e) => e.key === "Enter" && alert("Welcome to my portfolio!")}
          >
            ENTER ➤
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default SplashScreen;