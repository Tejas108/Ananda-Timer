import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, ActivityIndicator, Text, NetInfo } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import styles from './styles';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

class WebScreenYoga extends Component {
	constructor() {
		super();
		this.state = {
			isConnected: true
		};
	}

	componentDidMount = () => {
		NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
	};

	componentWillUnmount = () => {
		NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
	};

	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	handleConnectivityChange = isConnected => {
		this.setState({ isConnected });
	};

	handleIndicator = () => {
		return <ActivityIndicator style={styles.indicator} size="large" color="#3C3B85" />;
	};

	render() {
		const url = 'https://www.anandaashramyoga.org/daily-yoga-meditation-classes-monroe-ny/';
		const jsCode =
			'(function(){var th=document.getElementsByTagName("th");for(var i=0;i<th.length;i++){th[i].style.color="#3C3B85";}}());document.getElementById("canvas").style.backgroundColor="#c6d9eb";document.getElementById("footer").remove();document.getElementsByClassName("info-footer-wrapper")[0].remove();document.getElementById("block-565d83d08d1278282506").remove();document.getElementById("block-yui_3_17_2_3_1513278862104_5015").remove();document.getElementById("header").remove();document.getElementById("mobileMenuLink").remove();document.getElementById("hero").remove();document.getElementsByClassName("sqs-announcement-bar-text")[0].remove()';
		return (
			<View style={{ flex: 1, backgroundColor: '#c6d9eb' }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Yoga Class Schedule',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				{this.state.isConnected ? (
					<WebView
						ref={ref => (this.webview = ref)}
						mixedContentMode={'compatibility'}
						style={styles.webview}
						// originWhitelist={['*']}
						source={{
							uri: url,
							baseUrl: ''
						}}
						javaScriptEnabled={true}
						injectedJavaScript={jsCode}
						renderLoading={this.handleIndicator}
						startInLoadingState={true}
						onError={console.error.bind(console, 'error')}
					/>
				) : (
					<Text style={styles.netError}>No Network Connectivity.{'\n'}You need to be online to see Yoga schedule.</Text>
				)}
			</View>
		);
	}
}

export default WebScreenYoga;
