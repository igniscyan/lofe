import React, { useState } from 'react';
import './Preloader.css';
import Logo from '../NavBar/logo.png';
import { useSpring, animated } from 'react-spring';

const style = {
  backgroundColor: '#000',
  width: '100vw',
  position: 'fixed',
  boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.2)',
};

export const Preloader = (props) => {
  //States
  const [isFullscreen, setFullscreen] = useState(true);

  //Springs
  const killSpring = useSpring({
    height: isFullscreen ? '100vh' : '9vh',
    zIndex: isFullscreen ? 20 : 10,
  });

  //Event Listeners
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setFullscreen(false);
    }
  };

  //Should add a setTimeout() to this, so that after a couple of seconds from the isFullscreen value change, we remove this component altogether.

  return (
    <>
      <animated.div
        onClick={() => setFullscreen(false)}
        onWheel={handleWheel}
        style={{ ...killSpring, ...style }}
        className="flex-container">
        <animated.img
          src={Logo}
          alt="locals only sound logo"
          width="205"
          height="37"
          className="flex-item"
        />
      </animated.div>
    </>
  );
};
