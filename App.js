import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Timer from './src/components/Timer';
import Guided from './src/components/Guided';
import About from './src/components/About';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignContent: 'center',backgroundColor: '#c6d9eb'}}>
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
    screen: Guided,
    navigationOptions: {}
  },
  About: {
    screen: About,
    navigationOptions: {}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d9eb'
  }
});
