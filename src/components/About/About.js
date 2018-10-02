import React, { Component } from 'react';
import { Header, Text } from 'react-native-elements';
import { TouchableOpacity, View, Image } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';
import { moderateScale } from '../../styles/Utils';
import Burger from '../Burger';
import Images from 'assets/images';

export default class About extends Component {
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
							text: 'About/Help',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<Text style={styles.copy}>Version 1.0.1</Text>
				<Text style={styles.copy}>
					Created by{'\n'}Tejas Monteverdi{'\n'}RainWorld Interactive
				</Text>
				<Text style={styles.copy}>Sitar music by Roop Verma, roopverma.com</Text>
				<Text style={styles.copy}>
					{'\u00A9'} 2018 Yoga Society of New York, Inc.{'\n'}
					{'\n'}
				</Text>
				<Text style={styles.helpCopy}>
					The lower icons are, from left to right, 'Home', 'Timer', 'Guided' and 'Presets'.
				</Text>
				<Text style={styles.helpCopy}>
					Set your meditation time and interval time if you desire. You must set an end sound. Clicking 'Save These
					Settings' will allow you to save the current timer settings as a preset. Clicking the bottom right icon,
					'Presets', takes you to your presets and allows you to start your favorite meditation.
				</Text>
			</View>
		);
	}
}
