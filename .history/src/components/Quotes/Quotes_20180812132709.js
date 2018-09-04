import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import data from './quoteData.json';
import { styles } from './styles';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
				<Text>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text>
				<Text> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
export default Quotes;
