import React from 'react';
import {createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided';
import Guruji from '../src/components/Guruji/Guruji';
import Ashram from '../src/components/Ashram/Ashram';
import Sidebar from '../src/components/Sidebar/Sidebar';

const Tabs = createMaterialTopTabNavigator({
  Timer:  Timer,
  Guided: Guided,
  Guruji: Guruji,
  Ashram: Ashram,
},{
  initialRouteName: 'Timer',
  tabBarPosition: 'bottom',
  animationEnabled:false,
  swipeEnabled: false,
  optimizationsEnabled: true,
  showIcon: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#3C3B85',
    style: {
      backgroundColor: '#c6d9eb',
    },
    indicatorStyle: {
      backgroundColor: '#ffcd32'
    }
  }
});

const AppNav = createDrawerNavigator({
    Tabs: {
      screen: Tabs,
    },
    Contact: {
      screen: Guided,
    },
    Guruji: Guruji,
    Ashram: Ashram,
  },
  {
    contentComponent: Sidebar
  });

export default AppNav;