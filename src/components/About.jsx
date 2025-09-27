import React, { useRef, useEffect } from 'react';
import { 
  FaUsers, 
  FaRocket, 
  FaMicrochip, 
  FaGlobe, 
  FaCode, 
  FaLaptopCode, 
  FaTrophy, 
  FaNetworkWired 
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        
        {/* Section Header */}
        <div className="about-header" ref={headerRef}>
          
          <h2 className="section-title">
            The Premier <span className="gradient-text">Tech Extravaganza</span>
          </h2>
          <p className="section-subtitle">
            Where Innovation Meets Excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content" ref={contentRef}>
          <div className="content-text">
            <p className="main-description">
            <p className="section-subtitle">
            What is HASH?
            
          </p>
              HASH is the annual technical fest of the Department of Computer Science & Engineering 
              at Mar Baselios College of Engineering & Technology. A platform for students to showcase 
              their technical prowess, innovate, and compete with the best minds in the field.
            </p>
          </div>
          
          <div className="content-highlights">
            <div className="highlight-item">
              <FaCode className="highlight-icon" />
              <span>Hackathons & Coding Challenges</span>
            </div>
            <div className="highlight-item">
              <FaLaptopCode className="highlight-icon" />
              <span>Technical Workshops</span>
            </div>
            <div className="highlight-item">
              <FaTrophy className="highlight-icon" />
              <span>Exciting Prizes</span>
            </div>
            <div className="highlight-item">
              <FaNetworkWired className="highlight-icon" />
              <span>Networking Opportunities</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section" ref={statsRef}>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Participants</p>
          </div>
          <div className="stat-item">
            <FaMicrochip className="stat-icon" />
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Technical Events</p>
          </div>
          <div className="stat-item">
            <FaGlobe className="stat-icon" />
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Colleges</p>
          </div>
          <div className="stat-item">
            <FaRocket className="stat-icon" />
            <h3 className="stat-number">3</h3>
            <p className="stat-label">Days</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta" ref={ctaRef}>
          <div className="cta-background"></div>
          <div className="cta-content">
            <h3 className="cta-title">Ready to be part of HASH '26?</h3>
            <p className="cta-description">
              Join our Events and showcase your technical skills.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;