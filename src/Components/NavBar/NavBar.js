import React from 'react';
import './NavBar.css';
import Logo from './logo.png';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e.target.value);
  }

  render() {
    //Breaking these button elements into a component template might improve modularity, but it works as-is for this application.
    return (
      <div className="container">
        <div className="row">
          <div className="four columns">
            {/*The image functions the same as the Home button on click (it's wrapped in an anchor with an empty href, which is currently throwing a warning)*/}
            <a onClick={this.handleClick} href="">
              <img
                src={Logo}
                alt="locals only sound logo"
                width="205"
                height="37"
              />
            </a>
          </div>
          <div className="two columns">
            <button onClick={this.handleClick} value="Home">
              Home
            </button>
          </div>
          <div className="two columns">
            <button onClick={this.handleClick} value="TourDates">
              Tour Dates
            </button>
          </div>
          <div className="two columns">
            <button onClick={this.handleClick} value="Store">
              Store
            </button>
          </div>
          <div className="two columns">
            <button onClick={this.handleClick} value="About">
              About
            </button>
          </div>
        </div>
      </div>
    );
  }
}
