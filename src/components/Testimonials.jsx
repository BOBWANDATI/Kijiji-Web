import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Success Stories</h2>
        
        <div className="testimonials-slider">
          <button
            className="testimonials-arrow testimonials-arrow-left"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonials-slide">
            <div className="testimonials-quote">"</div>
            <p className="testimonials-text">{testimonials[currentIndex].text}</p>
            <div className="testimonials-author">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="testimonials-avatar"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80?text=User';
                }}
              />
              <div className="testimonials-info">
                <h4 className="testimonials-name">{testimonials[currentIndex].name}</h4>
                <p className="testimonials-role">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button
            className="testimonials-arrow testimonials-arrow-right"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            ›
          </button>

          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: var(--primary-white);
          width: 100%;
          overflow-x: hidden;
        }

        .testimonials-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .testimonials-slider {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .testimonials-slide {
          background: var(--gray-100);
          border-radius: var(--radius-xl);
          padding: clamp(2rem, 5vw, 3rem);
          text-align: center;
          position: relative;
          box-shadow: var(--shadow-xl);
          animation: fadeIn 0.5s ease;
        }

        .testimonials-quote {
          font-size: 6rem;
          color: var(--primary-red);
          opacity: 0.2;
          position: absolute;
          top: 1rem;
          left: 2rem;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .testimonials-text {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.8;
          color: var(--gray-600);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .testimonials-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .testimonials-avatar {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary-red);
        }

        .testimonials-info {
          text-align: left;
        }

        .testimonials-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--primary-black);
          margin-bottom: 0.25rem;
        }

        .testimonials-role {
          color: var(--primary-red);
          font-size: 0.875rem;
        }

        .testimonials-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: var(--primary-white);
          border: none;
          box-shadow: var(--shadow-md);
          font-size: 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          z-index: 2;
          color: var(--gray-600);
        }

        .testimonials-arrow:hover {
          background: var(--primary-red);
          color: var(--primary-white);
          transform: translateY(-50%) scale(1.1);
        }

        .testimonials-arrow-left {
          left: -1.5rem;
        }

        .testimonials-arrow-right {
          right: -1.5rem;
        }

        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .testimonials-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: var(--gray-300);
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
          padding: 0;
        }

        .testimonials-dot.active {
          background: var(--primary-red);
          transform: scale(1.2);
        }

        .testimonials-dot:hover {
          background: var(--primary-red);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .testimonials-arrow-left {
            left: -1rem;
          }

          .testimonials-arrow-right {
            right: -1rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .testimonials-slide {
            padding: 1.5rem;
          }

          .testimonials-quote {
            font-size: 4rem;
            top: 0.5rem;
            left: 1rem;
          }

          .testimonials-text {
            font-size: 1rem;
          }

          .testimonials-author {
            flex-direction: column;
            text-align: center;
          }

          .testimonials-info {
            text-align: center;
          }

          .testimonials-arrow {
            display: none;
          }

          .testimonials-avatar {
            width: 3.5rem;
            height: 3.5rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials {
            padding: 2rem 0;
          }

          .testimonials-slide {
            padding: 1.25rem;
          }

          .testimonials-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .testimonials-name {
            font-size: 1rem;
          }

          .testimonials-role {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 375px) {
          .testimonials-text {
            font-size: 0.9rem;
          }

          .testimonials-avatar {
            width: 3rem;
            height: 3rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .testimonials-arrow:hover {
            background: var(--primary-white);
            color: var(--gray-600);
            transform: translateY(-50%);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .testimonials-slide,
          .testimonials-arrow,
          .testimonials-dot {
            transition: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;