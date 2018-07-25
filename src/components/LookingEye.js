import React, { Component } from 'react';
import { number } from '@storybook/addon-knobs/react';
import bodymovin from 'bodymovin';
import classNames from 'classnames';
import animationData from '../assets/eye.json'

import '../main.css';

class LookingEye extends Component {
  constructor(props) {
    super(props);
    this.animationIsAttached = false;
    this.animation = null;
    this.introFrames = [0, 35];
    this.blinkFrames = [35, 70];
  }


  componentDidMount () {
    if(!this.animation) {
      this.animation = this.attachAnimation();
      //play the opening eye animation on first load, frames 0-30
      this.animation.playSegments(this.introFrames, true);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemCount != '0'
        && this.props.lookingCount !== null
        && (this.props.lookingCount !== prevProps.lookingCount)) {
        // blink the eye
        this.animation.playSegments(this.blinkFrames, true);
    }
  }

  render() {

    return (
      <div className="container">
        <div style={{width: 55, height: 65}} ref={(animationDiv) => { this.animationContainer = animationDiv; }} />
        <p className="eye-count">{this.props.lookingCount}</p>
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

export default LookingEye;