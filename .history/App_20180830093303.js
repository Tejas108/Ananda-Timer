import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
	render() {
		return (
			<View style={styles.safe}>
				<AppNav />
			</View>
		);
	}
}
