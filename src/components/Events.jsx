import React, { useState, useRef, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaTrophy, 
  FaUsers,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaGamepad,
  FaLightbulb,
  FaGraduationCap,
  FaShieldAlt,
  FaBrain,
  FaCamera,
  FaFutbol,
  FaPalette,
  FaSearch,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlides, setCurrentSlides] = useState({
    programming: 0,
    cybersecurity: 0,
    design: 0,
    workshop: 0,
    puzzle: 0,
    gaming: 0,
    innovation: 0,
    sports: 0,
    creative: 0
  });

  // Add keyboard event listener for ESC key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27 && selectedEvent) {
        closeEventDetails();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedEvent]);

  const events = [
    // Technical Events
    {
      id: 1,
      title: "Capture The Flag",
      category: "technical",
      subCategory: "cybersecurity",
      poster: "splash.png",
      date: "March 15, 2026",
      time: "10:00 AM - 6:00 PM",
      prizePool: "₹25,000",
      participants: "100+",
      description: "A cybersecurity challenge where participants solve real-world security puzzles. It enhances problem-solving, teamwork, and ethical hacking skills through various security challenges and penetration testing scenarios.",
      registrationLink: "#register-ctf",
      tags: ["Cybersecurity", "Problem Solving", "Ethical Hacking"]
    },
    {
      id: 2,
      title: "BLIND CODE",
      category: "technical",
      subCategory: "programming",
      poster: "splash.png",
      date: "March 16, 2026",
      time: "2:00 PM - 5:00 PM",
      prizePool: "₹20,000",
      participants: "80+",
      description: "Contestants replicate outputs by coding without a compiler. This strengthens logical thinking, precision, and debugging ability while testing your coding skills under pressure.",
      registrationLink: "#register-blind-code",
      tags: ["Coding", "Logic", "Debugging"]
    },
    {
      id: 3,
      title: "DECATHLON",
      category: "technical",
      subCategory: "programming",
      poster: "splash.png",
      date: "March 17, 2026",
      time: "9:00 AM - 6:00 PM",
      prizePool: "₹40,000",
      participants: "200+",
      description: "A series of 10 technical mini-challenges across coding, puzzles, and problem-solving. It sharpens adaptability, technical knowledge, and time management across multiple domains.",
      registrationLink: "#register-decathlon",
      tags: ["Multi-Tech", "Problem Solving", "Adaptability"]
    },
    {
      id: 4,
      title: "Technical Treasure Hunt",
      category: "technical",
      subCategory: "puzzle",
      poster: "splash.png",
      date: "March 18, 2026",
      time: "11:00 AM - 4:00 PM",
      prizePool: "₹15,000",
      participants: "120+",
      description: "A tech-themed murder mystery hunt where clues and puzzles lead to solving a mystery. Students develop analytical skills and teamwork in a fun, engaging setting.",
      registrationLink: "#register-treasure-hunt",
      tags: ["Mystery", "Teamwork", "Analytics"]
    },
    {
      id: 12,
      title: "Figma Design Workshop",
      category: "technical",
      subCategory: "design",
      poster: "splash.png",
      date: "March 18, 2026",
      time: "10:00 AM - 4:00 PM",
      prizePool: "Certificates",
      participants: "60+",
      description: "Hands-on session introducing Figma basics, UI/UX design, and prototyping. Students gain design thinking and product-building skills for modern applications.",
      registrationLink: "#register-figma",
      tags: ["UI/UX", "Design", "Prototyping"]
    },
    {
      id: 13,
      title: "AI/ML Workshop",
      category: "technical",
      subCategory: "workshop",
      poster: "splash.png",
      date: "March 19, 2026",
      time: "9:00 AM - 5:00 PM",
      prizePool: "Certificates",
      participants: "80+",
      description: "An interactive workshop on Artificial Intelligence and Machine Learning. Equips students with practical knowledge of emerging technologies and hands-on experience.",
      registrationLink: "#register-aiml",
      tags: ["AI", "Machine Learning", "Practical"]
    },
    {
      id: 14,
      title: "Cybersecurity Workshop",
      category: "technical",
      subCategory: "cybersecurity",
      poster: "splash.png",
      date: "March 20, 2026",
      time: "11:00 AM - 6:00 PM",
      prizePool: "Certificates",
      participants: "70+",
      description: "Training on ethical hacking, system security, and safe digital practices. Students gain awareness of cyber risks and protective skills for the digital age.",
      registrationLink: "#register-cyber-workshop",
      tags: ["Ethical Hacking", "Security", "Digital Safety"]
    },
    // Non-Technical Events
    {
      id: 5,
      title: "VALORANT Online Battle",
      category: "non-technical",
      subCategory: "gaming",
      poster: "splash.png",
      date: "March 19, 2026",
      time: "6:00 PM - 10:00 PM",
      prizePool: "₹30,000",
      participants: "64 Teams",
      description: "A high-intensity 5v5 tactical shooter battle. Enhances communication, coordination, and reflexes in competitive esports environment.",
      registrationLink: "#register-valorant",
      tags: ["5v5", "Tactical", "Esports"]
    },
    {
      id: 6,
      title: "E-Football Competition",
      category: "non-technical",
      subCategory: "gaming",
      poster: "splash.png",
      date: "March 20, 2026",
      time: "3:00 PM - 8:00 PM",
      prizePool: "₹20,000",
      participants: "32 Players",
      description: "A digital football showdown testing gaming skills and strategy. Builds focus, agility, and tactical planning in virtual football matches.",
      registrationLink: "#register-efootball",
      tags: ["Football", "Strategy", "Gaming"]
    },
    {
      id: 7,
      title: "MINECRAFT Battle",
      category: "non-technical",
      subCategory: "gaming",
      poster: "splash.png",
      date: "March 21, 2026",
      time: "1:00 PM - 6:00 PM",
      prizePool: "₹18,000",
      participants: "50+",
      description: "Creative challenges inside Minecraft's virtual world. Students develop design, innovation, and collaborative problem-solving in block-building adventures.",
      registrationLink: "#register-minecraft",
      tags: ["Creative", "Building", "Collaboration"]
    },
    {
      id: 8,
      title: "BGMI Online Battle",
      category: "non-technical",
      subCategory: "gaming",
      poster: "splash.png",
      date: "March 22, 2026",
      time: "7:00 PM - 11:00 PM",
      prizePool: "₹35,000",
      participants: "100 Teams",
      description: "A thrilling battle royale where squads fight to survive. Encourages teamwork, strategy, and decision-making under pressure in intense combat scenarios.",
      registrationLink: "#register-bgmi",
      tags: ["Battle Royale", "Teamwork", "Strategy"]
    },
    {
      id: 9,
      title: "Gaming Room - LAN Party",
      category: "non-technical",
      subCategory: "gaming",
      poster: "splash.png",
      date: "March 15-22, 2026",
      time: "All Day",
      prizePool: "₹25,000",
      participants: "Open",
      description: "A dedicated gaming arena featuring PlayStations, high-end PCs, and next-gen gaming technologies. Experience competitive gaming while building strategic thinking and teamwork skills.",
      registrationLink: "#register-lan-party",
      tags: ["LAN Party", "Multiple Games", "Arena"]
    },
    {
      id: 10,
      title: "IDEATHON - Mission 2077",
      category: "non-technical",
      subCategory: "innovation",
      poster: "splash.png",
      date: "March 16, 2026",
      time: "10:00 AM - 8:00 PM",
      prizePool: "₹50,000",
      participants: "50 Teams",
      description: "An on-spot innovation challenge where teams brainstorm and develop creative solutions for future problems. Cultivates critical thinking, collaboration, and ideation under pressure.",
      registrationLink: "#register-ideathon",
      tags: ["Innovation", "Future Tech", "Problem Solving"]
    },
    {
      id: 11,
      title: "Idea Pitching - Project Conclave",
      category: "non-technical",
      subCategory: "innovation",
      poster: "splash.png",
      date: "March 17, 2026",
      time: "2:00 PM - 6:00 PM",
      prizePool: "₹40,000",
      participants: "30 Teams",
      description: "A platform to pitch ideas before a panel, similar to Shark Tank. Students gain entrepreneurial exposure, communication skills, and valuable industry feedback.",
      registrationLink: "#register-pitch",
      tags: ["Pitching", "Entrepreneurship", "Presentation"]
    },
    {
      id: 15,
      title: "FUTSAL Championship",
      category: "non-technical",
      subCategory: "sports",
      poster: "splash.png",
      date: "March 21, 2026",
      time: "8:00 AM - 6:00 PM",
      prizePool: "₹15,000",
      participants: "32 Teams",
      description: "Fast-paced three-a-side football matches. Students enjoy physical activity while fostering teamwork, sportsmanship, and competitive spirit.",
      registrationLink: "#register-futsal",
      tags: ["Football", "Team Sport", "Physical"]
    },
    {
      id: 16,
      title: "IPL Auction Simulation",
      category: "non-technical",
      subCategory: "sports",
      poster: "splash.png",
      date: "March 22, 2026",
      time: "4:00 PM - 8:00 PM",
      prizePool: "₹12,000",
      participants: "16 Teams",
      description: "A simulation of the IPL bidding process where participants build dream teams. Enhances decision-making, strategy, and financial planning skills.",
      registrationLink: "#register-ipl-auction",
      tags: ["Strategy", "Auction", "Team Building"]
    },
    {
      id: 17,
      title: "Picture Perfect",
      category: "non-technical",
      subCategory: "creative",
      poster: "splash.png",
      date: "March 15-22, 2026",
      time: "Ongoing",
      prizePool: "₹10,000",
      participants: "Open",
      description: "A photography contest capturing the best moments of the fest through creative lenses. Refine storytelling, observation, and artistic expression with prizes for impactful shots.",
      registrationLink: "#register-photography",
      tags: ["Photography", "Creative", "Storytelling"]
    }
  ];

  const subCategories = {
    technical: {
      programming: { name: "Programming", icon: FaCode, color: "#42a5f5" },
      cybersecurity: { name: "Cybersecurity", icon: FaShieldAlt, color: "#ef5350" },
      design: { name: "Design", icon: FaPalette, color: "#ab47bc" },
      workshop: { name: "Workshops", icon: FaGraduationCap, color: "#f06292" },
      puzzle: { name: "Puzzle & Mystery", icon: FaBrain, color: "#26c6da" }
    },
    'non-technical': {
      gaming: { name: "Gaming", icon: FaGamepad, color: "#66bb6a" },
      innovation: { name: "Innovation", icon: FaLightbulb, color: "#ffb74d" },
      sports: { name: "Sports & Fun", icon: FaFutbol, color: "#a1c181" },
      creative: { name: "Creative", icon: FaCamera, color: "#ff8a65" }
    }
  };

  // Find event by search query
  const findEventByQuery = (query) => {
    if (!query.trim()) return null;
    
    const lowerQuery = query.toLowerCase().trim();
    return events.find(event => 
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim()) {
      const foundEvent = findEventByQuery(query);
      if (foundEvent) {
        setTimeout(() => {
          const element = document.getElementById(`event-${foundEvent.id}`);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            element.classList.add('search-highlight');
            setTimeout(() => {
              element.classList.remove('search-highlight');
            }, 2000);
          }
        }, 300);
      }
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Filter events
  const getFilteredEvents = () => {
    if (!searchQuery.trim()) return events;
    
    const lowerQuery = searchQuery.toLowerCase();
    return events.filter(event => 
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  // Open event details
  const openEventDetails = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  // Close event details
  const closeEventDetails = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
    
    // Remove any active search highlights
    const highlightedElements = document.querySelectorAll('.search-highlight');
    highlightedElements.forEach(el => {
      el.classList.remove('search-highlight');
    });
  };

  const handleImageError = (e) => {
    e.target.src = 'splash.png';
  };

  // Slider functions
  const getEventsPerSlide = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  const nextSlide = (subCategory) => {
    const categoryEvents = getFilteredEvents().filter(e => e.subCategory === subCategory);
    const eventsPerSlide = getEventsPerSlide();
    const maxSlide = Math.max(0, Math.ceil(categoryEvents.length / eventsPerSlide) - 1);
    
    setCurrentSlides(prev => ({
      ...prev,
      [subCategory]: prev[subCategory] >= maxSlide ? 0 : prev[subCategory] + 1
    }));
  };

  const prevSlide = (subCategory) => {
    const categoryEvents = getFilteredEvents().filter(e => e.subCategory === subCategory);
    const eventsPerSlide = getEventsPerSlide();
    const maxSlide = Math.max(0, Math.ceil(categoryEvents.length / eventsPerSlide) - 1);
    
    setCurrentSlides(prev => ({
      ...prev,
      [subCategory]: prev[subCategory] <= 0 ? maxSlide : prev[subCategory] - 1
    }));
  };

   // Render event card
   const renderEventCard = (event) => {
    const isSearchMatch = searchQuery && 
      (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    return (
      <div 
        key={event.id}
        id={`event-${event.id}`}
        className={`event-card ${isSearchMatch ? 'search-match' : ''}`}
        onClick={() => openEventDetails(event)}
      >
        <div className="event-poster">
          <img 
            src={event.poster} 
            alt={event.title}
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        
        <div className="event-overlay">
          
          <div className="event-quick-info">
            <div className="quick-info-item">
              <FaTrophy />
              <span>{event.prizePool}</span>
            </div>
           
          </div>
          
          <div className="event-title">
            <h3 className="event-name">{event.title}</h3>
            
          </div>
          
          <div className="event-hover-content">
            <p className="hover-title">Click to view details</p>
            <div className="hover-arrow">↗</div>
          </div>
        </div>
      </div>
    );
  };

  // Render subcategory section
  const renderSubcategorySection = (category, subCat, subCatKey) => {
    const categoryEvents = getFilteredEvents().filter(e => e.subCategory === subCatKey);
    
    if (categoryEvents.length === 0) return null;

    const eventsPerSlide = getEventsPerSlide();
    const totalSlides = Math.ceil(categoryEvents.length / eventsPerSlide);
    const currentSlide = currentSlides[subCatKey] || 0;
    const startIndex = currentSlide * eventsPerSlide;
    const visibleEvents = categoryEvents.slice(startIndex, startIndex + eventsPerSlide);
    const IconComponent = subCat.icon;

    return (
      <div key={subCatKey} className="subcategory-section">
        <div className="subcategory-header">
          <div className="subcategory-icon" style={{ color: subCat.color }}>
            <IconComponent />
          </div>
          <div className="subcategory-info">
            <h3 className="subcategory-title">{subCat.name}</h3>
            <span className="subcategory-count">{categoryEvents.length} Events</span>
          </div>
        </div>
        
        <div className="events-slider-container">
          {totalSlides > 1 && (
            <>
              <button 
                className="slider-nav prev" 
                onClick={() => prevSlide(subCatKey)}
                aria-label="Previous slide"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="slider-nav next" 
                onClick={() => nextSlide(subCatKey)}
                aria-label="Next slide"
              >
                <FaChevronRight />
              </button>
            </>
          )}
          
          <div className="events-slider">
            <div 
              className="events-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="slide">
                  <div className="events-grid">
                    {categoryEvents
                      .slice(slideIndex * eventsPerSlide, (slideIndex + 1) * eventsPerSlide)
                      .map(event => renderEventCard(event))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {totalSlides > 1 && (
            <div className="slider-dots">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlides(prev => ({ ...prev, [subCatKey]: index }))}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render category section
  const renderCategorySection = (category) => {
    const categoryTitle = category === 'technical' ? 'Technical Events' : 'Non-Technical Events';
    const categoryIcon = category === 'technical' ? FaCode : FaGamepad;
    const categoryEvents = getFilteredEvents().filter(e => e.category === category);
    
    if (categoryEvents.length === 0) return null;

    return (
      <div className="category-section">
        <div className="category-header">
          <div className="category-badge">
            {React.createElement(categoryIcon, { className: "badge-icon" })}
            <span className="badge-text">{categoryTitle}</span>
          </div>
          <h2 className="category-title">{categoryTitle}</h2>
          <p className="category-description">
            {category === 'technical' 
              ? 'Showcase your programming, design, and technical skills'
              : 'Fun competitions, gaming tournaments, and creative challenges'
            }
          </p>
        </div>
        
        <div className="subcategories">
          {Object.entries(subCategories[category]).map(([subCatKey, subCat]) =>
            renderSubcategorySection(category, subCat, subCatKey)
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="events-section">
      <div className="events-container">
        
        {/* Section Header */}
        <div className="events-header">
          <div className="section-badge">
            <FaTrophy className="badge-icon" />
            <span className="badge-text">HASH Events</span>
          </div>
          <h1 className="section-title3">
            Explore <span className="gradient-text">Our Events</span>
          </h1>
          <p className="section-subtitle3">
            Compete, learn, and showcase your skills across various domains
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search events by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button 
                className="search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="search-results">
              <span className="search-info">
                {findEventByQuery(searchQuery) 
                  ? `Found "${findEventByQuery(searchQuery).title}"! Scrolling to event...` 
                  : 'No events found matching your search.'
                }
              </span>
            </div>
          )}
        </div>

        {/* Events Categories */}
        <div className="events-categories">
          {renderCategorySection('technical')}
          {renderCategorySection('non-technical')}
        </div>

        {/* No Events Found */}
        {getFilteredEvents().length === 0 && (
          <div className="no-events">
            <FaTrophy className="no-events-icon" />
            <h3>No events found</h3>
            <p>Try adjusting your search query</p>
          </div>
        )}

      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeEventDetails}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button - Only in the modal */}
            <button 
              className="modal-close"
              onClick={closeEventDetails}
              aria-label="Close event details (Press Escape key)"
              title="Close (Esc)"
            >
              <FaTimes />
            </button>
            
            <div className="modal-content">
              <div className="modal-poster">
                <img 
                  src={selectedEvent.poster} 
                  alt={selectedEvent.title}
                  onError={handleImageError}
                />
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2 className="modal-title">{selectedEvent.title}</h2>
                  <div className="modal-subtitle">
                    {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)} Event
                  </div>
                </div>
                
                <div className="modal-info-grid">
                  <div className="info-item">
                    <div className="info-icon-container">
                      <FaCalendarAlt className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Date</span>
                      <span className="info-value">{selectedEvent.date}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-container">
                      <FaClock className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Time</span>
                      <span className="info-value">{selectedEvent.time}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-container">
                      <FaTrophy className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Prize</span>
                      <span className="info-value">{selectedEvent.prizePool}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon-container">
                      <FaUsers className="info-icon" />
                    </div>
                    <div className="info-content">
                      <span className="info-label">Participants</span>
                      <span className="info-value">{selectedEvent.participants}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-description">
                  <h4 className="description-title">About the Event</h4>
                  <p>{selectedEvent.description}</p>
                  <div className="event-features">
                    {selectedEvent.tags.map((tag, index) => (
                      <span key={index} className="feature-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button 
                    className="register-btn"
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