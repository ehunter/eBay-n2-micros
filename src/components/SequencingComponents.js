import React, { Component } from 'react';
import Badge from '../components/Badge';
import PriceDrop from '../components/PriceDrop';
import image1 from '../assets/images/laptop.jpg';
import image2 from '../assets/images/sunglasses.jpg';
import image3 from '../assets/images/nintendo.jpg';
import image4 from '../assets/images/iphone.jpg';

import '../main.css';

class SequencingComponents extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="sequencing-container w-container">
        <div className="row w-row">
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <Badge theme="discount" value="4.5折" animDelay={350}></Badge>
            <div className="image-container"><img src={image1} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <div className="image-container"><img src={image2} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">Ray-Ban 中性镜像 Erika RB4171-601/55-54</strong></h5>
              <PriceDrop initialPrice="￥1360" newPrice="￥1260" animDelay={500}></PriceDrop>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <div className="image-container"><img src={image3} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple) MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
          <Badge theme="discount" value="6.5折" animDelay={1100}></Badge>
            <div className="image-container"><img src={image4} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple) MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
        </div>
        <div className="row w-row">
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <div className="image-container"><img src={image1} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <Badge theme="discount" value="4.5折" animDelay={1700}></Badge>
            <div className="image-container"><img src={image2} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">Ray-Ban 中性镜像 Erika RB4171-601/55-54</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <div className="image-container"><img src={image3} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple) MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
          <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
            <Badge theme="discount" value="6.5折" animDelay={8000}></Badge>
            <div className="image-container"><img src={image4} /></div>
            <div className="item-tile-details-container">
              <h5><strong className="bold-text-2">苹果(Apple) MacBook Air 11.6&quot; 笔记本电脑英特尔(Intel)</strong></h5>
              <div><strong className="bold-text">¥2,865.71</strong></div>
            </div>
          </div>
        </div>
      </div>
    );
    }
}

export default SequencingComponents;
