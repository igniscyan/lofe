import React from "react";
import { animated, useSpring } from "react-spring";

export const Nav = ({ style, handleClick }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <button onClick={handleClick} value="Home">
          Home
        </button>
        <button onClick={handleClick} value="About">
          About
        </button>
        <button onClick={handleClick} value="Store">
          Store
        </button>
        <button onClick={handleClick} value="TourDates">
          Tour Dates
        </button>
        <button onClick={handleClick} value="Tool">
          Tool
        </button>
      </nav>
    </animated.div>
  );
};

Nav.propTypes = {};
