import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

class Sidebar extends Component {
	navigateToScreen = route => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	};

	render() {
		return (
			<View style={styles.sideWrap}>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Guruji')}>
					<Text style={styles.itemText}>Guruji</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Ashram')}>
					<Text style={styles.itemText}>Ashram</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('WebScreenEvents')}>
					<Text style={styles.itemText}>Event Calendar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('WebScreenYoga')}>
					<Text style={styles.itemText}>Yoga Class Schedule</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Contact')}>
					<Text style={styles.itemText}>Reservations & Contact</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('WebScreenMembers')}>
					<Text style={styles.itemText}>Membership</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.item} onPress={this.navigateToScreen('About')}>
					<Text style={styles.itemText}>About/Help</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Sidebar;
