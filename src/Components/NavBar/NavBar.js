import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from './logo.png';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as arrow } from '@fortawesome/free-solid-svg-icons';

export const NavBar = (props) => {
  //STATES
  //keeping track of whether navbar has been minimized yet
  const [fullScreen, setFullScreen] = useState(true);
  const [navHovering, setNavHovering] = useState(false);
  const [homeHovering, setHomeHovering] = useState(false);
  const [storeHovering, setStoreHovering] = useState(false);
  const [tourdatesHovering, setTourdatesHovering] = useState(false);
  const [toolHovering, setToolHovering] = useState(false);

  //SPRINGS
  //this minimizes the navbar
  const navSpring = useSpring({
    gridTemplateRows: fullScreen ? '1fr 15vh' : '10vh 0',
    height: navHovering
      ? fullScreen
        ? '100vh'
        : '15vh'
      : fullScreen
      ? '100vh'
      : '10vh',
    boxShadow: navHovering
      ? '0px 10px 10px 0px rgba(0, 0, 0, 0.3)'
      : '0px 10px 10px 0px rgba(0, 0, 0, 0.1)',
  });
  const homeSpring = useSpring({
    transform: homeHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: fullScreen ? 0 : navHovering ? (homeHovering ? 0.5 : 1) : 0,
  });
  const storeSpring = useSpring({
    transform: storeHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: fullScreen ? 0 : navHovering ? (storeHovering ? 0.5 : 1) : 0,
  });
  const logoSpring = useSpring({
    transform: fullScreen
      ? 'scale(1.3)'
      : navHovering
      ? 'scale(0.9)'
      : 'scale(1)',
  });
  const tourdatesSpring = useSpring({
    transform: tourdatesHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: fullScreen ? 0 : navHovering ? (tourdatesHovering ? 0.5 : 1) : 0,
  });
  const toolSpring = useSpring({
    transform: toolHovering ? 'scale(1.5)' : 'scale(1)',
    opacity: fullScreen ? 0 : navHovering ? (toolHovering ? 0.5 : 1) : 0,
  });

  //EFFECTS
  //The following hook will prevent entire page from scrolling down when initial scroll minimizes navbar:
  if (fullScreen) {
    window.onscroll = () => {
      window.scrollTo(0, 0);
    };
  }
  useEffect(() => {
    if (fullScreen) {
      window.onscroll = () => {
        window.scrollTo(0, 0);
      };
    } else {
      window.setTimeout(() => {
        window.onscroll = undefined;
      }, 400);
    }
  }, [fullScreen]);

  //this will handle the initial mousewheel event which minimizes the navbar:
  const handleWheel = (e) => {
    if (e.deltaY > 0) setFullScreen(false);
  };

  return (
    <animated.div
      style={{ ...navSpring }}
      onWheel={handleWheel}
      className="container"
      onMouseOver={() => setNavHovering(true)}
      onMouseOut={() => setNavHovering(false)}>
      <div className="links-container">
        <nav>
          <ul className="links">
            <div className="links-left">
              <animated.li
                onMouseOver={() => setHomeHovering(true)}
                onMouseOut={() => setHomeHovering(false)}
                style={{ ...homeSpring }}>
                <Link to="/">HOME</Link>
              </animated.li>
              <animated.li
                onMouseOver={() => setStoreHovering(true)}
                onMouseOut={() => setStoreHovering(false)}
                style={{ ...storeSpring }}>
                <a href="/" target="_blank">
                  STORE
                </a>
              </animated.li>
            </div>
            <li className="logo">
              <Link to="/">
                <animated.img
                  src={Logo}
                  alt="locals only sound logo"
                  style={{ ...logoSpring }}
                />
              </Link>
            </li>
            <div className="links-right">
              <animated.li
                onMouseOver={() => setTourdatesHovering(true)}
                onMouseOut={() => setTourdatesHovering(false)}
                style={{ ...tourdatesSpring }}>
                <Link to="/tourdates">TOUR DATES</Link>
              </animated.li>
              <animated.li
                onMouseOver={() => setToolHovering(true)}
                onMouseOut={() => setToolHovering(false)}
                style={{ ...toolSpring }}>
                <Link to="/aboutFull">ABOUT</Link>
              </animated.li>
            </div>
          </ul>
        </nav>
      </div>
      {fullScreen ? (
        <div className="welcome" onClick={() => setFullScreen(false)}>
          <h2>welcome</h2>
          <FontAwesomeIcon icon={arrow} />
        </div>
      ) : (
        <div className="empty"></div>
      )}
    </animated.div>
  );
};
