import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, ActivityIndicator, NetInfo, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import styles from './styles';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

class WebScreenMembers extends Component {
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
		const url = 'https://yogasocietyofnewyorkinc.wildapricot.org/';
		const jsCode = 'document.getElementsByClassName("WaLayoutItem")[0].style.display="none";';
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
							text: 'Membership',
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
						// renderError={() => <Text style={styles.netError}>No network connectivity</Text>}
						// onError={console.log(console.error)}
					/>
				) : (
					<Text style={styles.netError}>No Network Connectivity.{'\n'}You need to be online to view Membership.</Text>
				)}
			</View>
		);
	}
}

export default WebScreenMembers;
