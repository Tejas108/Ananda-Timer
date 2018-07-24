import React from 'react';
// import { Button } from 'react-native-elements';
import {StyleSheet, Text, View, Slider, Button} from 'react-native';
import {Player} from 'react-native-audio-toolkit';

let iBell;
let mTimeout;

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      interval: 0,
      isTimer: false,
      isInterval: false
    }
    this.handleTimer = this.handleTimer.bind(this);
    this.handleTimerEnd = this.handleTimerEnd.bind(this);
    this.handleInterval = this.handleInterval.bind(this);

    componentDidUnmount = () => {
      clearTimeout(mTimeout);
      clearInterval(iBell);
    }
  }

  handleTimer = () => {
    let time = this.state.minutes * 60000;
    mTimeout = setTimeout(this.handleTimerEnd, time);
    this.setState({ isTimer: true });
    if (this.state.interval > 0) {
      this.handleInterval();
    }
  }

  handleInterval = () => {
    this.setState({ isInterval: true });
    let interval = this.state.interval * 60000;
    iInterval = setInterval(this.handleIntBell, interval);
  }

  handleIntBell = () => {
    mBell = new Player('bell.mp3');
    mBell.play();
  }

  handleTimerEnd = () => {
    mBell = new Player('bell.mp3');
    mBell.play();
    this.setState({
      minutes: 0,
      interval: 0,
      isTimer: false,
      isInterval: false
    });
    clearTimeout(mTimeout);
    clearInterval(iBell);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Meditation Time: {this.state.minutes} Mins</Text>
        <Slider
          value={1}
          minimumValue={0}
          maximumValue={180}
          step={1}
          onValueChange={(minutes) => this.setState({ minutes })}/>
        <Text>Interval: {this.state.interval} Mins</Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={60}
          step={1}
          onValueChange={(interval) => this.setState({ interval })}/>
        <Button onPress={this.handleTimer} title="Start Meditation"/>
      </View>
    );
  }

  const
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
