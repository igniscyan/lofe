import React from 'react';
import './AboutFull.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const AboutFull = (props) => {
  return (
    <div className="aboutFull-container">
      <section className="about-header">
        <h1 className="">
          <a href="https://www.instagram.com/localsonlysound/?hl=en" target="_blank" rel="noopener noreferrer">Locals Only Sound</a> is a music collective founded by <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/grayhawken/?hl=en">Gray Hawken</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/minicrisp/?hl=en">Curtis Smith</a>.  
        </h1>
        <h2>
          The product of friendship between Hawken and Smith, &nbsp; Locals Only Sound was forged over a common interest in music.
        </h2>
        <span className="about-buttons">
          <a target="_blank" href="https://open.spotify.com/artist/0FiWU7d449v3BcyuBhIOEh?si=nc943PZ3SKiWoYEf4qsSOQ" rel="noopener noreferrer" className="LOS-spotify-button">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a target="_blank" href="https://www.facebook.com/localsonlysound/" rel="noopener noreferrer" className="LOS-spotify-button">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" href="https://twitter.com/localsonlysound" rel="noopener noreferrer" className="LOS-spotify-button">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
      </section>
      <section className="about-body">
        <h3>More About The Group</h3>
        <p>
        Inspired by the staples of R&#38;B and Soul coupled with electronic music influences, Hawken and Smith are writing, recording and releasing music that is simultaneously distinct and accessible. Hawken and Smith's collaborative process on their EP led to the creation of a Toronto based production company under the same name. Locals Only Sound offers a space for emerging artists' access to resources, guidance and creative sounding boards.
        </p>
      </section>
    </div>
  );
};
