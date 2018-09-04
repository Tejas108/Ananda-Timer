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
			<View>
				<View style={styles.item} onPress={this.navigateToScreen('Guruji')}>
					<Text style={styles.itemText}>Guruji</Text>
				</View>
				<View style={styles.item} onPress={this.navigateToScreen('Ashram')}>
					<Text style={styles.itemText}>Ashram</Text>
				</View>
				<View style={styles.item} onPress={this.navigateToScreen('Contact')}>
					<Text style={styles.itemText}>Contact</Text>
				</View>
			</View>
		);
	}
}

export default Sidebar;
