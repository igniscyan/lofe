import React, { useState, useEffect } from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export const AlbumBlock = ({ query }) => {
  const [album, setAlbum] = useState({});
  const [hovering, setHovering] = useState(false);
  const [buttonHovering, setButtonHovering] = useState(false);

  useEffect(() => {
    Spotify.getAlbum(query.id).then((res) => {
      console.log(res);
      setAlbum(res);
    });
  }, []);

  const artSpring = useSpring({
    opacity: hovering ? 0.5 : 1,
  });

  const buttonSpring = useSpring({
    opacity: hovering ? 1 : 0,
    transform: buttonHovering ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  });

  const cornerSpring = useSpring({
    borderRadius: hovering ? '20px' : '0px',
  });

  return (
    <div className="ab-container">
      <h1 className="ab-header">{album.name}</h1>
      <animated.div
        className="art-container"
        style={{ ...cornerSpring }}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}>
        <animated.img
          src={album.images ? album.images[0].url : ''}
          alt={album.name}
          className="album-art"
          style={{ ...artSpring }}
        />
        <animated.div className="play-button" style={{ ...buttonSpring }}>
          <FontAwesomeIcon
            icon={faPlayCircle}
            onMouseOver={() => setButtonHovering(true)}
            onMouseOut={() => setButtonHovering(false)}
          />
        </animated.div>
      </animated.div>
    </div>
  );
};
