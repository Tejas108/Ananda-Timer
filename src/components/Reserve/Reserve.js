import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, NetInfo } from 'react-native';
import Burger from '../Burger';
import { Header } from 'react-native-elements';
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
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Make Your Reservation',
							style: { fontSize: 17, fontWeight: 'bold', color: '#3C3B85' }
						}}
						rightComponent={<GoBack screen={'Contact'} screenTitle={'Contact'} />}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ScrollView contentContainerStyle={{ alignItems: 'center', marginTop: '5%' }}>
					<View style={styles.lodgingWrap}>
						<LodgingType
							screen={overnight.screen}
							url={overnight.url}
							title={overnight.title}
							image={Images.Reserve.overnight}
							style={{ width: '45%' }}
						/>
						<LodgingType
							screen={oneweek.screen}
							url={oneweek.url}
							title={oneweek.title}
							image={Images.Reserve.oneweek}
							style={{ width: '45%' }}
						/>
						<LodgingType
							screen={twoweek.screen}
							url={twoweek.url}
							title={twoweek.title}
							image={Images.Reserve.twoweek}
							style={{ width: '45%' }}
						/>
						<LodgingType
							screen={threeweek.screen}
							url={threeweek.url}
							title={threeweek.title}
							image={Images.Reserve.threeweek}
							style={{ width: '45%' }}
						/>
						<LodgingType
							screen={fourweek.screen}
							url={fourweek.url}
							title={fourweek.title}
							image={Images.Reserve.fourweek}
							style={{ width: '45%' }}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}
