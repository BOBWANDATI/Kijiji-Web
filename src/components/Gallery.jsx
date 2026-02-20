import React, { useState } from "react";

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
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} />

              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.title}
            />
          </div>
        </div>
      )}

      <style>{`
        /* ===== SECTION ===== */

        .gallery-section {
          padding: 4rem 0;
          background: var(--gray-100);
        }

        .gallery-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ===== GRID ===== */

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          aspect-ratio: 4/3;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-overlay h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .gallery-overlay p {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        /* ===== MODAL ===== */

        .gallery-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
        }

        .modal-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .close-btn {
          position: absolute;
          top: -2rem;
          right: 0;
          font-size: 2rem;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ===== FIXED MOBILE STYLES - IMAGES NOW FILL CONTAINERS ===== */
        @media (max-width: 768px) {
          /* Remove all padding */
          .gallery-section {
            padding: 2rem 0 0 0;
          }
          
          .gallery-container {
            padding: 0;
            max-width: 100%;
          }
          
          .section-title {
            padding: 0 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          /* Make grid single column with NO GAP */
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          /* CRITICAL FIX: Remove aspect ratio and use fixed height */
          .gallery-item {
            border-radius: 0;
            aspect-ratio: auto; /* Remove aspect ratio constraint */
            width: 100%;
            height: 450px; /* Fixed height - MUCH BIGGER */
            margin: 0;
            position: relative;
            overflow: hidden;
          }

          /* Make images fill the container COMPLETELY */
          .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* This ensures image covers entire area */
            object-position: center; /* Center the image */
            transform: scale(1.05); /* Slight zoom to ensure edges are filled */
          }

          /* Overlay always visible */
          .gallery-overlay {
            transform: translateY(0);
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            padding: 2rem 1.5rem;
          }
          
          .gallery-overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 0.3rem;
          }
          
          .gallery-overlay p {
            font-size: 1.1rem;
            opacity: 0.9;
          }

          /* Remove hover effects */
          .gallery-item:hover img {
            transform: scale(1.05); /* Keep the zoom consistent */
          }
          
          .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
          }
        }

        /* Different heights for different screen sizes */
        @media (min-width: 601px) and (max-width: 768px) {
          .gallery-item {
            height: 500px; /* Even bigger for tablets */
          }
        }

        @media (min-width: 481px) and (max-width: 600px) {
          .gallery-item {
            height: 480px;
          }
        }

        @media (min-width: 376px) and (max-width: 480px) {
          .gallery-item {
            height: 450px;
          }
          
          .gallery-overlay h3 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 375px) {
          .gallery-item {
            height: 400px; /* Slightly smaller for very small phones */
          }
          
          .gallery-overlay h3 {
            font-size: 1.3rem;
          }
          
          .gallery-overlay p {
            font-size: 1rem;
          }
        }

        @media (max-width: 320px) {
          .gallery-item {
            height: 350px;
          }
        }

        /* Landscape mode */
        @media (max-height: 600px) and (orientation: landscape) and (max-width: 768px) {
          .gallery-item {
            height: 300px; /* Shorter in landscape */
          }
        }

        /* Make first and last images touch edges */
        .gallery-item:first-child {
          margin-top: 0;
        }
        
        .gallery-item:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
};

export default Gallery;