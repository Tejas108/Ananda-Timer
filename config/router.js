import React from 'react';
import { createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { colors } from '../src/styles/base';
import Home from '../src/components/Home/Home';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided/Guided';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Presets from '../src/components/Presets/Presets';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import WebScreenEvents from '../src/components/Events/WebScreenEvents';
import WebScreenYoga from '../src/components/Yoga/WebScreenYoga';
import WebScreenMembers from '../src/components/Membership/WebScreenMembers';

import StackNav from './StackNav';
import { Icon } from 'react-native-elements';
import styles from '../src/styles/appStyles';

const Tabs = createMaterialTopTabNavigator(
	{
		Tab1: {
			screen: StackNav,
			navigationOptions: {
				title: 'Home',
				tabBarIcon: <Icon name="home" size={25} iconStyle={styles.icon} />
			}
		},
		Timer: {
			screen: Timer,
			navigationOptions: {
				tabBarIcon: <Icon name="alarm" size={25} iconStyle={styles.icon} />
			}
		},
		Guided: {
			screen: Guided,
			navigationOptions: {
				tabBarIcon: <Icon name="record-voice-over" size={25} iconStyle={styles.icon} />
			}
		},
		Presets: {
			screen: Presets,
			navigationOptions: {
				tabBarIcon: <Icon name="tune" size={25} iconStyle={styles.icon} />
			}
		}
	},
	{
		initialRouteName: 'Tab1',
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		optimizationsEnabled: true,
		tabBarOptions: {
			showIcon: true,
			showLabel: false,
			activeTintColor: colors.primary,
			inactiveTintColor: colors.primary,
			style: {
				backgroundColor: colors.light,
				elevation: 5,
				shadowColor: '#000',
				shadowOffset: { height: 5 },
				shadowOpacity: 0.75,
				shadowRadius: 7
			},
			indicatorStyle: {
				backgroundColor: colors.highlight
			}
		}
	}
);

const AppNav = createDrawerNavigator(
	{
		Tabs: Tabs,
		Home: Home,
		Timer: Timer,
		Presets: Presets,
		About: About,
		Contact: Contact,
		WebScreenEvents: WebScreenEvents,
		WebScreenYoga: WebScreenYoga,
		WebScreenMembers: WebScreenMembers
	},
	{
		contentComponent: Sidebar,
		contentOptions: {
			activeTintColor: '#e91e63'
		}
	}
);

export default AppNav;
