import React from 'react';
import './PageContent.css';

import { About } from '../About/About'


export class PageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.page) {
      case 'Home':
        return (
          <div className="row">
            <div className="one-third column">
              <h1>Locals Only Sound</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo nulla, consequat sed sapien sed, efficitur tincidunt nulla. Integer venenatis metus et odio molestie interdum. Suspendisse mattis porttitor dapibus. Aliquam vehicula tempor odio, at laoreet nisi bibendum quis. Nullam a libero massa. Quisque convallis metus et ligula lacinia, non dictum nisl pellentesque. Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet lorem aliquet sagittis. Vestibulum condimentum bibendum turpis in iaculis. Vivamus sed varius lorem. Fusce congue elementum neque, sed laoreet sapien convallis vel. Nullam tortor ligula, eleifend non semper id, ultrices eu ligula. In sed erat fringilla, porta magna ac, aliquam sem. Aliquam et accumsan metus. In blandit neque vel purus dapibus, ac placerat elit mattis. Proin placerat scelerisque ligula tempus faucibus.
                </p>
            </div>
          </div>
        );
      case 'TourDates':
        return (
          <div className="row">
            <div className="one-third column">
              <h1>Tour Dates</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
                nulla, consequat sed sapien sed, efficitur tincidunt nulla.
                Integer venenatis metus et odio molestie interdum. Suspendisse
                mattis porttitor dapibus. Aliquam vehicula tempor odio, at
                laoreet nisi bibendum quis. Nullam a libero massa. Quisque
                convallis metus et ligula lacinia, non dictum nisl pellentesque.
                Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus
                lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet
                lorem aliquet sagittis. Vestibulum condimentum bibendum turpis
                in iaculis. Vivamus sed varius lorem. Fusce congue elementum
                neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
                eleifend non semper id, ultrices eu ligula. In sed erat
                fringilla, porta magna ac, aliquam sem. Aliquam et accumsan
                metus. In blandit neque vel purus dapibus, ac placerat elit
                mattis. Proin placerat scelerisque ligula tempus faucibus.
              </p>
            </div>
            <div className="one-third column">
              <h1>Tour Dates</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
                nulla, consequat sed sapien sed, efficitur tincidunt nulla.
                Integer venenatis metus et odio molestie interdum. Suspendisse
                mattis porttitor dapibus. Aliquam vehicula tempor odio, at
                laoreet nisi bibendum quis. Nullam a libero massa. Quisque
                convallis metus et ligula lacinia, non dictum nisl pellentesque.
                Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus
                lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet
                lorem aliquet sagittis. Vestibulum condimentum bibendum turpis
                in iaculis. Vivamus sed varius lorem. Fusce congue elementum
                neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
                eleifend non semper id, ultrices eu ligula. In sed erat
                fringilla, porta magna ac, aliquam sem. Aliquam et accumsan
                metus. In blandit neque vel purus dapibus, ac placerat elit
                mattis. Proin placerat scelerisque ligula tempus faucibus.
              </p>
            </div>
            <div className="one-third column">
              <h1>Tour Dates</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
                nulla, consequat sed sapien sed, efficitur tincidunt nulla.
                Integer venenatis metus et odio molestie interdum. Suspendisse
                mattis porttitor dapibus. Aliquam vehicula tempor odio, at
                laoreet nisi bibendum quis. Nullam a libero massa. Quisque
                convallis metus et ligula lacinia, non dictum nisl pellentesque.
                Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus
                lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet
                lorem aliquet sagittis. Vestibulum condimentum bibendum turpis
                in iaculis. Vivamus sed varius lorem. Fusce congue elementum
                neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
                eleifend non semper id, ultrices eu ligula. In sed erat
                fringilla, porta magna ac, aliquam sem. Aliquam et accumsan
                metus. In blandit neque vel purus dapibus, ac placerat elit
                mattis. Proin placerat scelerisque ligula tempus faucibus.
              </p>
            </div>
          </div>
        );
      case 'Store':
        return (
          <div className="row">
            <div className="one-third column">
              <h1>Store</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
                nulla, consequat sed sapien sed, efficitur tincidunt nulla.
                Integer venenatis metus et odio molestie interdum. Suspendisse
                mattis porttitor dapibus. Aliquam vehicula tempor odio, at
                laoreet nisi bibendum quis. Nullam a libero massa. Quisque
                convallis metus et ligula lacinia, non dictum nisl pellentesque.
                Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus
                lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet
                lorem aliquet sagittis. Vestibulum condimentum bibendum turpis
                in iaculis. Vivamus sed varius lorem. Fusce congue elementum
                neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
                eleifend non semper id, ultrices eu ligula. In sed erat
                fringilla, porta magna ac, aliquam sem. Aliquam et accumsan
                metus. In blandit neque vel purus dapibus, ac placerat elit
                mattis. Proin placerat scelerisque ligula tempus faucibus.
              </p>
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="row">
            <div className="one-third column">
              <h1>About</h1>
              <br />
              <p>
                Loreipsum dolor sit amet, consectetur adipiscing elit. Nunc leo
                nulla, consequat sed sapien sed, efficitur tincidunt nulla.
                Integer venenatis metus et odio molestie interdum. Suspendisse
                mattis porttitor dapibus. Aliquam vehicula tempor odio, at
                laoreet nisi bibendum quis. Nullam a libero massa. Quisque
                convallis metus et ligula lacinia, non dictum nisl pellentesque.
                Mauris sagittis, ipsum at consequat luctus, nisl quam dapibus
                lorem, a rhoncus erat ipsum nec eros. Sed semper tortor sit amet
                lorem aliquet sagittis. Vestibulum condimentum bibendum turpis
                in iaculis. Vivamus sed varius lorem. Fusce congue elementum
                neque, sed laoreet sapien convallis vel. Nullam tortor ligula,
                eleifend non semper id, ultrices eu ligula. In sed erat
                fringilla, porta magna ac, aliquam sem. Aliquam et accumsan
                metus. In blandit neque vel purus dapibus, ac placerat elit
                mattis. Proin placerat scelerisque ligula tempus faucibus.
              </p>
            </div>
            <div className='four column'>
                <center><h1>About</h1></center>
                <About member = 'General' />
            </div>
            <div className='four column'>

            </div>

          </div>
          <div className='row'>
            <About member='Ryan'/>
            <About member='Curtis' />
          </div>
          </div>
        );
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
