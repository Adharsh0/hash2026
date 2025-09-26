import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left: Logo */}
        <div className="logo-container">
          <img src="about1.png" alt="HASH Logo" className="nav-logo" />
        </div>

        {/* Right: Nav Links */}
        <div className="nav-menu">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#footer" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;