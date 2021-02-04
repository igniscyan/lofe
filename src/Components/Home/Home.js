import React from 'react';
import './Home.css';
import { ATPair } from '../ATPair/ATPair';

const albumList = require('../../util/localsonly.json');

export const Home = (props) => {
  const pauseAll = () => {
    albumList.forEach((album) => {
      album.tracks.forEach((song) => {
        document.getElementById(song.uri).pause();
      });
    });
  };

  return (
    // base-grid-container: sets up the margins and main content sizing
    <div className="base-grid-container">
      {/* empty div for '.' grid-areas in PageContent.css */}
      {/* center-col-flex: the flex container for the main content, located within the middle base-grid column */}
        {/* for each item in the JSON, we're gonna render a new AlbumBlock component */}
        {albumList.map((item) => {
          return <section className = "child"><ATPair key={item.name} query={item} pauseAll={pauseAll} /></section>;
        })}
    </div>
  );
};
