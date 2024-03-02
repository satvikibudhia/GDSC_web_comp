import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation1 from './animation/1.json';
import animation2 from './animation/2.json';
import animation3 from './animation/3.json';
import animation4 from './animation/4.json';

function App() {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const animationStyle = {
      position: 'fixed',
      width: '75%', // Increase size by 15%
      height: '75%', // Increase size by 15%
      opacity: 0.7,
    };

    const newAnimations = [
      //red
      { animationData: animation1, style: { ...animationStyle, top: '0', right: '0', marginRight: '-7.5vw' } },
      //green
      { animationData: animation2, style: { ...animationStyle, bottom: '10%', right: '25%', marginRight: '-7.5vw', transform: 'translateY(50%)' } },
      //blue
      { animationData: animation3, style: { ...animationStyle, top: '20%', left: '25%', transition: 'left 1s ease-in-out', marginLeft: '-7.5vw', transform: 'translateY(-50%)' } },
      //yellow
      { animationData: animation4, style: { ...animationStyle, bottom: '5%', left: '0', transition: 'left 1s ease-in-out', marginLeft: '-7.5vw' } },
    ];

    setAnimations(newAnimations);
  }, []);

  useEffect(() => {
    const updateAnimationPositions = () => {
      setAnimations(prevAnimations => {
        return prevAnimations.map((anim, index) => {
          const movement = (index % 2 === 0) ? '5vw' : '-5vw'; // Slight left-right movement
          return {
            ...anim,
            style: {
              ...anim.style,
              left: (anim.style.left) ? `calc(0% + ${movement})` : null,
              right: (anim.style.right) ? `calc(0% + ${movement})` : null,
            },
          };
        });
      });
    };

    const animationInterval = setInterval(updateAnimationPositions, 1000); // Update interval time as needed

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div>
      <div style={{ position: 'relative', zIndex: 1 }}>
      </div>
      {animations.map((anim, index) => (
        <Lottie key={index} animationData={anim.animationData} style={anim.style} />
      ))}
    </div>
  );
}

export default App;
