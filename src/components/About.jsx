import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Content Column */}
          <div className="about-content">
            <span className="about-subtitle">About Us</span>
            <h2 className="about-title">Kijiji Connect Digital Hub at Amani Center</h2>
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
          background: var(--gray-100);
          width: 100%;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .about-content {
          color: var(--primary-black);
        }

        .about-subtitle {
          color: var(--primary-red);
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .about-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .about-description {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--gray-600);
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
        }

        .about-feature-text {
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 500;
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
          box-shadow: var(--shadow-xl);
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
          box-shadow: 0 10px 30px rgba(220,38,38,0.3);
          animation: pulse 2s infinite;
          min-width: 80px;
        }

        .about-badge-number {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .about-badge-text {
          font-size: clamp(0.7rem, 1.5vw, 0.9rem);
          opacity: 0.9;
          white-space: nowrap;
        }

        .about-feature:hover .about-feature-icon {
          transform: scale(1.1);
          background: var(--primary-red-hover);
        }

        .about-feature:hover .about-feature-text {
          color: var(--primary-red);
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

          .about-features {
            grid-template-columns: 1fr;
            gap: 0.8rem;
            max-width: 280px;
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
            font-size: 0.9rem;
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
      `}</style>
    </section>
  );
};

export default About;