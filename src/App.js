import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5750); // Increased to 5 seconds to accommodate longer splash screen animations
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Error in splash screen transition:', error);
      setLoading(false);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <div className="content">
            <Home />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Resume />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;