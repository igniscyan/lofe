import React from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';

// Here is where we might wanna query our JSON of URIs and return specific info based on the name that's being passed as a prop.
// The props ought to be named the same as the actual individual objects within that JSON file.
// lofe > src > util > localsonly.json

export const AlbumBlock = async ({ album }) => {
  let albumInfo = await Spotify.getAlbum(album.id);
  return (
    <div className="ab-container">
      <h1 className="ab-header">{`${albumInfo.name}`}</h1>
      <img src={albumInfo.img_src} alt={albumInfo.name} />
    </div>
  );
};
