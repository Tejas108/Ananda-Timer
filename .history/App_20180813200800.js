import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <AppNav/>
      </SafeAreaView>
    );
  }
}
