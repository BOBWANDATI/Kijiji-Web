import React from 'react';
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