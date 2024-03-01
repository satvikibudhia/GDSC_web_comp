import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './ani.json';
import './App.css'; // Import your CSS file
import herobg from './images/herobg.png';
import pic from './images/pic.png'; // Assuming you have an image named pic for smaller screens

const App = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showText, setShowText] = useState(false);
  const [showExpandedText, setShowExpandedText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleAnimationComplete = () => {
    // Animation has finished playing, show the text
    setShowText(true);
    // Enable scrolling downward
    document.body.style.overflowY = 'scroll';
    // After a delay, show expanded text
    setTimeout(() => setShowExpandedText(true), 1000);
  };

  return (
    <div style={{ 
      width: dimensions.width, 
      height: dimensions.height, 
      backgroundImage: dimensions.width < 700 ? `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${pic})` : `url(${herobg})`, 
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      backgroundRepeat: 'no-repeat' // Prevent repeating the background image
    }}>
      <Lottie 
        animationData={animationData} 
        loop={false} 
        autoplay={true} 
        style={{ width: '100%', height: '100%' }}
        onComplete={handleAnimationComplete} 
      />
      {!showExpandedText && (
        <div className="text-container">
        </div>
      )}
      {showText && (
        <div className="text-container">
          <div className={showExpandedText ? "expanded-text" : "gdsc-text"}>
            {showExpandedText ? (
              <>
                <span className="red">G</span>
                oogle <span className="blue">D</span>evelopers <span className="green">S</span>tudent <span className="yellow">C</span>lub
              </>
            ) : (
              <>
                <span className="red">G</span>
                <span className="blue">D</span>
                <span className="green">S</span>
                <span className="yellow">C</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
