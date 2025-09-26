import React from 'react';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const events = [
    { name: 'CodeStorm', href: '#codestorm' },
    { name: 'AI Hackathon', href: '#ai-hackathon' },
    { name: 'Web Dev Championship', href: '#webdev' },
    { name: 'Cyber Security CTF', href: '#ctf' }
  ];

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/hashevents', name: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/hashevents', name: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/hashevents', name: 'GitHub' },
    { icon: FaInstagram, href: 'https://instagram.com/hashevents', name: 'Instagram' }
  ];

  return (
    <footer className="footer-section" id="footer">
      {/* Background Image with Dark Overlay */}
      <div className="footer-background">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>
      </div>
      
      {/* Background Effects */}
      <div className="footer-bg-effects">
        <div className="footer-particle"></div>
        <div className="footer-particle"></div>
        <div className="footer-particle"></div>
      </div>
      
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="navbarlogo.png" 
                alt="HASH Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback">
                <span className="logo-text">HASH</span>
              </div>
            </div>
            <p className="footer-description">
              Bridging innovation and technology through epic coding challenges and hackathons. 
              Join us in shaping the future of tech at Mar Baselios College Of Engineering & Technology.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="links-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className="footer-links">
            <h3 className="links-title">Events</h3>
            <ul className="links-list">
              {events.map((event, index) => (
                <li key={index}>
                  <a href={event.href} className="footer-link">
                    {event.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="links-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Department of Computer Science & Engineering<br />
                Mar Baselios College Of Engineering & Technology<br />
                Trivandrum, Kerala</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:hash@mbcet.ac.in">hash@mbcet.ac.in</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} HASH '26 - Mar Baselios College Of Engineering & Technology. 
                Made with <FaHeart className="heart-icon" /> by the developer community
              </p>
            </div>
            <div className="footer-legal">
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <a href="#terms" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;