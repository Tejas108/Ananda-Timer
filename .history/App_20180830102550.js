import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './src/styles/appStyles';
import AppNav from './config/router';

export default class App extends Component {
	render() {
		return (
			<View style={styles.safe}>
				<StatusBar barStyle="dark-content" backgroundColor="#c6d9eb" />
				<AppNav />
			</View>
		);
	}
}
