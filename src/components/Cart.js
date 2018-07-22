import React, { Component } from 'react';
import classNames from 'classnames';
import cartIcon from '../assets/icn_cart.svg';

import '../main.css';


class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    var badgeBgClass = classNames('badge-bg', this.props.className, {
      'discount': this.props.theme == "discount",
      'watching': this.props.theme == "watching"
    });

    return (
      <div class="container">
        <div id="cart" class="cart">
        <p class="badge-label">{this.props.value}</p>
            <div class="cart-circle"></div>
        <img src={cartIcon} />
            <div class="stripes centered">
              <div class="stripe med"></div>
              <div class="stripe med"></div>
              <div class="stripe med"></div>
              <div class="stripe med"></div>
            </div>
        </div> 
      </div>
    );
  }
}

export default Cart;