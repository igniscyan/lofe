import React from 'react';
import './PageContent.css';

export class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div></div>;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
}
