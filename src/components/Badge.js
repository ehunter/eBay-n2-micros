import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class Badge extends Component {
  constructor(props) {
    super(props);
    this.defaultDelay = 135;
  }
  render() {

    var badgeBgClass = classNames('badge-bg', this.props.className, {
      'discount': this.props.theme == "discount",
      'watching': this.props.theme == "watching"
    });


    return (
        <div id="badge" className="badge">
            <p className="badge-label">{this.props.value}</p>
            <div className={badgeBgClass} style={{animationDelay: this.calculateDelay(2)}}></div>
            {this.props.theme == "discount" &&
              <div className={badgeBgClass} style={{animationDelay: this.calculateDelay(3)}}></div>
            }
            {this.props.theme == "discount" &&
              <div className={badgeBgClass} style={{animationDelay: this.calculateDelay(1)}}></div>
            }
        </div> 

    );
  }

  calculateDelay = (order) => {
    var wait = this.props.animDelay ? this.props.animDelay : 0;
    return ((this.defaultDelay*order) + wait) + 'ms';
  }
}

export default Badge;