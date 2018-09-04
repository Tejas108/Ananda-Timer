import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Header, Text } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import Images from 'assets/images';
import styles from './styles';
import Burger from '../Burger';
import Quotes from '../Quotes/Quotes';

export default class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb' }}
					/>
				</View>
				<Quotes />
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignContent: 'center',
						paddingHorizontal: 10,
						backgroundColor: '#c6d9eb'
					}}
				>
					<Image source={Images.ashramlogo} style={{ height: 100, width: undefined }} resizeMode="contain" />
				</View>
			</View>
		);
	}
}
