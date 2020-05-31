import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./logo.png";
import { useSpring, animated } from "react-spring";
import { Nav } from "../Nav/Nav";

export const NavBar = (props) => {
  //fade is done on initial render
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  const [isHovering, handleHover] = useState(false);

  //this one is done on hover (probably)
  const { opacity } = useSpring({
    opacity: isHovering ? 0.5 : 1,
  });

  //nav open/closer
  const [isNavOpen, setNavOpen] = useState(false);
  const navSpring = useSpring({
    transform: isNavOpen
      ? "translate3d(0, 0, 0) scale(1)"
      : "translate3d(100%,0,0) scale(0.6)",
  });

  const handleClick = (e) => {
    props.handleClick(e.target.value);
  };

  return (
    <div className="">
      <div className="">
        <animated.div className="" style={fade}>
          {/*The image functions the same as the Home button on click (it's wrapped in an anchor with an empty href, which is currently throwing a warning)*/}
          <a
            onClick={handleClick}
            href=" "
            onMouseOver={() => handleHover(!isHovering)}
            onMouseOut={() => handleHover(!isHovering)}
            value="Home"
          >
            <animated.img
              src={Logo}
              alt="locals only sound logo"
              width="205"
              height="37"
              style={{
                opacity,
              }}
              className=""
            />
          </a>
        </animated.div>
        <div className=""> </div>
        <div className="">
          <button className="" onClick={() => setNavOpen(!isNavOpen)}>
            Menu
          </button>
          <div className="side">
            <Nav style={navSpring} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
