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
    // the Y position for the old price to animate to.
    var amountToSlideRight = 
      window.getComputedStyle(ReactDOM.findDOMNode(this.refs.newestPrice)).width;
    document.documentElement.style.setProperty('--initPriceWidth', amountToSlideRight);
    // now find the old price and add the animation class
    var container  = document.getElementById('initialPriceContainer')
    container.classList.add("initial-price-container");

  }

  render() {

    return (
      <div class="container">
        <div id="price-drop" class="price-drop">
        <p class="price new" ref="newestPrice">{this.props.newPrice}</p>
          <div id="initialPriceContainer">
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