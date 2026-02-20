import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    testimonials: {
      padding: '5rem 0',
      background: 'var(--primary-white)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    slider: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
    },
    slide: {
      background: 'var(--gray-100)',
      borderRadius: '2rem',
      padding: '3rem',
      textAlign: 'center',
      position: 'relative',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
    quote: {
      fontSize: '4rem',
      color: 'var(--primary-red)',
      opacity: 0.2,
      position: 'absolute',
      top: '1rem',
      left: '2rem',
      fontFamily: 'serif',
    },
    text: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      color: 'var(--gray-600)',
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 1,
    },
    author: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    },
    avatar: {
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    info: {
      textAlign: 'left',
    },
    name: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: 'var(--primary-black)',
      marginBottom: '0.25rem',
    },
    role: {
      color: 'var(--primary-red)',
      fontSize: '0.875rem',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem',
    },
    dot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      background: 'var(--gray-300)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    dotActive: {
      background: 'var(--primary-red)',
      transform: 'scale(1.2)',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      background: 'var(--primary-white)',
      border: 'none',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 2,
    },
    prevArrow: {
      left: '-1.5rem',
    },
    nextArrow: {
      right: '-1.5rem',
    },
  };

  const testimonials = [
    {
      id: 1,
      name: 'Hadida',
      role: 'Web Developer',
      text: 'The 6th cohort transformed my career. I went from knowing nothing about coding to building full-stack applications. The mentors were incredibly supportive and the curriculum is perfectly structured.',
      avatar: 'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%205.18.51%20PM.jpeg?raw=true',
    },
    {
      id: 2,
      name: 'Saadia Salad',
      role: 'Web Developer, Freelancer',
      text: 'I joined to learn design but gained so much more. The entrepreneurship module helped me start my freelance business. Within 3 months of graduating, I landed my first international client.',
      avatar: 'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%205.18.52%20PM%20(1).jpeg?raw=true',
    },
    {
      id: 3,
      name: 'Amina',
      role: 'Digital Marketer',
      text: 'The practical approach to learning made all the difference. We worked on real projects, built portfolios, and learned from industry experts. Now I manage social media for three local businesses.',
      avatar: 'https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%205.18.52%20PM.jpeg?raw=true',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" style={styles.testimonials}>
      <div style={styles.container}>
        <h2 className="section-title">Success Stories</h2>
        
        <div style={styles.slider}>
          <button
            style={{...styles.arrow, ...styles.prevArrow}}
            onClick={handlePrev}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-red)';
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary-white)';
              e.currentTarget.style.color = 'var(--primary-black)';
            }}
          >
            ‹
          </button>

          <div style={styles.slide}>
            <div style={styles.quote}>"</div>
            <p style={styles.text}>{testimonials[currentIndex].text}</p>
            <div style={styles.author}>
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                style={styles.avatar}
              />
              <div style={styles.info}>
                <h4 style={styles.name}>{testimonials[currentIndex].name}</h4>
                <p style={styles.role}>{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button
            style={{...styles.arrow, ...styles.nextArrow}}
            onClick={handleNext}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-red)';
              e.currentTarget.style.color = 'var(--primary-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--primary-white)';
              e.currentTarget.style.color = 'var(--primary-black)';
            }}
          >
            ›
          </button>

          <div style={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                style={{
                  ...styles.dot,
                  ...(currentIndex === index ? styles.dotActive : {}),
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          /* Large Desktop */
          @media (min-width: 1400px) {
            section {
              padding: 6rem 0 !important;
            }
            div[style*="slide"] {
              padding: 4rem !important;
            }
            p[style*="text"] {
              font-size: 1.4rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 5rem 0 !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="slide"] {
              padding: 2.5rem !important;
            }
            p[style*="text"] {
              font-size: 1.2rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="slide"] {
              padding: 2.5rem !important;
            }
            p[style*="text"] {
              font-size: 1.1rem !important;
            }
            button[style*="arrow"] {
              width: 2.5rem !important;
              height: 2.5rem !important;
              font-size: 1.2rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="slide"] {
              padding: 2rem !important;
            }
            p[style*="text"] {
              font-size: 1rem !important;
              line-height: 1.6 !important;
            }
            button[style*="arrow"] {
              width: 2.2rem !important;
              height: 2.2rem !important;
              font-size: 1rem !important;
            }
            button[style*="prevArrow"] {
              left: -1rem !important;
            }
            button[style*="nextArrow"] {
              right: -1rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="slide"] {
              padding: 1.5rem !important;
            }
            p[style*="text"] {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1.5rem !important;
            }
            div[style*="author"] {
              flex-direction: column !important;
              text-align: center !important;
            }
            div[style*="info"] {
              text-align: center !important;
            }
            img {
              width: 3.5rem !important;
              height: 3.5rem !important;
            }
            button[style*="arrow"] {
              display: none !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="slide"] {
              padding: 1.25rem !important;
            }
            p[style*="text"] {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1.25rem !important;
            }
            div[style*="quote"] {
              font-size: 3rem !important;
              top: 0.5rem !important;
              left: 1rem !important;
            }
            div[style*="author"] {
              flex-direction: column !important;
              text-align: center !important;
            }
            div[style*="info"] {
              text-align: center !important;
            }
            h4 {
              font-size: 1rem !important;
            }
            p[style*="role"] {
              font-size: 0.8rem !important;
            }
            img {
              width: 3rem !important;
              height: 3rem !important;
            }
            button[style*="arrow"] {
              display: none !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="slide"] {
              padding: 1rem !important;
            }
            p[style*="text"] {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
              margin-bottom: 1rem !important;
            }
            div[style*="quote"] {
              font-size: 2.5rem !important;
              top: 0.25rem !important;
              left: 0.75rem !important;
            }
            div[style*="author"] {
              flex-direction: column !important;
              text-align: center !important;
            }
            div[style*="info"] {
              text-align: center !important;
            }
            h4 {
              font-size: 0.95rem !important;
            }
            p[style*="role"] {
              font-size: 0.75rem !important;
            }
            img {
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
            button[style*="arrow"] {
              display: none !important;
            }
            div[style*="dots"] {
              margin-top: 1rem !important;
            }
            div[style*="dot"] {
              width: 0.5rem !important;
              height: 0.5rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="slide"] {
              padding: 1.5rem !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] {
              max-width: 1600px !important;
            }
            div[style*="slider"] {
              max-width: 1000px !important;
            }
            p[style*="text"] {
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

export default Testimonials;