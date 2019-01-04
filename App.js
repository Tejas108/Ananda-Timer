import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
				<StatusBar barStyle="dark-content" backgroundColor="#c6d9eb" />
				<AppNav />
			</SafeAreaView>
		);
	}
}
