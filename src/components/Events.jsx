import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaTrophy, 
  FaUsers,
  FaExternalLinkAlt,
  FaTimes
} from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const eventsRef = useRef(null);

  const events = [
    {
      id: 1,
      title: "CodeStorm",
      poster: "splash.png",
      date: "March 15, 2026",
      time: "10:00 AM - 6:00 PM",
      prizePool: "₹50,000",
      participants: "200+",
      description: "An intense 8-hour coding marathon where developers compete to solve complex algorithmic challenges and build innovative solutions. Participants will face real-world problems and have the opportunity to showcase their skills to industry experts.",
      registrationLink: "#register-codestorm"
    },
    {
      id: 2,
      title: "AI Hackathon",
      poster: "splash.png",
      date: "March 16, 2026",
      time: "9:00 AM - 9:00 PM",
      prizePool: "₹75,000",
      participants: "150+",
      description: "24-hour hackathon focused on creating AI-powered solutions for real-world problems. Teams will compete to build the most innovative AI applications using machine learning, computer vision, and natural language processing.",
      registrationLink: "#register-ai-hackathon"
    },
    {
      id: 3,
      title: "Web Dev Championship",
      poster: "/posters/webdev.jpg",
      date: "March 17, 2026",
      time: "11:00 AM - 5:00 PM",
      prizePool: "₹40,000",
      participants: "180+",
      description: "Showcase your frontend and backend skills in this comprehensive web development competition. Build stunning, responsive applications using modern frameworks and technologies.",
      registrationLink: "#register-webdev"
    },
    {
      id: 4,
      title: "Cyber Security CTF",
      poster: "/posters/cybersec.jpg",
      date: "March 18, 2026",
      time: "2:00 PM - 8:00 PM",
      prizePool: "₹60,000",
      participants: "120+",
      description: "Test your cybersecurity skills in this Capture The Flag competition. Solve security challenges and demonstrate your ethical hacking abilities in a controlled environment.",
      registrationLink: "#register-ctf"
    },
    {
      id: 5,
      title: "Mobile App Challenge",
      poster: "/posters/mobile.jpg",
      date: "March 19, 2026",
      time: "10:00 AM - 6:00 PM",
      prizePool: "₹45,000",
      participants: "160+",
      description: "Create innovative mobile applications for Android and iOS. Focus on user experience, performance, and creative problem-solving using modern mobile development frameworks.",
      registrationLink: "#register-mobile"
    },
    {
      id: 6,
      title: "Data Science Olympics",
      poster: "/posters/datascience.jpg",
      date: "March 20, 2026",
      time: "9:00 AM - 7:00 PM",
      prizePool: "₹55,000",
      participants: "140+",
      description: "Analyze complex datasets and build predictive models. Compete in various data science challenges from machine learning to data visualization and statistical analysis.",
      registrationLink: "#register-datascience"
    },
    {
      id: 7,
      title: "UI/UX Design Sprint",
      poster: "/posters/design.jpg",
      date: "March 21, 2026",
      time: "10:00 AM - 4:00 PM",
      prizePool: "₹35,000",
      participants: "100+",
      description: "Design intuitive user interfaces and create exceptional user experiences. Showcase your creativity and design thinking skills through prototyping and user testing.",
      registrationLink: "#register-design"
    },
    {
      id: 8,
      title: "Blockchain Innovation",
      poster: "/posters/blockchain.jpg",
      date: "March 22, 2026",
      time: "1:00 PM - 7:00 PM",
      prizePool: "₹65,000",
      participants: "130+",
      description: "Build decentralized applications and explore blockchain technology. Create innovative solutions using smart contracts and distributed ledgers for real-world applications.",
      registrationLink: "#register-blockchain"
    }
  ];

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate, .event-card');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for initial animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add staggered animation for header elements
          if (entry.target.classList.contains('events-header')) {
            setTimeout(() => {
              const badge = entry.target.querySelector('.section-badge');
              const title = entry.target.querySelector('.section-title1');
              const subtitle = entry.target.querySelector('.section-subtitle1');
              
              if (badge) badge.style.animationDelay = '0.2s';
              if (title) title.style.animationDelay = '0.3s';
              if (subtitle) subtitle.style.animationDelay = '0.4s';
            }, 100);
          }
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);

    return () => observer.disconnect();
  }, []);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'splash.png'; // Fallback image
  };

  return (
    <section id="events" className="events-section" ref={sectionRef}>
      <div className="events-container">
        
        {/* Section Header with scroll animation */}
        <div className="events-header scroll-animate" ref={headerRef}>
          <div className="section-badge">
            <FaTrophy className="badge-icon" />
            <span className="badge-text">HASH Events</span>
          </div>
          <h2 className="section-title2">
            Compete in <span className="gradient-text">Epic Challenges</span>
          </h2>
          <p className="section-subtitle2">
            Discover all our exciting tech competitions and hackathons designed to push your limits
          </p>
        </div>

        {/* Events Grid with scroll animations */}
        <div className="events-grid" ref={eventsRef}>
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="event-card scroll-animate-scale"
              onClick={() => openEventDetails(event)}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="event-poster">
                <img 
                  src={event.poster} 
                  alt={event.title}
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="event-overlay">
                  <div className="event-quick-info">
                    <div className="quick-info-item prize-info">
                      <FaTrophy className="info-icon" />
                      <span className="info-text">{event.prizePool}</span>
                    </div>
                    <div className="quick-info-item participants-info">
                      <FaUsers className="info-icon" />
                      <span className="info-text">{event.participants}</span>
                    </div>
                  </div>
                  <div className="event-hover-content">
                    <div className="hover-title">Click to View Details</div>
                    <div className="hover-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="event-content">
                <div className="event-title">
                  <h3 className="event-name">{event.title}</h3>
                  <div className="event-date">
                    <FaCalendarAlt className="date-icon" />
                    <span className="date-text">{event.date}</span>
                  </div>
                </div>
                <div className="event-time">
                  <FaClock className="time-icon" />
                  <span className="time-text">{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading state for events */}
        {events.length === 0 && (
          <div className="events-loading">
            <div className="loading-spinner"></div>
            <p>Loading exciting events...</p>
          </div>
        )}

      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeEventDetails}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={closeEventDetails}
              aria-label="Close modal"
            >
              <FaTimes className="close-icon" />
            </button>
            
            <div className="modal-content">
              <div className="modal-poster">
                <img 
                  src={selectedEvent.poster} 
                  alt={selectedEvent.title}
                  onError={handleImageError}
                />
                <div className="modal-poster-overlay">
                </div>
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2 className="modal-title">{selectedEvent.title}</h2>
                  <div className="modal-subtitle">Tech Competition</div>
                </div>
                
                <div className="modal-info-grid">
                  <div className="info-item date-info">
                    <div className="info-icon-container">
                      <FaCalendarAlt className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Event Date</span>
                      <span className="info-value">{selectedEvent.date}</span>
                    </div>
                  </div>
                  
                  <div className="info-item time-info">
                    <div className="info-icon-container">
                      <FaClock className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Time Duration</span>
                      <span className="info-value">{selectedEvent.time}</span>
                    </div>
                  </div>
                  
                  <div className="info-item prize-info">
                    <div className="info-icon-container">
                      <FaTrophy className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Total Prize Pool</span>
                      <span className="info-value">{selectedEvent.prizePool}</span>
                    </div>
                  </div>
                  
                  <div className="info-item participants-info">
                    <div className="info-icon-container">
                      <FaUsers className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Expected Participants</span>
                      <span className="info-value">{selectedEvent.participants}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-description">
                  <div className="description-header">
                    <FaTrophy className="description-icon" />
                    <h4 className="description-title">About the Event</h4>
                  </div>
                  <div className="description-content">
                    <p>{selectedEvent.description}</p>
                    <div className="event-features">
                      <span className="feature-tag">Competitive</span>
                      <span className="feature-tag">Learning</span>
                      <span className="feature-tag">Networking</span>
                      <span className="feature-tag">Prizes</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="register-btn primary-btn"
                    onClick={() => {
                      window.open(selectedEvent.registrationLink, '_blank');
                      closeEventDetails();
                    }}
                  >
                    <span className="btn-text">Register Now</span>
                    <FaExternalLinkAlt className="btn-icon" />
                  </button>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </section>
  );
};

export default Events;