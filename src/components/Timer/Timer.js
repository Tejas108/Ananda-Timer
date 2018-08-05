import React, {Component} from 'react';
import {Button, Text, Slider} from 'react-native-elements';
import {View,Image} from 'react-native';
import {Player} from 'react-native-audio-toolkit';
import Images from 'assets/images';
import styles from './styles';

let iBell;
let mTimeout;
let ticker;
const mBell = new Player('bell.mp3');
let count = 0;

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      interval: 0,
      isTimer: false,
      isInterval: false,
      tick: 0,
    }
    this.handleTimer = this.handleTimer.bind(this);
    this.handleTimerEnd = this.handleTimerEnd.bind(this);
    this.handleInterval = this.handleInterval.bind(this);
    this.handleTimerReset = this.handleTimerReset.bind(this);
    this.handleTicker = this.handleTicker.bind(this);
  }

  componentDidMount = () => {
    this.subs = [
      this.props.navigation.addListener('didBlur', () => {
        this.handleTimerReset();
      }),
    ];
  }

  componentWillUnmount = () => {
    this.subs.forEach((sub) => {
      sub.remove();

    });
    clearTimeout(mTimeout);
    clearInterval(iBell);
  }

  handleTimer = () => {
    let currTimer = this.state.isTimer;
    this.setState({ isTimer: !currTimer, tick: this.state.minutes }, () => {
    });
    let time = this.state.minutes * 60000;
    mTimeout = setTimeout(this.handleTimerEnd, time);
    ticker = setInterval(this.handleTicker, 60000);
    if (this.state.interval > 0) {
      this.handleInterval();
    }
    this.forceUpdate();
  }

  handleTicker = () => {
    if (this.state.minutes > 0) {
      count = count + 1;
      this.setState({ tick: this.state.minutes - count });
    }
  }

  handleInterval = () => {
    this.setState({ isInterval: true });
    let interval = this.state.interval * 60000;
    let iInterval = setInterval(this.handleIntBell, interval);
  }

  handleIntBell = () => {
    mBell.play();
  }

  handleTimerEnd = () => {
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
      isInterval: false,
      tick: 0
    });
    clearInterval(ticker);
  }

  render() {

    return (
      <View style={styles.container}>
        {this.state.isTimer ?
          <View style={styles.remainingWrap}>
            <Text h1 style={styles.cntDown}>{this.state.tick}</Text>
            <Text h4 style={styles.textRemaining}> minutes remaining</Text>
          </View> :
          <View style={styles.logoWrap}>
            <Image source={Images.logo} style={styles.logo} />
          </View>
        }
        <View style={{flex:3}}>
        <Text style={styles.sliderLabel}>Meditation Time: {this.state.minutes} mins</Text>
        <Slider
          value={this.state.minutes}
          minimumValue={0}
          maximumValue={180}
          step={5}
          onValueChange={(minutes) => this.setState({ minutes })}
          minimumTrackTintColor='#ffcd32'
          maximumTrackTintColor='#ffffff'
          thumbTintColor='#3C3B85'
          thumbTouchSize={{ width: 60, height: 60 }}
          style={{
            'marginBottom': 40,
          }}
          width={330}
          height={40}
        />
        <Text style={styles.sliderLabel}>Interval: {this.state.interval} mins</Text>
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
            <Button backgroundColor={'#3C3B85'} fontWeight={'bold'} fontSize={24} fontFamily={'Helvetica'} icon={{ name: 'timer' }}
                    onPress={this.handleTimerReset} title="Stop Meditation"/> :
            <Button backgroundColor={'#3C3B85'} fontWeight={'bold'} fontSize={24} fontFamily={'Helvetica'} icon={{ name: 'timer' }}
                    onPress={this.handleTimer}
                    title="Start Meditation"/>
        }
        </View>
      </View>
    );
  }
}
