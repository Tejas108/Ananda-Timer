import React from 'react';
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
    this.handleTimerReset = this.handleTimerReset.bind(this);

    componentDidUnmount = () => {
      clearTimeout(mTimeout);
      clearInterval(iBell);
    }
  }

  handleTimer = () => {
    let currTimer = this.state.isTimer;
    this.setState({ isTimer: !currTimer }, () => {
      console.log(this.state.isTimer)
    });
    let time = this.state.minutes * 60000;
    mTimeout = setTimeout(this.handleTimerEnd, time);
    if (this.state.interval > 0) {
      this.handleInterval();
    }
    this.forceUpdate();
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
    this.handleTimerReset();
    clearTimeout(mTimeout);
    clearInterval(iBell);
  }

  handleTimerReset = () => {
    console.log('handleTimerReset called');
    this.setState({
      minutes: 0,
      interval: 0,
      isTimer: false,
      isInterval: false
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Meditation Time: {this.state.minutes} Mins</Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={180}
          step={1}
          onValueChange={(minutes) => this.setState({ minutes })}
        />
        <Text>Interval: {this.state.interval} Mins</Text>
        <Slider
          value={this.state.interval}
          minimumValue={0}
          maximumValue={60}
          step={5}
          onValueChange={(interval) => this.setState({ interval })}
        />
        {
          this.state.isTimer ?
            <Button onPress={this.handleTimerReset} title="Stop Meditation"/> :
            <Button onPress={this.handleTimer} title="Start Meditation"/>
        }
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
