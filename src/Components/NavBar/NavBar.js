import React, { useState } from 'react';
import './NavBar.css';
import Logo from './logo.png';
import { useSpring, animated } from 'react-spring';
import { Nav } from '../Nav/Nav';

export const NavBar = (props) => {
  //States
  const [isHovering, handleHover] = useState(false);

  //Springs
  const magnifySpring = useSpring({
    height: isHovering ? '15vh' : '10vh',
    boxShadow: isHovering
      ? '0px 10px 10px 0px rgba(0, 0, 0, 0.3)'
      : '0px 10px 10px 0px rgba(0, 0, 0, 0.1)',
  });

  const fadeSpring = useSpring({
    opacity: isHovering ? '1' : '0',
  });

  return (
    <>
      <animated.div
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        style={{ ...magnifySpring }}
        className="container">
        <animated.img
          src={Logo}
          alt="locals only sound logo"
          width="205"
          height="37"
          className="logo"
        />
        <animated.a
          className="linkLeft styledText"
          href="#"
          style={{ ...fadeSpring }}>
          Home
        </animated.a>
        <animated.a
          className="linkLeft styledText"
          href="#"
          style={{ ...fadeSpring }}>
          Store
        </animated.a>
        <animated.a
          className="linkRight styledText"
          href="#"
          style={{ ...fadeSpring }}>
          Tour
        </animated.a>
        <animated.a
          className="linkRight styledText"
          href="#"
          style={{ ...fadeSpring }}>
          Tool
        </animated.a>
      </animated.div>
    </>
  );
};
