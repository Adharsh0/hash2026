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
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const treeRef = useRef(null);

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

  const treeStructure = {
    root: {
      id: 'root',
      title: 'HASH Events',
      icon: FaTrophy,
      color: '#64b5f6',
      level: 0,
      children: ['technical', 'non-technical']
    },
    technical: {
      id: 'technical',
      title: 'Technical Events',
      icon: FaCode,
      color: '#4fc3f7',
      level: 1,
      children: ['programming', 'cybersecurity', 'design', 'workshop', 'puzzle']
    },
    'non-technical': {
      id: 'non-technical',
      title: 'Non-Technical Events',
      icon: FaGamepad,
      color: '#81c784',
      level: 1,
      children: ['gaming', 'innovation', 'sports', 'creative']
    },
    programming: {
      id: 'programming',
      title: 'Programming',
      icon: FaCode,
      color: '#42a5f5',
      level: 2,
      children: events.filter(e => e.subCategory === 'programming').map(e => e.id)
    },
    cybersecurity: {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: FaShieldAlt,
      color: '#ef5350',
      level: 2,
      children: events.filter(e => e.subCategory === 'cybersecurity').map(e => e.id)
    },
    design: {
      id: 'design',
      title: 'Design',
      icon: FaPalette,
      color: '#ab47bc',
      level: 2,
      children: events.filter(e => e.subCategory === 'design').map(e => e.id)
    },
    workshop: {
      id: 'workshop',
      title: 'Workshops',
      icon: FaGraduationCap,
      color: '#f06292',
      level: 2,
      children: events.filter(e => e.subCategory === 'workshop').map(e => e.id)
    },
    puzzle: {
      id: 'puzzle',
      title: 'Puzzle & Mystery',
      icon: FaBrain,
      color: '#26c6da',
      level: 2,
      children: events.filter(e => e.subCategory === 'puzzle').map(e => e.id)
    },
    gaming: {
      id: 'gaming',
      title: 'Gaming',
      icon: FaGamepad,
      color: '#66bb6a',
      level: 2,
      children: events.filter(e => e.subCategory === 'gaming').map(e => e.id)
    },
    innovation: {
      id: 'innovation',
      title: 'Innovation',
      icon: FaLightbulb,
      color: '#ffb74d',
      level: 2,
      children: events.filter(e => e.subCategory === 'innovation').map(e => e.id)
    },
    sports: {
      id: 'sports',
      title: 'Sports & Fun',
      icon: FaFutbol,
      color: '#a1c181',
      level: 2,
      children: events.filter(e => e.subCategory === 'sports').map(e => e.id)
    },
    creative: {
      id: 'creative',
      title: 'Creative',
      icon: FaCamera,
      color: '#ff8a65',
      level: 2,
      children: events.filter(e => e.subCategory === 'creative').map(e => e.id)
    }
  };

  // Auto-scroll when expanding nodes
  const scrollToView = (nodeId) => {
    setTimeout(() => {
      const element = document.getElementById(`node-${nodeId}`);
      if (element && sectionRef.current) {
        const rect = element.getBoundingClientRect();
        const offset = window.innerHeight * 0.3;
        window.scrollTo({
          top: window.scrollY + rect.top - offset,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
      // Collapse all children
      const collapseChildren = (id) => {
        const node = treeStructure[id];
        if (node && node.children) {
          node.children.forEach(childId => {
            newExpanded.delete(childId);
            collapseChildren(childId);
          });
        }
      };
      collapseChildren(nodeId);
    } else {
      newExpanded.add(nodeId);
      scrollToView(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  const handleImageError = (e) => {
    e.target.src = 'splash.png';
  };

  // Scroll animation for header
  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerElement.classList.add('animated');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(headerElement);

    return () => {
      observer.unobserve(headerElement);
    };
  }, []);

  // Scroll animation effect for tree nodes
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.tree-node, .event-branch');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial expand root node
  useEffect(() => {
    setExpandedNodes(new Set(['root']));
  }, []);

  const renderNode = (nodeId, depth = 0) => {
    const node = treeStructure[nodeId];
    if (!node) return null;

    const isExpanded = expandedNodes.has(nodeId);
    const hasChildren = node.children && node.children.length > 0;
    const IconComponent = node.icon;

    return (
      <div key={nodeId} className={`tree-node level-${depth}`} id={`node-${nodeId}`}>
        <div className="node-container">
          {/* Connection Lines */}
          {depth > 0 && (
            <>
              <div className="connection-line vertical" />
              <div className="connection-line horizontal" />
            </>
          )}
          
          {/* Node Circle */}
          <div 
            className={`node-circle ${isExpanded ? 'expanded' : ''}`}
            style={{ 
              '--node-color': node.color,
              '--node-size': `${Math.max(80 - depth * 10, 50)}px`
            }}
            onClick={() => hasChildren && toggleNode(nodeId)}
          >
            <IconComponent className="node-icon" />
            {hasChildren && (
              <div className="expand-indicator">
                {isExpanded ? <FaMinus /> : <FaPlus />}
              </div>
            )}
          </div>
          
          {/* Node Label */}
          <div className="node-label" style={{ color: node.color }}>
            {node.title}
            {hasChildren && (
              <span className="node-count">
                ({node.children.length})
              </span>
            )}
          </div>
        </div>
        
        {/* Children */}
        {isExpanded && hasChildren && (
          <div className="node-children">
            {node.children.map(childId => {
              // If child is an event ID (number), render event card
              if (typeof childId === 'number') {
                const event = events.find(e => e.id === childId);
                return event ? renderEventCard(event, depth + 1) : null;
              }
              // Otherwise, render as node
              return renderNode(childId, depth + 1);
            })}
          </div>
        )}
      </div>
    );
  };

  const renderEventCard = (event, depth) => {
    return (
      <div 
        key={`event-${event.id}`} 
        className={`event-branch level-${depth}`}
        onClick={() => openEventDetails(event)}
      >
        <div className="branch-connection">
          <div className="connection-line vertical-short" />
          <div className="connection-line horizontal-short" />
        </div>
        
        <div className="event-card-mini">
          <div className="event-poster-mini">
            <img 
              src={event.poster} 
              alt={event.title}
              onError={handleImageError}
              loading="lazy"
            />
            <div className="event-overlay-mini">
              <div className="event-info-mini">
                <FaTrophy className="prize-icon" />
                <span>{event.prizePool}</span>
              </div>
            </div>
          </div>
          
          {/* Removed title and date from front view */}
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="events-section" ref={sectionRef}>
      <div className="events-container">
        
        {/* Section Header */}
        <div className="events-header scroll-animate" ref={headerRef}>
          <div className="section-badge">
            <FaTrophy className="badge-icon" />
            <span className="badge-text">HASH Events Tree</span>
          </div>
          <h2 className="section-title3">
            Explore <span className="gradient-text">Interactive Events</span>
          </h2>
          <p className="section-subtitle3">
            Navigate through our events like a tree structure - click nodes to expand and discover
          </p>
        </div>

        {/* Interactive Tree */}
        <div className="events-tree" ref={treeRef}>
          {renderNode('root')}
        </div>

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
            
            {/* Mobile Close Button */}
            <button 
              className="mobile-close-btn"
              onClick={closeEventDetails}
              aria-label="Close modal"
            >
              <FaTimes className="close-icon" />
              <span>Close</span>
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