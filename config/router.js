import React from 'react';
import {createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import {colors} from '../src/styles/base';
import Home from '../src/components/Home/Home';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided';
import Guruji from '../src/components/Guruji/Guruji';
import Ashram from '../src/components/Ashram/Ashram';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Presets from '../src/components/Presets/Presets';
import Settings from '../src/components/Settings/Settings';
import Contact from '../src/components/Contact/Contact';

const Tabs = createMaterialTopTabNavigator({
  Timer: Timer,
  Guided: Guided,
  Guruji: Guruji,
  Ashram: Ashram,
}, {
  initialRouteName: 'Timer',
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  optimizationsEnabled: true,
  showIcon: true,
  tabBarOptions: {
    activeTintColor: colors.light,
    inactiveTintColor: colors.primary,
    style: {
      backgroundColor: colors.secondary,
    },
    indicatorStyle: {
      backgroundColor: colors.highlight,
    }
  }
});

const AppNav = createDrawerNavigator({
    Tabs: Tabs,
    Home: Home,
    Timer: Timer,
    Presets: Presets,
    Settings: Settings,
    Contact: Contact,
  },
  {
    contentComponent: Sidebar
  });

export default AppNav;