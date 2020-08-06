import React from 'react';
import './AlbumBlock.css';

// Here is where we might wanna query our JSON of URIs and return specific info based on the name that's being passed as a prop.
// The props ought to be named the same as the actual individual objects within that JSON file.
// lofe > src > util > localsonly.json

export const AlbumBlock = (props) => {
  return (
    <div className="ab-container">
      <h1>{props.name}</h1>
    </div>
  );
};
