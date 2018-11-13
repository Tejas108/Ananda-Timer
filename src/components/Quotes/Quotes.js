import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import data from './quoteData.json';
import styles from './styles';
import PullToRefresh from 'react-native-simple-ptr';
import PropTypes from 'prop-types';

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
			<PullToRefresh isRefreshing={this.state.isRefreshing} onRefresh={this.onRefresh.bind(this)} minPullDistance={10}>
				<ScrollView style={styles.scrollView}>
					<Text style={styles.quote}>{this.state.currQuote}</Text>
					<Text style={styles.citation}> - Shri Brahmananda Sarasvati</Text>
				</ScrollView>
			</PullToRefresh>
		);
	}
}
PullToRefresh.propTypes = {
	isRefreshing: PropTypes.bool
};
