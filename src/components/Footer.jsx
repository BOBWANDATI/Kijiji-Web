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
  const resources = ['FAQ', 'Blog', 'Stories', 'Partners', 'Volunteer'];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section - Compact */}
        <div className="footer-brand">
          <div className="footer-logo">
            Kijiji<span className="footer-logo-red">Connect</span>
          </div>
          <p className="footer-description">
            Empowering youth with digital skills for a better future.
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
        </div>

        {/* Links Sections - Horizontal on Mobile */}
        <div className="footer-links-wrapper">
          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
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
            <h3 className="footer-links-title">Resources</h3>
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

          {/* Contact Info - Compact */}
          <div className="footer-contact">
            <h3 className="footer-links-title">Contact</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>Amani Center, Kenya</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+254704331818" className="footer-contact-link">
                  +254 704 331 818
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:kijijiconnectkenya@gmail.com" className="footer-contact-link">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter - Compact */}
        <div className="footer-newsletter">
          <h4 className="footer-newsletter-title">Stay Updated</h4>
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

        {/* Bottom Bar - Compact */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Kijiji Connect
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--primary-black);
          color: var(--primary-white);
          padding: 2rem 0 1rem;
          width: 100%;
          font-size: 0.9rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
        }

        /* Brand Section */
        .footer-brand {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-logo {
          font-size: 1.3rem;
          font-weight: bold;
          white-space: nowrap;
        }

        .footer-logo-red {
          color: var(--primary-red);
        }

        .footer-description {
          color: var(--gray-400);
          font-size: 0.8rem;
          line-height: 1.4;
          max-width: 250px;
          margin: 0 1rem;
        }

        .footer-social {
          display: flex;
          gap: 0.5rem;
        }

        .footer-social-link {
          width: 2rem;
          height: 2rem;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-white);
          text-decoration: none;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }

        .footer-social-link:hover {
          transform: translateY(-2px);
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

        /* Links Wrapper - Horizontal on Mobile */
        .footer-links-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-links-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: var(--primary-white);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links-list li {
          margin-bottom: 0.4rem;
        }

        .footer-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.8rem;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--primary-red);
        }

        /* Contact Section */
        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray-400);
          font-size: 0.8rem;
        }

        .footer-contact-icon {
          color: var(--primary-red);
          font-size: 0.9rem;
          min-width: 1rem;
        }

        .footer-contact-link {
          color: var(--gray-400);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-contact-link:hover {
          color: var(--primary-red);
        }

        /* Newsletter */
        .footer-newsletter {
          margin-bottom: 1.5rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-newsletter-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: var(--primary-white);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-newsletter-form {
          display: flex;
          gap: 0.5rem;
          max-width: 400px;
        }

        .footer-newsletter-input {
          flex: 1;
          padding: 0.6rem 0.8rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          color: var(--primary-white);
          font-size: 0.8rem;
        }

        .footer-newsletter-input:focus {
          border-color: var(--primary-red);
          outline: none;
        }

        .footer-newsletter-btn {
          padding: 0.6rem 1rem;
          background: var(--primary-red);
          color: var(--primary-white);
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.8rem;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .footer-newsletter-btn:hover {
          background: var(--primary-red-hover);
        }

        /* Bottom Bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--gray-500);
          font-size: 0.75rem;
          padding-top: 1rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1rem;
        }

        .footer-bottom-link {
          color: var(--gray-500);
          text-decoration: none;
          transition: color 0.2s ease;
          font-size: 0.75rem;
        }

        .footer-bottom-link:hover {
          color: var(--primary-red);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-brand {
            flex-direction: column;
            text-align: center;
            gap: 0.8rem;
          }

          .footer-description {
            margin: 0;
            max-width: 100%;
          }

          .footer-links-wrapper {
            gap: 0.8rem;
          }

          .footer-links-title {
            font-size: 0.85rem;
            margin-bottom: 0.6rem;
          }

          .footer-link {
            font-size: 0.75rem;
          }

          .footer-contact-item {
            font-size: 0.75rem;
          }

          .footer-newsletter-form {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 1.5rem 0 0.8rem;
          }

          .footer-links-wrapper {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .footer-links-title {
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
          }

          .footer-links-list li {
            margin-bottom: 0.2rem;
          }

          .footer-link {
            font-size: 0.7rem;
          }

          .footer-contact-item {
            font-size: 0.7rem;
            gap: 0.3rem;
          }

          .footer-contact-icon {
            font-size: 0.8rem;
          }

          .footer-newsletter {
            margin-bottom: 1rem;
            padding: 0.8rem 0;
          }

          .footer-newsletter-title {
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
          }

          .footer-newsletter-form {
            flex-direction: column;
          }

          .footer-newsletter-btn {
            width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        @media (max-width: 375px) {
          .footer-links-wrapper {
            gap: 0.3rem;
          }

          .footer-link {
            font-size: 0.65rem;
          }

          .footer-contact-item {
            font-size: 0.65rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .footer-social-link:hover,
          .footer-link:hover,
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
