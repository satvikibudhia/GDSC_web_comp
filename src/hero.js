import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './ani.json';
import './style.css';
import herobg from './images/herobg.png';
import pic from './images/pic.png';

window.addEventListener('orientationchange', function() {
  setTimeout(function(){
      window.location.reload();
  }, 300);
});

const Abt = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showText, setShowText] = useState(false);
  const [showExpandedText, setShowExpandedText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleOrientationChange = () => {
      setTimeout(handleResize, 300);
    };

    handleResize();
    document.body.style.overflowX = 'hidden'; // Set overflowX to hidden

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const handleAnimationComplete = () => {
    setShowText(true);
    setTimeout(() => setShowExpandedText(true), 1000);
  };

  return (
    <div style={{ 
      width: dimensions.width, 
      height: dimensions.height, 
      backgroundImage: dimensions.width < 700 ? `url(${pic})` : `url(${herobg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative' 
    }}>
      <div style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute', 
        top: dimensions.width < 700 ? '0' : 0, 
        left: 0
      }}>
        <Lottie 
          animationData={animationData} 
          loop={false} 
          autoplay={true} 
          style={{ width: '100%', height: '100%' }}
          onComplete={handleAnimationComplete} 
        />
      </div>
      {!showExpandedText && (
        <div className="text-container" style={{ textAlign: 'center' }}>
          {/* Add your text content here */}
        </div>
      )}
      {showText && (
        <div className="text-container" style={{ textAlign: 'left', paddingTop: dimensions.width < 700 ? '30.5vh' : '5vw' }}>
          <div className={showExpandedText ? "expanded-text" : "gdsc-text"} style={{ lineHeight: "1.2", paddingLeft: dimensions.width < 700 ? "30.5vw" : "5vw" }}>
            {showExpandedText ? (
              <><b>
                <span className="red">G</span>oogle <span className="blue">D</span>evelopers <span className="green">S</span>tudent <span className="yellow">C</span>lub
                </b><br />
                <span className="blue" style={{ paddingTop: window.innerWidth < 700 ? "-30vw" : "0vw",fontSize: dimensions.width < 700 ? "4.3vw" : "1.6vw", align:'center' }}>
                  Symbiosis Institute of Technology Chapter
                </span>
              </>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                paddingRight: window.innerWidth < 700 ? "20.5vw" : "5vw",
                paddingBottom: window.innerWidth < 700 ? "30.5vw" : "5vw"
              }}><b>
                <span className="red">G</span>
                <span className="blue">D</span>
                <span className="green">S</span>
                <span className="yellow">C</span></b><br/>
                <span className="blue" style={{fontSize: window.innerWidth < 700 ? "4.5vw" : "1.2vw"}} >
                  Symbiosis Institute of Technology Chapter
                </span>
                <br />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Abt;
