import React, { useState } from 'react';

const WeeklyBreakdown = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);

  const styles = {
    weekly: {
      padding: '5rem 0',
      background: 'var(--gray-100)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    timeline: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      maxWidth: '900px',
      margin: '0 auto',
    },
    weekItem: {
      background: 'var(--primary-white)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      border: '1px solid transparent',
    },
    weekHeader: {
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      background: 'var(--primary-white)',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      transition: 'all 0.3s ease',
    },
    weekTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    weekNumber: {
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      boxShadow: '0 4px 10px rgba(220,38,38,0.3)',
    },
    weekName: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: 'var(--primary-black)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    weekContent: {
      padding: expandedWeek ? '0 2rem 2rem 2rem' : '0 2rem',
      maxHeight: expandedWeek ? '1000px' : '0',
      opacity: expandedWeek ? '1' : '0',
      overflow: 'hidden',
      transition: 'all 0.5s ease',
    },
    weekDescription: {
      color: 'var(--gray-600)',
      marginBottom: '1.5rem',
      lineHeight: '1.8',
      fontSize: '1.1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      paddingTop: expandedWeek ? '1rem' : '0',
      borderTop: expandedWeek ? '2px solid var(--primary-red)' : 'none',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginTop: '1rem',
    },
    topicItem: {
      padding: '1rem',
      color: 'var(--gray-700)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'var(--gray-50)',
      borderRadius: '0.75rem',
      transition: 'all 0.3s ease',
      border: '1px solid transparent',
      cursor: 'pointer',
    },
    topicIcon: {
      fontSize: '1.5rem',
      minWidth: '2rem',
      textAlign: 'center',
    },
    topicText: {
      fontSize: '0.95rem',
      fontWeight: '500',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      lineHeight: '1.4',
    },
    arrow: {
      color: 'var(--primary-red)',
      fontSize: '2rem',
      fontWeight: '300',
      transition: 'transform 0.3s ease',
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: 'var(--gray-100)',
    },
    weekMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    weekDuration: {
      fontSize: '0.9rem',
      color: 'var(--primary-red)',
      background: 'rgba(220,38,38,0.1)',
      padding: '0.25rem 0.75rem',
      borderRadius: '2rem',
      fontWeight: '600',
    },
    progressBar: {
      width: '100%',
      height: '4px',
      background: 'var(--gray-200)',
      borderRadius: '2px',
      marginTop: '1rem',
      overflow: 'hidden',
    },
    progressFill: {
      width: expandedWeek ? '100%' : '0%',
      height: '100%',
      background: 'var(--primary-red)',
      transition: 'width 0.5s ease',
    },
  };

  const topicIcons = {
    'Computer Basics': '💻',
    'Internet Navigation': '🌐',
    'Email Etiquette': '📧',
    'Microsoft Office Suite': '📊',
    'Google Workspace': '☁️',
    'Digital Citizenship': '👥',
    'Design Fundamentals': '🎨',
    'Color Theory': '🌈',
    'Typography': '🔤',
    'Canva Advanced': '✨',
    'Photo Editing': '🖼️',
    'Brand Identity': '🏷️',
    'HTML5 & CSS3': '🌐',
    'JavaScript Basics': '⚙️',
    'Responsive Design': '📱',
    'Scratch Projects': '🎮',
    'Problem Solving': '🧩',
    'Algorithm Thinking': '🤔',
    'Git Basics': '📦',
    'GitHub Collaboration': '🐙',
    'MySQL Introduction': '🗄️',
    'Data Management': '📊',
    'Version Control': '🔄',
    'Team Workflows': '👥',
    'Social Media Marketing': '📱',
    'Content Strategy': '📝',
    'SEO Fundamentals': '🔍',
    'Email Marketing': '✉️',
    'Analytics': '📈',
    'Paid Advertising': '💰',
    'Business Planning': '📋',
    'Financial Literacy': '💰',
    'Leadership Skills': '👑',
    'Communication': '💬',
    'Emotional Intelligence': '🧠',
    'Pitch Development': '🎯',
    'Project Development': '🛠️',
    'Portfolio Building': '📁',
    'Presentation Skills': '🎤',
    'Demo Day Preparation': '🎪',
    'Networking': '🤝',
    'Career Guidance': '🎓',
  };

  const weeks = [
    {
      number: '1-2',
      title: 'Digital Foundations',
      description: 'Master essential digital skills and tools for modern work environments. Build a strong foundation for your tech journey.',
      topics: [
        'Computer Basics',
        'Internet Navigation',
        'Email Etiquette',
        'Microsoft Office Suite',
        'Google Workspace',
        'Digital Citizenship',
      ],
      duration: '2 Weeks',
    },
    {
      number: '3-4',
      title: 'Creative & Design',
      description: 'Learn design principles and creative tools for visual communication. Develop your eye for aesthetics and brand identity.',
      topics: [
        'Design Fundamentals',
        'Color Theory',
        'Typography',
        'Canva Advanced',
        'Photo Editing',
        'Brand Identity',
      ],
      duration: '2 Weeks',
    },
    {
      number: '5-6',
      title: 'Coding Fundamentals',
      description: 'Introduction to programming concepts and web development. Start your journey into the world of code.',
      topics: [
        'HTML5 & CSS3',
        'JavaScript Basics',
        'Responsive Design',
        'Scratch Projects',
        'Problem Solving',
        'Algorithm Thinking',
      ],
      duration: '2 Weeks',
    },
    {
      number: '7',
      title: 'Data & Git',
      description: 'Learn version control and database management. Master the tools that power modern development.',
      topics: [
        'Git Basics',
        'GitHub Collaboration',
        'MySQL Introduction',
        'Data Management',
        'Version Control',
        'Team Workflows',
      ],
      duration: '1 Week',
    },
    {
      number: '8',
      title: 'Digital Marketing',
      description: 'Master digital marketing strategies and tools. Learn to reach and engage audiences online.',
      topics: [
        'Social Media Marketing',
        'Content Strategy',
        'SEO Fundamentals',
        'Email Marketing',
        'Analytics',
        'Paid Advertising',
      ],
      duration: '1 Week',
    },
    {
      number: '9',
      title: 'Entrepreneurship & Soft Skills',
      description: 'Develop business acumen and professional skills. Prepare for the real world of work.',
      topics: [
        'Business Planning',
        'Financial Literacy',
        'Leadership Skills',
        'Communication',
        'Emotional Intelligence',
        'Pitch Development',
      ],
      duration: '1 Week',
    },
    {
      number: '10',
      title: 'Final Projects & Demo Day',
      description: 'Showcase your skills with capstone projects and presentations. Launch your career with confidence.',
      topics: [
        'Project Development',
        'Portfolio Building',
        'Presentation Skills',
        'Demo Day Preparation',
        'Networking',
        'Career Guidance',
      ],
      duration: '1 Week',
    },
  ];

  return (
    <section id="breakdown" style={styles.weekly}>
      <div style={styles.container}>
        <h2 className="section-title">10-Week Journey</h2>
        
        <div style={styles.timeline}>
          {weeks.map((week, index) => (
            <div
              key={index}
              style={styles.weekItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <button
                style={styles.weekHeader}
                onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
              >
                <div style={styles.weekTitle}>
                  <span style={styles.weekNumber}>{week.number}</span>
                  <div>
                    <span style={styles.weekName}>{week.title}</span>
                    <div style={styles.weekMeta}>
                      <span style={styles.weekDuration}>{week.duration}</span>
                    </div>
                  </div>
                </div>
                <span style={styles.arrow}>
                  {expandedWeek === index ? '−' : '+'}
                </span>
              </button>
              
              <div
                style={{
                  ...styles.weekContent,
                  maxHeight: expandedWeek === index ? '1000px' : '0',
                  opacity: expandedWeek === index ? '1' : '0',
                }}
              >
                <p style={styles.weekDescription}>{week.description}</p>
                
                <div style={styles.topicsGrid}>
                  {week.topics.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      style={styles.topicItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-white)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--gray-50)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={styles.topicIcon}>{topicIcons[topic] || '📚'}</span>
                      <span style={styles.topicText}>{topic}</span>
                    </div>
                  ))}
                </div>

                <div style={styles.progressBar}>
                  <div style={{
                    ...styles.progressFill,
                    width: expandedWeek === index ? '100%' : '0%',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Large Desktop */
          @media (min-width: 1400px) {
            section {
              padding: 6rem 0 !important;
            }
            div[style*="weekNumber"] {
              width: 3.5rem !important;
              height: 3.5rem !important;
              font-size: 1.4rem !important;
            }
            span[style*="weekName"] {
              font-size: 1.5rem !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 5rem 0 !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="weekHeader"] {
              padding: 1.25rem !important;
            }
            div[style*="weekTitle"] {
              gap: 1rem !important;
            }
            span[style*="weekNumber"] {
              width: 2.5rem !important;
              height: 2.5rem !important;
              font-size: 1.1rem !important;
            }
            span[style*="weekName"] {
              font-size: 1.2rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="weekHeader"] {
              padding: 1rem !important;
            }
            div[style*="weekTitle"] {
              gap: 0.75rem !important;
            }
            span[style*="weekNumber"] {
              width: 2.2rem !important;
              height: 2.2rem !important;
              font-size: 1rem !important;
            }
            span[style*="weekName"] {
              font-size: 1.1rem !important;
            }
            p[style*="weekDescription"] {
              font-size: 1rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.75rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.75rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.9rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="weekHeader"] {
              padding: 1rem !important;
            }
            div[style*="weekTitle"] {
              gap: 0.75rem !important;
            }
            span[style*="weekNumber"] {
              width: 2rem !important;
              height: 2rem !important;
              font-size: 0.9rem !important;
            }
            span[style*="weekName"] {
              font-size: 1rem !important;
            }
            span[style*="weekDuration"] {
              font-size: 0.8rem !important;
            }
            p[style*="weekDescription"] {
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.75rem !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="weekHeader"] {
              padding: 0.75rem !important;
            }
            div[style*="weekTitle"] {
              gap: 0.5rem !important;
            }
            span[style*="weekNumber"] {
              width: 1.8rem !important;
              height: 1.8rem !important;
              font-size: 0.85rem !important;
            }
            span[style*="weekName"] {
              font-size: 0.95rem !important;
            }
            span[style*="weekDuration"] {
              font-size: 0.75rem !important;
              padding: 0.15rem 0.5rem !important;
            }
            p[style*="weekDescription"] {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
            }
            div[style*="weekContent"] {
              padding: 0 1rem 1rem 1rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
              gap: 0.5rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.5rem !important;
            }
            span[style*="topicIcon"] {
              font-size: 1.2rem !important;
              min-width: 1.5rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.85rem !important;
            }
            span[style*="arrow"] {
              font-size: 1.5rem !important;
              width: 1.5rem !important;
              height: 1.5rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="weekHeader"] {
              padding: 0.6rem !important;
            }
            div[style*="weekTitle"] {
              gap: 0.4rem !important;
            }
            span[style*="weekNumber"] {
              width: 1.6rem !important;
              height: 1.6rem !important;
              font-size: 0.75rem !important;
            }
            span[style*="weekName"] {
              font-size: 0.9rem !important;
            }
            span[style*="weekDuration"] {
              font-size: 0.7rem !important;
              padding: 0.1rem 0.4rem !important;
            }
            p[style*="weekDescription"] {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
              margin-bottom: 1rem !important;
            }
            div[style*="weekContent"] {
              padding: 0 0.75rem 0.75rem 0.75rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
              gap: 0.4rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.4rem !important;
            }
            span[style*="topicIcon"] {
              font-size: 1rem !important;
              min-width: 1.2rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.8rem !important;
            }
            span[style*="arrow"] {
              font-size: 1.2rem !important;
              width: 1.2rem !important;
              height: 1.2rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="timeline"] {
              gap: 0.75rem !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] {
              max-width: 1600px !important;
            }
            div[style*="timeline"] {
              max-width: 1100px !important;
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
    </section>
  );
};

export default WeeklyBreakdown;