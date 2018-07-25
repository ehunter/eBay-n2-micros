import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class SellThroughBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="container">
      <div className="sell-through-container">
          <p className="sell-through-count">仅剩{this.props.itemsSold}件</p>
          <div className="sell-through-bar-container">
            <div style={{width: this.props.itemsSold + '%'}} className="sell-through-bar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SellThroughBar;