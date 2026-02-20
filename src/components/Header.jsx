import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isMobile]);

  const googleFormUrl = 'https://docs.google.com/forms/d/117sV8c6asrl7UglaYfORQQTLkwWRT_ccYA9WhsF1t-M/viewform';

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
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-container">
          <img 
            src="https://github.com/BOBWANDATI/images/blob/main/download%20(1).png?raw=true" 
            alt="Kijiji Connect" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<span class="logo-text">Kijiji<span class="logo-text-red">Connect</span></span>';
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMobile ? 'nav-hidden' : ''}`}>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#curriculum" className="nav-link" onClick={(e) => handleNavClick(e, '#curriculum')}>Curriculum</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '#gallery')}>Gallery</a>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apply-button"
          >
            Apply Now
          </a>
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          className={`menu-button ${isMobile ? '' : 'menu-button-hidden'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
              <a 
                href="#about" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </a>
              <a 
                href="#curriculum" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '#curriculum')}
              >
                Curriculum
              </a>
              <a 
                href="#projects" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </a>
              <a 
                href="#gallery" 
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, '#gallery')}
              >
                Gallery
              </a>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-apply-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
            {/* Overlay */}
            {isMenuOpen && (
              <div 
                className="menu-overlay" 
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </>
        )}
      </div>

      <style>{`
        .header {
          background: var(--primary-white);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: var(--z-header);
          width: 100%;
          transition: all var(--transition-base);
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.75rem clamp(1rem, 5vw, 2rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          height: 70px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: calc(var(--z-header) + 1);
        }

        .logo-image {
          height: 50px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-black);
        }

        .logo-text-red {
          color: var(--primary-red);
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-hidden {
          display: none;
        }

        .nav-link {
          color: var(--primary-black);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color var(--transition-base);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-red);
          transition: width var(--transition-base);
        }

        .nav-link:hover {
          color: var(--primary-red);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .apply-button {
          background: var(--primary-red);
          color: var(--primary-white);
          border: none;
          padding: 0.6rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .apply-button:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(220, 38, 38, 0.3);
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: calc(var(--z-header) + 1);
        }

        .menu-button-hidden {
          display: none !important;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--primary-black);
          position: relative;
          transition: all var(--transition-base);
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--primary-black);
          transition: all var(--transition-base);
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          bottom: -8px;
        }

        .hamburger-open {
          background: transparent;
        }

        .hamburger-open::before {
          transform: rotate(45deg);
          top: 0;
        }

        .hamburger-open::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--primary-white);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: calc(var(--z-header) - 1);
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          overflow-y: auto;
        }

        .mobile-menu-open {
          transform: translateX(0);
        }

        .mobile-nav-link {
          color: var(--primary-black);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid var(--gray-200);
          transition: all var(--transition-base);
        }

        .mobile-nav-link:hover {
          color: var(--primary-red);
          transform: translateX(5px);
        }

        .mobile-apply-button {
          background: var(--primary-red);
          color: var(--primary-white);
          border: none;
          padding: 1rem;
          border-radius: var(--radius-md);
          font-size: 1.3rem;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          margin-top: 1rem;
          transition: all var(--transition-base);
        }

        .mobile-apply-button:hover {
          background: var(--primary-red-hover);
          transform: scale(1.02);
        }

        .menu-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: calc(var(--z-header) - 2);
          animation: fadeIn 0.3s ease;
        }

        /* Responsive Styles */
        @media (max-width: 767px) {
          .menu-button {
            display: block;
          }

          .header-container {
            padding: 0.5rem 1rem;
          }

          .logo-image {
            height: 35px;
            max-width: 120px;
          }

          .mobile-nav-link {
            font-size: 1.3rem;
            padding: 0.8rem;
          }

          .mobile-apply-button {
            font-size: 1.2rem;
            padding: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .mobile-nav-link {
            font-size: 1.2rem;
          }

          .mobile-apply-button {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 375px) {
          .mobile-nav-link {
            font-size: 1.1rem;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </header>
  );
};

export default Header;