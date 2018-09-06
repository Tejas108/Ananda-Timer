import React, { Component } from 'react';
import {
	ScrollView,
	WebView,
	View,
	TouchableOpacity,
	DrawerActions,
	NavigationActions,
	Image,
	Text
} from 'react-native';
import Burger from '../Burger';
import { Header, Divider } from 'react-native-elements';
import { overnight, fourweek } from './reserve-landing-content';
import styles from './styles';
import Images from 'assets/images';
import LodgingType from './LodgingType';

export default class Reserve extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	render() {
		// const RGcontent =
		// 	'<div id="rbg-connect"></div><script type="text/javascript">rbgOptions={font: "Helvetica", color: "#3C3B85", hightlightColor:"#FF9800",registerLink: "Reserve Now",retreatType: "Lodging", customer: "anandaashram", buttonColor: "", defaultRoute: ""}; !function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://s3.amazonaws.com/rbgconnect.retreat.guru/public/rbg-connect.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}window.attachEvent?window.attachEvent("onload",t):window.addEventListener("load",t,!1)}();</script>';

		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ScrollView style={{ flex: 1 }}>
					{/* <WebView
						originWhitelist={['*']}
						source={{
							html: RGcontent,
							baseUrl: ''
						}}
          /> */}
					<Text style={styles.heading}>Reserve Online</Text>
					<LodgingType title={overnight.title} content={overnight.content} image={Images.Reserve.overnight} />
					<Divider style={styles.divider} />
					<LodgingType title={fourweek.title} content={fourweek.content} image={Images.Reserve.fourweek} />
				</ScrollView>
			</View>
		);
	}
}
