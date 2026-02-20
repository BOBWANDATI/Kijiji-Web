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
      { threshold: 0.2 }
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

  const stats = [
    { number: '10', label: 'Weeks Duration' },
    { number: '8+', label: 'Course Categories' },
    { number: '50+', label: 'Practical Projects' },
    { number: '100%', label: 'Hands-on Training' },
  ];

  return (
    <section className={`stats ${isVisible ? 'stats-visible' : ''}`} ref={statsRef}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-circle"></div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          padding: clamp(2rem, 6vw, 4rem) 0;
          background: var(--primary-white);
          position: relative;
          overflow: hidden;
          width: 100%;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .stats-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(1rem, 3vw, 2rem);
          width: 100%;
        }

        .stat-item {
          text-align: center;
          padding: clamp(1rem, 3vw, 2rem);
          background: var(--gray-100);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          opacity: 0;
          transform: scale(0.9);
          animation: popIn 0.6s ease forwards;
        }

        .stat-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: var(--shadow-xl);
          background: linear-gradient(135deg, var(--primary-white) 0%, var(--gray-100) 100%);
        }

        .stat-number {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--primary-red);
          margin-bottom: 0.5rem;
          line-height: 1;
          position: relative;
          z-index: 2;
          transition: all var(--transition-base);
        }

        .stat-item:hover .stat-number {
          transform: scale(1.1);
          color: var(--primary-red-hover);
        }

        .stat-label {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: var(--primary-black);
          font-weight: 600;
          position: relative;
          z-index: 2;
        }

        .stat-circle {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .stat-item:hover .stat-circle {
          opacity: 1;
        }

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

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-item {
            padding: 1.5rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .stat-item {
            padding: 1.25rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .stat-number {
            font-size: 2.2rem;
          }

          .stat-label {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 375px) {
          .stat-item {
            padding: 1rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;