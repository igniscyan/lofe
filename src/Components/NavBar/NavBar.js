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
    return (
      <div className="container">
        <div className="row">
          <div className="four columns">
            <a href="Home">
              <img
                src={Logo}
                alt="locals only sound logo"
                width="205"
                height="37"
              />
            </a>
          </div>
          <div className="two columns">
            {/*Figure out how to get anchor to run onClick script*/}
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
