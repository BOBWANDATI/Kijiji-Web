import React from 'react';

const About = () => {
  const styles = {
    about: {
      padding: '2rem 0',
      background: 'var(--gray-100)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      position: 'relative',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center',
    },
    content: {
      color: 'var(--primary-black)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      paddingRight: '1rem',
    },
    subtitle: {
      color: 'var(--primary-red)',
      fontSize: '1rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '0.5rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.3',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    description: {
      fontSize: '1rem',
      color: 'var(--gray-600)',
      marginBottom: '1.2rem',
      lineHeight: '1.7',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
    feature: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.8rem',
    },
    featureIcon: {
      width: '1.8rem',
      height: '1.8rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      flexShrink: 0,
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    featureText: {
      fontSize: '0.95rem',
      fontWeight: '500',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    imageContainer: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: '-2rem',
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      maxWidth: '500px',
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '450px',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.5s ease',
    },
    imageBadge: {
      position: 'absolute',
      bottom: '1.5rem',
      right: '1.5rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      padding: '1.8rem',
      borderRadius: '0.75rem',
      textAlign: 'right',
      boxShadow: '0 8px 20px rgba(220,38,38,0.3)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      zIndex: 10,
      animation: 'pulse 2s infinite',
    },
    badgeNumber: {
      fontSize: '1.8rem',
      fontWeight: '800',
      lineHeight: '1',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    badgeText: {
      fontSize: '0.8rem',
      opacity: '0.9',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
  };

  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.content}>
            <span style={styles.subtitle}>About Us</span>
            <h2 style={styles.title}>Kijiji Connect Digital Hub at Amani Center</h2>
            <p style={styles.description}>
              We are a community-driven digital hub dedicated to empowering youth 
              with practical tech skills. Our March 2026 cohort offers intensive 
              training in digital literacy, programming, design, and entrepreneurship, 
              preparing students for successful careers in the digital economy.
            </p>
            <div style={styles.features}>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✓</span>
                <span style={styles.featureText}>Industry Expert Mentors</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✓</span>
                <span style={styles.featureText}>Hands-on Projects</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✓</span>
                <span style={styles.featureText}>Job Readiness</span>
              </div>
              <div style={styles.feature}>
                <span style={styles.featureIcon}>✓</span>
                <span style={styles.featureText}>Community Support</span>
              </div>
            </div>
          </div>
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <img 
                src="https://github.com/BOBWANDATI/images/blob/main/WhatsApp%20Image%202026-02-19%20at%2011.21.10%20AM.jpeg?raw=true" 
                alt="Amani Center"
                style={styles.image}
              />
              <div style={styles.imageBadge}>
                <div style={styles.badgeNumber}>500+</div>
                <div style={styles.badgeText}>Graduates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          * {
            font-family: Georgia, "Times New Roman", Times, serif !important;
          }

          /* Large Desktop */
          @media (min-width: 1400px) {
            section { padding: 3rem 0 !important; }
            div[style*="marginRight: '-2rem'"] { margin-right: -4rem !important; }
            h2 { font-size: 2.5rem !important; }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section { padding: 2.5rem 0 !important; }
            div[style*="marginRight: '-2rem'"] { margin-right: -3rem !important; }
          }

          /* Small Desktop */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section { padding: 2rem 0 !important; }
            div[style*="marginRight: '-2rem'"] { margin-right: -2rem !important; }
            div[style*="maxWidth: '500px'"] { max-width: 450px !important; }
            h2 { font-size: 2rem !important; }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section { padding: 2rem 0 !important; }
            div[style*="gridTemplateColumns: '1fr 1fr'"] { gap: 1.5rem !important; }
            div[style*="marginRight: '-2rem'"] { margin-right: -1.5rem !important; }
            div[style*="maxWidth: '500px'"] { max-width: 400px !important; }
            h2 { font-size: 1.8rem !important; }
            p { font-size: 0.95rem !important; }
            div[style*="imageBadge"] { padding: 1.5rem !important; }
            div[style*="badgeNumber"] { font-size: 1.6rem !important; }
          }

          /* ===== MOBILE FIRST - BIG IMAGE ===== */
          @media (max-width: 767px) {
            /* Convert to single column */
            div[style*="gridTemplateColumns: '1fr 1fr'"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            
            /* Remove negative margin */
            div[style*="marginRight: '-2rem'"] {
              margin-right: 0 !important;
            }
            
            /* Make image container full width */
            div[style*="imageContainer"] {
              order: -1 !important;
              width: 100vw !important;
              margin-left: calc(-50vw + 50%) !important;
              margin-right: calc(-50vw + 50%) !important;
              max-width: none !important;
              justify-content: center !important;
            }
            
            /* Make image wrapper edge to edge */
            div[style*="imageWrapper"] {
              max-width: none !important;
              width: 100% !important;
              border-radius: 0 !important;
              box-shadow: none !important;
            }
            
            /* Make image huge */
            img {
              max-height: 500px !important;
              width: 100% !important;
              height: auto !important;
              object-fit: cover !important;
            }
            
            /* Center content */
            div[style*="content"] {
              text-align: center !important;
              padding-right: 0 !important;
            }
            
            h2 {
              text-align: center !important;
            }
            
            p {
              text-align: center !important;
            }
            
            /* Adjust badge for mobile */
            div[style*="imageBadge"] {
              padding: 1.2rem !important;
              bottom: 1.5rem !important;
              right: 1.5rem !important;
            }
            
            div[style*="badgeNumber"] {
              font-size: 1.8rem !important;
            }
            
            div[style*="badgeText"] {
              font-size: 0.9rem !important;
            }
            
            /* Center features on mobile */
            div[style*="features"] {
              justify-content: center !important;
              margin: 0 auto !important;
              max-width: 400px !important;
            }
            
            div[style*="feature"] {
              justify-content: center !important;
            }
          }

          /* Medium Mobile (426px - 639px) */
          @media (min-width: 426px) and (max-width: 639px) {
            img {
              max-height: 450px !important;
            }
            
            div[style*="imageBadge"] {
              padding: 1.2rem !important;
            }
            
            div[style*="badgeNumber"] {
              font-size: 1.8rem !important;
            }
            
            h2 {
              font-size: 1.8rem !important;
            }
            
            p {
              font-size: 1rem !important;
            }
            
            div[style*="features"] {
              grid-template-columns: 1fr 1fr !important;
              max-width: 450px !important;
            }
          }

          /* Small Mobile (376px - 425px) */
          @media (min-width: 376px) and (max-width: 425px) {
            img {
              max-height: 400px !important;
            }
            
            div[style*="imageBadge"] {
              padding: 1rem !important;
            }
            
            div[style*="badgeNumber"] {
              font-size: 1.6rem !important;
            }
            
            h2 {
              font-size: 1.6rem !important;
            }
            
            p {
              font-size: 0.95rem !important;
            }
            
            div[style*="features"] {
              grid-template-columns: 1fr !important;
              max-width: 300px !important;
            }
            
            div[style*="featureIcon"] {
              width: 1.6rem !important;
              height: 1.6rem !important;
              font-size: 1rem !important;
            }
            
            div[style*="featureText"] {
              font-size: 0.9rem !important;
            }
          }

          /* Extra Small Mobile (320px - 375px) */
          @media (min-width: 321px) and (max-width: 375px) {
            img {
              max-height: 350px !important;
            }
            
            div[style*="imageBadge"] {
              padding: 0.9rem !important;
              bottom: 1rem !important;
              right: 1rem !important;
            }
            
            div[style*="badgeNumber"] {
              font-size: 1.4rem !important;
            }
            
            div[style*="badgeText"] {
              font-size: 0.8rem !important;
            }
            
            h2 {
              font-size: 1.4rem !important;
            }
            
            p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            
            div[style*="features"] {
              grid-template-columns: 1fr !important;
              max-width: 280px !important;
            }
            
            div[style*="featureIcon"] {
              width: 1.5rem !important;
              height: 1.5rem !important;
              font-size: 0.95rem !important;
            }
            
            div[style*="featureText"] {
              font-size: 0.85rem !important;
            }
          }

          /* Tiny Mobile (320px and below) */
          @media (max-width: 320px) {
            img {
              max-height: 300px !important;
            }
            
            div[style*="imageBadge"] {
              padding: 0.8rem !important;
            }
            
            div[style*="badgeNumber"] {
              font-size: 1.2rem !important;
            }
            
            div[style*="badgeText"] {
              font-size: 0.7rem !important;
            }
            
            h2 {
              font-size: 1.3rem !important;
            }
            
            p {
              font-size: 0.85rem !important;
            }
            
            div[style*="features"] {
              max-width: 250px !important;
            }
            
            div[style*="featureIcon"] {
              width: 1.4rem !important;
              height: 1.4rem !important;
              font-size: 0.85rem !important;
            }
            
            div[style*="featureText"] {
              font-size: 0.8rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) and (max-width: 767px) {
            section { padding: 1rem 0 !important; }
            
            div[style*="imageContainer"] {
              margin-left: calc(-50vw + 50%) !important;
              margin-right: calc(-50vw + 50%) !important;
            }
            
            img {
              max-height: 300px !important;
            }
            
            div[style*="imageBadge"] {
              padding: 0.8rem !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] { max-width: 1600px !important; }
            h2 { font-size: 3rem !important; }
            p { font-size: 1.2rem !important; }
          }

          /* Hover Effects */
          div[style*="imageWrapper"]:hover img {
            transform: scale(1.05);
          }

          div[style*="feature"]:hover div[style*="featureIcon"] {
            transform: scale(1.1);
            background: #b91c1c;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
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

export default About;