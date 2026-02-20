import React, { useState } from 'react';

const StudentProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Poll Voter System',
      student: 'Hadija & Sala',
      category: 'web',
      description: 'A real-time polling application built with HTML, CSS, and JavaScript. Users can create, vote, and see live results.',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/e8705415bb3348a53037559ea8d0bff82d7a9b16/Screenshot%202026-02-19%20180757.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demo: 'https://vote-zeta-five.vercel.app/',
      tech: 'JavaScript',
    },
    {
      id: 2,
      title: 'Student Task Tracker',
      student: 'Ahmed & Alia',
      category: 'web',
      description: 'A comprehensive task management system for students to track assignments, deadlines, and study progress.',
      image: 'https://raw.githubusercontent.com/BOBWANDATI/images/e8705415bb3348a53037559ea8d0bff82d7a9b16/Screenshot%202026-02-19%20180912.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demo: 'https://student-task-manager-phi-five.vercel.app/',
      tech: 'JavaScript',
    },
    {
      id: 3,
      title: 'Community Tracker',
      student: 'Saadia & Delvin',
      category: 'web',
      description: 'A community engagement platform tracking local events, volunteer opportunities, and community initiatives.',
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
      description: 'Complete brand identity design including logo design, color palette, typography, and comprehensive brand guidelines.',
      image: 'https://github.com/BOBWANDATI/images/blob/main/Gemini_Generated_Image_qvjd7nqvjd7nqvjd.png?raw=true',
      tags: ['Canva', 'Illustrator', 'Branding'],
      tech: 'Canva',
    },
    {
      id: 5,
      title: 'Social Media Poster',
      student: 'Saadia Salad',
      category: 'design',
      description: 'Comprehensive social media design for climate change awareness campaign.',
      image: 'https://github.com/BOBWANDATI/images/blob/main/download%20(15).jpg?raw=true',
      tags: ['Photoshop', 'After Effects', 'Social Media'],
      tech: 'Canva',
    },
    {
      id: 6,
      title: 'Jamhuri Day Poster',
      student: 'Bob',
      category: 'design',
      description: 'Professional poster design featuring editorial typography, image placement, and print-ready formatting.',
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
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Student Projects</h2>
        
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`projects-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="project-image-fallback">🖼️</div>';
                  }}
                />
                <div className="project-overlay">
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-overlay-link"
                  >
                    {project.category === 'web' ? 'Live Demo' : 'View Design'}
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-category">
                  {project.category === 'web' ? 'Web Development' : 'Graphics Design'}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-student">by {project.student}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <span className="project-tech-label">Built with:</span>
                  <span className="project-tech-value">{project.tech}</span>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>

                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.category === 'web' ? 'View Live Website →' : 'View Design →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: var(--primary-white);
          width: 100%;
          overflow-x: hidden;
        }

        .projects-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .projects-filters {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: clamp(2rem, 5vw, 3rem);
          flex-wrap: wrap;
        }

        .projects-filter-btn {
          padding: 0.6rem 1.5rem;
          background: var(--gray-100);
          border: none;
          border-radius: var(--radius-full);
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 600;
          color: var(--gray-600);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .projects-filter-btn.active {
          background: var(--primary-red);
          color: var(--primary-white);
        }

        .projects-filter-btn:hover {
          background: var(--primary-red);
          color: var(--primary-white);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 3vw, 2rem);
        }

        .project-card {
          background: var(--gray-100);
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
          box-shadow: var(--shadow-sm);
          border: 1px solid transparent;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-2xl);
          border-color: var(--primary-red);
        }

        .project-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--gray-300), var(--gray-400));
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-image-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--gray-600);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(220,38,38,0.95), rgba(185,28,28,0.95));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-overlay-link {
          color: var(--primary-white);
          text-decoration: none;
          padding: 0.6rem 1.2rem;
          border: 2px solid var(--primary-white);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all var(--transition-base);
        }

        .project-overlay-link:hover {
          background: var(--primary-white);
          color: var(--primary-red);
        }

        .project-content {
          padding: clamp(1rem, 3vw, 1.5rem);
        }

        .project-category {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--primary-red);
          color: var(--primary-white);
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .project-title {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--primary-black);
        }

        .project-student {
          color: var(--gray-600);
          font-size: 0.85rem;
          font-style: italic;
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--gray-600);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.85rem;
        }

        .project-tech-label {
          color: var(--gray-500);
        }

        .project-tech-value {
          color: var(--primary-red);
          font-weight: 600;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .project-tag {
          padding: 0.2rem 0.6rem;
          background: var(--primary-white);
          color: var(--primary-red);
          border-radius: var(--radius-full);
          font-size: 0.65rem;
          font-weight: 600;
          border: 1px solid var(--primary-red);
        }

        .project-link {
          display: inline-block;
          color: var(--primary-red);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all var(--transition-base);
          border-bottom: 2px solid transparent;
        }

        .project-link:hover {
          color: var(--primary-red-hover);
          border-bottom-color: var(--primary-red);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-filters {
            gap: 0.5rem;
          }

          .projects-filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
          }

          .project-image-container {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .projects {
            padding: 2rem 0;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-description {
            font-size: 0.85rem;
          }

          .project-tag {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 375px) {
          .project-image-container {
            height: 180px;
          }

          .project-title {
            font-size: 1rem;
          }

          .project-student {
            font-size: 0.8rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .project-card:hover {
            transform: none;
          }

          .project-overlay {
            opacity: 0;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-image,
          .project-overlay {
            transition: none;
          }

          .project-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default StudentProjects;