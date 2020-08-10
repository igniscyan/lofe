import React, { useState, useEffect } from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

// Here is where we might wanna query our JSON of URIs and return specific info based on the name that's being passed as a prop.
// The props ought to be named the same as the actual individual objects within that JSON file.
// lofe > src > util > localsonly.json

export const AlbumBlock = ({ query }) => {
  const [album, setAlbum] = useState({});
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    Spotify.getAlbum(query.id).then((res) => setAlbum(res));
  }, []);

  const artSpring = useSpring({
    opacity: hovering ? 0.5 : 1,
  });

  const buttonSpring = useSpring({
    opacity: hovering ? 1 : 0,
  });

  return (
    <div className="ab-container">
      <h1 className="ab-header">{`${album.name}`}</h1>
      <div
        className="art-background"
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}>
        <animated.img
          src={album.images ? album.images[0].url : ''}
          alt={album.name}
          className="album-art"
          style={{ ...artSpring }}
        />
        <animated.div className="play-button" style={{ ...buttonSpring }}>
          <FontAwesomeIcon icon={faPlay} />
        </animated.div>
      </div>
    </div>
  );
};
