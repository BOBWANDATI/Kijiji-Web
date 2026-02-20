import React from 'react';

const Partners = () => {
  const styles = {
    partners: {
      padding: '4rem 0',
      background: 'var(--primary-white)',
      borderTop: '1px solid var(--gray-200)',
      borderBottom: '1px solid var(--gray-200)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'var(--gray-600)',
      marginBottom: '3rem',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '3rem',
      alignItems: 'center',
      justifyItems: 'center',
    },
    partnerItem: {
      filter: 'grayscale(100%)',
      opacity: 0.7,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      maxWidth: '150px',
    },
    logo: {
      width: '100%',
      height: 'auto',
      maxHeight: '60px',
      objectFit: 'contain',
    },
  };

  const partners = [
    { id: 1, name: 'Amani Center', logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/73256c7fb19b93bff860c7da069371e78104fb71/download%20(11).jpg' },
    { id: 3, name: 'ACT!', logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/a7879433a4335115d163fb09d8ef3eabbc8934bf/ACT.png' },
    { id: 4, name: 'Life Legacy', logo: 'https://github.com/BOBWANDATI/images/blob/main/PARADIGM.png?raw=true' },
    { id: 5, name: 'Digiken', logo: 'https://raw.githubusercontent.com/BOBWANDATI/images/a7879433a4335115d163fb09d8ef3eabbc8934bf/DIGIKEN.jpg' },
  ];

  return (
    <section id="partners" style={styles.partners}>
      <div style={styles.container}>
        <h2 style={styles.title}>Our Partners & Sponsors</h2>
        
        <div style={styles.grid}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              style={styles.partnerItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.7';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img src={partner.logo} alt={partner.name} style={styles.logo} />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Large Desktop */
          @media (min-width: 1400px) {
            section {
              padding: 5rem 0 !important;
            }
            h2 {
              font-size: 1.8rem !important;
              margin-bottom: 4rem !important;
            }
            div[style*="grid"] {
              gap: 4rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              gap: 2.5rem !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 3.5rem 0 !important;
            }
            h2 {
              font-size: 1.4rem !important;
              margin-bottom: 2.5rem !important;
            }
            div[style*="grid"] {
              gap: 2rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 3rem 0 !important;
            }
            h2 {
              font-size: 1.3rem !important;
              margin-bottom: 2rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 2rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 2.5rem 0 !important;
            }
            h2 {
              font-size: 1.2rem !important;
              margin-bottom: 1.5rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
            div[style*="partnerItem"] {
              max-width: 120px !important;
            }
            img {
              max-height: 50px !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2rem 0 !important;
            }
            h2 {
              font-size: 1.1rem !important;
              margin-bottom: 1.5rem !important;
              letter-spacing: 1px !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
            div[style*="partnerItem"] {
              max-width: 100px !important;
            }
            img {
              max-height: 45px !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 1.5rem 0 !important;
            }
            h2 {
              font-size: 1rem !important;
              margin-bottom: 1.25rem !important;
              letter-spacing: 0.5px !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1rem !important;
            }
            div[style*="partnerItem"] {
              max-width: 90px !important;
            }
            img {
              max-height: 40px !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1rem 0 !important;
            }
            h2 {
              font-size: 0.9rem !important;
              margin-bottom: 1rem !important;
              letter-spacing: 0px !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.75rem !important;
            }
            div[style*="partnerItem"] {
              max-width: 80px !important;
            }
            img {
              max-height: 35px !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            div[style*="partnerItem"] {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Partners;