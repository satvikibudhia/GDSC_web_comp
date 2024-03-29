import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation1 from './animation/1.json';
import animation2 from './animation/2.json';
import animation3 from './animation/3.json';
import animation4 from './animation/4.json';
import gdscImage from "./images/gdsc_sit.png";

function App() {
  const [animations, setAnimations] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const animationStyle = {
      position: 'absolute',
      width: '75%', // Increase size by 15%
      height: '75%', // Increase size by 15%
      opacity: 0.7,
    };

    const newAnimations = [
      { animationData: animation1, style: { ...animationStyle, top: '0', right: '-10%', zIndex: 0 } },
      //green
      { animationData: animation2, style: { ...animationStyle, bottom: '10%', right: '25%', transform: 'translateY(50%)', zIndex: 0 } },
      //blue
      { animationData: animation3, style: { ...animationStyle, top: '30%', left: '25%', transition: 'left 1s ease-in-out', marginLeft: '-7.5vw', transform: 'translateY(-50%)', zIndex: 0 } },
      //yellow
      { animationData: animation4, style: { ...animationStyle, bottom: '-20%', left: '0', transition: 'left 1s ease-in-out', marginLeft: '-7.5vw', zIndex: 0 } },
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
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
          position: "relative", // Add position relative
          zIndex: 2, // Increase z-index to place content above animations
        }}
      >
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flexDirection: windowWidth < 600 ? "column" : "row-reverse", // Change flexDirection to row-reverse for laptop view
            justifyContent: "flex-start",
            alignItems: "flex-start",
            maxWidth: "1200px",
            margin: "0 auto",
            height: windowWidth < 600 ? "auto" : "25vw",
            marginTop: "0",
            position: "relative", // Add position relative
            zIndex: 2, // Increase z-index to place content above animations
          }}
        >
          {/* Right Box (Image) */}
          <img
            src={gdscImage}
            alt="GDSC"
            style={{
              width: "auto",
              height: windowWidth < 600 ? "30vh" : "50vh",
              paddingLeft: "0", // Removed right padding
              paddingTop: windowWidth < 600 ? "10%" : "0%",
              maxWidth: "480px",
              borderRadius: "10px",
              marginLeft: windowWidth < 600 ? "0" : "5%", // Change marginLeft to 5% for laptop view
              position: "relative", // Add position relative
              zIndex: 2, // Increase z-index to place content above animations
            }}
          />

          {/* Left Box (Text) */}
          <div
            className="left-box"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "5%",
              paddingTop:"-5%",
              flex: "1",
              height: "100%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
              overflowY: "hidden", 
              position: "relative", // Add position relative
              zIndex: 2, // Increase z-index to place content above animations
            }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: windowWidth < 600 ? "3vw" : "1.5vw",
                marginBottom: windowWidth < 600 ? "1vw" : "20px",
                color:'grey',
                textAlign: "left",
              }}
            >
              About GDSC SIT
            </h1>

            {/* Updated Content */}
            <p
              style={{
                fontSize: windowWidth < 600 ? "2.65vw" : "1.2vw",
                marginBottom: windowWidth < 600 ? "1vw" : "3vw",
                color:'grey'
              }}
            >
            GDSC SIT is dedicated to fostering collaboration and
              innovation in technology. We strive to provide a platform for
              students to learn, grow, and create impactful projects together.
              With a focus on inclusivity and diversity, we aim to empower every
              member to explore their passions and contribute meaningfully to the
              tech industry.
            </p>
            <button
              onClick={() => window.location.href='/team'}
              style={{
                fontSize: "1rem",
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>
      {animations.map((anim, index) => (
        <Lottie key={index} animationData={anim.animationData} style={anim.style} />
      ))}
    </div>
  );
}

export default App;
