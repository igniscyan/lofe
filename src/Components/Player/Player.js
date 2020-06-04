import React from "react";
import { useSpring, animated } from "react-spring";
import "./Player.css";
import opus1 from "./opus1.png";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 4) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Player = (props) => {
  const [animationSet, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="leftcontainer">
      <center>
        <animated.div
          className="hoverPlayer"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: animationSet.xys.interpolate(trans),
            backgroundImage: `url(${props.imagesrc})`,
          }}
        />
      </center>
      <div className="albumText">
        <p>
          Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo nulla,
          consequat sed sapien sed, efficitur tincidunt nulla. Integer venenatis
          metus et odio molestie interdum. Suspendisse mattis porttitor dapibus.
          Aliquam vehicula tempor odio, at laoreet nisi bibendum quis. Nullam a
          libero massa. Quisque convallis metus et ligula lacinia, non dictum
          nisl pellentesque. Mauris sagittis, ipsum at consequat luctus, nisl
          quam dapibus lorem, a rhoncus erat ipsum nec eros. Sed semper tortor
          sit amet lorem aliquet sagittis. Vestibulum condimentum bibendum
          turpis in iaculis. Vivamus sed varius lorem. Fusce congue elementum
          neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
          eleifend non semper id, ultrices eu ligula. In sed erat fringilla,
          porta magna ac, aliquam sem. Aliquam et accumsan metus. In blandit
          neque vel purus dapibus, ac placerat elit mattis. Proin placerat
          scelerisque ligula tempus faucibus.
        </p>
      </div>
    </div>
  );
};
