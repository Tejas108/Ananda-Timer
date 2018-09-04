import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
	componentDidMount() {
		RNSplashScreen.hide();
	}
	render() {
		return (
			<View style={styles.safe}>
				<StatusBar barStyle="dark-content" backgroundColor="#c6d9eb" />
				<AppNav />
			</View>
		);
	}
}
