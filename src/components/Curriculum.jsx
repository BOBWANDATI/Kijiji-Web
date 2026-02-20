import React, { useState } from 'react';

const Curriculum = () => {
  const [activeCategory, setActiveCategory] = useState('graphics');
  const [expandedCard, setExpandedCard] = useState(null);

  const topicIcons = {
    'Design Principles': '🎨',
    'Typography': '🔤',
    'Color Theory': '🌈',
    'Canva Mastery': '✨',
    'Working with Images': '🖼️',
    'Brand Identity': '🏷️',
    'Microsoft Tools': '📊',
    'Gmail & Communication': '📧',
    'AI & Prompt Engineering': '🤖',
    'Google Workspace': '☁️',
    'Online Collaboration': '👥',
    'Digital Productivity': '⚡',
    'Scratch Interface': '🎮',
    'Motion & Animation': '🎬',
    'Storytelling Projects': '📖',
    'Game Development': '🎲',
    'Interactive Stories': '📱',
    'Logic Building': '🧩',
    'HTML5 & CSS3': '🌐',
    'JavaScript Fundamentals': '⚙️',
    'React Basics': '⚛️',
    'MySQL Database': '🗄️',
    'Git & GitHub': '📦',
    'Responsive Design': '📱',
    'Digital Channels': '📺',
    'Social Media Strategy': '📱',
    'Content Marketing': '📝',
    'SEO Basics': '🔍',
    'Analytics': '📊',
    'Email Marketing': '✉️',
    'Business Ideation': '💡',
    'Market Research': '📈',
    'Business Planning': '📋',
    'Financial Literacy': '💰',
    'Pitching Skills': '🎯',
    'Business Model Canvas': '📐',
    'Leadership': '👑',
    'Emotional Intelligence': '🧠',
    'Communication': '💬',
    'Adaptability': '🔄',
    'Team Collaboration': '🤝',
    'Animation Tools': '🎨',
    'Photography': '📸',
    'Video Editing': '🎥',
    'Digital Peacebuilding': '🕊️',
    'Content Creation': '📱',
    'Design Thinking': '💭',
  };

  const curriculumData = {
    graphics: {
      icon: '🎨',
      title: 'Graphics Design',
      badge: 'Creative Track',
      topics: [
        'Design Principles',
        'Typography',
        'Color Theory',
        'Canva Mastery',
        'Working with Images',
        'Brand Identity',
      ],
    },
    digital: {
      icon: '💻',
      title: 'Modern Digital Skills',
      badge: 'Essential Track',
      topics: [
        'Microsoft Tools',
        'Gmail & Communication',
        'AI & Prompt Engineering',
        'Google Workspace',
        'Online Collaboration',
        'Digital Productivity',
      ],
    },
    scratch: {
      icon: '🎮',
      title: 'Scratch Programming',
      badge: 'Beginners Track',
      topics: [
        'Scratch Interface',
        'Motion & Animation',
        'Storytelling Projects',
        'Game Development',
        'Interactive Stories',
        'Logic Building',
      ],
    },
    programming: {
      icon: '👨🏽‍💻',
      title: 'Programming',
      badge: 'Advanced Track',
      topics: [
        'HTML5 & CSS3',
        'JavaScript Fundamentals',
        'React Basics',
        'MySQL Database',
        'Git & GitHub',
        'Responsive Design',
      ],
    },
    marketing: {
      icon: '📢',
      title: 'Digital Marketing',
      badge: 'Business Track',
      topics: [
        'Digital Channels',
        'Social Media Strategy',
        'Content Marketing',
        'SEO Basics',
        'Analytics',
        'Email Marketing',
      ],
    },
    entrepreneurship: {
      icon: '🚀',
      title: 'Entrepreneurship',
      badge: 'Business Track',
      topics: [
        'Business Ideation',
        'Market Research',
        'Business Planning',
        'Financial Literacy',
        'Pitching Skills',
        'Business Model Canvas',
      ],
    },
    softskills: {
      icon: '🌱',
      title: 'Life & Soft Skills',
      badge: 'Personal Growth',
      topics: [
        'Leadership',
        'Emotional Intelligence',
        'Communication',
        'Financial Literacy',
        'Adaptability',
        'Team Collaboration',
      ],
    },
    additional: {
      icon: '✨',
      title: 'Additional Courses',
      badge: 'Electives',
      topics: [
        'Animation Tools',
        'Photography',
        'Video Editing',
        'Digital Peacebuilding',
        'Content Creation',
        'Design Thinking',
      ],
    },
  };

  const categories = [
    { id: 'graphics', name: 'Graphics Design' },
    { id: 'digital', name: 'Digital Skills' },
    { id: 'scratch', name: 'Scratch' },
    { id: 'programming', name: 'Programming' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
    { id: 'softskills', name: 'Soft Skills' },
    { id: 'additional', name: 'Additional' },
  ];

  const toggleExpand = (key) => {
    setExpandedCard(expandedCard === key ? null : key);
  };

  return (
    <section className="curriculum">
      <div className="curriculum-container">
        <h2 className="section-title">Our Curriculum</h2>
        
        <div className="curriculum-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`curriculum-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedCard(null);
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="curriculum-grid">
          {Object.entries(curriculumData).map(([key, data]) => (
            <div
              key={key}
              className={`curriculum-card ${activeCategory === key ? '' : 'hidden'}`}
            >
              {data.badge && <span className="curriculum-badge">{data.badge}</span>}
              
              <div className="curriculum-card-header">
                <div className="curriculum-card-icon">{data.icon}</div>
                <h3 className="curriculum-card-title">{data.title}</h3>
              </div>
              
              <div className="curriculum-topics">
                {data.topics.slice(0, expandedCard === key ? data.topics.length : 4).map((topic, index) => (
                  <div key={index} className="curriculum-topic">
                    <span className="curriculum-topic-icon">{topicIcons[topic] || '📚'}</span>
                    <span className="curriculum-topic-text">{topic}</span>
                  </div>
                ))}
              </div>

              {data.topics.length > 4 && (
                <button
                  className="curriculum-expand-btn"
                  onClick={() => toggleExpand(key)}
                >
                  <span>{expandedCard === key ? 'Show Less' : 'View All Topics'}</span>
                  <span className="curriculum-expand-icon">
                    {expandedCard === key ? '↑' : '↓'}
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .curriculum {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: var(--primary-white);
          width: 100%;
          overflow-x: hidden;
        }

        .curriculum-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .curriculum-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
          margin-bottom: clamp(2rem, 5vw, 3rem);
        }

        .curriculum-category-btn {
          padding: 0.6rem 1.2rem;
          background: var(--gray-100);
          border: none;
          border-radius: var(--radius-full);
          font-size: clamp(0.85rem, 2vw, 1rem);
          font-weight: 500;
          color: var(--gray-600);
          cursor: pointer;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .curriculum-category-btn.active {
          background: var(--primary-red);
          color: var(--primary-white);
        }

        .curriculum-category-btn:hover {
          background: var(--primary-red);
          color: var(--primary-white);
        }

        .curriculum-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: clamp(1rem, 3vw, 2rem);
        }

        .curriculum-card {
          background: var(--gray-100);
          border-radius: var(--radius-xl);
          padding: clamp(1.2rem, 3vw, 2rem);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }

        .curriculum-card.hidden {
          display: none;
        }

        .curriculum-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-2xl);
          border-color: var(--primary-red);
        }

        .curriculum-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--primary-red);
          color: var(--primary-white);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .curriculum-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid var(--primary-red);
          padding-bottom: 1rem;
        }

        .curriculum-card-icon {
          font-size: clamp(2rem, 4vw, 3rem);
          background: var(--primary-white);
          width: clamp(3rem, 6vw, 4rem);
          height: clamp(3rem, 6vw, 4rem);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 20px rgba(220,38,38,0.1);
          flex-shrink: 0;
        }

        .curriculum-card-title {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: var(--primary-black);
          line-height: 1.3;
        }

        .curriculum-topics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .curriculum-topic {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: var(--primary-white);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
          border: 1px solid transparent;
        }

        .curriculum-topic:hover {
          transform: translateX(5px);
          border-color: var(--primary-red);
          box-shadow: 0 5px 15px rgba(220,38,38,0.1);
        }

        .curriculum-topic-icon {
          font-size: 1.3rem;
          min-width: 1.8rem;
          text-align: center;
        }

        .curriculum-topic-text {
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          color: var(--gray-700);
          font-weight: 500;
          line-height: 1.4;
        }

        .curriculum-expand-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.75rem;
          background: transparent;
          border: 2px solid var(--primary-red);
          border-radius: var(--radius-full);
          color: var(--primary-red);
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          transition: all var(--transition-base);
        }

        .curriculum-expand-btn:hover {
          background: var(--primary-red);
          color: var(--primary-white);
        }

        .curriculum-expand-icon {
          font-size: 1.2rem;
          transition: transform var(--transition-base);
        }

        .curriculum-expand-btn:hover .curriculum-expand-icon {
          transform: translateY(2px);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .curriculum-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .curriculum-grid {
            grid-template-columns: 1fr;
          }

          .curriculum-categories {
            gap: 0.5rem;
          }

          .curriculum-category-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }

          .curriculum-card-header {
            flex-direction: column;
            text-align: center;
          }

          .curriculum-topics {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .curriculum {
            padding: 2rem 0;
          }

          .curriculum-category-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .curriculum-card {
            padding: 1rem;
          }

          .curriculum-card-icon {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.8rem;
          }

          .curriculum-card-title {
            font-size: 1.2rem;
          }

          .curriculum-topic {
            padding: 0.5rem;
          }

          .curriculum-topic-text {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 375px) {
          .curriculum-card-title {
            font-size: 1.1rem;
          }

          .curriculum-topic-icon {
            font-size: 1.1rem;
            min-width: 1.5rem;
          }

          .curriculum-topic-text {
            font-size: 0.8rem;
          }

          .curriculum-expand-btn {
            padding: 0.5rem;
            font-size: 0.8rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .curriculum {
            padding: 2rem 0;
          }

          .curriculum-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .curriculum-card:hover {
            transform: none;
          }

          .curriculum-topic:hover {
            transform: none;
          }

          .curriculum-expand-btn:hover {
            background: transparent;
            color: var(--primary-red);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .curriculum-card,
          .curriculum-topic,
          .curriculum-expand-btn,
          .curriculum-expand-icon {
            transition: none;
          }

          .curriculum-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Curriculum;