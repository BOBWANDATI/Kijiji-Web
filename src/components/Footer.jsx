import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = {
    facebook: 'https://web.facebook.com/KijijiConnect?_rdc=1&_rdr#',
    linkedin: 'https://www.linkedin.com/company/amanicenter/',
    twitter: 'https://x.com/Amanicentercbo',
    instagram: '#',
  };

  const quickLinks = ['About', 'Curriculum', 'Projects', 'Gallery', 'Apply'];
  const resources = ['FAQ', 'Blog', 'Success Stories', 'Partner With Us', 'Volunteer'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              Kijiji<span className="footer-logo-red">Connect</span>
            </div>
            <p className="footer-description">
              Empowering youth with digital skills for a better future. 
              Join our March 2026 cohort at Amani Center and transform 
              your career in just 10 weeks.
            </p>
            
            <div className="footer-social">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>

            <div className="footer-newsletter">
              <h4 className="footer-newsletter-title">Subscribe to Newsletter</h4>
              <div className="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="Your email"
                  className="footer-newsletter-input"
                />
                <button className="footer-newsletter-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">
              Quick Links
              <span className="footer-links-underline"></span>
            </h3>
            <ul className="footer-links-list">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h3 className="footer-links-title">
              Resources
              <span className="footer-links-underline"></span>
            </h3>
            <ul className="footer-links-list">
              {resources.map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-links-title">
              Contact Us
              <span className="footer-links-underline"></span>
            </h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>Amani Center, Tanariver, Kenya</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+254704331818" className="footer-contact-link">
                  +254 704331818
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:kijijiconnectkenya@gmail.com" className="footer-contact-link">
                  kijijiconnectkenya@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">🕒</span>
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Kijiji Connect Digital Hub. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--primary-black);
          color: var(--primary-white);
          padding: clamp(3rem, 8vw, 4rem) 0 clamp(1.5rem, 4vw, 2rem);
          width: 100%;
          overflow-x: hidden;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: clamp(2rem, 5vw, 3rem);
          margin-bottom: clamp(2rem, 5vw, 3rem);
        }

        .footer-logo {
          font-size: clamp(1.5rem, 4vw, 1.8rem);
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .footer-logo-red {
          color: var(--primary-red);
        }

        .footer-description {
          color: var(--gray-400);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: clamp(0.9rem, 2vw, 1rem);
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-white);
          text-decoration: none;
          transition: all var(--transition-base);
          font-size: 1.1rem;
        }

        .footer-social-link:hover {
          transform: translateY(-3px) scale(1.1);
        }

        .footer-social-link[aria-label="Facebook"]:hover {
          background: #1877f2;
        }

        .footer-social-link[aria-label="LinkedIn"]:hover {
          background: #0077b5;
        }

        .footer-social-link[aria-label="Twitter"]:hover {
          background: #000000;
        }

        .footer-newsletter-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--primary-white);
        }

        .footer-newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .footer-newsletter-input {
          flex: 1;
          padding: 0.8rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: var(--radius-sm);
          color: var(--primary-white);
          font-size: 0.9rem;
        }

        .footer-newsletter-input:focus {
          border-color: var(--primary-red);
          outline: none;
        }

        .footer-newsletter-btn {
          padding: 0.8rem 1.2rem;
          background: var(--primary-red);
          color: var(--primary-white);
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: 600;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .footer-newsletter-btn:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
        }

        .footer-links-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--primary-white);
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-links-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--primary-red);
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
        }

        .footer-links-list li {
          margin-bottom: 0.8rem;
        }

        .footer-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: all var(--transition-base);
          display: inline-block;
          font-size: 1rem;
        }

        .footer-link:hover {
          color: var(--primary-red);
          transform: translateX(5px);
        }

        .footer-contact-info {
          color: var(--gray-400);
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
          transition: transform var(--transition-base);
          font-size: 0.95rem;
        }

        .footer-contact-item:hover {
          transform: translateX(5px);
        }

        .footer-contact-icon {
          color: var(--primary-red);
          font-size: 1.1rem;
          min-width: 1.5rem;
        }

        .footer-contact-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: color var(--transition-base);
        }

        .footer-contact-link:hover {
          color: var(--primary-red);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--gray-500);
          font-size: 0.9rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-link {
          color: var(--gray-500);
          text-decoration: none;
          transition: color var(--transition-base);
          font-size: 0.9rem;
        }

        .footer-bottom-link:hover {
          color: var(--primary-red);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand,
          .footer-links,
          .footer-contact {
            text-align: center;
          }

          .footer-links-underline {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-social {
            justify-content: center;
          }

          .footer-contact-item {
            justify-content: center;
          }

          .footer-newsletter-form {
            max-width: 400px;
            margin: 0 auto;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-logo {
            font-size: 1.5rem;
          }

          .footer-description {
            font-size: 0.9rem;
          }

          .footer-social-link {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 1rem;
          }

          .footer-newsletter-form {
            flex-direction: column;
          }

          .footer-newsletter-btn {
            width: 100%;
          }

          .footer-links-title {
            font-size: 1.1rem;
          }

          .footer-link {
            font-size: 0.9rem;
          }

          .footer-contact-item {
            font-size: 0.85rem;
          }

          .footer-bottom {
            font-size: 0.8rem;
          }

          .footer-bottom-links {
            gap: 1rem;
          }

          .footer-bottom-link {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 375px) {
          .footer-logo {
            font-size: 1.3rem;
          }

          .footer-description {
            font-size: 0.85rem;
          }

          .footer-contact-item {
            flex-direction: column;
            text-align: center;
            gap: 0.3rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .footer {
            padding: 2rem 0;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .footer-social-link:hover {
            transform: none;
          }

          .footer-link:hover {
            transform: none;
          }

          .footer-newsletter-btn:hover {
            transform: none;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .footer-social-link,
          .footer-link,
          .footer-contact-item,
          .footer-newsletter-btn {
            transition: none;
          }

          .footer-social-link:hover,
          .footer-link:hover,
          .footer-contact-item:hover,
          .footer-newsletter-btn:hover {
            transform: none;
          }
        }

        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
          .footer {
            background: #000000;
          }
        }

        /* Print Styles */
        @media print {
          .footer {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;