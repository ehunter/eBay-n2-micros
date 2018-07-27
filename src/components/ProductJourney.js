import React, { Component } from 'react';
import bodymovin from 'bodymovin';
import animationData from '../assets/product-journey.json'

import '../main.css';

class ProductJourney extends Component {
  constructor(props) {
    super(props);
    this.animationIsAttached = false;
    this.animation = null;
  }


  componentDidMount () {
    if(!this.animation) {
      this.animation = this.attachAnimation();
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{width: 560, height: 40}} ref={(animationDiv) => { this.animationContainer = animationDiv; }} />
      </div>
    );
  }

  attachAnimation = () => {
    if (this.animationContainer !== undefined && !this.animationIsAttached) {
      const animationProperties = {
        container: this.animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData
      }

      return bodymovin.loadAnimation(animationProperties);
    }
  }
}

export default ProductJourney;