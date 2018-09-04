import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';

let randQuote = '';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			currQuote: ''
		};
		this.handleQuote = this.handleQuote.bind(this);
	}

	handleQuote = () => {
		console.log('handleQuote called');
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
		console.log('quote: ' + this.state.currQuote);
		if (randQuote === this.state.currQuot) {
			randQuote = Math.floor(Math.random() * data.length);
			this.state.currQuote = randQuote.title;
		}
	};

	componentDidMount = () => {
		this.handleQuote();
	};

	render() {
		this.handleQuote;
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				{/* <Text style={styles.quote}>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text> */}
				{<Text style={styles.quote}>{randQuote}</Text>}
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
