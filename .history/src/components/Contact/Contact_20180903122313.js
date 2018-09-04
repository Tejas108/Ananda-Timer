import React, { Component } from 'react';
import { Header, Icon, Text, Button } from 'react-native-elements';
import { TouchableOpacity, View, ImageBackground, Linking, LinkingIOS } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';
import Images from 'assets/images';

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
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ImageBackground source={Images.Backgrounds.contact} style={styles.background}>
					<View style={styles.contentWrap}>
						<Text style={styles.heading}>Contact Ananda Ashram</Text>
						<Text style={styles.content}>
							13 Sapphire Road{'\n'}
							Monroe, NY 10950
						</Text>
						<Button
							rounded={true}
							buttonStyle={styles.button}
							title="Call Us At 845.782.5575"
							onPress={() => Linking.openURL('tel://8457825575')}
						/>
						<Button
							rounded={true}
							buttonStyle={styles.button}
							title="Visit Ananda Ashram"
							onPress={() => Linking.openURL('http://anandaashram.org/?theme=ananda_mobile')}
						/>
						<Button
							rounded={true}
							buttonStyle={styles.button}
							title="Make Your Reservation Online"
							onPress={() => Linking.openURL('http://anandaashram.org/ReserveOnline-RG#/events#content')}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
