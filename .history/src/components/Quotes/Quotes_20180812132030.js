import React, { Component } from 'react';
import { View, Text } from 'react-native-elements';
// import data from './quoteData.json';
// import { styles } from './styles';

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
			<View>
				<Text>
					Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone
					might do the same for you.
				</Text>
				<Text> - Shri Brahmananda Saraswati</Text>
			</View>
		);
	}
}
