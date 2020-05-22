import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { PageContent } from '../PageContent/PageContent';
import { Player } from '../Player/Player';

/*Styling Section:*/
const NavBarStyle = {
  backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
  fontFamily: 'Play-Bold',
  position: 'fixed',
  width: '100%',
};

const fade = {};

const PageContentStyle = {
  backgroundImage: '',
  fontFamily: 'Play-Regular',
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Home' };

    this.updatePageContent = this.updatePageContent.bind(this);
  }

  //Setting the state here allows new props to be passed to the PageContent component, alerting it to be updated.
  //The basic flow is as follows:
  /*
  - Button gets clicked in NavBar
  - onClick event listener sends the 'value' attribute of that button to NavBar's handleClick() method.
  - handleClick() in NavBar calls updatePageContent (below) with the value it was given.
  - handleClick() here sets the state of 'page' in the App.js file
  - Once the state has been changed, the prop being passed to PageContent (pulled from this.state) is changed
  - When the prop is changed, PageContent's willReceiveProps() method is pinged and it logs the value to the console.
  - Then, shouldComponentUpdate() in PageContent will determine if a re-render is necessary (clicking Home while on Home will not change the page)
  - If an update is valid, the page updates its content in a switch statement within the render function of PageContent
  */
  updatePageContent(page) {
    this.setState({
      page: page,
    });
  }

  render() {
    return (
      <div>
        <div style={NavBarStyle} className="row u-fill-max-width">
          <NavBar handleClick={this.updatePageContent} />
        </div>
        <div className="container u-fill-max-width" style={PageContentStyle}>
          <PageContent page={this.state.page} />
        </div>
      </div>
    );
  }
}
