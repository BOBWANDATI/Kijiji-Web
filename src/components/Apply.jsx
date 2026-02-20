import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const benefits = [
    'No prior experience required',
    'Flexible learning schedule',
    'Certification upon completion',
    'Job placement support',
  ];

  return (
    <section className="apply">
      <div className="apply-container">
        <div className="apply-grid">
          {/* Info Column */}
          <div className="apply-info">
            <h2 className="apply-title">
              Ready to Start Your <span className="apply-highlight">Journey?</span>
            </h2>
            <p className="apply-description">
              Join the March 2026 cohort and transform your future with our 
              10-week intensive program. Limited spots available!
            </p>
            
            <ul className="apply-benefits">
              {benefits.map((benefit, index) => (
                <li key={index} className="apply-benefit">
                  <span className="apply-benefit-icon">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="apply-deadline">
              <h3 className="apply-deadline-title">Application Deadline</h3>
              <p className="apply-deadline-date">February 28, 2026</p>
              <p className="apply-deadline-date">Classes start: March 15, 2026</p>
            </div>
          </div>

          {/* Form Column */}
          <form className="apply-form" onSubmit={handleSubmit}>
            <h3 className="apply-form-title">Apply Now</h3>
            
            <div className="apply-form-group">
              <label className="apply-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="apply-input"
                required
              />
            </div>

            <div className="apply-form-group">
              <label className="apply-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="apply-input"
                required
              />
            </div>

            <div className="apply-form-group">
              <label className="apply-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="apply-input"
                required
              />
            </div>

            <div className="apply-form-group">
              <label className="apply-label">Preferred Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="apply-select"
                required
              >
                <option value="">Select a course</option>
                <option value="graphics">Graphics Design</option>
                <option value="programming">Programming</option>
                <option value="digital">Digital Marketing</option>
                <option value="scratch">Scratch Programming</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="softskills">Life & Soft Skills</option>
              </select>
            </div>

            <div className="apply-form-group">
              <label className="apply-label">Why do you want to join?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="apply-textarea"
                rows="4"
              />
            </div>

            <button type="submit" className="apply-submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .apply {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: linear-gradient(135deg, var(--primary-black) 0%, #2d2d2d 100%);
          color: var(--primary-white);
          width: 100%;
          overflow-x: hidden;
        }

        .apply-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .apply-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }

        .apply-info {
          padding-right: 2rem;
        }

        .apply-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .apply-highlight {
          color: var(--primary-red);
        }

        .apply-description {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--gray-300);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .apply-benefits {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .apply-benefit {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--gray-300);
          font-size: clamp(0.95rem, 1.8vw, 1rem);
        }

        .apply-benefit-icon {
          width: 1.5rem;
          height: 1.5rem;
          background: var(--primary-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-white);
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .apply-deadline {
          background: rgba(220,38,38,0.1);
          border: 1px solid var(--primary-red);
          border-radius: var(--radius-lg);
          padding: clamp(1.2rem, 3vw, 1.5rem);
          margin-top: 2rem;
        }

        .apply-deadline-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--primary-red);
        }

        .apply-deadline-date {
          color: var(--gray-300);
          font-size: 1rem;
        }

        .apply-deadline-date:last-child {
          margin-top: 0.5rem;
        }

        .apply-form {
          background: var(--primary-white);
          border-radius: var(--radius-lg);
          padding: clamp(1.5rem, 4vw, 2rem);
          box-shadow: var(--shadow-2xl);
        }

        .apply-form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-black);
          margin-bottom: 1.5rem;
        }

        .apply-form-group {
          margin-bottom: 1.5rem;
        }

        .apply-label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--gray-600);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .apply-input,
        .apply-select,
        .apply-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-sm);
          font-size: 1rem;
          transition: border-color var(--transition-base);
          font-family: inherit;
        }

        .apply-input:focus,
        .apply-select:focus,
        .apply-textarea:focus {
          border-color: var(--primary-red);
          outline: none;
        }

        .apply-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .apply-submit {
          width: 100%;
          padding: 1rem;
          background: var(--primary-red);
          color: var(--primary-white);
          border: none;
          border-radius: var(--radius-sm);
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .apply-submit:hover {
          background: var(--primary-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(220,38,38,0.3);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .apply-grid {
            gap: 2rem;
          }

          .apply-info {
            padding-right: 1rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .apply-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .apply-info {
            padding-right: 0;
            text-align: center;
          }

          .apply-benefit {
            justify-content: center;
          }

          .apply-benefits {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }

          .apply-deadline {
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .apply-form {
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .apply {
            padding: 2rem 0;
          }

          .apply-title {
            font-size: 1.8rem;
          }

          .apply-description {
            font-size: 0.95rem;
          }

          .apply-benefit {
            font-size: 0.9rem;
          }

          .apply-deadline {
            padding: 1rem;
          }

          .apply-deadline-title {
            font-size: 1.1rem;
          }

          .apply-form {
            padding: 1.2rem;
          }

          .apply-form-title {
            font-size: 1.3rem;
          }

          .apply-input,
          .apply-select,
          .apply-textarea {
            padding: 0.6rem 0.8rem;
            font-size: 0.95rem;
          }

          .apply-submit {
            padding: 0.8rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 375px) {
          .apply-title {
            font-size: 1.6rem;
          }

          .apply-benefit {
            font-size: 0.85rem;
          }

          .apply-deadline-title {
            font-size: 1rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .apply-submit:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .apply-submit {
            transition: none;
          }

          .apply-submit:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Apply;