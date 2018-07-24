import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class Badge extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    var badgeBgClass = classNames('badge-bg', this.props.className, {
      'discount': this.props.theme == "discount",
      'watching': this.props.theme == "watching"
    });

    return (
      <div className="container">
        <div id="badge" className="badge">
            <p className="badge-label">{this.props.value}</p>
            <div className={badgeBgClass}></div>
            {this.props.theme == "discount" &&
              <div className={badgeBgClass}></div>
            }
            {this.props.theme == "discount" &&
              <div className={badgeBgClass}></div>
            }
        </div> 
      </div>
    );
  }
}

export default Badge;