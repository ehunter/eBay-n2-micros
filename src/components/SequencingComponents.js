import React, { Component } from 'react';
import Badge from '../components/Badge';
import PriceDrop from '../components/PriceDrop';
import LinkTo from '@storybook/addon-links/react';
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

      <h2>Animating Home Page Components</h2>

      <h4>There are 3 possible animatable components within a tile on the homepage.  It's important to maintain one focal element for each tile or the animations become distracting. It's recommended to animate only one component for each tile sequentially from left to right:</h4>
      <ul style={{ listStyle: "none", marginTop: "1em" }}>
        <li><LinkTo story="Index">Badge - Discount Theme</LinkTo></li>
        <li><LinkTo story="Index">Badge - Watching Theme</LinkTo></li>
        <li><LinkTo story="Index">Price Strike Through</LinkTo></li>
      </ul>

      <h3 style={{ padding:"20px 0" }}>Sequencing the animations</h3>
      <p className="doc-text">Each component should animate sequentially from left to right within its row. Each row should continue this pattern as the user scrolls down and a new row becomes visible. Components should only run their animation once, no looping.</p>
      <p className="doc-text">Each of these components has a property called <code>animDelay</code> which controls the start time of the animation.</p>

      <pre><code>animDelay={250}</code></pre>
      <p className="doc-text"><code>animDelay</code> should be set using milliseconds. You can see in the example below how each <code>animDelay</code> property is incremented from left to right.</p>
      <p className="doc-text">The <code>PriceDrop</code> component takes about 250ms longer to complete it's animation than the <code>Badge</code> component, 
      so the delay of the next animation after a <code>PriceDrop</code> in the sequence should reflect that.</p>
        <div className="row w-row">
        <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
          <div className="small-text">Discount Badge : animDelay={350}</div>
        </div>
        <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
          <div className="small-text">Price Drop : animDelay={600}</div>
        </div>
        <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
          <div className="small-text">NONE</div>
        </div>
        <div className="item-column w-col w-col-3 w-col-small-6 w-col-tiny-6">
          <div className="small-text">Discount Badge : animDelay={1100}</div>
        </div>
        </div>
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
              <PriceDrop initialPrice="￥1360" newPrice="￥1260" animDelay={600}></PriceDrop>
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
      </div>
    );
    }
}

export default SequencingComponents;
