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
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          position: relative;
          overflow: hidden;
          width: 100%;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        /* Add subtle pattern overlay */
        .stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%);
          pointer-events: none;
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
          position: relative;
          z-index: 1;
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
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          opacity: 0;
          transform: scale(0.9);
          animation: popIn 0.6s ease forwards;
        }

        .stat-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          background: rgba(255,255,255,0.1);
          border-color: var(--primary-red);
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
          text-shadow: 0 2px 10px rgba(220,38,38,0.3);
        }

        .stat-item:hover .stat-number {
          transform: scale(1.1);
          color: #ef4444;
          text-shadow: 0 4px 15px rgba(220,38,38,0.5);
        }

        .stat-label {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: var(--primary-white);
          font-weight: 500;
          position: relative;
          z-index: 2;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        .stat-circle {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%);
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
        @media (max-width: 768px) {
          .stats {
            padding: 2rem 0;
          }
        }

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
            letter-spacing: 0.5px;
          }
        }

        @media (max-width: 480px) {
          .stat-item {
            padding: 1rem;
          }

          .stat-number {
            font-size: 2.2rem;
          }

          .stat-label {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 375px) {
          .stat-item {
            padding: 0.8rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .stat-item:hover {
            transform: none;
            background: rgba(255,255,255,0.05);
          }

          .stat-item:hover .stat-number {
            transform: none;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .stats,
          .stat-item,
          .stat-number {
            transition: none;
            animation: none;
          }

          .stat-item:hover {
            transform: none;
          }
        }

        /* Dark Mode Enhancement */
        @media (prefers-color-scheme: dark) {
          .stats {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .stat-item {
            border: 2px solid var(--primary-red);
          }
          
          .stat-number {
            color: #ff0000;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
