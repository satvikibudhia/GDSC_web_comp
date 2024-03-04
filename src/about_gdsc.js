import React, { useEffect, useState } from 'react';
import About from './about.js';
import About2 from './about2.js';

const MainPage = () => {
  const [fontSize, setFontSize] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setFontSize(1.4);
      } else {
        setFontSize(4);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontSize: `${fontSize}vw`, textAlign: 'center' }}>
      <h1>About the community!</h1>
      <About />
      <About2 />
    </div>
  );
}

export default MainPage;
