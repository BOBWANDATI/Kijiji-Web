import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Content Column */}
          <div className="about-content">
            <span className="about-subtitle">About Us</span>
            <h2 className="about-title">Kijiji Connect Digital Hub</h2>
            <p className="about-description">
              We are a community-driven digital hub dedicated to empowering youth 
              with practical tech skills. Our March 2026 cohort offers intensive 
              training in digital literacy, programming, design, and entrepreneurship, 
              preparing students for successful careers in the digital economy.
            </p>
            
            <div className="about-features">
              {[
                'Industry Expert Mentors',
                'Hands-on Projects',
                'Job Readiness',
                'Community Support'
              ].map((feature, index) => (
                <div key={index} className="about-feature">
                  <span className="about-feature-icon">✓</span>
                  <span className="about-feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src="https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.10%20AM.jpeg?raw=true" 
                alt="Amani Center - Kijiji Connect Digital Hub"
                className="about-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400?text=Amani+Center';
                }}
              />
              <div className="about-image-badge">
                <div className="about-badge-number">500+</div>
                <div className="about-badge-text">Graduates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Add subtle pattern overlay */
        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .about-content {
          color: var(--primary-white);
        }

        .about-subtitle {
          color: var(--primary-red);
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          display: inline-block;
          position: relative;
        }

        .about-subtitle::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--primary-red);
        }

        .about-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.3;
          color: var(--primary-white);
        }

        .about-description {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: rgba(255,255,255,0.8);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .about-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1rem, 2vw, 1.5rem);
        }

        .about-feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all var(--transition-base);
        }

        .about-feature-icon {
          width: clamp(1.5rem, 3vw, 2rem);
          height: clamp(1.5rem, 3vw, 2rem);
          background: var(--primary-red);
          color: var(--primary-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          flex-shrink: 0;
          transition: all var(--transition-base);
          box-shadow: 0 4px 10px rgba(220,38,38,0.3);
        }

        .about-feature-text {
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 500;
          color: rgba(255,255,255,0.9);
        }

        .about-feature:hover .about-feature-icon {
          transform: scale(1.1);
          background: var(--primary-red-hover);
          box-shadow: 0 6px 15px rgba(220,38,38,0.4);
        }

        .about-feature:hover .about-feature-text {
          color: var(--primary-white);
        }

        .about-image-container {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: center;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 550px;
          overflow: hidden;
          border-radius: clamp(0.75rem, 2vw, 1rem);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-slow);
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .about-image-badge {
          position: absolute;
          bottom: clamp(1rem, 3vw, 2rem);
          right: clamp(1rem, 3vw, 2rem);
          background: var(--primary-red);
          color: var(--primary-white);
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border-radius: clamp(0.5rem, 1.5vw, 0.75rem);
          text-align: center;
          box-shadow: 0 10px 30px rgba(220,38,38,0.4);
          animation: pulse 2s infinite;
          min-width: 80px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .about-badge-number {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.25rem;
          color: var(--primary-white);
        }

        .about-badge-text {
          font-size: clamp(0.7rem, 1.5vw, 0.9rem);
          opacity: 0.9;
          white-space: nowrap;
          color: rgba(255,255,255,0.9);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .about-grid {
            gap: 2rem;
          }

          .about-image-wrapper {
            max-width: 450px;
          }

          .about-subtitle::after {
            left: 0;
            transform: none;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .about {
            padding: 2rem 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-image-container {
            order: -1;
          }

          .about-image-wrapper {
            max-width: 100%;
            border-radius: 0;
            box-shadow: none;
          }

          .about-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            max-height: 400px;
          }

          .about-content {
            text-align: center;
            padding: 0 1rem;
          }

          .about-subtitle::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .about-features {
            max-width: 400px;
            margin: 0 auto;
          }

          .about-feature {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .about-title {
            font-size: 1.8rem;
          }

          .about-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 1.6rem;
          }

          .about-description {
            font-size: 0.95rem;
          }

          .about-features {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            max-width: 280px;
          }

          .about-feature-text {
            font-size: 0.9rem;
          }

          .about-image-badge {
            padding: 0.9rem;
            min-width: 70px;
          }

          .about-badge-number {
            font-size: 1.4rem;
          }

          .about-badge-text {
            font-size: 0.65rem;
          }
        }

        @media (max-width: 375px) {
          .about-title {
            font-size: 1.4rem;
          }

          .about-description {
            font-size: 0.85rem;
          }

          .about-feature-text {
            font-size: 0.85rem;
          }

          .about-image-badge {
            padding: 0.8rem;
          }

          .about-badge-number {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 320px) {
          .about-image-badge {
            padding: 0.6rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .about-feature:hover .about-feature-icon {
            transform: none;
          }
          .about-feature:hover .about-feature-text {
            color: rgba(255,255,255,0.9);
          }
          .about-image-wrapper:hover .about-image {
            transform: none;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .about-image-badge {
            animation: none;
          }
          .about-image,
          .about-feature-icon {
            transition: none;
          }
        }

        /* Dark Mode Enhancement */
        @media (prefers-color-scheme: dark) {
          .about {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
