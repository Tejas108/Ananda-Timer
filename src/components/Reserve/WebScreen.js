import React, { Component } from 'react';
import { WebView, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import GoBack from './GoBack';
import styles from './styles';

class WebScreen extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	handleIndicator = () => {
		return <ActivityIndicator style={styles.indicator} size="large" color="#3C3B85" />;
	};

	render() {
		const url = this.props.navigation.state.params.url;
		const jsCode = 'document.getElementsByClassName("site-logo")[0].style.display="none";';
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						rightComponent={<GoBack />}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<WebView
					style={{ flex: 1 }}
					originWhitelist={['*']}
					source={{
						uri: url,
						baseUrl: ''
					}}
					// onLoad={() => this.hideSpinner()}
					javaScriptEnabled={true}
					injectedJavaScript={jsCode}
					renderLoading={this.handleIndicator}
					startInLoadingState={true}
				/>
			</View>
		);
	}
}

export default WebScreen;
