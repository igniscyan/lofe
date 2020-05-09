import React from 'react';
import './NavBar.css';
import Logo from './logo.png';

export class NavBar extends React.Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="four columns">
                <img src={Logo} alt="locals only logo" width="205" height="37" />
              </div>
              <div className="two columns">
                {/*Figure out how to get anchor to run onClick script*/}
                <a href="foo">Home</a>
              </div>
              <div className="two columns">
                <a href="foo">Tour Dates</a>
              </div>
              <div className="two columns">
                <a href="foo">Store</a>
              </div>
              <div className="two columns">
                <a href="foo">About</a>
              </div>
            </div>
          </div>
        );
    }
}