import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCamera, 
  FaTimes,
  FaExpand,
  FaHandPointer
} from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);

  // All images from different years combined
  const allImages = [
    {
      id: 1,
      src: '/splash.png',
      title: 'Opening Ceremony 2025',
      year: '2025',
      description: 'Grand opening with 500+ participants'
    },
    {
      id: 2,
      src: '/blue.jpg',
      title: 'Hackathon 2024',
      year: '2024',
      description: '24-hour coding marathon'
    },
    {
      id: 3,
      src: '/blue.jpg',
      title: 'Workshop Sessions 2023',
      year: '2023',
      description: 'Hands-on learning experiences'
    },
    {
      id: 4,
      src: '/blue.jpg',
      title: 'Coding Competition 2025',
      year: '2025',
      description: 'Intense programming challenges'
    },
    {
      id: 5,
      src: '/blue.jpg',
      title: 'Tech Talks 2024',
      year: '2024',
      description: 'Industry experts sharing knowledge'
    },
    {
      id: 6,
      src: '/blue.jpg',
      title: 'Robotics Competition 2023',
      year: '2023',
      description: 'Autonomous robot challenges'
    },
    {
      id: 7,
      src: '/blue.jpg',
      title: 'Award Ceremony 2025',
      year: '2025',
      description: 'Winners receiving their prizes'
    },
    {
      id: 8,
      src: '/blue.jpg',
      title: 'Innovation Showcase 2024',
      year: '2024',
      description: 'Students presenting projects'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  const handleCircleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const openImageModal = (image) => {
    if (!isExpanded) return;
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getImagePosition = (index, total) => {
    if (!isExpanded) {
      return { 
        left: '50%',
        top: '50%', 
        transform: 'translate(-50%, -50%) scale(0.1)', 
        opacity: 0 
      };
    }
    
    const getRadius = () => {
      const width = window.innerWidth;
      if (width <= 480) return 140;
      if (width <= 768) return 180;
      if (width <= 1024) return 220;
      return 280;
    };
    
    const angle = (360 / total) * index - 90;
    const radians = (angle * Math.PI) / 180;
    const radius = getRadius();
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: 1
    };
  };

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        
        {/* Section Header */}
        <div className="gallery-header" ref={headerRef}>
          <div className="section-badge">
            <FaCamera />
            HASH Gallery
          </div>
          <h2 className="section-title2">
            Relive the <span className="gradient-text">Epic Moments</span>
          </h2>
          <p className="section-subtitle2">
            Journey through the years of innovation and excellence
          </p>
        </div>

        {/* Interactive Gallery */}
        <div className="interactive-gallery" ref={galleryRef}>
          <div className="gallery-center">
            
            {/* Main Circle with Glass Effect */}
            <div 
              className={`main-circle ${isExpanded ? 'expanded' : ''}`}
              onClick={handleCircleClick}
            >
              {/* Glass Effect Layers */}
              <div className="glass-layer-1"></div>
              <div className="glass-layer-2"></div>
              <div className="glass-reflection"></div>
              
              {/* Background Image */}
              <div className="circle-bg-image"></div>
              
              <div className="circle-content">
                <div className="click-me-title">
                  <FaHandPointer className="click-icon" />
                  <span>Click Me</span>
                </div>
              </div>
              <div className="circle-glow"></div>
            </div>

            {/* Images Container */}
            <div className="images-container">
              {allImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-image ${isExpanded ? 'active' : ''}`}
                  style={{
                    ...getImagePosition(index, allImages.length),
                    transitionDelay: isExpanded ? `${index * 0.1}s` : `${(allImages.length - 1 - index) * 0.05}s`
                  }}
                  onClick={() => openImageModal(image)}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="image-overlay">
                    <div className="image-info">
                      <div className="image-year">{image.year}</div>
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                    </div>
                    <div className="expand-icon">
                      <FaExpand />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
       
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>
            
            <div className="modal-image-container">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            
            <div className="modal-image-info">
              <div className="modal-year-badge">{selectedImage.year}</div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;