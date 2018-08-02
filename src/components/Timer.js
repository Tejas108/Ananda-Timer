import React from 'react';
import {Button, Text, Slider} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
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
    clearTimeout(mTimeout);
    clearInterval(iBell);
  }

  render() {
    return (

      <View style={styles.container}>
        <Text h4 style={styles.textLabel}>Meditation Time: {this.state.minutes} mins</Text>
        <Slider
          value={0}
          minimumValue={0}
          maximumValue={180}
          step={5}
          onValueChange={(minutes) => this.setState({ minutes })}
          minimumTrackTintColor='#ffffff'
          maximumTrackTintColor='#ffffff'
          thumbTintColor='#3C3B85'
          thumbTouchSize={{ width: 60, height: 60 }}
          style={{
            'marginBottom': 60,
          }}
          width={330}
          height={40}
        />
        <Text h4 style={styles.textLabel}>Interval: {this.state.interval} mins</Text>
        <Slider
          value={this.state.interval}
          minimumValue={0}
          maximumValue={60}
          step={5}
          minimumTrackTintColor='#ffffff'
          maximumTrackTintColor='#fff'
          thumbTintColor='#3C3B85'
          style={{
            'marginBottom': 40,
          }}
          onValueChange={(interval) => this.setState({ interval })}
          width={330}
          height={40}
        />
        {
          this.state.isTimer ?
            <Button backgroundColor={'#3C3B85'} fontWeight={'bold'} icon={{ name: 'timer' }}
                    onPress={this.handleTimerReset} title="Stop Meditation"/> :
            <Button backgroundColor={'#3C3B85'} fontWeight={'bold'} icon={{ name: 'timer' }} onPress={this.handleTimer}
                    title="Start Meditation"/>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d9eb',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -5
  },
  textLabel: {
    color: '#3C3B85'
  }

});
