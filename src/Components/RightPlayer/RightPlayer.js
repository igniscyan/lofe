import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Player.css';
import opus1 from './opus1.png';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, ( x - (3*window.innerWidth /4)) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Player = (props) => {
    
    const [animationSet, set] = useSpring(() => ({ xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40 }}))
    
    return (
      <animated.div
        className="hoverPlayer"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ 
                transform: animationSet.xys.interpolate(trans),
                backgroundImage: `url(${props.imagesrc})`
        }}
      />
    );
}
