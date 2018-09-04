import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
// import PTRView from 'react-native-pull-to-refresh';
import PullToRefresh from 'react-native-simple-ptr';
let randQuote = '';

export default class Quotes extends Component {
	constructor() {
		super();
		this.state = {
			currQuote: '',
			isRefreshing: false
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

	onRefresh() {
		this.setState({
			isRefreshing: true,
		});

		setTimeout(() => {
			this.setState({ isRefreshing: false });
		}, 2000);
	}


	render() {
		return (
			// <PTRView onRefresh={this.handleRefresh}>
			<PullToRefresh isRefreshing={this.state.isRefreshing} onRefresh={this.onRefresh.bind(this)}>
				<ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
					<Text style={styles.quote}>{this.state.currQuote}</Text>
					<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
				</ScrollView>
				</PullToRefresh>
			{/* </PTRView> */}
		);
	}
}
