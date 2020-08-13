import React from 'react';
import './TrackList.css';
import '../../util/localsonly.json';
import { Audio } from '../Audio/Audio';

const json = require('../../util/localsonly.json');

export const TrackList = (props) => {
  return (
    <div className="tracklist-container">
      {json.map((album) => {
        if (album.name === props.name) {
          return album.tracks.map((song) => {
            return (
              <Audio
                url={song.previewLink}
                key={song.name}
                name={song.name}
                song={song}
              />
            );
          });
        } else return;
      })}
    </div>
  );
};
