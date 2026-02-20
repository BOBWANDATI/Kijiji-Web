import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const styles = {
    header: {
      background: 'var(--primary-white)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      zIndex: 1001,
    },
    logoImage: {
      height: '50px',
      width: 'auto',
      maxWidth: '200px',
      objectFit: 'contain',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navLink: {
      color: 'var(--primary-black)',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontSize: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      whiteSpace: 'nowrap',
    },
    applyButton: {
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      whiteSpace: 'nowrap',
    },
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.8rem',
      cursor: 'pointer',
      color: 'var(--primary-black)',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      transition: 'all 0.3s ease',
      lineHeight: '1',
      zIndex: 1001,
    },
    mobileMenu: {
      display: 'none',
      position: 'fixed',
      top: '73px', // Height of header
      left: 0,
      right: 0,
      background: 'var(--primary-white)',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      flexDirection: 'column',
      gap: '1.5rem',
      zIndex: 1000,
      borderTop: '3px solid var(--primary-red)',
      animation: 'slideDown 0.3s ease',
      maxHeight: 'calc(100vh - 73px)',
      overflowY: 'auto',
    },
    mobileNavLink: {
      color: 'var(--primary-black)',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '1.2rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      padding: '1rem',
      borderBottom: '1px solid var(--gray-200)',
      width: '100%',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    mobileApplyButton: {
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      border: 'none',
      padding: '1rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '1.2rem',
      textDecoration: 'none',
      display: 'block',
      width: '100%',
      textAlign: 'center',
      marginTop: '0.5rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      transition: 'all 0.3s ease',
    },
    overlay: {
      display: isMenuOpen && isMobile ? 'block' : 'none',
      position: 'fixed',
      top: '73px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 999,
      animation: 'fadeIn 0.3s ease',
    },
  };

  const googleFormUrl = 'https://docs.google.com/forms/d/117sV8c6asrl7UglaYfORQQTLkwWRT_ccYA9WhsF1t-M/viewform?edit_requested=true#response=ACYDBNh4Bforz_THrQQlOhflrlARCRxFSjnGoB80Phb4mei54T9Ge9C6zR0RamejYLhlCBI';

  const handleApplyClick = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.logoContainer}>
          <img 
            src="https://github.com/BOBWANDATI/images/blob/main/download%20(1).png?raw=true" 
            alt="Kijiji Connect" 
            style={styles.logoImage}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<span style="font-size:1.5rem;font-weight:bold;color:var(--primary-black);">Kijiji<span style="color:var(--primary-red);">Connect</span></span>';
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav style={{...styles.nav, display: isMobile ? 'none' : 'flex'}}>
          <a 
            href="#about" 
            style={styles.navLink}
            onClick={(e) => handleNavClick(e, '#about')}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
          >
            About
          </a>
          <a 
            href="#curriculum" 
            style={styles.navLink}
            onClick={(e) => handleNavClick(e, '#curriculum')}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
          >
            Curriculum
          </a>
          <a 
            href="#projects" 
            style={styles.navLink}
            onClick={(e) => handleNavClick(e, '#projects')}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
          >
            Projects
          </a>
          <a 
            href="#gallery" 
            style={styles.navLink}
            onClick={(e) => handleNavClick(e, '#gallery')}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
          >
            Gallery
          </a>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.applyButton}
            onClick={handleApplyClick}
            onMouseEnter={(e) => {
              e.target.style.background = '#b91c1c';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 6px rgba(220,38,38,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--primary-red)';
              e.target.style.transform = 'none';
              e.target.style.boxShadow = 'none';
            }}
          >
            Apply Now
          </a>
        </nav>

        {/* Hamburger Menu Button - Always visible on mobile */}
        <button 
          style={{
            ...styles.menuButton,
            display: isMobile ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <div style={{...styles.mobileMenu, display: isMenuOpen ? 'flex' : 'none'}}>
              <a 
                href="#about" 
                style={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, '#about')}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
              >
                About
              </a>
              <a 
                href="#curriculum" 
                style={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, '#curriculum')}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
              >
                Curriculum
              </a>
              <a 
                href="#projects" 
                style={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, '#projects')}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
              >
                Projects
              </a>
              <a 
                href="#gallery" 
                style={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, '#gallery')}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-red)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--primary-black)'}
              >
                Gallery
              </a>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.mobileApplyButton}
                onClick={handleApplyClick}
                onMouseEnter={(e) => {
                  e.target.style.background = '#b91c1c';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--primary-red)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Apply Now
              </a>
            </div>
            {/* Overlay */}
            <div 
              style={styles.overlay} 
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </div>

      <style>
        {`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 80px;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Mobile Styles - All screens 767px and below */
          @media (max-width: 767px) {
            div[style*="container"] {
              padding: 0.5rem 1rem !important;
            }
            
            img {
              height: 35px !important;
              max-width: 120px !important;
            }
            
            button[style*="menuButton"] {
              width: 38px !important;
              height: 38px !important;
              font-size: 1.4rem !important;
              background: var(--gray-100) !important;
              border-radius: 8px !important;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
            }
            
            button[style*="menuButton"]:active {
              background: var(--gray-200) !important;
              transform: scale(0.95) !important;
            }
          }

          /* Small Mobile (481px - 639px) */
          @media (min-width: 481px) and (max-width: 639px) {
            div[style*="mobileMenu"] {
              padding: 1.5rem !important;
            }
            a[style*="mobileNavLink"] {
              font-size: 1.1rem !important;
              padding: 0.9rem !important;
            }
          }

          /* Medium Mobile (376px - 480px) */
          @media (min-width: 376px) and (max-width: 480px) {
            button[style*="menuButton"] {
              width: 36px !important;
              height: 36px !important;
              font-size: 1.3rem !important;
            }
            div[style*="mobileMenu"] {
              padding: 1.25rem !important;
            }
            a[style*="mobileNavLink"] {
              font-size: 1rem !important;
              padding: 0.8rem !important;
            }
            a[style*="mobileApplyButton"] {
              padding: 0.8rem !important;
              font-size: 1rem !important;
            }
          }

          /* Small Mobile (320px - 375px) */
          @media (min-width: 321px) and (max-width: 375px) {
            button[style*="menuButton"] {
              width: 34px !important;
              height: 34px !important;
              font-size: 1.2rem !important;
            }
            div[style*="mobileMenu"] {
              padding: 1rem !important;
              gap: 1rem !important;
            }
            a[style*="mobileNavLink"] {
              font-size: 0.95rem !important;
              padding: 0.7rem !important;
            }
            a[style*="mobileApplyButton"] {
              padding: 0.7rem !important;
              font-size: 0.95rem !important;
            }
          }

          /* Extra Small Mobile (320px and below) */
          @media (max-width: 320px) {
            button[style*="menuButton"] {
              width: 32px !important;
              height: 32px !important;
              font-size: 1.1rem !important;
            }
            div[style*="mobileMenu"] {
              padding: 0.75rem !important;
              gap: 0.75rem !important;
            }
            a[style*="mobileNavLink"] {
              font-size: 0.9rem !important;
              padding: 0.6rem !important;
            }
            a[style*="mobileApplyButton"] {
              padding: 0.6rem !important;
              font-size: 0.9rem !important;
            }
          }

          /* Touch Device Optimizations */
          @media (hover: none) and (pointer: coarse) {
            a:hover, button:hover {
              transform: none !important;
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
    </header>
  );
};

export default Header;