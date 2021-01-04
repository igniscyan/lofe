import React, { useEffect, useState } from 'react';
import './ATPair.css';
import { AlbumBlock } from '../AlbumBlock/AlbumBlock';
import { TrackList } from '../TrackList/TrackList';

export const ATPair = (props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="ATP-container"
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}>
      <AlbumBlock query={props.query} hovering={hovering} />
      <TrackList
        name={props.query.name}
        pauseAll={props.pauseAll}
        hovering={hovering}
      />
    </div>
  );
};
