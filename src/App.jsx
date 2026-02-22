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
import AnimatedSection from './components/AnimatedSection';
import ScrollProgress from './components/ScrollProgress';
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

  // Initialize intersection observer for older browsers
  useEffect(() => {
    if (!window.IntersectionObserver) {
      // Fallback for older browsers
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        element.classList.add('is-visible');
      });
    }
  }, []);

  return (
    <div className="app">
      <ScrollProgress />
      <Header />
      
      <main>
        <Hero />
        
        <AnimatedSection animation="fade-in-section">
          <Stats />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-left" delay={2}>
          <About />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-scale">
          <Curriculum />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-right">
          <WeeklyBreakdown />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section">
          <StudentProjects />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-scale">
          <Gallery />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-left">
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section fade-in-right">
          <Apply />
        </AnimatedSection>

        <AnimatedSection animation="fade-in-section">
          <Partners />
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;