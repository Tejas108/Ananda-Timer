import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class GoBack extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Reserve')}>
					<Text style={styles.backlink}>Back To Reservations</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default withNavigation(GoBack);
