import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/7b6196b2cf5a2e3b2e7561a182ebc2dc0ff4c810/WhatsApp%20Image%202026-02-19%20at%2011.21.07%20AM.jpeg",
      title: "Workshop Session",
      category: "Training",
    },
    {
      id: 2,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/7b6196b2cf5a2e3b2e7561a182ebc2dc0ff4c810/WhatsApp%20Image%202026-02-19%20at%2011.21.06%20AM.jpeg",
      title: "Coding Class",
      category: "Programming",
    },
    {
      id: 3,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/7b6196b2cf5a2e3b2e7561a182ebc2dc0ff4c810/WhatsApp%20Image%202026-02-19%20at%2011.21.03%20AM.jpeg",
      title: "Group Discussion",
      category: "Collaboration",
    },
    {
      id: 4,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/7b6196b2cf5a2e3b2e7561a182ebc2dc0ff4c810/WhatsApp%20Image%202026-02-19%20at%2011.21.09%20AM%20(1).jpeg",
      title: "Team Project",
      category: "Projects",
    },
    {
      id: 5,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/main/WhatsApp%20Image%202026-02-19%20at%205.43.15%20PM.jpeg",
      title: "Mentor Session",
      category: "Mentorship",
    },
    {
      id: 6,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/main/WhatsApp%20Image%202026-02-19%20at%2011.20.58%20AM.jpeg",
      title: "Design Workshop",
      category: "Design",
    },
    {
      id: 7,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/main/WhatsApp%20Image%202026-02-19%20at%205.35.15%20PM%20(1).jpeg",
      title: "Demo Day",
      category: "Events",
    },
    {
      id: 8,
      url: "https://raw.githubusercontent.com/BOBWANDATI/images/main/WhatsApp%20Image%202026-02-19%20at%2011.20.55%20AM.jpeg",
      title: "Graduation Ceremony",
      category: "Celebration",
    },
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="gallery-image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += '<div class="gallery-image-fallback">🖼️</div>';
                }}
              />
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">{image.title}</h3>
                <p className="gallery-item-category">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="gallery-modal-image"
            />
            <div className="gallery-modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery {
          padding: clamp(3rem, 8vw, 5rem) 0;
          background: var(--gray-100);
          width: 100%;
          overflow-x: hidden;
        }

        .gallery-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          width: 100%;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          cursor: pointer;
          aspect-ratio: 1;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-image-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          background: linear-gradient(135deg, var(--gray-300), var(--gray-400));
          color: var(--gray-600);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: var(--primary-white);
          transform: translateY(100%);
          transition: transform var(--transition-base);
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-item-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .gallery-item-category {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        /* Lightbox Modal */
        .gallery-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: var(--z-modal);
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .gallery-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .gallery-modal-close {
          position: absolute;
          top: -2rem;
          right: 0;
          background: none;
          border: none;
          color: var(--primary-white);
          font-size: 2.5rem;
          cursor: pointer;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
          z-index: calc(var(--z-modal) + 1);
        }

        .gallery-modal-close:hover {
          transform: scale(1.1);
          color: var(--primary-red);
        }

        .gallery-modal-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: var(--radius-lg);
        }

        .gallery-modal-caption {
          position: absolute;
          bottom: -3rem;
          left: 0;
          right: 0;
          text-align: center;
          color: var(--primary-white);
          padding: 1rem;
        }

        .gallery-modal-caption h3 {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: var(--primary-white);
        }

        .gallery-modal-caption p {
          font-size: 0.95rem;
          opacity: 0.9;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .gallery-overlay {
            transform: translateY(0);
            padding: 1rem;
          }

          .gallery-item-title {
            font-size: 1rem;
          }

          .gallery-item-category {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .gallery {
            padding: 2rem 0;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .gallery-item {
            aspect-ratio: 16/9;
          }

          .gallery-modal-content {
            max-width: 95vw;
          }

          .gallery-modal-close {
            top: -1.5rem;
            font-size: 2rem;
          }

          .gallery-modal-caption {
            bottom: -2.5rem;
          }
        }

        @media (max-width: 375px) {
          .gallery-item-title {
            font-size: 0.95rem;
          }

          .gallery-item-category {
            font-size: 0.75rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .gallery-modal-image {
            max-height: 70vh;
          }

          .gallery-modal-caption {
            bottom: -2rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .gallery-item:hover {
            transform: none;
          }

          .gallery-overlay {
            transform: translateY(0);
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .gallery-item,
          .gallery-image,
          .gallery-overlay,
          .gallery-modal {
            transition: none;
          }

          .gallery-item:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;