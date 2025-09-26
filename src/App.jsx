import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css'
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import GlobalEffects from "./components/GlobalEffects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // keep splash for 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Global Effects - Always rendered but hidden during splash */}
      <GlobalEffects />
      
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Events />
          <Gallery />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;