import React, { Component } from 'react';
import { number } from '@storybook/addon-knobs/react';
import bodymovin from 'bodymovin';
import classNames from 'classnames';
import animationData from '../assets/truck.json'

import '../main.css';

class TruckAnimation extends Component {
  constructor(props) {
    super(props);
    this.animationIsAttached = false;
    this.animation = null;
  }


  componentDidMount () {
    if(!this.animation) {
      this.animation = this.attachAnimation();
      this.animation.setSpeed(1.25);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.shippingInfoComplete != prevProps.shippingInfoComplete) {
      var direction = this.props.shippingInfoComplete ? 0 : -1;
      this.animation.setDirection(direction);
      this.animation.play();
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{width: 40, height: 40}} ref={(animationDiv) => { this.animationContainer = animationDiv; }} />
      </div>
    );
  }

  attachAnimation = () => {
    if (this.animationContainer !== undefined && !this.animationIsAttached) {
      const animationProperties = {
        container: this.animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData
      }

      return bodymovin.loadAnimation(animationProperties);
    }
  }
}

export default TruckAnimation;