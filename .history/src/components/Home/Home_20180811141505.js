import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import Images from 'assets/images';
import styles from '../Settings/styles';

export default class Home extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Icon
									name="bars"
									style={{ padding: 10, marginLeft: 10 }}
									size={24}
									color="#3C3B85"
									type={'font-awesome'}
								/>
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb' }}
					/>
				</View>
				<View style={{ flex: 1 }}>
          <Text>i'm gonna be quotes</Text>
					<Image source={Images.ashramlogo} style={styles.ashramlogo}
					<Text>i'm gonna be quotes</Text>
				</View>
			</View>
		);
	}
}
