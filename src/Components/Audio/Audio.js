import React, { useState, useEffect } from 'react';
import './Audio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle as play,
  faPauseCircle as pause,
} from '@fortawesome/free-regular-svg-icons';
import { faSpinner as loading } from '@fortawesome/free-solid-svg-icons';

export const Audio = (props) => {
  const [video, setVideo] = useState(undefined);
  const [playState, setPlayState] = useState(play);

  useEffect(() => {
    setVideo(document.getElementById(props.song.uri));
    console.log(video);
  }, []);

  const togglePlay = (e) => {
    if (video.paused) {
      video.play();
      setPlayState(pause);
    } else {
      video.pause();
      setPlayState(play);
    }
  };

  return (
    <div>
      <video id={props.song.uri}>
        <source type="video/mp4" src={props.url}></source>
        Your browser does not support HTML5 video
      </video>

      {/* This checks to see if the video variable has been reassigned (i.e. if this is the first render cycle) */}
      {video ? (
        <FontAwesomeIcon icon={playState} onClick={togglePlay} />
      ) : (
        <FontAwesomeIcon icon={loading} />
      )}
      <p>{props.name}</p>
    </div>
  );
};
