import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import PropTypes from 'prop-types';

class CloseTerms extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.screen)}>
					<Text style={styles.backlink}>Close Terms And Conditions</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
CloseTerms.propTypes = {
	screen: PropTypes.string.isRequired
};
export default withNavigation(CloseTerms);
