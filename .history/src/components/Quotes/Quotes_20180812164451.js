import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
import { DrawerActions } from 'react-navigation';

let randQuote = '';

export default class Quotes extends Component {
	constructor(props) {
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
		console.log('quote: ' + this.state.currQuote);
		if (randQuote === this.state.currQuote) {
			this.handleRandom;
		}
	};

	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('didBlur', () => {
				this.handleQuote;
			})
		];
	};

	componentWillUnmount = () => {
		this.subs.forEach(sub => {
			sub.remove();
		});
	};

	handleRandom = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote.title;
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
