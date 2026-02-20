import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const styles = {
    apply: {
      padding: '5rem 0',
      background: 'linear-gradient(135deg, var(--primary-black) 0%, #2d2d2d 100%)',
      color: 'var(--primary-white)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start',
    },
    info: {
      paddingRight: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
    },
    highlight: {
      color: 'var(--primary-red)',
    },
    description: {
      fontSize: '1.125rem',
      color: 'var(--gray-300)',
      marginBottom: '2rem',
      lineHeight: '1.8',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '2rem',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
      color: 'var(--gray-300)',
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      background: 'var(--primary-red)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-white)',
      fontSize: '0.875rem',
    },
    deadline: {
      background: 'rgba(220,38,38,0.1)',
      border: '1px solid var(--primary-red)',
      borderRadius: '1rem',
      padding: '1.5rem',
      marginTop: '2rem',
    },
    deadlineTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: 'var(--primary-red)',
    },
    form: {
      background: 'var(--primary-white)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--primary-black)',
      marginBottom: '1.5rem',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: 'var(--gray-600)',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid var(--gray-300)',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid var(--gray-300)',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      background: 'var(--primary-white)',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid var(--gray-300)',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      minHeight: '100px',
      resize: 'vertical',
    },
    submitBtn: {
      width: '100%',
      padding: '1rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

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

  return (
    <section id="apply" style={styles.apply}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.info}>
            <h2 style={styles.title}>
              Ready to Start Your <span style={styles.highlight}>Journey?</span>
            </h2>
            <p style={styles.description}>
              Join the March 2026 cohort and transform your future with our 
              10-week intensive program. Limited spots available!
            </p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.icon}>✓</span>
                No prior experience required
              </li>
              <li style={styles.listItem}>
                <span style={styles.icon}>✓</span>
                Flexible learning schedule
              </li>
              <li style={styles.listItem}>
                <span style={styles.icon}>✓</span>
                Certification upon completion
              </li>
              <li style={styles.listItem}>
                <span style={styles.icon}>✓</span>
                Job placement support
              </li>
            </ul>

            <div style={styles.deadline}>
              <h3 style={styles.deadlineTitle}>Application Deadline</h3>
              <p style={{ color: 'var(--gray-300)' }}>February 28, 2026</p>
              <p style={{ color: 'var(--gray-300)', marginTop: '0.5rem' }}>
                Classes start: March 15, 2026
              </p>
            </div>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <h3 style={styles.formTitle}>Apply Now</h3>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Preferred Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                style={styles.select}
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

            <div style={styles.formGroup}>
              <label style={styles.label}>Why do you want to join?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                rows="4"
              />
            </div>

            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b91c1c';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(220,38,38,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary-red)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          /* Large Desktop */
          @media (min-width: 1400px) {
            section {
              padding: 6rem 0 !important;
            }
            h2 {
              font-size: 3rem !important;
            }
            div[style*="grid"] {
              gap: 5rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 5rem 0 !important;
            }
            div[style*="grid"] {
              gap: 3rem !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              gap: 2.5rem !important;
            }
            h2 {
              font-size: 2.2rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
            div[style*="info"] {
              padding-right: 0 !important;
              text-align: center !important;
            }
            ul[style*="list"] {
              max-width: 400px !important;
              margin: 0 auto 2rem !important;
            }
            div[style*="deadline"] {
              max-width: 500px !important;
              margin: 2rem auto 0 !important;
            }
            h2 {
              font-size: 2.2rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
            div[style*="info"] {
              padding-right: 0 !important;
              text-align: center !important;
            }
            h2 {
              font-size: 2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            div[style*="form"] {
              padding: 1.5rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
            div[style*="info"] {
              padding-right: 0 !important;
              text-align: center !important;
            }
            h2 {
              font-size: 1.8rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
            div[style*="form"] {
              padding: 1.25rem !important;
            }
            input, select, textarea {
              padding: 0.6rem 0.8rem !important;
              font-size: 0.95rem !important;
            }
            button[type="submit"] {
              padding: 0.8rem !important;
              font-size: 1rem !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            div[style*="info"] {
              padding-right: 0 !important;
              text-align: center !important;
            }
            h2 {
              font-size: 1.5rem !important;
            }
            p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            ul[style*="list"] {
              margin-bottom: 1.5rem !important;
            }
            div[style*="deadline"] {
              padding: 1rem !important;
              margin-top: 1.5rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
            }
            div[style*="form"] {
              padding: 1rem !important;
            }
            h3[style*="formTitle"] {
              font-size: 1.3rem !important;
              margin-bottom: 1rem !important;
            }
            div[style*="formGroup"] {
              margin-bottom: 1rem !important;
            }
            label {
              font-size: 0.9rem !important;
              margin-bottom: 0.25rem !important;
            }
            input, select, textarea {
              padding: 0.5rem 0.75rem !important;
              font-size: 0.9rem !important;
            }
            button[type="submit"] {
              padding: 0.75rem !important;
              font-size: 0.95rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.25rem !important;
            }
            div[style*="info"] {
              padding-right: 0 !important;
              text-align: center !important;
            }
            h2 {
              font-size: 1.3rem !important;
            }
            p {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
            }
            li {
              font-size: 0.85rem !important;
            }
            div[style*="icon"] {
              width: 1.25rem !important;
              height: 1.25rem !important;
              font-size: 0.75rem !important;
            }
            div[style*="deadline"] {
              padding: 0.75rem !important;
              margin-top: 1.25rem !important;
            }
            h3 {
              font-size: 1rem !important;
            }
            div[style*="form"] {
              padding: 0.75rem !important;
            }
            h3[style*="formTitle"] {
              font-size: 1.2rem !important;
              margin-bottom: 0.75rem !important;
            }
            div[style*="formGroup"] {
              margin-bottom: 0.75rem !important;
            }
            label {
              font-size: 0.85rem !important;
            }
            input, select, textarea {
              padding: 0.4rem 0.6rem !important;
              font-size: 0.85rem !important;
            }
            button[type="submit"] {
              padding: 0.6rem !important;
              font-size: 0.9rem !important;
            }
          }

          /* Extra Small Mobile */
          @media (max-width: 320px) {
            h2 {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 0.8rem !important;
            }
            div[style*="deadline"] p {
              font-size: 0.8rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              gap: 2rem !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] {
              max-width: 1600px !important;
            }
            h2 {
              font-size: 3.5rem !important;
            }
            p {
              font-size: 1.3rem !important;
            }
          }

          /* Print Styles */
          @media print {
            section {
              background: white !important;
              color: black !important;
            }
            form {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Apply;