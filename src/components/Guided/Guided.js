import React, { Component } from 'react';
import { Header, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Burger from '../Burger';
import styles from './styles';
import { moderateScale } from '../../styles/Utils';

export default class Guided extends Component {
	render() {
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
							text: 'Guided Meditations',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<Text>I'm guided meditation screen. Coming soon.</Text>
			</View>
		);
	}
}
