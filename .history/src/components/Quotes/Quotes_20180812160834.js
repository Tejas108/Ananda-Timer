import React, { Component } from 'react';
import { View, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';

let randQuote = '';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			lastQuote: '',
			currQuot: ''
		};
	}

this.handleQuote = this.handleQuote.bind(this);

handleQuote = () => {

}

	componentWillMount() {
		handleQuote();
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				{/* <Text style={styles.quote}>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text> */}
				{data.map(quote => <Text style={styles.quote}>{randQuote.title}</Text>)}
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
