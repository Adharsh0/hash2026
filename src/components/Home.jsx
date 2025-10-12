import React, { useEffect, useState } from 'react';
import { FaCode, FaChevronDown, FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Enhanced Particle Background */}
      <div className="particle-background">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Glow Effect */}
      <div 
        className="mouse-glow"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 181, 246, 0.1), transparent 40%)`
        }}
      />
      
      <div className="home-container">
        <div className="home-content">
          <div className="content-left">
           
            <h1 className="hero-title">
              <span className="title-line">IT'S</span>
              <span className="title-line gradient-text">HASH '26</span>
            </h1>
            
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

           
          </div>
          
          <div className="content-right">
            <div className="logo-container-main">
              
              
              <div className="main-image-container">
                <img 
                  src="grad.png"
                  alt="HASH Tech Fest 2026"
                  className="main-image"
                />
                <div className="image-glow"></div>
              </div>
              
              <div className="tech-elements">
                <div className="tech-dot" style={{ top: '10%', left: '15%' }}></div>
                <div className="tech-dot" style={{ top: '70%', right: '10%' }}></div>
                <div className="tech-line" style={{ top: '30%', left: '5%' }}></div>
                <div className="tech-line" style={{ bottom: '20%', right: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;