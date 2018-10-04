import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Header, Button } from 'react-native-elements';
import Burger from '../Burger';
import { DrawerActions, NavigationActions } from 'react-navigation';
import { oneweek } from './reserve-landing-content';
import Images from 'assets/images';
import styles from './styles';
import GoBack from './GoBack';
import { moderateScale } from '../../styles/Utils';

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
						centerComponent={{
							text: 'One Week',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						rightComponent={<GoBack screen={'Contact'} screenTitle={'Contact'} />}
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
						<Image source={Images.Reserve.oneweek} style={styles.imageInside} />
						<Text style={styles.headingInside}>{oneweek.title}</Text>
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
					<Text style={styles.paragraph}>Come and relax and rejuvenate at Ananda Ashram.</Text>
					<Text style={styles.paragraph}>
						Choose this option to book stays of seven to thirteen nights. Our 24-hour guest rates are per person and
						include room and board and the Ashram Core Program, consisting of daily morning and evening meditation
						programs, ongoing Yoga and Sanskrit classes, cultural events and evening lectures. Fees for other programs
						are additional.
					</Text>
					<View style={styles.tableRow}>
						<View style={styles.tableCol}>
							<Text style={[styles.tableContent, styles.tableHeading]}>WEEKLY RATES</Text>
							<Text style={styles.tableContent}>1 Week</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={[styles.tableContent, styles.tableHeading]}>Semi-Private</Text>
							<Text style={styles.tableContent}>$605</Text>
						</View>
						<View style={styles.tableCol}>
							<Text style={[styles.tableContent, styles.tableHeading]}>Dorm</Text>
							<Text style={styles.tableContent}>$485</Text>
						</View>
					</View>
					<Text style={styles.paragraph}>
						• January (after New Year) & February: Seasonal rates apply.{'\n'}
						• Camping Rates available April-October.
					</Text>
					<Text style={styles.paragraph}>Flexible Dates</Text>
					<Text style={styles.paragraph}>
						Camping: Partial Volunteer Extended - 1 Week – $55.43{'\n'}
						Dorm Room: Extended - 1 Week – $69.29{'\n'}
						Semi-Private: Extended - 1 Week – $86.43
					</Text>
					<Text style={styles.paragraph}>
						Above listed pro-rated PRICES apply when staying more than one week but less than two weeks. If you are
						staying overnight, meals and Yoga classes are included. If you are arriving early, be aware Check-In is at
						4:00 pm and check-out is at 2:00 pm. Payment for additional meals needs to be made through the office.
						Additional Yoga Classes are paid at the Yoga Studio
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
							navigate('WebScreenReserve', {
								url: url
							})}
					/>
				</ScrollView>
			</View>
		);
	}
}
