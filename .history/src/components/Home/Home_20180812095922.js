import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Header, Text } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import Images from 'assets/images';
import styles from './styles';
import Burger from '../Burger';

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
				<View style={{ flex: 1, padding: 10, backgroundColor: '#c6d9eb' }}>
					<Text style={styles.quote}>
						Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day
						someone might do the same for you.
					</Text>
					<Text style={styles.citation}> - Shri Brahmananda Saraswati</Text>
				</View>

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
