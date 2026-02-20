import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const backgroundImages = [
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.05%20AM.jpeg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.09%20AM.jpeg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.12%20AM.jpeg?raw=true',
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);

  return (
    <section className="hero">
      {/* Background Carousel */}
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background-image ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            March 2026 Cohort • 10 Weeks
          </span>
          
          <h1 className="hero-title">
            Transform Your Future in{' '}
            <span className="hero-highlight">
              10 Weeks
              <span className="hero-highlight-underline"></span>
            </span>
          </h1>
          
          <p className="hero-description">
            Join Kijiji Connect Digital Hub for an intensive 
            10-week program in digital skills, design, programming, and 
            entrepreneurship.
          </p>
          
          <div className="hero-buttons">
            <a href="#apply" className="hero-apply-button">
              Apply Now
            </a>
            <a href="#curriculum" className="hero-curriculum-button">
              View Curriculum
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="hero-controls">
        <button className="hero-arrow hero-arrow-left" onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button className="hero-arrow hero-arrow-right" onClick={nextSlide} aria-label="Next slide">
          ›
        </button>
      </div>

      <div className="hero-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .hero {
          color: var(--primary-white);
          padding: clamp(2rem, 10vh, 4rem) 0;
          position: relative;
          overflow: hidden;
          min-height: clamp(500px, 80vh, 700px);
          display: flex;
          align-items: center;
          margin-top: 0;
          width: 100%;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .hero-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }

        .hero-background-image.active {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 1;
        }

        .hero-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 3;
          animation: fadeInUp 1s ease;
        }

        .hero-badge {
          background: var(--primary-red);
          display: inline-block;
          padding: 0.6rem 1.2rem;
          border-radius: var(--radius-full);
          font-size: clamp(0.8rem, 2vw, 1rem);
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(220,38,38,0.3);
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          line-height: 1.2;
        }

        .hero-highlight {
          color: var(--primary-red);
          position: relative;
          display: inline-block;
        }

        .hero-highlight-underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--primary-red);
          transform: scaleX(0);
          transform-origin: left;
          animation: slideIn 1s ease 1s forwards;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          color: rgba(255,255,255,0.95);
          margin-bottom: 2rem;
          line-height: 1.7;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-apply-button {
          padding: 0.8rem 2rem;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          background: var(--primary-green);
          color: var(--primary-white);
          border: none;
          border-radius: var(--radius-sm);
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all var(--transition-base);
          box-shadow: 0 4px 15px rgba(16,185,129,0.3);
        }

        .hero-apply-button:hover {
          background: var(--primary-green-hover);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(16,185,129,0.4);
        }

        .hero-curriculum-button {
          padding: 0.8rem 2rem;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          border: 2px solid var(--primary-white);
          color: var(--primary-white);
          background: transparent;
          border-radius: var(--radius-sm);
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all var(--transition-base);
        }

        .hero-curriculum-button:hover {
          background: var(--primary-white);
          color: var(--primary-black);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255,255,255,0.3);
        }

        .hero-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          z-index: 3;
          pointer-events: none;
        }

        .hero-arrow {
          position: absolute;
          width: clamp(35px, 5vw, 50px);
          height: clamp(35px, 5vw, 50px);
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 2px solid rgba(255,255,255,0.3);
          color: var(--primary-white);
          font-size: clamp(1.5rem, 3vw, 2rem);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          backdrop-filter: blur(5px);
          pointer-events: auto;
        }

        .hero-arrow-left {
          left: clamp(0.5rem, 3vw, 2rem);
        }

        .hero-arrow-right {
          right: clamp(0.5rem, 3vw, 2rem);
        }

        .hero-arrow:hover {
          background: var(--primary-red);
          border-color: var(--primary-red);
          transform: scale(1.1);
        }

        .hero-indicators {
          position: absolute;
          bottom: clamp(1rem, 3vh, 2rem);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 3;
        }

        .hero-indicator {
          width: clamp(8px, 2vw, 12px);
          height: clamp(8px, 2vw, 12px);
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
          padding: 0;
        }

        .hero-indicator.active {
          background: var(--primary-red);
          transform: scale(1.2);
          box-shadow: 0 0 15px var(--primary-red);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .hero {
            min-height: 600px;
          }
          
          .hero-title {
            font-size: 3rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero {
            min-height: 550px;
            padding: 1rem 0 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero-apply-button,
          .hero-curriculum-button {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }

          .hero-arrow {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero {
            min-height: 500px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-badge {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .hero-description {
            font-size: 0.95rem;
          }

          .hero-indicators {
            bottom: 0.75rem;
          }
        }

        @media (max-width: 375px) {
          .hero-title {
            font-size: 1.8rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .hero {
            min-height: 350px;
            padding: 1rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;