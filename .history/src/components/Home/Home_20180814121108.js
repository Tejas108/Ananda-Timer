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
			<View style={styles.container}>
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
					style={styles.logoWrap}
				>
					<Image source={Images.ashramlogo} style={styles.ashramlogo} resizeMode="contain" />
				</View>
			</View>
		);
	}
}
