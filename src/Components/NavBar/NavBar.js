import React, { useState } from 'react';
import './NavBar.css';
import Logo from './logo.png';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
  //States
  const [isHovering, handleHover] = useState(false);
  const [homeHovering, handleHomeHover] = useState(false);
  // const [logoHovering, handleLogoHover] = useState(false);
  const [storeHovering, handleStoreHover] = useState(false);
  const [tourHovering, handleTourHover] = useState(false);
  const [toolHovering, handleToolHover] = useState(false);

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

  const homeSpring = useSpring({
    transform: homeHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: isHovering ? (homeHovering ? '0.5' : '1') : '0',
  });

  const storeSpring = useSpring({
    transform: storeHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: isHovering ? (storeHovering ? '0.5' : '1') : '0',
  });

  const tourSpring = useSpring({
    transform: tourHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: isHovering ? (tourHovering ? '0.5' : '1') : '0',
  });

  const toolSpring = useSpring({
    transform: toolHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: isHovering ? (toolHovering ? '0.5' : '1') : '0',
  });

  // const logoSpring = useSpring({});

  return (
    <>
      <animated.ul
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
        style={{ ...magnifySpring }}
        className="container">
        <animated.li
          className="linkLeft styledText"
          style={{ ...fadeSpring, ...homeSpring }}
          onMouseOver={() => handleHomeHover(true)}
          onMouseOut={() => handleHomeHover(false)}>
          <Link to="/">Home</Link>
        </animated.li>
        <animated.li
          className="linkLeft styledText"
          style={{ ...fadeSpring, ...storeSpring }}
          onMouseOver={() => handleStoreHover(true)}
          onMouseOut={() => handleStoreHover(false)}>
          <a href="#" target="_blank">
            Store
          </a>
        </animated.li>
        <animated.li className="logo">
          <Link to="/">
            <animated.img
              src={Logo}
              alt="locals only sound logo"
              width="205"
              height="37"
            />
          </Link>
        </animated.li>
        <animated.li
          className="linkRight styledText"
          style={{ ...fadeSpring, ...tourSpring }}
          onMouseOver={() => handleTourHover(true)}
          onMouseOut={() => handleTourHover(false)}>
          <Link to="/tourdates">Tour</Link>
        </animated.li>
        <animated.li
          className="linkRight styledText"
          style={{ ...fadeSpring, ...toolSpring }}
          onMouseOver={() => handleToolHover(true)}
          onMouseOut={() => handleToolHover(false)}>
          <Link to="/tool">Tool</Link>
        </animated.li>
      </animated.ul>
    </>
  );
};
