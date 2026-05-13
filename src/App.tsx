import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import AIProjects from './components/sections/AIProjects';
import Testimonials from './components/sections/Testimonials';
import SkillsCarousel from './components/sections/SkillsCarousel';
import { ThemeProvider } from './hooks/useTheme';
import { scrollToSection, getActiveSection } from './utils/scrollUtils';
import ScrollToTop from './components/ui/ScrollToTop';
import ScrollProgressBar from './components/ui/ScrollProgressBar';
import VantaBackground from './components/VantaBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection();
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ThemeProvider>
      <div className="min-h-screen text-slate-900 dark:text-violet-50">
        <ScrollProgressBar />
        <VantaBackground />
        <Header
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        <main>
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <SkillsCarousel />
          <Projects />
          <AIProjects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;