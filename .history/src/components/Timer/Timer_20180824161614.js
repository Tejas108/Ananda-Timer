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
			ambChecked: false,
			isModal: false,
			txtInput: '',
			error: false
		};
	}

	static navigationOptions = ({ navigation }) => {
		navigation.addListener('willFocus', () => {});
	};

	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('didBlur', () => {
				this.handleTimerReset();
				// this.handlePreset();
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
		clearInterval(iBell);
	};

	handlePreset = () => {
		return this.props.navigation.state.params;
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
		let currTimer = this.state.isTimer;
		this.setState({ isTimer: !currTimer, tick: this.state.minutes }, () => {});
		let time = this.state.minutes * 60000;
		mTimeout = setTimeout(this.handleTimerEnd, time);
		ticker = setInterval(this.handleTicker, 60000);
		if (this.state.ambChecked) {
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
		this.setState({ isInterval: true });
		let interval = this.state.interval * 60000;
		let iInterval = setInterval(this.handleIntBell, interval);
	};

	handleIntBell = () => {
		this.bellPlayer.play();
	};

	handleTimerEnd = () => {
		this.bellPlayer.play();
		this.handleTimerReset();
		clearTimeout(mTimeout);
		clearInterval(iBell);
	};

	handleTimerReset = () => {
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
		if (!this.props.navigation.state.params) {
			console.log('no params');
		} else {
			console.log(this.props.navigation.state.params);
			const minutes = this.props.navigation.state.params.min;
		}
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
						<Text style={styles.sliderLabel}>Meditation Time: {this.state.minutes} mins</Text>
						<Slider
							value={minutes}
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
							value={this.state.interval}
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
						<Button
							buttonStyle={styles.presetButton}
							rounded={true}
							fontFamily={'Helvetica'}
							title="Save These Settings"
							onPress={this.handleModal}
						/>
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
