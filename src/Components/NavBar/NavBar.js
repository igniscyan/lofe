import React, {useState} from 'react';
import './NavBar.css';
import Logo from './logo.png';
import {useSpring, animated} from 'react-spring'

export const NavBar = (props) => {
  
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const [isToggled, setToggle] = useState(false);
  
  const test = useSpring({
    opacity: isToggled ? 0.5 : 1,
    webkitFilter: isToggled ? 'invert(1)' : 'invert(0)',
    filter: isToggled ? 'invert(1)' : 'invert(0)'
  })

  const handleClick = (e) => {
    props.handleClick(e.target.value);
  };

  return (
    <div>
      <div className="row">
          <animated.div className="four columns" style={fade}>
            {/*The image functions the same as the Home button on click (it's wrapped in an anchor with an empty href, which is currently throwing a warning)*/}
            <animated.a onClick={handleClick} href="" style={test}>
              <img
                src={Logo}
                alt="locals only sound logo"
                width="205"
                height="37"
                onMouseOver={() => setToggle(!isToggled)}
                onMouseOut={() => setToggle(!isToggled)}
              />
            </animated.a>
          </animated.div>
          <div className="two columns">
            <button onClick={handleClick} value="Home">
              Home
            </button>
          </div>
          <div className="two columns">
            <button onClick={handleClick} value="TourDates">
              Tour Dates
            </button>
          </div>
          <div className="two columns">
            <button onClick={handleClick} value="Store">
              Store
            </button>
          </div>
          <div className="two columns">
            <button onClick={handleClick} value="About">
              About
            </button>
          </div>
        </div>
    </div >
  );
}
