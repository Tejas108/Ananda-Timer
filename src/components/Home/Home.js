import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import Images from 'assets/images';
import styles from './styles';
import Burger from '../Burger';
import Quotes from '../Quotes/Quotes';
const dimensions = Dimensions.get('window');
const deviceWidth = dimensions.width;
import * as Animatable from 'react-native-animatable';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default class Home extends Component {
	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('willFocus', () => {
				// console.log('focus');
			})
		];
	};

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
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<Animatable.View animation="fadeInDown" style={{ flex: 1 }}>
					<Quotes />
				</Animatable.View>
				<Animatable.View animation="fadeInUp" style={styles.logoWrap}>
					<Image source={Images.ashramlogo} style={{ width: deviceWidth - 20 }} resizeMode={'contain'} />
				</Animatable.View>
			</View>
		);
	}
}
