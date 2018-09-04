import React, { Component } from 'react';
import { View, Text } from 'react-native-elements';
//import data from './quoteData.json';
import { styles } from './styles';

class Quotes extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }} />;
	}
}
export default Quotes;
