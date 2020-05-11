import React from 'react';
import './PageContent.css';

export class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.page) {
      case 'Home':
        return <div>Home</div>;
      case 'TourDates':
        return <div>Tour Dates</div>;
      case 'Store':
        return <div>Store</div>;
      case 'About':
        return <div>About</div>;
      default:
        break;
    }
    return <div></div>;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.page === this.props.page) {
      return false;
    } else return true;
  }
}
