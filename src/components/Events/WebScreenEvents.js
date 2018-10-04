import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, ActivityIndicator, NetInfo, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import styles from './styles';
import { moderateScale } from '../../styles/Utils';

class WebScreenEvents extends Component {
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
		const url = 'http://anandaashram.org/events-calendar?theme=ananda_mobile';
		const jsCode =
			'(function(){var vr=document.getElementsByClassName("event-row");for(var i=0;i<vr.length;i++){vr[i].style.height="100px";vr[i].style.borderBottom="1px solid #fff";vr[i].style.paddingTop="20px";}}());document.getElementById("header").remove();document.getElementById("page-title").style.display="none";document.getElementsByClassName("region-bottom")[0].remove();document.getElementById("page").style.fontSize="16px";document.getElementById("main").style.background="#c6d9eb";document.getElementById("main").style.marginBottom="40px";document.getElementById("main").style.border="none";document.getElementById("content").style.backgroundColor="#c6d9eb";document.getElementsByClassName("html")[0].style.padding="0";document.getElementsByClassName("html")[0].style.backgroundColor="#c6d9eb";document.getElementsByClassName("view-events-calendar")[0].style.backgroundColor="#c6d9eb";';
		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Event Calendar',
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
						source={{
							uri: url,
							baseUrl: ''
						}}
						javaScriptEnabled={true}
						injectedJavaScript={jsCode}
						renderLoading={this.handleIndicator}
						startInLoadingState={true}
					/>
				) : (
					<Text style={styles.netError}>No Network Connectivity.{'\n'}You need to be online to view events.</Text>
				)}
			</View>
		);
	}
}

export default WebScreenEvents;
