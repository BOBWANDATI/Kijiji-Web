import React, { useState } from 'react';

const StudentProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const styles = {
    projects: {
      padding: '5rem 0',
      background: 'var(--primary-white)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    filters: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    filterBtn: {
      padding: '0.75rem 2rem',
      background: 'var(--gray-100)',
      border: 'none',
      borderRadius: '2rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: 'var(--gray-600)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    filterBtnActive: {
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      boxShadow: '0 4px 15px rgba(220,38,38,0.3)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
    },
    card: {
      background: 'var(--gray-100)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      border: '1px solid transparent',
      cursor: 'pointer',
    },
    imageContainer: {
      height: '220px',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(220,38,38,0.95) 0%, rgba(185,28,28,0.95) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    overlayContent: {
      textAlign: 'center',
      color: 'var(--primary-white)',
      transform: 'translateY(20px)',
      transition: 'transform 0.3s ease',
    },
    overlayLink: {
      color: 'var(--primary-white)',
      textDecoration: 'none',
      padding: '0.6rem 1.2rem',
      border: '2px solid var(--primary-white)',
      borderRadius: '2rem',
      margin: '0 0.5rem',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      fontSize: '0.9rem',
      fontWeight: '600',
    },
    content: {
      padding: '1.5rem',
    },
    category: {
      display: 'inline-block',
      padding: '0.3rem 1rem',
      background: 'var(--primary-red)',
      color: 'var(--primary-white)',
      borderRadius: '2rem',
      fontSize: '0.8rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    title: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: 'var(--primary-black)',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      lineHeight: '1.3',
    },
    student: {
      color: 'var(--gray-600)',
      marginBottom: '0.75rem',
      fontSize: '0.9rem',
      fontStyle: 'italic',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    description: {
      color: 'var(--gray-600)',
      fontSize: '0.9rem',
      lineHeight: '1.6',
      marginBottom: '1rem',
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    tag: {
      padding: '0.25rem 0.75rem',
      background: 'var(--primary-white)',
      color: 'var(--primary-red)',
      borderRadius: '2rem',
      fontSize: '0.7rem',
      fontWeight: '600',
      border: '1px solid var(--primary-red)',
    },
    techStack: {
      marginTop: '0.75rem',
      fontSize: '0.8rem',
      color: 'var(--gray-600)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    viewLink: {
      display: 'inline-block',
      marginTop: '0.75rem',
      color: 'var(--primary-red)',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      borderBottom: '2px solid transparent',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--gray-200)',
    },
    stat: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      color: 'var(--gray-600)',
      fontSize: '0.8rem',
    },
  };

  const projects = [
    {
      id: 1,
      title: 'Poll Voter System',
      student: 'Hadija And Sala',
      category: 'web',
      description: 'A real-time polling application built with HTML, CSS, and JavaScript.',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/e8705415bb3348a53037559ea8d0bff82d7a9b16/Screenshot%202026-02-19%20180757.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demo: 'https://vote-zeta-five.vercel.app/',
      tech: 'JavaScript',
    },
    {
      id: 2,
      title: 'Student Task Tracker',
      student: 'Ahmed And Alia',
      category: 'web',
      description: 'A comprehensive task management system for students.',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/e8705415bb3348a53037559ea8d0bff82d7a9b16/Screenshot%202026-02-19%20180912.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demo: 'https://student-task-manager-phi-five.vercel.app/',
      tech: 'JavaScript',
    },
    {
      id: 3,
      title: 'Community Tracker',
      student: 'Saadia And Delvin',
      category: 'web',
      description: 'A community engagement platform tracking local events.',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/e8705415bb3348a53037559ea8d0bff82d7a9b16/Screenshot%202026-02-19%20180652.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demo: 'https://tracker-tan-ten.vercel.app/',
      tech: 'JavaScript',
    },
    {
      id: 4,
      title: 'Brand Identity Logo',
      student: 'Ahmed Bakero',
      category: 'design',
      description: 'Complete brand identity design including logo design and brand guidelines.',
      image: 'https://github.com/BOBWANDATI/images/blob/main/Gemini_Generated_Image_qvjd7nqvjd7nqvjd.png?raw=true',
      tags: ['Canva', 'Illustrator', 'Branding'],
      tech: 'Canva',
    },
    {
      id: 5,
      title: 'Social media poster',
      student: 'Saadia Salad',
      category: 'design',
      description: 'Comprehensive social media design for climate change.',
      image: 'https://github.com/BOBWANDATI/images/blob/main/download%20(15).jpg?raw=true',
      tags: ['Photoshop', 'After Effects', 'Social Media'],
      tech: 'Canva',
    },
    {
      id: 6,
      title: 'poster design',
      student: 'bob',
      category: 'design',
      description: 'Professional magazine layout design featuring editorial typography.',
      image: 'https://github.com/BOBWANDATI/images/blob/main/JAMHURI%20DAY%20(1).png?raw=true',
      tags: ['InDesign', 'Typography', 'Print Design'],
      tech: 'Canva',
    },
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Graphics Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 className="section-title">Student Projects</h2>
        
        <div style={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              style={{
                ...styles.filterBtn,
                ...(activeFilter === filter.id ? styles.filterBtnActive : {}),
              }}
              onClick={() => setActiveFilter(filter.id)}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.background = 'var(--primary-red)';
                  e.currentTarget.style.color = 'var(--primary-white)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.background = 'var(--gray-100)';
                  e.currentTarget.style.color = 'var(--gray-600)';
                }
              }}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
                e.currentTarget.style.borderColor = 'var(--primary-red)';
                
                const overlay = e.currentTarget.querySelector('.project-overlay');
                const overlayContent = e.currentTarget.querySelector('.overlay-content');
                if (overlay) overlay.style.opacity = '1';
                if (overlayContent) overlayContent.style.transform = 'translateY(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = 'transparent';
                
                const overlay = e.currentTarget.querySelector('.project-overlay');
                const overlayContent = e.currentTarget.querySelector('.overlay-content');
                if (overlay) overlay.style.opacity = '0';
                if (overlayContent) overlayContent.style.transform = 'translateY(20px)';
              }}
            >
              <div style={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={styles.image}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="width:100%;height:100%;background:linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);display:flex;align-items:center;justify-content:center;font-size:3rem;color:#4b5563;">
                        🖼️
                      </div>
                    `;
                  }}
                />
                <div className="project-overlay" style={styles.overlay}>
                  <div className="overlay-content" style={styles.overlayContent}>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.overlayLink}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--primary-white)';
                          e.currentTarget.style.color = 'var(--primary-red)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--primary-white)';
                        }}
                      >
                        {project.category === 'web' ? 'Live Demo' : 'View Design'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div style={styles.content}>
                <span style={styles.category}>
                  {project.category === 'web' ? 'Web Development' : 'Graphics Design'}
                </span>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.student}>by {project.student}</p>
                <p style={styles.description}>{project.description}</p>
                
                <div style={styles.techStack}>
                  <span>Built with: {project.tech}</span>
                </div>

                <div style={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                  ))}
                </div>

                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.viewLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#b91c1c';
                    e.currentTarget.style.borderBottomColor = 'var(--primary-red)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--primary-red)';
                    e.currentTarget.style.borderBottomColor = 'transparent';
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.category === 'web' ? 'View Live Website' : 'View Design'} →
                </a>
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
            div[style*="grid"] {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 2.5rem !important;
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
              gap: 1.5rem !important;
            }
            div[style*="imageContainer"] {
              height: 200px !important;
            }
          }

          /* Tablet Portrait */
          @media (min-width: 640px) and (max-width: 767px) {
            section {
              padding: 3rem 0 !important;
            }
            div[style*="grid"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 1.25rem !important;
            }
            div[style*="imageContainer"] {
              height: 180px !important;
            }
            h3 {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 0.85rem !important;
            }
          }

          /* Mobile Large */
          @media (min-width: 481px) and (max-width: 639px) {
            section {
              padding: 2.5rem 0 !important;
            }
            div[style*="filters"] {
              gap: 0.5rem !important;
            }
            button {
              padding: 0.5rem 1.2rem !important;
              font-size: 0.9rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            div[style*="imageContainer"] {
              height: 220px !important;
            }
            div[style*="content"] {
              padding: 1.25rem !important;
            }
          }

          /* Mobile Medium */
          @media (min-width: 376px) and (max-width: 480px) {
            section {
              padding: 2rem 0 !important;
            }
            div[style*="filters"] {
              gap: 0.4rem !important;
            }
            button {
              padding: 0.4rem 1rem !important;
              font-size: 0.85rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
            div[style*="imageContainer"] {
              height: 200px !important;
            }
            div[style*="content"] {
              padding: 1rem !important;
            }
            h3 {
              font-size: 1.1rem !important;
            }
            p {
              font-size: 0.8rem !important;
            }
            span[style*="tag"] {
              padding: 0.2rem 0.5rem !important;
              font-size: 0.65rem !important;
            }
          }

          /* Mobile Small */
          @media (max-width: 375px) {
            section {
              padding: 1.5rem 0 !important;
            }
            div[style*="filters"] {
              gap: 0.3rem !important;
            }
            button {
              padding: 0.3rem 0.8rem !important;
              font-size: 0.8rem !important;
            }
            div[style*="grid"] {
              grid-template-columns: 1fr !important;
              gap: 0.8rem !important;
            }
            div[style*="imageContainer"] {
              height: 180px !important;
            }
            div[style*="content"] {
              padding: 0.8rem !important;
            }
            h3 {
              font-size: 1rem !important;
            }
            p {
              font-size: 0.75rem !important;
            }
            div[style*="tags"] {
              gap: 0.3rem !important;
            }
            span[style*="tag"] {
              padding: 0.15rem 0.4rem !important;
              font-size: 0.6rem !important;
            }
            a[style*="viewLink"] {
              font-size: 0.8rem !important;
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

export default StudentProjects;