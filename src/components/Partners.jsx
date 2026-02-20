import React from 'react';

const Partners = () => {
  const partners = [
    { 
      id: 1, 
      name: 'Amani Center', 
      logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/73256c7fb19b93bff860c7da069371e78104fb71/download%20(11).jpg' 
    },
    { 
      id: 2, 
      name: 'ACT!', 
      logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/a7879433a4335115d163fb09d8ef3eabbc8934bf/ACT.png' 
    },
    { 
      id: 3, 
      name: 'Life Legacy', 
      logo: 'https://github.com/BOBWANDATI/images/blob/main/PARADIGM.png?raw=true' 
    },
    { 
      id: 4, 
      name: 'Digiken', 
      logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/a7879433a4335115d163fb09d8ef3eabbc8934bf/DIGIKEN.jpg' 
    },
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners & Sponsors</h2>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partner-item"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partner-logo"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += `<div class="partner-fallback">${partner.name.charAt(0)}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partners {
          padding: clamp(3rem, 6vw, 4rem) 0;
          background: var(--primary-white);
          border-top: 1px solid var(--gray-200);
          border-bottom: 1px solid var(--gray-200);
          width: 100%;
          overflow-x: hidden;
        }

        .partners-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .partners-title {
          text-align: center;
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: 600;
          color: var(--gray-600);
          margin-bottom: clamp(2rem, 5vw, 3rem);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: clamp(2rem, 4vw, 3rem);
          align-items: center;
          justify-items: center;
        }

        .partner-item {
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all var(--transition-base);
          cursor: pointer;
          max-width: 150px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-item:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        .partner-logo {
          width: 100%;
          height: auto;
          max-height: 60px;
          object-fit: contain;
          display: block;
        }

        .partner-fallback {
          width: 100%;
          height: 60px;
          background: var(--gray-200);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--gray-600);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .partner-item {
            max-width: 120px;
          }

          .partner-logo {
            max-height: 50px;
          }

          .partner-fallback {
            height: 50px;
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .partners {
            padding: 2rem 0;
          }

          .partners-title {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            letter-spacing: 1px;
          }

          .partners-grid {
            gap: 1rem;
          }

          .partner-item {
            max-width: 100px;
          }

          .partner-logo {
            max-height: 45px;
          }

          .partner-fallback {
            height: 45px;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 375px) {
          .partners-title {
            font-size: 1rem;
          }

          .partner-item {
            max-width: 80px;
          }

          .partner-logo {
            max-height: 40px;
          }

          .partner-fallback {
            height: 40px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 320px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }

          .partner-item {
            max-width: 120px;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .partners {
            padding: 2rem 0;
          }

          .partners-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .partner-item:hover {
            filter: grayscale(100%);
            opacity: 0.7;
            transform: none;
          }

          .partner-item:active {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(0.95);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .partner-item {
            transition: none;
          }

          .partner-item:hover {
            transform: none;
          }
        }

        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .partners {
            background: var(--gray-900);
            border-color: var(--gray-700);
          }

          .partners-title {
            color: var(--gray-400);
          }

          .partner-item {
            filter: grayscale(100%) brightness(0.8);
          }

          .partner-fallback {
            background: var(--gray-700);
            color: var(--gray-400);
          }
        }

        /* Print Styles */
        @media print {
          .partners {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;