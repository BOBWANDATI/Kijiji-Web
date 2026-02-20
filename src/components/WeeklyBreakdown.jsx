import React, { useState } from 'react';

const WeeklyBreakdown = () => {
  const [expandedWeek, setExpandedWeek] = useState(null);

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
      color: '#dc2626',
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
      color: '#10b981',
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
      color: '#3b82f6',
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
      color: '#8b5cf6',
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
      color: '#f59e0b',
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
      color: '#ec4899',
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
      color: '#6366f1',
    },
  ];

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

  return (
    <section className="weekly-breakdown">
      <div className="weekly-container">
        <h2 className="section-title">10-Week Journey</h2>
        
        <div className="weekly-timeline">
          {weeks.map((week, index) => (
            <div
              key={index}
              className={`weekly-item ${expandedWeek === index ? 'expanded' : ''}`}
              style={{ borderColor: week.color }}
            >
              <button
                className="weekly-header"
                onClick={() => setExpandedWeek(expandedWeek === index ? null : index)}
              >
                <div className="weekly-header-left">
                  <span className="weekly-number" style={{ background: week.color }}>
                    {week.number}
                  </span>
                  <div>
                    <span className="weekly-title">{week.title}</span>
                    <span className="weekly-duration" style={{ color: week.color }}>
                      {week.duration}
                    </span>
                  </div>
                </div>
                <span className={`weekly-arrow ${expandedWeek === index ? 'rotated' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`weekly-content ${expandedWeek === index ? 'expanded' : ''}`}>
                <p className="weekly-description">{week.description}</p>
                
                <div className="weekly-topics">
                  {week.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="weekly-topic">
                      <span className="weekly-topic-icon">{topicIcons[topic] || '📚'}</span>
                      <span className="weekly-topic-text">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="weekly-progress">
                  <div 
                    className="weekly-progress-bar"
                    style={{ width: expandedWeek === index ? '100%' : '0%', background: week.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .weekly-breakdown {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: var(--gray-100);
          width: 100%;
          overflow-x: hidden;
        }

        .weekly-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .weekly-timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .weekly-item {
          background: var(--primary-white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          border-left: 4px solid transparent;
        }

        .weekly-item.expanded {
          box-shadow: var(--shadow-xl);
        }

        .weekly-item:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .weekly-header {
          width: 100%;
          padding: clamp(1rem, 3vw, 1.5rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--primary-white);
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .weekly-header-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .weekly-number {
          color: var(--primary-white);
          width: clamp(2.5rem, 5vw, 3rem);
          height: clamp(2.5rem, 5vw, 3rem);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          flex-shrink: 0;
        }

        .weekly-title {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          font-weight: 600;
          color: var(--primary-black);
          display: block;
          margin-bottom: 0.25rem;
        }

        .weekly-duration {
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          font-weight: 500;
        }

        .weekly-arrow {
          color: var(--gray-400);
          font-size: 1rem;
          transition: transform var(--transition-base);
        }

        .weekly-arrow.rotated {
          transform: rotate(180deg);
          color: var(--primary-red);
        }

        .weekly-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s ease;
          padding: 0 clamp(1rem, 3vw, 1.5rem);
        }

        .weekly-content.expanded {
          max-height: 800px;
          opacity: 1;
          padding: 0 clamp(1rem, 3vw, 1.5rem) 1.5rem;
        }

        .weekly-description {
          color: var(--gray-600);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: clamp(0.9rem, 2vw, 1rem);
        }

        .weekly-topics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .weekly-topic {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--gray-50);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          border: 1px solid transparent;
        }

        .weekly-topic:hover {
          transform: translateX(5px);
          border-color: var(--primary-red);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .weekly-topic-icon {
          font-size: 1.3rem;
          min-width: 1.8rem;
          text-align: center;
        }

        .weekly-topic-text {
          font-size: clamp(0.85rem, 1.8vw, 0.95rem);
          color: var(--gray-700);
          font-weight: 500;
        }

        .weekly-progress {
          height: 4px;
          background: var(--gray-200);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-top: 1rem;
        }

        .weekly-progress-bar {
          height: 100%;
          transition: width 0.5s ease;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .weekly-topics {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .weekly-header-left {
            gap: 1rem;
          }

          .weekly-topics {
            grid-template-columns: 1fr;
          }

          .weekly-number {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 0.9rem;
          }

          .weekly-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .weekly-breakdown {
            padding: 2rem 0;
          }

          .weekly-header {
            padding: 0.8rem;
          }

          .weekly-header-left {
            gap: 0.75rem;
          }

          .weekly-number {
            width: 2rem;
            height: 2rem;
            font-size: 0.8rem;
          }

          .weekly-title {
            font-size: 1rem;
          }

          .weekly-duration {
            font-size: 0.75rem;
          }

          .weekly-topic {
            padding: 0.5rem;
          }

          .weekly-topic-icon {
            font-size: 1.1rem;
            min-width: 1.5rem;
          }

          .weekly-topic-text {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 375px) {
          .weekly-title {
            font-size: 0.95rem;
          }

          .weekly-description {
            font-size: 0.85rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .weekly-content.expanded {
            max-height: 600px;
          }

          .weekly-topics {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .weekly-item:hover {
            transform: none;
          }

          .weekly-topic:hover {
            transform: none;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .weekly-item,
          .weekly-content,
          .weekly-progress-bar,
          .weekly-arrow {
            transition: none;
          }

          .weekly-item:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WeeklyBreakdown;