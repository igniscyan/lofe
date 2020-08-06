import React from 'react';
import './PageContent.css';
import { AlbumBlock } from '../AlbumBlock/AlbumBlock';

const albumList = require('../../util/localsonly.json');

export const PageContent = (props) => {
  return (
    // base-grid-container: sets up the margins and main content sizing
    <div className="base-grid-container">
      {/* empty div for '.' grid-areas in PageContent.css */}
      <div></div>
      {/* center-col-flex: the flex container for the main content, located within the middle base-grid column */}
      <div className="center-col-flex">
        {/* for each item in the JSON, we're gonna render a new AlbumBlock component */}
        {albumList.map((album) => {
          return <AlbumBlock name={album.name} />;
        })}
      </div>
      <div></div>
    </div>
  );
};
