import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Slider, Header, CheckBox, FormLabel, FormInput } from 'react-native-elements';
import { View, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import { Player } from 'react-native-audio-toolkit';
import styles from './styles';
import { DrawerActions } from 'react-navigation';
import Burger from '../Burger';
import * as Animatable from 'react-native-animatable';
import store from 'react-native-simple-store';
import Modal from 'react-native-modal';
import uuid from 'uuid';
import RNPickerSelect from 'react-native-picker-select';
import { moderateScale } from '../../styles/Utils';
import data from './bellData.json';
import ambientData from './ambient.json';
import Logo from './Logo';
import KeepAwake from 'react-native-keep-awake';
import GridView from 'react-native-super-grid';
import { Icon } from 'react-native-elements';

let mTimeout;
let ticker;
let count = 0;
let iInterval;

export default class Timer extends Component {
	constructor(props) {
		super(props);
		this.inputRefs = {};
		this.inputRefsInt = {};

		this.state = {
			minutes: 1,
			interval: 0,
			isTimer: false,
			isInterval: false,
			tick: 0,
			ambChecked: false,
			isModal: false,
			isGalleryModal: false,
			txtInput: '',
			error: false,
			endBell: undefined,
			intBell: undefined,
			bells: data,
			disableButton: false,
			showAlert: false
		};
	}

	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('didBlur', () => {
				this.handleTimerReset();
				KeepAwake.deactivate();
			})
		];
		if (this.state.endBell === undefined || this.state.endBell === null) {
			this.setState({ disableButton: true });
		}
	};

	componentWillMount() {
		this.ambPlayer = null;
		this.bellPlayer = null;
		this.intBellPlayer = null;
		this.reloadPlayer();
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
		if (this.state.isTimer) {
			this.bellPlayer = new Player(this.state.endBell);
			this.bellPlayer.play();
		}
	};

	reloadIntBellPlayer = () => {
		if (this.intBellPlayer) {
			this.intBellPlayer.destroy();
		}
		if (this.state.isInterval) {
			this.intBellPlayer = new Player(this.state.intBell);
			this.intBellPlayer.play();
		}
	};

	reloadPlayer = () => {
		if (this.ambPlayer) {
			this.ambPlayer.destroy();
		} else {
			this.ambPlayer = new Player('sitar.mp3', {
				autoDestroy: false
			}).prepare(err => {
				if (err) {
					console.log('error at _reloadPlayer():');
					console.log(err);
				} else {
					this.ambPlayer.looping = true;
				}
			});
		}
		// this.ambPlayer = new Player('sitar.mp3');
		// this.ambPlayer.looping = true;
	};

	sampleBellPlayer = v => {
		if (this.bellPlayer) {
			this.bellPlayer.destroy();
		}
		this.bellPlayer = new Player(v);
		this.bellPlayer.play();
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
			eBell = this.props.navigation.state.params.endBell;
			iBell = this.props.navigation.state.params.intBell;
		}

		KeepAwake.activate();

		let currTimer = this.state.isTimer;

		if (!this.props.navigation.state.params) {
			if (this.state.endBell === undefined || this.state.endBell === null) {
				Alert.alert('Oops..', 'Remember to set your end bell!');
				return;
			}
			if (this.state.interval > 0) {
				if (this.state.intBell === undefined || this.state.intBell === null) {
					Alert.alert('Oops..', 'Remember to set your interval bell!');
					return;
				}
			}
		}

		if (m > 0) {
			this.setState(
				{
					isTimer: !currTimer,
					tick: m,
					interval: ivl,
					minutes: m,
					ambChecked: mus,
					endBell: eBell,
					intBell: iBell
				},
				() => {}
			);
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
		iInterval = setInterval(this.reloadIntBellPlayer, interval);
	};

	handleTimerEnd = () => {
		this.reloadBellPlayer();
		this.handleTimerReset();
		clearTimeout(mTimeout);
		clearInterval(iInterval);
		KeepAwake.deactivate();
	};

	handleTimerReset = () => {
		this.props.navigation.state.params = undefined;
		this.setState({
			minutes: 1,
			interval: 0,
			isTimer: false,
			isInterval: false,
			tick: 0,
			ambChecked: false,
			endBell: null,
			intBell: null,
			disableButton: true,
			txtInput: ''
		});
		clearInterval(ticker);
		this.ambPlayer.stop();
		this.reloadPlayer();
		this.forceUpdate();
		setTimeout(() => {
			this.setState({
				endBell: undefined,
				intBell: undefined
			});
		}, 1000);
	};

	handleModalSubmit = () => {
		//store.delete('settings');
		let id = uuid.v4();
		if (this.state.input !== '') {
			const preset = {
				id: id,
				title: this.state.txtInput,
				min: this.state.minutes,
				int: this.state.interval,
				music: this.state.ambChecked,
				endBell: this.state.endBell,
				intBell: this.state.intBell
			};
			store.push('settings', preset);
			setTimeout(() => {
				this.handleModal();
			}, 0);
			this.setState({ txtInput: '' });
		}
	};

	handleModal = () => {
		this.setState({ isModal: !this.state.isModal });
	};

	handleGallery = () => {
		this.setState({ isGalleryModal: !this.state.isGalleryModal });
	};

	showAlert = () => {
		this.setState({
			showAlert: true
		});
	};

	hideAlert = () => {
		this.setState({
			showAlert: false
		});
	};

	render() {
		const { params } = this.props.navigation.state;
		const items = ambientData;

		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Meditation Timer',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
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
									minutes remaining
								</Text>
							</Animatable.View>
						) : params ? (
							<Logo />
						) : (
							<Animatable.View animation="fadeIn" style={{ flex: 1 }}>
								<Text style={styles.selectLabel}>Choose Ending Sound</Text>
								<RNPickerSelect
									placeholder={{
										label: 'Select a sound...',
										value: null
									}}
									placeholderTextColor={'#3C3B85'}
									items={this.state.bells}
									onValueChange={value => {
										this.setState({
											endBell: value,
											disableButton: false
										});
										this.sampleBellPlayer(value);
									}}
									value={this.state.endBell}
									style={{
										...pickerSelectStyles,
										done: {
											color: '#3C3B85'
										}
									}}
									ref={el => {
										this.inputRefs.picker = el;
									}}
								/>

								<Text style={styles.selectLabel}>Choose Interval Sound</Text>
								<RNPickerSelect
									placeholder={{
										label: 'Select a sound...',
										value: null
									}}
									placeholderTextColor={'#3C3B85'}
									items={this.state.bells}
									onValueChange={value => {
										this.setState({
											intBell: value
										});
										this.sampleBellPlayer(value);
									}}
									style={{
										...pickerSelectStyles,
										done: {
											color: '#3C3B85'
										}
									}}
									value={this.state.intBell}
									ref={el => {
										this.inputRefsInt.picker = el;
									}}
								/>
							</Animatable.View>
						)}
					</View>
					<View style={styles.sliderWrap}>
						{params ? (
							<Text style={styles.sliderLabel}>Meditation Time: {params.min} mins</Text>
						) : (
							<Text style={styles.sliderLabel}>Meditation Time: {this.state.minutes} mins</Text>
						)}
						{params ? (
							<Slider
								value={params.min}
								minimumValue={0}
								maximumValue={180}
								minimumTrackTintColor="#ffcd32"
								maximumTrackTintColor="#ffffff"
								thumbTintColor="#3C3B85"
								thumbTouchSize={{ width: 60, height: 60 }}
								style={styles.slider1}
								height={40}
								disabled={true}
							/>
						) : (
							<Slider
								value={this.state.minutes}
								minimumValue={1}
								maximumValue={180}
								step={1}
								onValueChange={minutes => this.setState({ minutes: minutes })}
								minimumTrackTintColor="#ffcd32"
								maximumTrackTintColor="#ffffff"
								thumbTintColor="#3C3B85"
								thumbTouchSize={{ width: 60, height: 60 }}
								style={styles.slider1}
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
								height={40}
								disabled={true}
							/>
						) : (
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
								//onPress={this.handleGallery}
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
							<View style={{ flex: 3 }}>
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
							<View style={{ flex: 3 }}>
								<Button
									disabled={this.state.disableButton}
									buttonStyle={styles.presetButton}
									rounded={true}
									fontFamily={'Helvetica'}
									title="Save These Settings"
									onPress={this.handleModal}
								/>
							</View>
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
						<FormInput
							autoFocus={true}
							inputStyle={styles.modalInput}
							onChangeText={input => this.setState({ txtInput: input })}
						/>
						{this.state.txtInput !== '' ? (
							<Button buttonStyle={styles.button} rounded={true} title="Save" onPress={this.handleModalSubmit} />
						) : (
							<Button
								buttonStyle={styles.button}
								rounded={true}
								title="Save"
								disabled={true}
								onPress={this.handleModalSubmit}
							/>
						)}
					</View>
				</Modal>
				<Modal
					isVisible={this.state.isGalleryModal}
					style={{ backgroundColor: '#ffffff' }}
					onBackdropPress={() => this.setState({ isGalleryModal: false })}
				>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							marginTop: 10,
							marginRight: 10,
							marginBottom: -15
						}}
						onPress={() => this.setState({ isGalleryModal: false })}
					>
						<Icon name="cross" style={{ width: 30 }} type="entypo" color="#101010" size={30} />
					</TouchableOpacity>
					<GridView
						itemDimension={100}
						items={items}
						style={[styles.gridView]}
						renderItem={item => (
							<TouchableOpacity style={styles.itemContainer}>
								<ImageBackground source={item.image} style={{ width: '100%', height: '100%', padding: 5 }}>
									<Text style={styles.itemName}>{item.name}</Text>
								</ImageBackground>
							</TouchableOpacity>
						)}
					/>
				</Modal>
			</View>
		);
	}
}
Modal.propTypes = {
	isVisible: PropTypes.bool,
	isGalleryModal: PropTypes.bool
};
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: moderateScale(12),
		paddingTop: moderateScale(13),
		paddingHorizontal: moderateScale(10),
		paddingBottom: moderateScale(12),
		borderWidth: 1,
		borderColor: '#3C3B85',
		borderRadius: 4,
		color: '#3C3B85',
		marginBottom: moderateScale(10)
	}
});
