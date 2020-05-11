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
        break;
      case 'TourDates':
        return <div>Tour Dates</div>;
        break;
      case 'Store':
        return <div>Store</div>;
        break;
      case 'About':
        return <div>About</div>;
        break;
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
