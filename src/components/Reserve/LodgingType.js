import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class LodgingType extends Component {
	render() {
		return (
			<View style={styles.reservationItem}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.screen, { url: this.props.url })}>
					<Image source={this.props.image} style={styles.image} />
				</TouchableOpacity>
				<Text style={styles.subheading}>{this.props.title}</Text>
			</View>
		);
	}
}
export default withNavigation(LodgingType);
