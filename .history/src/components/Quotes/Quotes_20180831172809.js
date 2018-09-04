import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
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
	};

	componentWillMount = () => {
		this.handleQuote();
	};

	handleRandom = () => {
		randQuote = Math.floor(Math.random() * data.length);
		this.state.currQuote = randQuote;
	};

	handleRefresh = () => {
		return new Promise(handleQuote => {
			setTimeout(() => {
				this.handleQuote();
			}, 200);
		});
	};

	onRefresh() {
		this.setState({
			isRefreshing: true
		});
		this.handleQuote();
		setTimeout(() => {
			this.setState({ isRefreshing: false });
		}, 1000);
	}

	render() {
		return (
			<PullToRefresh
				isRefreshing={this.state.isRefreshing}
				onRefresh={this.onRefresh.bind(this)}
				minPullDistance={10}
				arrow={require('../assets/arrow-down.gif')}
			>
				<ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
					<Text style={styles.quote}>{this.state.currQuote}</Text>
					<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
				</ScrollView>
			</PullToRefresh>
		);
	}
}
