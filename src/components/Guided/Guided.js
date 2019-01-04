import React, { Component } from 'react';
import { Header, Text, Icon } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Burger from '../Burger';
import styles from './styles';
import { moderateScale } from '../../styles/Utils';
import { Player } from 'react-native-audio-toolkit';
import KeepAwake from 'react-native-keep-awake';

export default class Guided extends Component {
	state = {
		isPlaying: false
	};

	mPlayer = new Player('guruji1.mp3');

	componentWillMount() {
		this.Player = null;
		this.reloadPlayer();
		this.subs = [
			this.props.navigation.addListener('didBlur', () => {
				this.setState({ isPlaying: false });
				this.reloadPlayer();
				KeepAwake.deactivate();
			})
		];
	}

	reloadPlayer = () => {
		console.log('reloadPlayer called');
		if (this.mPlayer) {
			this.mPlayer.destroy();
		}
	};

	handlePlayer = () => {
		this.setState({ isPlaying: !this.state.isPlaying });
		if (!this.state.isPlaying) {
			this.mPlayer.play();
			KeepAwake.activate();
			this.mPlayer.on('ended', () => {
				this.mPlayer.destroy();
				this.setState({ isPlaying: false });
				KeepAwake.deactivate();
			});
		} else {
			this.reloadPlayer();
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Guided Meditations',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<TouchableOpacity onPress={this.handlePlayer}>
					<View style={styles.listItem}>
						<View style={{ flex: 1, justifyContent: 'flex-start' }}>
							<Text style={styles.title}>Guided Meditation #1 - </Text>
							<Text style={styles.subtitle}>June, 1980 - Ananda Ashram</Text>
						</View>
						<View style={{ justifyContent: 'flex-end', width: 50 }}>
							{this.state.isPlaying ? (
								<Icon name="controller-stop" style={{ alignSelf: 'right' }} type="entypo" color="#fff" size={50} />
							) : (
								<View>
									<Icon name="controller-play" type="entypo" color="#fff" size={50} />
								</View>
							)}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
