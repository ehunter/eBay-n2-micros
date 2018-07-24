import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs/react';


import Badge from '../components/Badge';
import PriceDrop from '../components/PriceDrop';
import Cart from '../components/Cart';
import LookingEye from '../components/LookingEye';

storiesOf('Badge', module)
  .add('discount badge', () => <Badge theme="discount" value="4.5折"></Badge>)
  .add('watching badge', () => <Badge theme="watching" value="50人正在浏览"></Badge>);

storiesOf('Price Drop', module)
  .add('strike through', () => <PriceDrop initialPrice="￥1360" newPrice="￥1260"></PriceDrop>);

const cartStories = storiesOf('Cart', module);
cartStories.addDecorator(withKnobs);
cartStories.add('cart', () => <Cart itemCount={text('Items In Cart', 1)}></Cart>);

const lookingEyeStories = storiesOf('LookingEye', module);
lookingEyeStories.addDecorator(withKnobs);
lookingEyeStories.add('looking eye', () => <LookingEye lookingCount={text('Amount of Users Looking', 1)}></LookingEye>);
