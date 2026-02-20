import React, { useState } from 'react';

const Curriculum = () => {
  const [activeCategory, setActiveCategory] = useState('graphics');
  const [expandedCard, setExpandedCard] = useState(null);

  const styles = {
    curriculum: {
      padding: '5rem 0',
      background: 'var(--primary-white)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    categories: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
    },
    categoryBtn: {
      padding: '0.75rem 1.5rem',
      background: 'var(--gray-100)',
      border: 'none',
      borderRadius: '2rem',
      fontSize: '1rem',
      fontWeight: '500',
      color: 'var(--gray-600)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    categoryBtnActive: {
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
    card: {
      background: 'var(--gray-100)',
      borderRadius: '1.5rem',
      padding: '2rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid transparent',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      borderBottom: `2px solid var(--primary-red)`,
      paddingBottom: '1rem',
    },
    cardIcon: {
      fontSize: '3rem',
      background: 'var(--primary-white)',
      width: '4rem',
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '1rem',
      boxShadow: '0 10px 20px rgba(220,38,38,0.1)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--primary-black)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      lineHeight: '1.3',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      marginTop: '1rem',
    },
    topicItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      background: 'var(--primary-white)',
      borderRadius: '0.75rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid transparent',
    },
    topicIcon: {
      fontSize: '1.5rem',
      minWidth: '2rem',
      textAlign: 'center',
    },
    topicText: {
      fontSize: '0.95rem',
      color: 'var(--gray-700)',
      fontWeight: '500',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      lineHeight: '1.4',
    },
    expandButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1.5rem',
      padding: '0.75rem',
      background: 'transparent',
      border: '2px solid var(--primary-red)',
      borderRadius: '2rem',
      color: 'var(--primary-red)',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    badge: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      padding: '0.25rem 0.75rem',
      borderRadius: '2rem',
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  };

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
    <section id="curriculum" style={styles.curriculum}>
      <div style={styles.container}>
        <h2 className="section-title">Our Curriculum</h2>
        
        <div style={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              style={{
                ...styles.categoryBtn,
                ...(activeCategory === cat.id ? styles.categoryBtnActive : {}),
              }}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedCard(null);
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.background = 'var(--primary-red)';
                  e.currentTarget.style.color = 'var(--primary-white)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.background = 'var(--gray-100)';
                  e.currentTarget.style.color = 'var(--gray-600)';
                }
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {Object.entries(curriculumData).map(([key, data]) => (
            <div
              key={key}
              style={{
                ...styles.card,
                display: activeCategory === key ? 'block' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = 'var(--primary-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {data.badge && <span style={styles.badge}>{data.badge}</span>}
              
              <div style={styles.cardHeader}>
                <div style={styles.cardIcon}>{data.icon}</div>
                <h3 style={styles.cardTitle}>{data.title}</h3>
              </div>
              
              <div style={styles.topicsGrid}>
                {data.topics.slice(0, expandedCard === key ? data.topics.length : 4).map((topic, index) => (
                  <div
                    key={index}
                    style={styles.topicItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.borderColor = 'var(--primary-red)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(220,38,38,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span style={styles.topicIcon}>{topicIcons[topic] || '📚'}</span>
                    <span style={styles.topicText}>{topic}</span>
                  </div>
                ))}
              </div>

              {data.topics.length > 4 && (
                <button
                  style={styles.expandButton}
                  onClick={() => toggleExpand(key)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary-red)';
                    e.currentTarget.style.color = 'var(--primary-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--primary-red)';
                  }}
                >
                  <span>{expandedCard === key ? 'Show Less' : 'View All Topics'}</span>
                  <span>{expandedCard === key ? '↑' : '↓'}</span>
                </button>
              )}
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
            div[style*="grid"] {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }

          /* Desktop */
          @media (min-width: 1200px) and (max-width: 1399px) {
            section {
              padding: 5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Small Desktop / Large Tablet */
          @media (min-width: 1024px) and (max-width: 1199px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.5rem !important;
            }
          }

          /* Tablet Landscape */
          @media (min-width: 768px) and (max-width: 1023px) {
            section {
              padding: 4rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.25rem !important;
            }
            div[style*="card"] {
              padding: 1.5rem !important;
            }
            h3 {
              font-size: 1.3rem !important;
            }
            div[style*="cardIcon"] {
              width: 3.5rem !important;
              height: 3.5rem !important;
              font-size: 2.5rem !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            div[style*="card"] {
              padding: 1.5rem !important;
            }
            div[style*="categories"] {
              gap: 0.75rem !important;
            }
            button {
              padding: 0.6rem 1.2rem !important;
              font-size: 0.95rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.25rem !important;
            }
            div[style*="card"] {
              padding: 1.25rem !important;
            }
            div[style*="categories"] {
              gap: 0.5rem !important;
            }
            button {
              padding: 0.5rem 1rem !important;
              font-size: 0.9rem !important;
            }
            div[style*="cardHeader"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.5rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            div[style*="card"] {
              padding: 1rem !important;
            }
            div[style*="categories"] {
              gap: 0.4rem !important;
            }
            button {
              padding: 0.4rem 0.8rem !important;
              font-size: 0.85rem !important;
            }
            div[style*="cardHeader"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.5rem !important;
              margin-bottom: 1rem !important;
            }
            div[style*="cardIcon"] {
              width: 3rem !important;
              height: 3rem !important;
              font-size: 2rem !important;
            }
            h3 {
              font-size: 1.2rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
              gap: 0.5rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.5rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.85rem !important;
            }
            button[style*="expandButton"] {
              padding: 0.5rem !important;
              font-size: 0.85rem !important;
              margin-top: 1rem !important;
            }
            span[style*="badge"] {
              font-size: 0.65rem !important;
              padding: 0.2rem 0.5rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 0.8rem !important;
            }
            div[style*="card"] {
              padding: 0.8rem !important;
            }
            div[style*="categories"] {
              gap: 0.3rem !important;
            }
            button {
              padding: 0.3rem 0.6rem !important;
              font-size: 0.8rem !important;
            }
            div[style*="cardHeader"] {
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.4rem !important;
              margin-bottom: 0.8rem !important;
            }
            div[style*="cardIcon"] {
              width: 2.5rem !important;
              height: 2.5rem !important;
              font-size: 1.8rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
            }
            div[style*="topicsGrid"] {
              grid-template-columns: 1fr !important;
              gap: 0.4rem !important;
            }
            div[style*="topicItem"] {
              padding: 0.4rem !important;
            }
            span[style*="topicIcon"] {
              font-size: 1.2rem !important;
              min-width: 1.5rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.8rem !important;
            }
            button[style*="expandButton"] {
              padding: 0.4rem !important;
              font-size: 0.8rem !important;
              margin-top: 0.8rem !important;
            }
          }

          /* Extra Small Mobile */
          @media (max-width: 320px) {
            button {
              padding: 0.25rem 0.5rem !important;
              font-size: 0.75rem !important;
            }
            h3 {
              font-size: 1rem !important;
            }
            span[style*="topicText"] {
              font-size: 0.75rem !important;
            }
          }

          /* Landscape Mode */
          @media (max-height: 600px) and (orientation: landscape) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* High Resolution Screens */
          @media (min-width: 1920px) {
            div[style*="container"] {
              max-width: 1600px !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(4, 1fr) !important;
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

export default Curriculum;