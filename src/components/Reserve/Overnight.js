import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Burger from '../Burger';
import { DrawerActions, NavigationActions } from 'react-navigation';
import { overnight } from './reserve-landing-content';
import Images from 'assets/images';
import styles from './styles';
import GoBack from './GoBack';

export default class Overnight extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	render() {
		const { navigate } = this.props.navigation;
		const url = this.props.navigation.state.params.url;
		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						rightComponent={<GoBack screen={'Reserve'} screenTitle={'Reservations'} />}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ScrollView>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Image source={Images.Reserve.overnight} style={styles.imageInside} />
						<Text style={styles.headingInside}>{overnight.title}</Text>
					</View>
					<Button
						rounded={true}
						buttonStyle={styles.button}
						title="Reserve Now"
						onPress={() =>
							navigate('WebScreenReserve', {
								url: url
							})}
					/>
					<Text style={styles.paragraph}>
						Choose this option to book stays of one to six nights. Our 24-hour guest rates are per person and include
						room and board and the Ashram Core Program, consisting of daily morning and evening meditation programs,
						ongoing Yoga and Sanskrit classes, cultural events and evening lectures. Fees for other programs are
						additional
					</Text>
					<Text style={styles.paragraph}>Flexible Dates</Text>
					<Text style={styles.paragraph}>
						Camping – $76.00{'\n'}
						Day Visitor Rates – $0.00{'\n'}
						Dorm Room – $95.00{'\n'}
						Semi-Private Couple or Two Friends – $230.00{'\n'}
						Semi-Private Room – $115.00
					</Text>
					<Text style={styles.paragraph}>If you are staying overnight, meals and Yoga classes are included.</Text>
					<Text style={styles.paragraph}>
						If you are arriving early, be aware Check-In is at 4:00 pm and check-out is at 2:00 pm. Registrations
						accepted until 4 pm the same day. Payment for additional meals needs to be made through the office.
						Additional Yoga Classes are paid at the Yoga Studio.
					</Text>
					<Text style={styles.paragraph}>
						Rates shown here are weekend rates. For Sunday through Thursday night stays, subtract fifteen dollars per
						night.
					</Text>
					<Text style={styles.paragraph}>During your reservation please read the Terms and Conditions carefully.</Text>
					<Text style={styles.paragraph}>
						Included in the Terms and Conditions are the Cancellation Policy, Refund Policy, Discounts, Long-Term Guest
						Policy, Workshop Registration, General Policies and Regulations, Data Security, Privacy Notice.
					</Text>
					<Button
						rounded={true}
						buttonStyle={styles.button}
						title="Reserve Now"
						onPress={() =>
							navigate('WebScreen', {
								url: url
							})}
					/>
				</ScrollView>
			</View>
		);
	}
}
