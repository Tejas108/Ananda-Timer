import React, { Component } from 'react';
import { View, Text } from 'react-native-elements';
import data from './quoteData.json';
import { styles } from './styles';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		{
			console.log(data);
		}
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				<Text style={styles.quote}>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text>
				<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
