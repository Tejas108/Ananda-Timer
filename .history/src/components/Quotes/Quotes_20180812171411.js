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
		this.handleRandom = this.handleRandom.bind(this);
	}

	handleQuote = () => {
		console.log('handleQuote called');
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
		console.log(data);
		if (randQuote === this.state.currQuote) {
			this.handleRandom;
		}
	};

	componentDidMount = () => {
		// this.forceUpdate();
		this.handleQuote();
	};

	handleRandom = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
		console.log('title: ' + data[this.state.currQuote].title);
	};

	render() {
		this.handleQuote;
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				{/* <Text style={styles.quote}>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text> */}
				{<Text style={styles.quote}>{}</Text>}
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
