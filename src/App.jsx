import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Curriculum from './components/Curriculum';
import WeeklyBreakdown from './components/WeeklyBreakdown';
import StudentProjects from './components/StudentProjects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Apply from './components/Apply';
import Partners from './components/Partners';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Handle viewport height for mobile browsers
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Curriculum />
        <WeeklyBreakdown />
        <StudentProjects />
        <Gallery />
        <Testimonials />
        <Apply />
        <Partners />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;