import React, { Component } from 'react';
import { Button, Text, Slider, Header, CheckBox } from 'react-native-elements';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { Player } from 'react-native-audio-toolkit';
import Images from 'assets/images';
import styles from './styles';
import { DrawerActions } from 'react-navigation';
import Burger from '../Burger';

let iBell;
let mTimeout;
let ticker;
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
			ambChecked: false
		};
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
			})
		];
	};

	componentWillMount() {
		const ambSound = new Player('ambientmp3.mp3');
	}

	componentWillUnmount = () => {
		this.subs.forEach(sub => {
			sub.remove();
		});
		clearTimeout(mTimeout);
		clearInterval(iBell);
	};

	handleTimer = () => {
		let currTimer = this.state.isTimer;
		this.setState({ isTimer: !currTimer, tick: this.state.minutes }, () => {});
		let time = this.state.minutes * 60000;
		mTimeout = setTimeout(this.handleTimerEnd, time);
		ticker = setInterval(this.handleTicker, 60000);
		if (this.state.ambChecked) {
			ambSound.play();
		}

		if (this.state.interval > 0) {
			this.handleInterval();
		}
		this.forceUpdate();
	};

	handleTicker = () => {
		if (this.state.minutes > 0) {
			count = count + 1;
			this.setState({ tick: this.state.minutes - count });
		}
	};

	handleInterval = () => {
		this.setState({ isInterval: true });
		let interval = this.state.interval * 60000;
		let iInterval = setInterval(this.handleIntBell, interval);
	};

	handleIntBell = () => {
		const iBell = new Player('bell.mp3');
		iBell.play();
	};

	handleTimerEnd = () => {
		const mBell = new Player('bell.mp3');
		mBell.play();
		this.handleTimerReset();
		clearTimeout(mTimeout);
		clearInterval(iBell);
	};

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
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb' }}
					/>
				</View>
				<View style={styles.container}>
					<View style={styles.headerWrap}>
						{this.state.isTimer ? (
							<View style={styles.remainingWrap}>
								<Text h3 style={styles.cntDown}>
									{this.state.tick}
								</Text>
								<Text h4 style={styles.textRemaining}>
									{' '}
									minutes remaining
								</Text>
							</View>
						) : (
							<View style={styles.logoWrap}>
								<Image source={Images.logo} style={styles.logo} />
							</View>
						)}
					</View>
					<View style={styles.sliderWrap}>
						<Text style={styles.sliderLabel}>Meditation Time: {this.state.minutes} mins</Text>
						<Slider
							value={this.state.minutes}
							minimumValue={0}
							maximumValue={180}
							step={5}
							onValueChange={minutes => this.setState({ minutes })}
							minimumTrackTintColor="#ffcd32"
							maximumTrackTintColor="#ffffff"
							thumbTintColor="#3C3B85"
							thumbTouchSize={{ width: 60, height: 60 }}
							style={styles.slider1}
							width={340}
							height={40}
						/>
						<Text style={styles.sliderLabel}>Interval: {this.state.interval} mins</Text>
						<Slider
							value={this.state.interval2}
							minimumValue={0}
							maximumValue={60}
							step={5}
							minimumTrackTintColor="#ffcd32"
							maximumTrackTintColor="#fff"
							thumbTintColor="#3C3B85"
							onValueChange={interval => this.setState({ interval })}
							style={styles.slider}
							width={340}
							height={40}
						/>
						<CheckBox
							title="Play Ambient Music"
							checked={this.state.ambChecked}
							containerStyle={styles.checkbox}
							textStyle={styles.checkboxText}
							uncheckedColor={'#3C3B85'}
							checkedIcon="dot-circle-o"
							uncheckedIcon="circle-o"
							onPress={() => this.setState({ ambChecked: !this.state.ambChecked })}
						/>
						{this.state.isTimer ? (
							<Button
								buttonStyle={styles.button}
								rounded={true}
								fontFamily={'Helvetica'}
								fontSize={24}
								onPress={this.handleTimerReset}
								title="Stop Meditation"
							/>
						) : (
							<Button
								buttonStyle={styles.button}
								rounded={true}
								fontFamily={'Helvetica'}
								fontSize={24}
								onPress={this.handleTimer}
								title="Start Meditation"
							/>
						)}
						<Button buttonStyle={styles.presetButton} rounded={true} fontFamily={'Helvetica'} title="Save to Presets" />
					</View>
				</View>
			</View>
		);
	}
}
