import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../src/components/Home';
import About from '../src/components/About';
import Guided from '../src/components/Guided';
import Timer from '../src/components/Timer';

export const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
      title: 'About'
    },
  },
  Guided: {
    screen: Guided,
  },
  Timer: {
    screen: Timer,
  },
});