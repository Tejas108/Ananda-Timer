import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Burger from '../Burger';
import { DrawerActions, NavigationActions } from 'react-navigation';
import { threeweek } from './reserve-landing-content';
import Images from 'assets/images';
import styles from './styles';
import GoBack from './GoBack';

//const url = 'https://anandaashram.secure.retreat.guru/program/extended-lodging-4-weeks/?form=1&lang=en';

export default class ThreeWeeks extends Component {
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
						rightComponent={<GoBack />}
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
						<Image source={Images.Reserve.threeweek} style={styles.imageInside} />
						<Text style={styles.headingInside}>{threeweek.title}</Text>
					</View>
					<Button
						rounded={true}
						buttonStyle={styles.button}
						title="Reserve Now"
						onPress={() =>
							navigate('WebScreen', {
								url: url
							})}
					/>
					<Text style={styles.paragraph}>
						Realign yourself to your spiritual path with a month-long retreat at Ananda Ashram, Choose this option to
						book stays of 28 nights or longer.
					</Text>
					<Text style={styles.paragraph}>
						Our 24-hour guest rates are per person and include room and board and the Ashram Core Program, consisting of
						daily morning and evening meditation programs, ongoing Yoga and Sanskrit classes, cultural events and
						evening lectures. Fees for other programs are additional.
					</Text>
					{/* WEEKLY RATES	Semi-Private	Dorm
4 Weeks	
$1,645
$1,315 */}
					<Text style={styles.paragraph}>
						• January (after New Year) & February: Seasonal rates apply.{'\n'}
						• Camping Rates available April-October.{'\n'}
						{'\n'}
						Guests wishing to stay longer than four weeks need to inquire with Management.
					</Text>
					<Text style={styles.paragraph}>Flexible Dates</Text>
					<Text style={styles.paragraph}>
						Camping: Extended 4 Weeks – $37.57{'\n'}
						Dorm Room: Extended - 4 Weeks – $46.96{'\n'}
						Semi-Private: Extended - 4 Weeks – $58.75
					</Text>
					<Text style={styles.paragraph}>
						Guests wishing to stay longer than four weeks need to receive approval from the Ananda Management Council.
						If you are staying overnight, meals and Yoga classes are included. If you are arriving early, be aware
						Check-In is at 4:00 pm and check-out is at 2:00 pm. Payment for additional meals needs to be made through
						the office. Additional Yoga Classes are paid at the Yoga Studio.
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
