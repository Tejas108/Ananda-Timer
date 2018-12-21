import React, { Component } from 'react';
import { Header, Text, Divider } from 'react-native-elements';
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
					<Hyperlink>
						<Text style={styles.copy}>
							Created by{'\n'}Tejas Monteverdi{'\n'}RainWorld Interactive{'\n'}
							tejas.monteverdi@gmail.com
						</Text>
						<Text style={styles.helpCopy}>
							Sitar music: Roop Verma, roopverma.com{'\n'}
							App logo/audio editing: Chelsea (Bhavani) Girton{'\n'}
							Audio editing: Alex DuPre{'\n'}
						</Text>
						<Text style={styles.helpCopy}>
							The Guided Meditation by Shri Brahmananda Sarasvati (Ramamurti S. Mishra) was recorded June 1980 at Ananda
							Ashram. {'\n'}
							{'\u00A9'} Baba Bhagavandas Publication Trust{'\n'}
						</Text>
					</Hyperlink>
					<Text style={styles.copy}>
						{'\u00A9'} 2018 Yoga Society of New York, Inc.{'\n'}
					</Text>
					<Divider style={{ backgroundColor: '#3C3B85' }} />

					<Text style={styles.title}>{'\n'}Help</Text>
					<Text style={styles.helpCopy}>
						The lower icons are, from left to right, 'Home', 'Timer', 'Guided' and 'Presets'.
					</Text>
					<Text style={styles.helpCopy}>
						Set your meditation time and interval time if you desire. You must set an end sound. Clicking 'Save These
						Settings' will allow you to save the current timer settings as a preset. Clicking the bottom right icon,
						'Presets', takes you to your presets and allows you to start your favorite meditation.
					</Text>
					<Text style={styles.helpCopy}>
						On your Home screen, you can pull down and release the Guruji's quote to get a new, random quote.
					</Text>
					<Text style={styles.helpCopy}>On your Preset screen, swipe right on the preset to delete it.</Text>
					<Text style={styles.title}>{'\n'}Support</Text>
					<Hyperlink linkDefault={true}>
						<Text style={styles.helpCopy}>
							For support issues or feature requests: {'\n'}Email tejas.monteverdi@gmail.com
						</Text>
					</Hyperlink>
					<Text style={styles.title}>{'\n'}Privacy</Text>
					<Hyperlink linkDefault={true}>
						<Text style={styles.helpCopy}>
							Tap to view our privacy policy: {'\n'}http://anandaashram.org/PrivacyPolicy
						</Text>
					</Hyperlink>
				</ScrollView>
			</View>
		);
	}
}
