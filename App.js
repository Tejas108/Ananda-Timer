import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './src/styles/appStyles';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Timer from './src/components/Timer/Timer';
import Guided from './src/components/Guided';
import Ashram from './src/components/Ashram/Ashram';
import Guruji from './src/components/Guruji/Guruji';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <Navigator/>
      </SafeAreaView>
    );
  }
}

const Navigator = createMaterialTopTabNavigator({
  Timer: {
    screen: Timer,
    navigationOptions: {
      swipeEnabled: false
    }
  },
  Guided: {
    screen: Guided
  },
  Guruji: {
    screen: Guruji
  },
  Ashram: {
    screen: Ashram
  },
},{
  initialRouteName: 'Timer',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#3C3B85',
    style: {
      backgroundColor: '#c6d9eb'
    },
    indicatorStyle: {
      backgroundColor: '#ffcd32'
    }
  }
})

