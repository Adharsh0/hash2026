// GlobalEffects.js
import React, { useEffect, useState } from 'react';

const GlobalEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Create custom cursor elements
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    cursor.className = 'custom-cursor';
    follower.className = 'cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    // Update cursor position
    const updateCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        follower.style.left = e.clientX - 20 + 'px';
        follower.style.top = e.clientY - 20 + 'px';
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', updateCursor);
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (follower.parentNode) follower.parentNode.removeChild(follower);
    };
  }, []);

  return (
    <>
      {/* Global Particle Background */}
      <div className="global-particle-background">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="global-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Global Interactive Mouse Glow */}
      <div 
        className="global-mouse-glow"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`
        }}
      />
    </>
  );
};

export default GlobalEffects;