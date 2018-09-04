import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
import PTRView from 'react-native-pull-to-refresh';

let randQuote = '';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			currQuote: ''
		};
	}

	handleQuote = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.setState({
			currQuote: data[randQuote].title
		});
		console.log('quote called: ' + this.state.currQuote);
	};

	componentWillMount = () => {
		this.handleQuote();
	};

	handleRandom = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
		console.log('random called');
	};

	handleRefresh = () => {
		return new Promise(handleQuote => {
			setTimeout(() => {
				this.handleQuote();
			}, 1000);
		});
	};

	render() {
		return (
			<PTRView onRefresh={this.handleRefresh}>
				{/* <View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}> */}
				<Text style={styles.quote}>{this.state.currQuote}</Text>
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
				{/* </View> */}
			</PTRView>
		);
	}
}
