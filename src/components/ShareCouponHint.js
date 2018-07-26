import React, { Component } from 'react';
import { number } from '@storybook/addon-knobs/react';
import bodymovin from 'bodymovin';
import classNames from 'classnames';
import animationData from '../assets/share-coupon-hint.json'

import '../main.css';

class ShareCouponHint extends Component {
  constructor(props) {
    super(props);
    this.animationIsAttached = false;
    this.animation = null;
    this.showHintFrames = [0, 61];
    this.hideHintFrames = [62, 96];
  }


  componentDidMount () {
    if(!this.animation) {
      this.animation = this.attachAnimation();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.showHint != prevProps.showHint) {
      var frames = this.props.showHint ? this.showHintFrames : this.hideHintFrames;
      this.animation.playSegments(frames, true);
    }
  }

  render() {
    return (
      <div className="container">
        <div style={{width: 90, height: 90}} ref={(animationDiv) => { this.animationContainer = animationDiv; }} />
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

export default ShareCouponHint;