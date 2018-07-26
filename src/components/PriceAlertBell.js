import React, { Component } from 'react';
import { number } from '@storybook/addon-knobs/react';
import bodymovin from 'bodymovin';
import classNames from 'classnames';
import animationData from '../assets/alert-bell.json'

import '../main.css';

class PriceAlertBell extends Component {
  constructor(props) {
    super(props);
    this.animationIsAttached = false;
    this.animation = null;
    this.enabledFrames = [0, 35];
    this.disabledFrames = [40, 50];
  }


  componentDidMount () {
    if(!this.animation) {
      this.animation = this.attachAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.enabled != prevProps.enabled) {
      var frames = this.props.enabled ? this.enabledFrames : this.disabledFrames;
      this.animation.playSegments(frames, true);
    }
  }

  render() {

    return (
      <div className="container">
        <div style={{width: 55, height: 65}} ref={(animationDiv) => { this.animationContainer = animationDiv; }} />
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

export default PriceAlertBell;