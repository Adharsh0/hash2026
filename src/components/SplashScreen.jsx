import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onSplashEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Splash duration (2.5 sec)

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onSplashEnd(); // Notify parent to show main content
    }, 3500); // Match with CSS transition duration

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [onSplashEnd]);

  return (
    <>
      {isVisible && (
        <div className={`splash-screen ${fadeOut ? "slide-out" : ""}`}>
          <img src="/splash.png" alt="HASH Logo" className="splash-logo" />
        </div>
      )}
    </>
  );
};

export default SplashScreen;