import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


import Badge from '../components/Badge';
import PriceDrop from '../components/PriceDrop';
import Cart from '../components/Cart';
import LookingEye from '../components/LookingEye';
import PriceAlertBell from '../components/PriceAlertBell';
import SellThroughBar from '../components/SellThroughBar';
import ShareCouponHint from '../components/ShareCouponHint';
import TruckAnimation from '../components/TruckAnimation';
import PlaneAnimation from '../components/PlaneAnimation';
import ProductJourney from '../components/ProductJourney';
import SequencingComponents from '../components/SequencingComponents';

const badgeStories = storiesOf('Badge', module);

badgeStories.add('discount badge', () => <Badge theme="discount" value="4.5折"></Badge>)
badgeStories.add('watching badge', () => <Badge theme="watching" value="50人正在浏览"></Badge>);

storiesOf('Price Drop', module)
  .add('strike through', () => <PriceDrop initialPrice="￥1360" newPrice="￥1260"></PriceDrop>);

const cartStories = storiesOf('Cart', module);
cartStories.addDecorator(withKnobs);
cartStories.add('cart', () => <Cart itemCount={text('Items In Cart', 1)}></Cart>);

const lookingEyeStories = storiesOf('Looking Eye', module);
lookingEyeStories.addDecorator(withKnobs);
lookingEyeStories.add('looking eye', () => <LookingEye lookingCount={text('Amount of Users Looking', 56)}></LookingEye>);

const priceAlertBellStories = storiesOf('Price Alert Bell', module);
priceAlertBellStories.addDecorator(withKnobs);
priceAlertBellStories.add('Price Alert Bell', () => <PriceAlertBell enabled={boolean('Enable Price Alerts', false)}></PriceAlertBell>);

const ShareCouponStories = storiesOf('Share Coupon Hint', module);
ShareCouponStories.addDecorator(withKnobs);
ShareCouponStories.add('Share Coupon Hint', () => <ShareCouponHint showHint={boolean('Show Hint Animation', false)}></ShareCouponHint>);


/* These simple svg icons can be made much simpler by creating an animation component and passing properties (json file, speed, size, etc) */
const ShippingStories = storiesOf('Shipping Icon Animations', module);
ShippingStories.addDecorator(withKnobs);
ShippingStories.add('Truck Animation', () => <TruckAnimation shippingInfoComplete={boolean('Domestic Shipping Info Complete', false)}></TruckAnimation>);
ShippingStories.add('Plane Animation', () => <PlaneAnimation shippingInfoComplete={boolean('Freight Forwarding Complete', false)}></PlaneAnimation>);
ShippingStories.add('Product Journey', () => <ProductJourney></ProductJourney>);

const sellThroughBar = storiesOf('Sell Through Bar', module);
const label = 'Items Sold';
const defaultValue = 65;
const options = {
   range: true,
   min: 1,
   max: 100,
   step: 1,
};
sellThroughBar.addDecorator(withKnobs);
sellThroughBar.add('Sell Through Bar', () => <SellThroughBar itemsSold={number(label, defaultValue, options)} lowQuanityMax="90"></SellThroughBar>);

const SequencingComponentsStories = storiesOf('Sequencing the components', module);
SequencingComponentsStories.add('Home Page', 
	withInfo({
		inline: true,
		propTables: false,
		source: false,
      	text: `
      	### Timing Recommendations
Tile 1 | Tile 2 | Tile 3  |  Tile 4 |
------ | ------ | ------  | ------
Still | renders | nicely | nicely |
1 | 2 | 3 | 4 |
        `,
    })(() => <SequencingComponents></SequencingComponents>));
