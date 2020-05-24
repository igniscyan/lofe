import React from "react";
import { animated, useSpring } from "react-spring";

export const Nav = (props) => {
  return (
    <animated.div className="nav-wrapper">
      <nav>
        <button onClick={props.handleClick}>Home</button>
        <button onClick={props.handleClick}>About</button>
        <button onClick={props.handleClick}>Store</button>
        <button onClick={props.handleClick}>Tool</button>
      </nav>
    </animated.div>
  );
};

Nav.propTypes = {};
