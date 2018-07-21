import React from 'react';
// import { Button } from 'react-native-elements';
import {StyleSheet, Text, View, Slider, TouchableOpacity} from 'react-native';
import {Player} from 'react-native-audio-toolkit';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      isTimer: false
    }
    this.handleTimer = this.handleTimer.bind(this);
    this.handleTimerEnd = this.handleTimerEnd.bind(this);
    this.handleTimeConvert = this.handleTimeConvert.bind(this);
  }

  handleTimer = () => {
    let time = this.state.minutes * 60000;
    setTimeout(this.handleTimerEnd, time);
    this.setState({ isTimer: true });
  }

  handleTimeConvert = (t) => {
    console.log('handleTimeConvert called');
    // 1- Convert to seconds:
    let seconds = t / 1000;
    // 2- Extract hours:
    let hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    console.log(hours + ":" + minutes + ":" + seconds);
  }

  handleTimerEnd = () => {
    console.log('timer end');
    new Player('bell.mp3').play();

    this.setState({
      minutes: 0,
      isTimer: false
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
          onValueChange={(minutes) => this.setState({ minutes })}/>
        <TouchableOpacity onPress={this.handleTimer}>
          <Text>
            Start Meditation
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
