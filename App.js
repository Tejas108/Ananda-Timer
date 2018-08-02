import React from 'react';
import Timer from './src/components/Timer';
import Home from './src/components/Home';
import {StyleSheet, View} from 'react-native';
import {Tabs} from './config/router';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d9eb'
  }
});
