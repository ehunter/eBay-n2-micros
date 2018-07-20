import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';

import '../main.css';


class PriceDrop extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // we need the width of the new price element to determine
    // how far the old price should
    var amountToSlideRight = 
      window.getComputedStyle(ReactDOM.findDOMNode(this.refs.newestPrice)).width;
    document.documentElement.style.setProperty('--initPriceWidth', amountToSlideRight);
  }

  render() {

    return (
      <div class="container">
        <div id="price-drop" class="price-drop">
        <p class="price new" ref="newestPrice">{this.props.newPrice}</p>
          <div class="initial-price-container">
            <p class="price initial">{this.props.initialPrice}</p>
            <div class="stripes">
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default PriceDrop;