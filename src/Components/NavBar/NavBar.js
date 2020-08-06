import React, { useState } from 'react';
import './NavBar.css';
import Logo from './logo.png';
import { useSpring, animated } from 'react-spring';
import { Nav } from '../Nav/Nav';

const style = {
  backgroundColor: '#000000',
  width: '100vw',
  zIndex: 15,
  position: 'fixed',
};

export const NavBar = (props) => {
  //States
  const [isHovering, handleHover] = useState(false);

  //Springs
  const magnifySpring = useSpring({
    height: isHovering ? '90px' : '70px',
    boxShadow: isHovering
      ? '0px 10px 10px 0px rgba(0, 0, 0, 0.3)'
      : '0px 10px 10px 0px rgba(0, 0, 0, 0.1)',
  });

  return (
    <>
      <animated.div
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        style={{ ...magnifySpring, ...style }}
        className="container">
        <animated.img
          src={Logo}
          alt="locals only sound logo"
          width="205"
          height="37"
          className="logo"
        />
        <div className="linkleft styledText">test</div>
      </animated.div>
    </>
  );
};
