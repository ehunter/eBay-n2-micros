import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Badge from '../components/Badge';


storiesOf('Badge', module)
  .add('discount badge', () => <Badge theme="discount" value="4.5折"></Badge>)
  .add('watching badge', () => <Badge theme="watching" value="50人正在浏览"></Badge>);
