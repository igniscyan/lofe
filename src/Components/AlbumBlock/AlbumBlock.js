import React, { useState, useEffect } from 'react';
import './AlbumBlock.css';
import { Spotify } from '../../util/Spotify';
import '../../util/localsonly.json';

// Here is where we might wanna query our JSON of URIs and return specific info based on the name that's being passed as a prop.
// The props ought to be named the same as the actual individual objects within that JSON file.
// lofe > src > util > localsonly.json

export const AlbumBlock = ({ query }) => {
  const [album, setAlbum] = useState({});

  useEffect(() => {
    Spotify.getAlbum(query.id).then((res) => setAlbum(res));
  }, []);

  return (
    <div className="ab-container">
      <h1 className="ab-header">{`${album.name}`}</h1>
      <img src={album.images ? album.images[0].url : ''} alt={album.name} />
    </div>
  );
};
