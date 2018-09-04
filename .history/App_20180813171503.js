import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';
import AppRegistry from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <AppNav/>
      </SafeAreaView>
    );
  }
}
AppRegistry.registerComponent('App', () => App)