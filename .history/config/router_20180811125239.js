import React from 'react';
import { createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { colors } from '../src/styles/base';
import Home from '../src/components/Home/Home';
import Timer from '../src/components/Timer/Timer';
import Guided from '../src/components/Guided';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Presets from '../src/components/Presets/Presets';
import Settings from '../src/components/Settings/Settings';
import Contact from '../src/components/Contact/Contact';
import StackNav from './StackNav';
import Images from 'assets/images';
import Icon from 'react-native-elements';

const Tabs = createMaterialTopTabNavigator(
	{
		Tab1: {
			screen: StackNav,
			navigationOptions: {
				title: 'Home',
				tabBarIcon: <Image source={Images.Icon.home} style={{ width: 40, height: 40 }} />
			}
		},
		Timer: {
			screen: Timer,
			navigationOptions: {
				tabBarIcon: <icon name="headset" size={25} />
			}
		},
		Guided: {
			screen: Guided,
			navigationOptions: {
				tabBarIcon: <Image source={Images.Icon.guided} style={{ width: 40, height: 40 }} />
			}
		},
		Presets: {
			screen: Presets
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
		Settings: Settings,
		Contact: Contact
	},
	{
		contentComponent: Sidebar
	}
);

export default AppNav;
// contentComponent: <Sidebar {...this.props}  activeTintColor='#2196f3' activeBackgroundColor='rgba(0, 0, 0, .04)' inactiveTintColor='rgba(0, 0, 0, .87)' inactiveBackgroundColor='transparent' style={{backgroundColor: '#000000'}} labelStyle={{color: '#ffffff'}}/>
