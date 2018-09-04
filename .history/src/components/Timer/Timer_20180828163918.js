import React, { Component } from 'react';
import { Button, Text, Slider, Header, CheckBox, FormLabel, FormInput } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { Player } from 'react-native-audio-toolkit';
import Images from 'assets/images';
import styles from './styles';
import { DrawerActions } from 'react-navigation';
import Burger from '../Burger';
import * as Animatable from 'react-native-animatable';
import store from 'react-native-simple-store';
import Modal from 'react-native-modal';
let uuid = require('react-native-uuid');

let mTimeout;
let ticker;
let count = 0;
let iInterval;

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minutes: 0,
			interval: 0,
			isTimer: false,
			isInterval: false,
			tick: 0,
			ambChecked: false,
			isModal: false,
			txtInput: '',
			error: false
		};
	}

	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('didBlur', () => {
				this.handleTimerReset();
			})
		];
	};

	componentWillMount() {
		this.ambPlayer = null;
		this.bellPlayer = null;
		this.reloadPlayer();
		this.reloadBellPlayer();
	}

	componentWillUnmount = () => {
		this.subs.forEach(sub => {
			sub.remove();
		});
		clearTimeout(mTimeout);
		clearInterval(iInterval);
	};

	reloadBellPlayer = () => {
		if (this.bellPlayer) {
			this.bellPlayer.destroy();
		}
		this.bellPlayer = new Player('bell.mp3');
	};

	reloadPlayer = () => {
		if (this.ambPlayer) {
			this.ambPlayer.destroy();
		}
		this.ambPlayer = new Player('ambientmp3.mp3');
	};

	handleTimer = () => {
		let m = 0;
		let ivl = 0;
		let mus = false;
		let time = 0;
		if (this.props.navigation.state.params) {
			m = this.props.navigation.state.params.min;
			ivl = this.props.navigation.state.params.int;
			mus = this.props.navigation.state.params.music;
		}

		let currTimer = this.state.isTimer;

		if (m > 0) {
			this.setState({ isTimer: !currTimer, tick: m, interval: ivl, minutes: m, ambChecked: mus }, () => {});
			time = m * 60000;
			if (ivl > 0) {
				this.setState({ isInterval: true });
				let interval = ivl * 60000;
				iInterval = setInterval(this.handleIntBell, interval);
			} else {
				clearInterval(iInterval);
				this.setState({ isInterval: false, interval: 0 });
			}
		} else {
			this.setState({ isTimer: !currTimer, tick: this.state.minutes }, () => {});
			time = this.state.minutes * 60000;
		}
		mTimeout = setTimeout(this.handleTimerEnd, time);
		ticker = setInterval(this.handleTicker, 60000);
		if (this.state.ambChecked || mus === true) {
			this.reloadPlayer();
			this.ambPlayer.play();
			this.ambPlayer.looping = true;
			this.ambPlayer.volume = 0.5;
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
		console.log('handleInterval called');
		this.setState({ isInterval: true });
		let interval = this.state.interval * 60000;
		iInterval = setInterval(this.handleIntBell, interval);
	};

	handleIntBell = () => {
		if (this.state.interval > 0) {
			let iBell = new Player('bell.mp3');
			iBell.play();
			//iBell.destroy();
			//this.bellPlayer.play();
			console.log('int ding!');
		}
	};

	handleTimerEnd = () => {
		let mBell = new Player('bell.mp3');
		mBell.play();
		//mBell.destroy();
		this.handleTimerReset();
		clearTimeout(mTimeout);
		clearInterval(iInterval);
		console.log('timer end ding!');
	};

	handleTimerReset = () => {
		this.props.navigation.state.params = undefined;
		this.setState({
			minutes: 0,
			interval: 0,
			isTimer: false,
			isInterval: false,
			tick: 0,
			ambChecked: false
		});
		clearInterval(ticker);
		this.ambPlayer.stop();
		this.reloadPlayer();
		this.reloadBellPlayer();
		this.forceUpdate();
	};

	handleModalSubmit = () => {
		//store.delete('settings');
		const preset = {
			title: this.state.txtInput,
			min: this.state.minutes,
			int: this.state.interval,
			music: this.state.ambChecked
		};

		store.push('settings', preset);

		setTimeout(() => {
			this.handleModal();
		}, 0);
		this.setState({ txtInput: '' });
	};

	handleModal = () => {
		this.setState({ isModal: !this.state.isModal });
	};

	render() {
		const { params } = this.props.navigation.state;
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<View style={styles.container}>
					<View style={styles.headerWrap}>
						{this.state.isTimer ? (
							<Animatable.View animation="fadeIn" style={styles.remainingWrap}>
								<Text h3 style={styles.cntDown}>
									{this.state.tick}
								</Text>
								<Text h4 style={styles.textRemaining}>
									{' '}
									minutes remaining
								</Text>
							</Animatable.View>
						) : (
							<View style={styles.logoWrap}>
								<Animatable.Image animation="fadeIn" source={Images.logo} style={styles.logo} />
							</View>
						)}
					</View>
					<View style={styles.sliderWrap}>
						{params ? (
							<Text style={styles.sliderLabel} key={1}>
								Meditation Time: {params.min} mins
							</Text>
						) : (
							<Text style={styles.sliderLabel}>Meditation Time: {this.state.minutes} mins</Text>
						)}
						{params ? (
							<Slider
								value={params.min}
								minimumValue={1}
								maximumValue={180}
								minimumTrackTintColor="#ffcd32"
								maximumTrackTintColor="#ffffff"
								thumbTintColor="#3C3B85"
								thumbTouchSize={{ width: 60, height: 60 }}
								style={styles.slider1}
								width={340}
								height={40}
								disabled={true}
							/>
						) : (
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
						)}
						{params ? (
							<Text style={styles.sliderLabel}>Interval: {params.int} mins</Text>
						) : (
							<Text style={styles.sliderLabel}>Interval: {this.state.interval} mins</Text>
						)}
						{params ? (
							<Slider
								value={params.int}
								minimumValue={0}
								maximumValue={60}
								minimumTrackTintColor="#ffcd32"
								maximumTrackTintColor="#fff"
								thumbTintColor="#3C3B85"
								style={styles.slider}
								width={340}
								height={40}
								disabled={true}
							/>
						) : (
							<Slider
								value={this.state.interval}
								minimumValue={0}
								maximumValue={60}
								step={1}
								minimumTrackTintColor="#ffcd32"
								maximumTrackTintColor="#fff"
								thumbTintColor="#3C3B85"
								onValueChange={interval => this.setState({ interval })}
								style={styles.slider}
								width={340}
								height={40}
							/>
						)}
						{params ? (
							<CheckBox
								title="Play Ambient Music"
								checked={params.music}
								containerStyle={styles.checkbox}
								textStyle={styles.checkboxText}
								uncheckedColor={'#3C3B85'}
								checkedIcon="dot-circle-o"
								uncheckedIcon="circle-o"
								disabled={true}
							/>
						) : (
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
						)}
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
						{params ? (
							<View style={{ flex: 1 }}>
								<Button
									buttonStyle={styles.presetButton}
									rounded={true}
									fontFamily={'Helvetica'}
									title="Reset Timer To Default"
									onPress={this.handleTimerReset}
								/>
								<Text style={styles.presetText}>Current Preset: {params.title}</Text>
							</View>
						) : (
							<Button
								buttonStyle={styles.presetButton}
								rounded={true}
								fontFamily={'Helvetica'}
								title="Save These Settings"
								onPress={this.handleModal}
							/>
						)}
					</View>
				</View>
				<Modal
					isVisible={this.state.isModal}
					style={{ flex: 1 }}
					onBackdropPress={() => this.setState({ isModal: false })}
				>
					<View style={styles.modalContent}>
						<FormLabel labelStyle={styles.modalLabel}>Preset Name</FormLabel>
						<FormInput inputStyle={styles.modalInput} onChangeText={input => this.setState({ txtInput: input })} />
						<Button
							buttonStyle={styles.button}
							rounded={true}
							fontFamily={'Helvetica'}
							title="Save"
							onPress={this.handleModalSubmit}
						/>
					</View>
				</Modal>
			</View>
		);
	}
}
