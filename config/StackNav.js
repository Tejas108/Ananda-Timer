import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import Home from '../src/components/Home/Home';
import Presets from '../src/components/Presets/Presets';
import Settings from '../src/components/Settings/Settings';
import Contact from '../src/components/Contact/Contact';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided';
import Guruji from '../src/components/Guruji/Guruji';
import Ashram from '../src/components/Ashram/Ashram';


const StackNav = createStackNavigator({

    Home: {
      screen: Home,
      navigationOptions: (props) => ({
        title: "Home",
      })
    },
    Guruji: {
      screen: Guruji,
      navigationOptions: (props) => ({
        title: "Guruji",
      })
    },
    Ashram: {
      screen: Ashram,
      navigationOptions: (props) => ({
        title: "Ashram",
      })
    },
    Presets: {
      screen: Presets,
      navigationOptions: (props) => ({
        title: "Presets",
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: (props) => ({
        title: "Settings",
      })
    },
    Contact: {
      screen: Contact,
      navigationOptions: (props) => ({
        title: "Contact",
      })
    },
    Guided: {
      screen: Guided,
      navigationOptions: (props) => ({
        title: "Guided",
      })
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default StackNav;