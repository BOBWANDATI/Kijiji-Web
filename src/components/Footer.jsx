import React from 'react';

const Footer = () => {
  const socialLinks = {
    facebook: 'https://web.facebook.com/KijijiConnect?_rdc=1&_rdr#',
    linkedin: 'https://www.linkedin.com/company/amanicenter/',
    twitter: 'https://x.com/Amanicentercbo',
    instagram: 'https://instagram.com/kijijiconnect',
  };

  const styles = {
    footer: {
      background: 'var(--primary-black)',
      color: 'var(--primary-white)',
      padding: '4rem 0 2rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
      gap: '3rem',
      marginBottom: '3rem',
    },
    brand: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    brandRed: {
      color: 'var(--primary-red)',
    },
    description: {
      color: 'var(--gray-400)',
      lineHeight: '1.8',
      marginBottom: '1.5rem',
      fontSize: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    social: {
      display: 'flex',
      gap: '1rem',
    },
    socialLink: {
      width: '2.8rem',
      height: '2.8rem',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-white)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '1.3rem',
      border: '1px solid transparent',
    },
    columnTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: 'var(--primary-white)',
      position: 'relative',
      paddingBottom: '0.5rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    columnTitleUnderline: {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '40px',
      height: '2px',
      background: 'var(--primary-red)',
    },
    links: {
      listStyle: 'none',
      padding: 0,
    },
    linkItem: {
      marginBottom: '0.8rem',
    },
    link: {
      color: 'var(--gray-400)',
      textDecoration: 'none',
      transition: 'color 0.3s ease, transform 0.3s ease',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    contactInfo: {
      color: 'var(--gray-400)',
      lineHeight: '1.8',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '1.2rem',
      transition: 'transform 0.3s ease',
    },
    contactIcon: {
      color: 'var(--primary-red)',
      fontSize: '1.3rem',
      minWidth: '1.5rem',
    },
    contactText: {
      fontSize: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--gray-500)',
      fontSize: '0.9rem',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    bottomLinks: {
      display: 'flex',
      gap: '2rem',
    },
    bottomLink: {
      color: 'var(--gray-500)',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      fontSize: '0.9rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    newsletter: {
      marginTop: '1.5rem',
    },
    newsletterInput: {
      display: 'flex',
      gap: '0.5rem',
    },
    input: {
      flex: 1,
      padding: '0.8rem',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '0.375rem',
      color: 'var(--primary-white)',
      fontSize: '0.95rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    subscribeBtn: {
      padding: '0.8rem 1.5rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand Column */}
          <div>
            <div style={styles.brand}>
              Kijiji<span style={styles.brandRed}>Connect</span>
            </div>
            <p style={styles.description}>
              Empowering youth with digital skills for a better future. 
              Join our March 2026 cohort at Amani Center and transform 
              your career in just 10 weeks.
            </p>
            
            <div style={styles.social}>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1877f2';
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077b5';
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>

            <div style={styles.newsletter}>
              <h4 style={{ ...styles.columnTitle, fontSize: '1rem', marginBottom: '1rem' }}>
                Subscribe to Newsletter
              </h4>
              <div style={styles.newsletterInput}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                />
                <button
                  style={styles.subscribeBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#b91c1c';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--primary-red)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={styles.columnTitle}>
              Quick Links
              <span style={styles.columnTitleUnderline}></span>
            </h3>
            <ul style={styles.links}>
              {['About', 'Curriculum', 'Projects', 'Gallery', 'Apply'].map((item) => (
                <li key={item} style={styles.linkItem}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-red)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--gray-400)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={styles.columnTitle}>
              Resources
              <span style={styles.columnTitleUnderline}></span>
            </h3>
            <ul style={styles.links}>
              {['FAQ', 'Blog', 'Success Stories', 'Partner With Us', 'Volunteer'].map((item) => (
                <li key={item} style={styles.linkItem}>
                  <a
                    href="#"
                    style={styles.link}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-red)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--gray-400)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={styles.columnTitle}>
              Contact Us
              <span style={styles.columnTitleUnderline}></span>
            </h3>
            <div style={styles.contactInfo}>
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={styles.contactIcon}>📍</span>
                <span style={styles.contactText}>Amani Center, Tanariver, Kenya</span>
              </div>
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={styles.contactIcon}>📞</span>
                <span style={styles.contactText}>+254 704331818</span>
              </div>
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={styles.contactIcon}>✉️</span>
                <span style={styles.contactText}>kijijiconnectkenya@gmail.com</span>
              </div>
              <div 
                style={styles.contactItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <span style={styles.contactIcon}>🕒</span>
                <span style={styles.contactText}>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottom}>
          <div>© {new Date().getFullYear()} Kijiji Connect Digital Hub. All rights reserved.</div>
          <div style={styles.bottomLinks}>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              style={styles.bottomLink}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-red)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-500)'}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Large Desktop */
          @media (min-width: 1400px) {
            footer {
              padding: 5rem 0 2.5rem !important;
            }
            div[style*="grid"] {
              gap: 4rem !important;
            }
            div[style*="brand"] {
              font-size: 2rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            footer {
              padding: 4rem 0 2rem !important;
            }
            div[style*="grid"] {
              gap: 2.5rem !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            footer {
              padding: 3.5rem 0 2rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr 1fr !important;
              gap: 2.5rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            footer {
              padding: 3rem 0 1.5rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr 1fr !important;
              gap: 2rem !important;
            }
            div[style*="brand"] {
              font-size: 1.6rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            footer {
              padding: 2.5rem 0 1.5rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            div[style*="brand"] {
              text-align: center !important;
            }
            p {
              text-align: center !important;
            }
            div[style*="social"] {
              justify-content: center !important;
            }
            h3 {
              text-align: center !important;
            }
            h3 span {
              left: 50% !important;
              transform: translateX(-50%) !important;
            }
            ul {
              text-align: center !important;
            }
            div[style*="contactItem"] {
              justify-content: center !important;
            }
            div[style*="newsletter"] {
              max-width: 400px !important;
              margin: 0 auto !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            footer {
              padding: 2rem 0 1rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            div[style*="brand"] {
              font-size: 1.5rem !important;
              text-align: center !important;
            }
            p {
              font-size: 0.9rem !important;
              text-align: center !important;
            }
            div[style*="social"] {
              justify-content: center !important;
            }
            a[style*="socialLink"] {
              width: 2.5rem !important;
              height: 2.5rem !important;
              font-size: 1.1rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
              text-align: center !important;
            }
            h3 span {
              left: 50% !important;
              transform: translateX(-50%) !important;
            }
            ul {
              text-align: center !important;
            }
            li {
              margin-bottom: 0.6rem !important;
            }
            a {
              font-size: 0.9rem !important;
            }
            div[style*="contactItem"] {
              justify-content: center !important;
              gap: 0.5rem !important;
            }
            span[style*="contactIcon"] {
              font-size: 1.1rem !important;
            }
            span[style*="contactText"] {
              font-size: 0.9rem !important;
            }
            div[style*="newsletter"] {
              max-width: 350px !important;
              margin: 1.5rem auto 0 !important;
            }
            div[style*="newsletterInput"] {
              flex-direction: column !important;
            }
            input {
              width: 100% !important;
              padding: 0.6rem !important;
            }
            button {
              width: 100% !important;
              padding: 0.6rem !important;
            }
            div[style*="bottom"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 1rem !important;
            }
            div[style*="bottomLinks"] {
              justify-content: center !important;
              flex-wrap: wrap !important;
              gap: 1rem !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            footer {
              padding: 1.5rem 0 1rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.25rem !important;
              margin-bottom: 2rem !important;
            }
            div[style*="brand"] {
              font-size: 1.4rem !important;
              text-align: center !important;
            }
            p {
              font-size: 0.85rem !important;
              line-height: 1.6 !important;
              text-align: center !important;
              margin-bottom: 1rem !important;
            }
            div[style*="social"] {
              gap: 0.75rem !important;
            }
            a[style*="socialLink"] {
              width: 2.2rem !important;
              height: 2.2rem !important;
              font-size: 1rem !important;
            }
            h3 {
              font-size: 1rem !important;
              margin-bottom: 1rem !important;
              text-align: center !important;
            }
            h3 span {
              width: 30px !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
            }
            ul {
              text-align: center !important;
            }
            li {
              margin-bottom: 0.5rem !important;
            }
            a {
              font-size: 0.85rem !important;
            }
            div[style*="contactItem"] {
              justify-content: center !important;
              gap: 0.4rem !important;
              margin-bottom: 0.8rem !important;
            }
            span[style*="contactIcon"] {
              font-size: 1rem !important;
              min-width: 1.2rem !important;
            }
            span[style*="contactText"] {
              font-size: 0.85rem !important;
            }
            div[style*="newsletter"] {
              max-width: 300px !important;
              margin: 1rem auto 0 !important;
            }
            h4 {
              text-align: center !important;
              font-size: 0.95rem !important;
            }
            div[style*="newsletterInput"] {
              flex-direction: column !important;
            }
            input {
              padding: 0.5rem !important;
              font-size: 0.85rem !important;
            }
            button {
              padding: 0.5rem !important;
              font-size: 0.85rem !important;
            }
            div[style*="bottom"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.75rem !important;
              font-size: 0.8rem !important;
            }
            div[style*="bottomLinks"] {
              justify-content: center !important;
              flex-wrap: wrap !important;
              gap: 0.75rem !important;
            }
            a[style*="bottomLink"] {
              font-size: 0.8rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            footer {
              padding: 1.25rem 0 0.75rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
              margin-bottom: 1.5rem !important;
            }
            div[style*="brand"] {
              font-size: 1.3rem !important;
              text-align: center !important;
            }
            p {
              font-size: 0.8rem !important;
              line-height: 1.5 !important;
              text-align: center !important;
              margin-bottom: 0.75rem !important;
            }
            div[style*="social"] {
              gap: 0.5rem !important;
            }
            a[style*="socialLink"] {
              width: 2rem !important;
              height: 2rem !important;
              font-size: 0.9rem !important;
            }
            h3 {
              font-size: 0.95rem !important;
              margin-bottom: 0.75rem !important;
              text-align: center !important;
            }
            h3 span {
              width: 25px !important;
              height: 1.5px !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
            }
            ul {
              text-align: center !important;
            }
            li {
              margin-bottom: 0.4rem !important;
            }
            a {
              font-size: 0.8rem !important;
            }
            div[style*="contactItem"] {
              justify-content: center !important;
              gap: 0.3rem !important;
              margin-bottom: 0.6rem !important;
            }
            span[style*="contactIcon"] {
              font-size: 0.9rem !important;
              min-width: 1rem !important;
            }
            span[style*="contactText"] {
              font-size: 0.8rem !important;
            }
            div[style*="newsletter"] {
              max-width: 250px !important;
              margin: 0.75rem auto 0 !important;
            }
            h4 {
              text-align: center !important;
              font-size: 0.9rem !important;
              margin-bottom: 0.5rem !important;
            }
            div[style*="newsletterInput"] {
              flex-direction: column !important;
            }
            input {
              padding: 0.4rem !important;
              font-size: 0.8rem !important;
            }
            button {
              padding: 0.4rem !important;
              font-size: 0.8rem !important;
            }
            div[style*="bottom"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.5rem !important;
              font-size: 0.75rem !important;
              padding-top: 1rem !important;
            }
            div[style*="bottomLinks"] {
              justify-content: center !important;
              flex-wrap: wrap !important;
              gap: 0.5rem !important;
            }
            a[style*="bottomLink"] {
              font-size: 0.75rem !important;
            }
          }

          /* Extra Small Mobile */
          @media (max-width: 320px) {
            div[style*="brand"] {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 0.75rem !important;
            }
            a[style*="socialLink"] {
              width: 1.8rem !important;
              height: 1.8rem !important;
              font-size: 0.8rem !important;
            }
            h3 {
              font-size: 0.9rem !important;
            }
            a {
              font-size: 0.75rem !important;
            }
            span[style*="contactText"] {
              font-size: 0.75rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            footer {
              padding: 2rem 0 1rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Print Styles */
          @media print {
            footer {
              display: none !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;