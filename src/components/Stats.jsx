import React, { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const styles = {
    stats: {
      padding: '4rem 0',
      background: 'var(--primary-white)',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    statItem: {
      textAlign: 'center',
      padding: '2rem',
      background: 'var(--gray-100)',
      borderRadius: '1rem',
      transition: 'all 0.3s ease',
      animation: isVisible ? 'popIn 0.6s ease forwards' : 'none',
      animationDelay: '0.2s',
      opacity: 0,
      transform: 'scale(0.9)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    },
    number: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: 'var(--primary-red)',
      marginBottom: '0.5rem',
      lineHeight: '1',
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.3s ease',
    },
    label: {
      fontSize: '1.2rem',
      color: 'var(--primary-black)',
      fontWeight: '600',
      position: 'relative',
      zIndex: 2,
      letterSpacing: '0.5px',
    },
    backgroundCircle: {
      position: 'absolute',
      top: '-50%',
      right: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      opacity: 0,
      transition: 'opacity 0.5s ease',
      pointerEvents: 'none',
    },
    statItemInner: {
      position: 'relative',
      zIndex: 1,
    },
  };

  const stats = [
    { number: '10', label: 'Weeks Duration', delay: '0.1s' },
    { number: '8+', label: 'Course Categories', delay: '0.2s' },
    { number: '50+', label: 'Practical Projects', delay: '0.3s' },
    { number: '100%', label: 'Hands-on Training', delay: '0.4s' },
  ];

  return (
    <section style={styles.stats} ref={statsRef}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                ...styles.statItem,
                animationDelay: stat.delay,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary-white) 0%, var(--gray-100) 100%)';
                
                const number = e.currentTarget.querySelector('.stat-number');
                if (number) {
                  number.style.transform = 'scale(1.1)';
                  number.style.color = '#b91c1c';
                }
                
                const circle = e.currentTarget.querySelector('.stat-circle');
                if (circle) {
                  circle.style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                e.currentTarget.style.background = 'var(--gray-100)';
                
                const number = e.currentTarget.querySelector('.stat-number');
                if (number) {
                  number.style.transform = 'scale(1)';
                  number.style.color = 'var(--primary-red)';
                }
                
                const circle = e.currentTarget.querySelector('.stat-circle');
                if (circle) {
                  circle.style.opacity = '0';
                }
              }}
            >
              <div style={styles.backgroundCircle} className="stat-circle"></div>
              <div style={styles.statItemInner}>
                <div style={styles.number} className="stat-number">
                  {stat.number}
                </div>
                <div style={styles.label}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.05) translateY(-5px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          /* Large Desktop */
          @media (min-width: 1400px) {
            section {
              padding: 5rem 0 !important;
            }
            div[style*="number"] {
              font-size: 4rem !important;
            }
            div[style*="label"] {
              font-size: 1.4rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              gap: 1.5rem !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 3.5rem 0 !important;
            }
            div[style*="grid"] {
              gap: 1.25rem !important;
            }
            div[style*="statItem"] {
              padding: 1.5rem !important;
            }
            div[style*="number"] {
              font-size: 3rem !important;
            }
            div[style*="label"] {
              font-size: 1.1rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
            div[style*="statItem"] {
              padding: 1.5rem !important;
            }
            div[style*="number"] {
              font-size: 3rem !important;
            }
            div[style*="label"] {
              font-size: 1.1rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.25rem !important;
            }
            div[style*="statItem"] {
              padding: 1.25rem !important;
            }
            div[style*="number"] {
              font-size: 2.5rem !important;
            }
            div[style*="label"] {
              font-size: 1rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            div[style*="statItem"] {
              padding: 1rem !important;
            }
            div[style*="number"] {
              font-size: 2.2rem !important;
            }
            div[style*="label"] {
              font-size: 0.95rem !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            div[style*="statItem"] {
              padding: 1.25rem !important;
            }
            div[style*="number"] {
              font-size: 2.5rem !important;
            }
            div[style*="label"] {
              font-size: 1rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }
            div[style*="statItem"] {
              padding: 1rem !important;
            }
            div[style*="number"] {
              font-size: 2.2rem !important;
            }
            div[style*="label"] {
              font-size: 0.95rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] {
              max-width: 1600px !important;
            }
            div[style*="grid"] {
              gap: 3rem !important;
            }
            div[style*="number"] {
              font-size: 4.5rem !important;
            }
            div[style*="label"] {
              font-size: 1.5rem !important;
            }
          }

          /* Reduced Motion */
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

export default Stats;