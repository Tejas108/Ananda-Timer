import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
import Swipe from 'react-easy-swipe';

let randQuote = '';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			currQuote: ''
		};
	}

	onSwipeStart(event) {
		console.log('Start swiping...', event);
	}

	onSwipeMove(position, event) {
		console.log(`Moved ${position.x} pixels horizontally`, event);
		console.log(`Moved ${position.y} pixels vertically`, event);
	}

	onSwipeEnd(event) {
		console.log('End swiping...', event);
	}

	handleQuote = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = data[randQuote].title;
	};

	componentWillMount = () => {
		this.handleQuote();
	};

	handleRandom = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
		console.log('title: ' + data[this.state.currQuote].title);
	};

	render() {
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				<Text style={styles.quote}>{this.state.currQuote}</Text>
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
