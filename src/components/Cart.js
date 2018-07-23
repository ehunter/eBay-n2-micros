import React, { Component } from 'react';
import classNames from 'classnames';
import cartIcon from '../assets/icn_cart.svg';

import '../main.css';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
        itemCount: 1
    };
    this.updateCart = this.updateCart.bind(this);
  }
  updateCart() {
      const currentState = this.state.active;
      this.setState({ active: !currentState, itemCount: itemCount++ });
  };

  render() {

    return (
      <div class="container">
        <div id="cart" class="cart">
          <div class="cart-circle">{this.state.itemCount}</div>
            <img src={cartIcon} class="cart-icon"/>
            <div class="cart-clipping-mask">
              <div class="cart-stripe"></div>
              <div class="cart-stripe"></div>
              <div class="cart-stripe"></div>
            </div>
          </div>
          <button id="add-to-cart" class="btn add-to-cart" onclick={this.updateCart}>ADD TO CART</button>
      </div>
    );
  }
}

export default Cart;