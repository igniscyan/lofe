import React from 'react';
//import logo from '../../../public/logo.png';
import './App.css';
import { NavBar } from '../NavBar/NavBar';
import { PageContent } from '../PageContent/PageContent';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'Home' };

    this.updatePageContent = this.updatePageContent.bind(this);
  }

  updatePageContent(page) {
    this.setState({
      page: page,
    });
  }

  render() {
    return (
      <div>
        <NavBar handleClick={this.updatePageContent} />
        <PageContent page={this.state.page} />
      </div>
    );
  }
}
