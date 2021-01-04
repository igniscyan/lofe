import React from 'react';
import './TrackList.css';
import '../../util/localsonly.json';
import { Audio } from '../Audio/Audio';
import { animated, useSpring } from 'react-spring';

const json = require('../../util/localsonly.json');

export const TrackList = (props) => {
  const listSpring = useSpring({
    opacity: props.hovering ? 1 : 0,
  });

  return (
    <animated.div className="tracklist-container" style={{ ...listSpring }}>
      {json.map((album) => {
        if (album.name === props.name) {
          return album.tracks.map((song) => {
            return (
              <Audio
                url={song.previewLink}
                key={song.name}
                name={song.name}
                song={song}
                pauseAll={props.pauseAll}
                id={`Audio-${song.name}`}
                className="track"
              />
            );
          });
        } else return;
      })}
    </animated.div>
  );
};
