import React, { useState, useEffect, useLayoutEffect } from 'react';
import './Audio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle as play,
  faPauseCircle as pause,
} from '@fortawesome/free-regular-svg-icons';
import { faSpinner as loading } from '@fortawesome/free-solid-svg-icons';

export const Audio = (props) => {
  const [video, setVideo] = useState(undefined);
  const [icon, setIcon] = useState(play);

  useEffect(() => {
    setVideo(document.getElementById(props.song.uri));
  }, []);

  const togglePlay = (e) => {
    if (video.paused) {
      props.pauseAll();
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="audio-container" onClick={togglePlay}>
      <video
        id={props.song.uri}
        onPlay={() => setIcon(pause)}
        onPause={() => setIcon(play)}>
        <source type="video/mp4" src={props.url}></source>
        Your browser does not support HTML5 video (mp4/m4a format)
      </video>

      {/* This checks to see if the video variable has been reassigned (i.e. if this is the first render cycle) */}
      {video ? (
        <FontAwesomeIcon className="play-pause" icon={icon} />
      ) : (
        <FontAwesomeIcon icon={loading} />
      )}
      <p className="song-title">{props.name}</p>
    </div>
  );
};
