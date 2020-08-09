import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons';

export const About = (props) => {
  return (
    <div className="about-container">
      <div className="crop">
        <img src={require('./lo.png')} />
      </div>
      <div className="about-text">
        <h2>ABOUT</h2>
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
        <div>
          <a target="_blank" href="https://www.facebook.com/localsonlysound/">
            <FontAwesomeIcon icon={faFacebook} />
            Social Media
          </a>
          &nbsp;&nbsp;
          <a
            target="_blank"
            href="https://open.spotify.com/artist/0FiWU7d449v3BcyuBhIOEh?si=nc943PZ3SKiWoYEf4qsSOQ">
            <FontAwesomeIcon icon={faSpotify} />
            <u>Listen on Spotify</u>
          </a>
        </div>
      </div>
    </div>
  );
};
