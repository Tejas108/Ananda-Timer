import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';

export default class Contact extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Icon
									name="bars"
									style={{ padding: 10, marginLeft: 10 }}
									size={20}
									color="#3C3B85"
									type={'font-awesome'}
								/>
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb' }}
					/>
				</View>
				<Text style={styles.heading}>Contacting Ananda Ashram</Text>
				<View style={styles.contentWrap}>
					<Text style={styles.content}>
						13 Sapphire Road{'\n'}
						Monroe, NY 10950
					</Text>
					<Text style={styles.content}>845.782.5575</Text>
					<Text style={styles.content}>anandaashram.org</Text>
				</View>
			</View>
		);
	}
}
