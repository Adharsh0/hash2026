import React, { useEffect, useState } from 'react';
import { FaCode, FaChevronDown, FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Set visibility for animations
    setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      {/* Particle Background Component */}
      <ParticlesBackground intensity={50} color="rgba(100, 181, 246, 0.6)" />
      
      {/* Interactive Glow Effect */}
      <div 
        className="mouse-glow"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 181, 246, 0.1), transparent 40%)`
        }}
      />
      
      <div className="home-container">
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          <div className="content-left">
            {/* Hero Badge */}
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Annual Tech Fest 2026</span>
            </div>
            
            {/* Main Title */}
            <h1 className="hero-title">
              <span className="title-line">IT'S</span>
              <span className="title-line gradient-text">HASH '26</span>
            </h1>
            
            {/* Event Details */}
            <div className="event-details">
              <div className="detail-item">
                <FaCalendarAlt className="detail-icon" />
                <span>10th October 2026</span>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <span>Department of Computer Science & Engineering</span>
              </div>
              <div className="detail-subtitle">
                Mar Baselios College Of Engineering & Technology (Autonomous), Trivandrum
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore Events</span>
                <div className="btn-glow"></div>
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View Gallery</span>
                <FaChevronDown className="btn-arrow" />
              </button>
            </div>
          </div>
          
          <div className="content-right">
            <div className="logo-container-main">
              {/* Floating Rings */}
              <div className="floating-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              
              {/* Main Image */}
              <div className="main-image-container">
                <img 
                  src="home.png"
                  alt="HASH Tech Fest 2026"
                  className="main-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMDAwIi8+CjxwYXRoIGQ9Ik0yNTAgMTUwTDM1MCAyNTBMMjUwIDM1MEwxNTAgMjUwTDI1MCAxNTBaIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NGI1ZjYiIHN0cm9rZS13aWR0aD0iMTAiLz4KPGNpcmNsZSBjeD0iMjUwIiBjeT0iMjUwIiByPSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjRiNWY2IiBzdHJva2Utd2lkdGg9IjgiLz4KPC9zdmc+';
                  }}
                />
                <div className="image-glow"></div>
              </div>
              
              {/* Tech Elements */}
              <div className="tech-elements">
                <div className="tech-dot" style={{ top: '10%', left: '15%' }}></div>
                <div className="tech-dot" style={{ top: '70%', right: '10%' }}></div>
                <div className="tech-line" style={{ top: '30%', left: '5%' }}></div>
                <div className="tech-line" style={{ bottom: '20%', right: '5%' }}></div>
                <div className="tech-dot" style={{ top: '20%', right: '20%' }}></div>
                <div className="tech-dot" style={{ bottom: '30%', left: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToNext}>
          <span className="scroll-text">Scroll to Explore</span>
          <FaChevronDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Home;