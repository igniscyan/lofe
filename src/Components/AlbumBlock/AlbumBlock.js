import React, { useState, useEffect } from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';
import { useSpring, animated } from 'react-spring';

export const AlbumBlock = (props) => {
  const [album, setAlbum] = useState({});

  useEffect(() => {
    Spotify.getAlbum(props.query.id).then((res) => {
      setAlbum(res);
    });
  }, [props.query.id]);

  const artSpring = useSpring({
    opacity: props.hovering ? 0.5 : 1,
  });

  const cornerSpring = useSpring({
    borderRadius: props.hovering ? '20px' : '0px',
  });

  return (
    <div className="ab-container">
      <h1 className="ab-header">{album.name}</h1>
      <animated.div className="art-container" style={{ ...cornerSpring }}>
        <animated.img
          src={album.images ? album.images[0].url : ''}
          alt={album.name}
          className="album-art"
          style={{ ...artSpring }}
        />
      </animated.div>
    </div>
  );
};
