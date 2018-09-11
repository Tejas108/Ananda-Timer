import React, { Component } from 'react';
import { Header, Text, Button } from 'react-native-elements';
import { TouchableOpacity, View, ImageBackground, Linking } from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import styles from './styles';
import Burger from '../Burger';
import Images from 'assets/images';

export default class Contact extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};
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
							text: 'Reservations & Contact',
							style: { fontSize: 17, fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ImageBackground
					imageStyle={{ resizeMode: 'stretch' }}
					source={Images.Backgrounds.contact}
					style={styles.background}
				>
					<View style={styles.contentWrap}>
						{/* <Text style={styles.heading}>Reservations & Contact</Text> */}
						<Text style={styles.content}>
							13 Sapphire Road{'\n'}
							Monroe, NY 10950
						</Text>
						<Button
							rounded={true}
							buttonStyle={styles.button}
							fontFamily={'Helvetica'}
							title="Call Us At 845.782.5575"
							onPress={() => Linking.openURL('tel://8457825575')}
						/>
						<Button
							rounded={true}
							fontFamily={'Helvetica'}
							buttonStyle={styles.button}
							title="Make Your Reservation"
							onPress={this.navigateToScreen('Reserve')}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
