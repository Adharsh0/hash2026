import React from 'react';
import './ParticlesBackground.css';

const ParticleBackground = ({ intensity = 50, color = 'rgba(100, 181, 246, 0.6)' }) => {
  return (
    <div className="particle-background">
      {[...Array(intensity)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 20}s`,
            background: color
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;