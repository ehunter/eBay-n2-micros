import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


import Badge from '../components/Badge';
import PriceDrop from '../components/PriceDrop';
import Cart from '../components/Cart';
import LookingEye from '../components/LookingEye';
import PriceAlertBell from '../components/PriceAlertBell';
import SellThroughBar from '../components/SellThroughBar';

storiesOf('Badge', module)
  .add('discount badge', () => <Badge theme="discount" value="4.5折"></Badge>)
  .add('watching badge', () => <Badge theme="watching" value="50人正在浏览"></Badge>);

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
priceAlertBellStories.add('Price Alert Bell', () => <PriceAlertBell disabled={boolean('Disable Price Alerts', false)}></PriceAlertBell>);

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
sellThroughBar.add('Sell Through Bar', () => <SellThroughBar itemsSold={number(label, defaultValue, options)}></SellThroughBar>);
