import React, { Component } from 'react';
import { ScrollView, WebView, View, TouchableOpacity, Image, Text } from 'react-native';
import Burger from '../Burger';
import { Header, Divider } from 'react-native-elements';
import { overnight, fourweek } from './reserve-landing-content';
import styles from './styles';
import Images from 'assets/images';
import LodgingType from './LodgingType';
import { DrawerActions } from 'react-navigation';

export default class Reserve extends Component {
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
					<LodgingType
						url={'Overnight'}
						title={overnight.title}
						content={overnight.content}
						image={Images.Reserve.overnight}
					/>
					{/* <Divider style={styles.divider} /> */}
					<LodgingType
						url={fourweek.url}
						title={fourweek.title}
						content={fourweek.content}
						image={Images.Reserve.fourweek}
					/>
				</ScrollView>
			</View>
		);
	}
}
