import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

function App() {
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
  }, []);

  return (
    <div className="splash-screen">
      <div className="terminal-box">
        {bootLines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span>{line}</span>
          </div>
        ))}
        {showEnter && (
          <div className="enter-btn" onClick={() => alert("Welcome to my portfolio!")}>ENTER ➤</div>
        )}
      </div>
    </div>
  );
}

export default App;
