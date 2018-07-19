import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class PriceDrop extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div class="container">
        <div id="price-drop" class="price-drop">
        <p class="label price new">{this.props.newPrice}</p>
          <div class="init-price">
            <p class="label price init">{this.props.initialPrice}</p>
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