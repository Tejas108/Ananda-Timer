import React, { Component } from 'react';
import { ScrollView, WebView, View, TouchableOpacity, Image, Text } from 'react-native';
import Burger from '../Burger';
import { Header, Divider } from 'react-native-elements';
import { overnight, fourweek, threeweek, twoweek, oneweek } from './reserve-landing-content';
import styles from './styles';
import Images from 'assets/images';
import LodgingType from './LodgingType';
import { DrawerActions } from 'react-navigation';
import GoBack from './GoBack';

export default class Reserve extends Component {
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
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						rightComponent={<GoBack screen={'Contact'} screenTitle={'Contact'} />}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ScrollView style={{ flex: 1 }}>
					<Text style={styles.heading}>Make Your Reservation</Text>
					<LodgingType
						screen={overnight.screen}
						url={overnight.url}
						title={overnight.title}
						image={Images.Reserve.overnight}
					/>
					<LodgingType
						screen={fourweek.screen}
						url={fourweek.url}
						title={fourweek.title}
						image={Images.Reserve.fourweek}
					/>
					<LodgingType
						screen={threeweek.screen}
						url={threeweek.url}
						title={threeweek.title}
						image={Images.Reserve.threeweek}
					/>
					<LodgingType screen={twoweek.screen} url={twoweek.url} title={twoweek.title} image={Images.Reserve.twoweek} />
					<LodgingType screen={oneweek.screen} url={oneweek.url} title={oneweek.title} image={Images.Reserve.oneweek} />
				</ScrollView>
			</View>
		);
	}
}
