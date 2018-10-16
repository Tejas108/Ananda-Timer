import React, { Component } from 'react';
import { Header, Text } from 'react-native-elements';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';
import { moderateScale } from '../../styles/Utils';
import Burger from '../Burger';
import Hyperlink from 'react-native-hyperlink';

export default class About extends Component {
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
							text: 'About/Help',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<ScrollView>
					<Text style={styles.copy}>Version 1.0.1</Text>
					<Text style={styles.copy}>
						Created by{'\n'}Tejas Monteverdi{'\n'}RainWorld Interactive
					</Text>
					<Hyperlink linkDefault={'url'}>
						<Text style={styles.copy}>Sitar music by Roop Verma, roopverma.com</Text>
					</Hyperlink>
					<Text style={styles.copy}>
						{'\u00A9'} 2018 Yoga Society of New York, Inc.{'\n'}
					</Text>
					<Text style={styles.helpCopy}>
						The quotations and guided meditations are by Shri Brahmananda Saraswati (Ramamurti S. Mishra) Courtesy of
						Baba Bhagavandas Publication Trust{'\n'}
					</Text>
					<Text style={styles.title}>Help</Text>
					<Text style={styles.helpCopy}>
						The lower icons are, from left to right, 'Home', 'Timer', 'Guided' and 'Presets'.
					</Text>
					<Text style={styles.helpCopy}>
						Set your meditation time and interval time if you desire. You must set an end sound. Clicking 'Save These
						Settings' will allow you to save the current timer settings as a preset. Clicking the bottom right icon,
						'Presets', takes you to your presets and allows you to start your favorite meditation.
					</Text>
					<Text style={styles.helpCopy}>
						On your Home screen, you can pull down and release the quote to get a new random quote.
					</Text>
					<Text style={styles.helpCopy}>On your Preset screen, swipe left on the preset to delete it.</Text>
				</ScrollView>
			</View>
		);
	}
}
