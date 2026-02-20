import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your GitHub background images
  const backgroundImages = [
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.05%20AM.jpeg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.09%20AM.jpeg?raw=true',
    'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.12%20AM.jpeg?raw=true',
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const styles = {
    hero: {
      color: 'var(--primary-white)',
      padding: '1rem 0 3rem 0', // Reduced top padding to 1rem
      position: 'relative',
      overflow: 'hidden',
      minHeight: '850px', // Adjusted height
      display: 'flex',
      alignItems: 'center',
      marginTop: '0', // Removed margin top
    },
    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0,
      transition: 'opacity 1.5s ease-in-out',
    },
    activeBackground: {
      opacity: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
      zIndex: 1,
    },
    container: {
      maxWidth: '1480px',
      margin: '0 auto',
      padding: '0 2rem',
      position: 'relative',
      zIndex: 2,
      width: '100%',
    },
    content: {
      maxWidth: '900px', // Increased for bigger home page
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 3,
      paddingTop: '0', // Removed top padding
    },
    badge: {
      background: 'var(--primary-red)',
      display: 'inline-block',
      padding: '0.75rem 1.5rem', // Slightly increased padding
      borderRadius: '3rem',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 4px 15px rgba(220,38,38,0.3)',
      animation: 'fadeInDown 1s ease',
    },
    title: {
      fontSize: '4rem', // Increased for bigger home page
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      animation: 'fadeInUp 1s ease 0.2s both',
    },
    highlight: {
      color: 'var(--primary-red)',
      position: 'relative',
      display: 'inline-block',
    },
    highlightUnderline: {
      position: 'absolute',
      bottom: '-5px',
      left: 0,
      width: '100%',
      height: '3px',
      background: 'var(--primary-red)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      animation: 'slideIn 1s ease 1s forwards',
    },
    description: {
      fontSize: '1.3rem', // Slightly increased
      color: 'rgba(255,255,255,0.95)',
      marginBottom: '2rem',
      lineHeight: '1.7',
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      animation: 'fadeInUp 1s ease 0.4s both',
    },
    buttons: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      animation: 'fadeInUp 1s ease 0.6s both',
    },
    applyButton: {
      padding: '1rem 2.5rem', // Increased padding
      fontSize: '1.1rem',
      background: '#10b981',
      color: 'var(--primary-white)',
      border: 'none',
      borderRadius: '0.375rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      animation: 'popIn 0.5s ease, float 3s ease-in-out infinite',
      boxShadow: '0 4px 15px rgba(16,185,129,0.3)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    curriculumButton: {
      padding: '1rem 2.5rem', // Increased padding
      fontSize: '1.1rem',
      border: '2px solid var(--primary-white)',
      color: 'var(--primary-white)',
      background: 'transparent',
      borderRadius: '0.375rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    },
    indicators: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '1rem',
      zIndex: 3,
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.5)',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      padding: 0,
    },
    activeIndicator: {
      background: 'var(--primary-red)',
      transform: 'scale(1.2)',
      boxShadow: '0 0 15px var(--primary-red)',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      border: '2px solid rgba(255,255,255,0.3)',
      color: 'var(--primary-white)',
      fontSize: '2rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 3,
      backdropFilter: 'blur(5px)',
    },
    leftArrow: {
      left: '2rem',
    },
    rightArrow: {
      right: '2rem',
    },
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  return (
    <section style={styles.hero}>
      {/* Background Images Carousel */}
      <div style={styles.backgroundContainer}>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.backgroundImage,
              backgroundImage: `url(${image})`,
              ...(currentSlide === index ? styles.activeBackground : {}),
            }}
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.badge}>
            March 2026 Cohort • 10 Weeks
          </span>
          
          <h1 style={styles.title}>
            Transform Your Future in{' '}
            <span style={styles.highlight}>
              10 Weeks
              <span style={styles.highlightUnderline}></span>
            </span>
          </h1>
          
          <p style={styles.description}>
            Join Kijiji Connect Digital Hub  for an intensive 
            10-week program in digital skills, design, programming, and 
            entrepreneurship.
          </p>
          
          <div style={styles.buttons}>
            <a 
              href="#apply" 
              style={styles.applyButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#059669';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(16,185,129,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#10b981';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(16,185,129,0.3)';
              }}
            >
              Apply Now
            </a>
            <a 
              href="#curriculum" 
              style={styles.curriculumButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-white)';
                e.currentTarget.style.color = 'var(--primary-black)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--primary-white)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Curriculum
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div style={styles.indicators}>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.indicator,
              ...(currentSlide === index ? styles.activeIndicator : {}),
            }}
            onClick={() => goToSlide(index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-red)';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        style={{...styles.arrow, ...styles.leftArrow}}
        onClick={prevSlide}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary-red)';
          e.currentTarget.style.borderColor = 'var(--primary-red)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(220,38,38,0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        style={{...styles.arrow, ...styles.rightArrow}}
        onClick={nextSlide}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary-red)';
          e.currentTarget.style.borderColor = 'var(--primary-red)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(220,38,38,0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        aria-label="Next slide"
      >
        ›
      </button>

      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideIn {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          /* Desktop Large */
          @media (min-width: 1200px) {
            section {
              padding: 1rem 0 3rem 0 !important;
              min-height: 650px !important;
            }
            h1 {
              font-size: 4rem !important;
            }
          }

          /* Desktop Medium */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 1rem 0 2.5rem 0 !important;
              min-height: 600px !important;
            }
            h1 {
              font-size: 3.5rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 1rem 0 2rem 0 !important;
              min-height: 550px !important;
            }
            h1 {
              font-size: 3rem !important;
            }
            p {
              font-size: 1.2rem !important;
            }
          }

          /* Tablet Portrait & Mobile Large */
          @media (max-width: 767px) {
            section {
              padding: 0.5rem 0 2rem 0 !important;
              min-height: 500px !important;
            }
            h1 {
              font-size: 2.5rem !important;
            }
            p {
              font-size: 1.1rem !important;
              padding: 0 1rem !important;
            }
            div[style*="gap: 1.5rem"] {
              flex-direction: column !important;
              gap: 1rem !important;
              align-items: center !important;
            }
            a {
              width: 100% !important;
              max-width: 300px !important;
              text-align: center !important;
            }
            button[style*="left: 2rem"] {
              left: 0.5rem !important;
              width: 40px !important;
              height: 40px !important;
              font-size: 1.5rem !important;
            }
            button[style*="right: 2rem"] {
              right: 0.5rem !important;
              width: 40px !important;
              height: 40px !important;
              font-size: 1.5rem !important;
            }
            div[style*="bottom: 2rem"] {
              bottom: 1rem !important;
            }
          }

          /* Mobile Medium */
          @media (max-width: 480px) {
            section {
              padding: 0.5rem 0 1.5rem 0 !important;
              min-height: 450px !important;
            }
            h1 {
              font-size: 2rem !important;
            }
            span[style*="padding: 0.75rem 1.5rem"] {
              padding: 0.5rem 1rem !important;
              font-size: 0.85rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            a {
              max-width: 250px !important;
              padding: 0.8rem 1.5rem !important;
              font-size: 0.95rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 0.5rem 0 1rem 0 !important;
              min-height: 400px !important;
            }
            h1 {
              font-size: 1.8rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 0.5rem 0 1rem 0 !important;
              min-height: 350px !important;
            }
          }

          /* Smooth transitions */
          * {
            transition: all 0.3s ease;
          }

          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            a:hover,
            button:hover {
              transform: none !important;
            }
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;