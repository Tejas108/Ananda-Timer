import React, { Component } from 'react';
import { Header, Text, Button } from 'react-native-elements';
import { TouchableOpacity, View, ImageBackground, Linking, NetInfo } from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import styles from './styles';
import Burger from '../Burger';
import Images from 'assets/images';
import { moderateScale } from '../../styles/Utils';

export default class Contact extends Component {
	constructor() {
		super();
		this.state = {
			isConnected: true
		};
	}

	componentDidMount = () => {
		NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
	};

	componentWillUnmount = () => {
		NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
	};

	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	handleConnectivityChange = isConnected => {
		this.setState({ isConnected });
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
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
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
						<Text style={styles.content}>
							13 Sapphire Road{'\n'}
							Monroe, NY 10950{'\n'}
							{'\n'}
							Web: http://anandaashram.org{'\n'}
							Email: ananda@anandaashram.org
						</Text>
					</View>
					<View style={{ flex: 2 }}>
						<Button
							rounded={true}
							buttonStyle={styles.button}
							fontFamily={'Helvetica'}
							large={true}
							title="Call Us At 845.782.5575"
							onPress={() => Linking.openURL('tel://8457825575')}
						/>
						{this.state.isConnected ? (
							<Button
								rounded={true}
								fontFamily={'Helvetica'}
								buttonStyle={styles.button}
								large={true}
								title="Make Your Reservation"
								onPress={this.navigateToScreen('Reserve')}
							/>
						) : (
							<View>
								<Button
									disabled={true}
									rounded={true}
									fontFamily={'Helvetica'}
									buttonStyle={styles.button}
									large={true}
									title="Make Your Reservation"
								/>
								<Text style={styles.netError}>
									No Network Connectivity.{'\n'}You need to be online to make reservations.
								</Text>
							</View>
						)}
					</View>
				</ImageBackground>
			</View>
		);
	}
}
