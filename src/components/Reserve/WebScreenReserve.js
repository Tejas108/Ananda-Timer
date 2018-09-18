import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, ActivityIndicator, Button, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import GoBack from './GoBack';
import styles from './styles';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

class WebScreenReserve extends Component {
	constructor() {
		super();
		this.state = {
			isTerms: false,
			canGoBack: null
		};
	}

	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	handleIndicator = () => {
		return <ActivityIndicator style={styles.indicator} size="large" color="#3C3B85" />;
	};

	onNavigationStateChange(navState) {
		this.setState({
			canGoBack: navState.canGoBack,
			isConnected: null
		});
	}

	handleGoBack() {
		this.webview.goBack();
	}

	render() {
		// document.getElementById("rs-question-terms-row").remove()
		const url = this.props.navigation.state.params.url;
		const jsCode =
			'(function(){return "Send me back!"}());document.getElementsByClassName("site-logo")[0].remove();document.getElementsByClassName("bg-white")[0].style.backgroundColor="#c6d9eb";';
		return (
			<View style={{ flex: 1, backgroundColor: '#c6d9eb' }}>
				<View style={{ alignSelf: 'stretch' }}>
					{this.state.canGoBack ? (
						<Header
							leftComponent={
								<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
									<Burger />
								</TouchableOpacity>
							}
							rightComponent={
								<TouchableOpacity onPress={this.handleGoBack.bind(this)}>
									<Text style={styles.backlink}>Close Terms And Conditions</Text>
								</TouchableOpacity>
							}
							outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
						/>
					) : (
						<Header
							leftComponent={
								<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
									<Burger />
								</TouchableOpacity>
							}
							rightComponent={<GoBack screen={'Reserve'} screenTitle={'Reservations'} />}
							outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
						/>
					)}
				</View>
				<WebView
					style={{ flex: 1 }}
					originWhitelist={['*']}
					source={{
						uri: url,
						baseUrl: ''
					}}
					javaScriptEnabled={true}
					injectedJavaScript={jsCode}
					renderLoading={this.handleIndicator}
					startInLoadingState={true}
					ref={r => (this.webview = r)}
					onError={console.error.bind(console, 'error')}
					onNavigationStateChange={this.onNavigationStateChange.bind(this)}
				/>
			</View>
		);
	}
}

export default WebScreenReserve;
