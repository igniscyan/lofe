import React, {useState} from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useSpring, animated} from 'react-spring';

export const About = (props) => {
  const [isHovering, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const cornerSpring = useSpring({
    borderRadius: (isHovering || isOpen) ? '9999px 0px 0px 9999px' : '9999px 9999px 9999px 9999px',
    paddingRight: isOpen ? '80vw' : isHovering ? '600vw' : '0px',
    left: isOpen ? '10vw' : '86vw',
    transform: isHovering && !isOpen ? 'scale(1.1)' : 'scale(1.0)',
  });

  const widthSpring = useSpring({
    display: isOpen ? 'inherit' : 'none',
  });

  return (
    <animated.div className="about-container" style={{... cornerSpring}} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>

      <animated.div className="about-text" style={{... widthSpring}}>
        <span>
          <h2>ABOUT</h2>
          <div></div>
          <FontAwesomeIcon icon={faTimes} className="about-x" onClick={() => setOpen(false)}/>
        </span>
        <p>
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */} Locals Only Sound is a music
          collective founded by Gray Hawken and Curtis Smith. The product of
          friendship between Hawken and Smith, Locals Only Sound, was forged
          over a common interest in music. Inspired by the staples of R&amp;B
          and Soul music coupled with electronic music influences Hawken and
          Smith are writing, recording and releasing music that is
          simultaneously distinct and accessible. Hawken and Smith's
          collaborative process on their EP led to the creation of a Toronto
          based production company under the same name. Locals Only Sound offers
          a space for emerging artists' access to resources, guidance and
          creative sounding boards.
        </p>

        {/* this div needs to be here because otherwise the links will be children of the about-text flex container,
            and they will be in the column flow rather than as a row. */}
        <div className="about-links">
          <a
            target="_blank"
            href="https://www.facebook.com/localsonlysound/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Social Media
          </a>
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://open.spotify.com/artist/0FiWU7d449v3BcyuBhIOEh?si=nc943PZ3SKiWoYEf4qsSOQ"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify} />
            Spotify
          </a>
        </div>
      </animated.div>

            <div className="about-image-flex" onClick={() => setOpen(!isOpen)}>
        <div className="crop">
          <img src={require("./lo.png")} alt="curtis and ryan" />
        </div>
      </div>
    </animated.div>
  );
};
