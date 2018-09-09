import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import Home from '../src/components/Home/Home';
import Presets from '../src/components/Presets/Presets';
import Settings from '../src/components/Settings/Settings';
import Contact from '../src/components/Contact/Contact';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided/Guided';
import Guruji from '../src/components/Guruji/Guruji';
import Ashram from '../src/components/Ashram/Ashram';
import Reserve from '../src/components/Reserve/Reserve';
import Overnight from '../src/components/Reserve/Overnight';
import FourWeeks from '../src/components/Reserve/FourWeeks';
import ThreeWeeks from '../src/components/Reserve/ThreeWeeks';
import TwoWeeks from '../src/components/Reserve/TwoWeeks';
import OneWeek from '../src/components/Reserve/OneWeek';
import WebScreenReserve from '../src/components/Reserve/WebScreenReserve';
import WebScreenEvents from '../src/components/Reserve/WebScreenEvents';

const StackNav = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: props => ({
				title: 'Home'
			})
		},
		Guruji: {
			screen: Guruji,
			navigationOptions: props => ({
				title: 'Guruji'
			})
		},
		Ashram: {
			screen: Ashram,
			navigationOptions: props => ({
				title: 'Ashram'
			})
		},
		Presets: {
			screen: Presets,
			navigationOptions: props => ({
				title: 'Presets'
			})
		},
		Settings: {
			screen: Settings,
			navigationOptions: props => ({
				title: 'Settings'
			})
		},
		Contact: {
			screen: Contact,
			navigationOptions: props => ({
				title: 'Contact'
			})
		},
		Guided: {
			screen: Guided,
			navigationOptions: props => ({
				title: 'Guided'
			})
		},
		Reserve: {
			screen: Reserve,
			navigationOptions: props => ({
				title: 'Reserve'
			})
		},
		Overnight: {
			screen: Overnight,
			navigationOptions: props => ({
				title: 'Overnight'
			})
		},
		FourWeeks: {
			screen: FourWeeks,
			navigationOptions: props => ({
				title: 'FourWeeks'
			})
		},
		ThreeWeeks: {
			screen: ThreeWeeks,
			navigationOptions: props => ({
				title: 'ThreeWeeks'
			})
		},
		TwoWeeks: {
			screen: TwoWeeks,
			navigationOptions: props => ({
				title: 'TwoWeeks'
			})
		},
		OneWeek: {
			screen: OneWeek,
			navigationOptions: props => ({
				title: 'OneWeek'
			})
		},
		WebScreenReserve: {
			screen: WebScreenReserve,
			navigationOptions: props => ({
				title: 'WebScreenReserve',
				url: ''
			})
		},
		WebScreenEvents: {
			screen: WebScreenEvents,
			navigationOptions: props => ({
				title: 'WebScreenEvents',
				url: ''
			})
		}
	},
	{
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false
		}
	}
);

export default StackNav;
