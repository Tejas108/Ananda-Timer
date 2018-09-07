import React, { Component } from 'react';
import { WebView, View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';
import Burger from '../Burger';
import GoBack from './GoBack';

class WebScreen extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};
	render() {
		const url = this.props.navigation.state.params.url;
		console.log(this.props.navigation.state.params);
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
					originWhitelist={['*']}
					source={{
						uri: url,
						baseUrl: ''
					}}
				/>
			</View>
		);
	}
}

export default WebScreen;
