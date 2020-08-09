import React from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';

// Here is where we might wanna query our JSON of URIs and return specific info based on the name that's being passed as a prop.
// The props ought to be named the same as the actual individual objects within that JSON file.
// lofe > src > util > localsonly.json

export const AlbumBlock = ({ album }) => {
  return (
    <div className="ab-container">
      <h1 className="ab-header">{Spotify.getAlbum(album.uri).name}</h1>
      {console.log(album.uri)}
      {/* <img src={Spotify.getAlbum(album.uri).images[0].url} /> */}
    </div>
  );
};
