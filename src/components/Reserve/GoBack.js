import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class GoBack extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.screen)}>
					<Text style={styles.backlink}>&#60; {this.props.screenTitle}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

GoBack.propTypes = {
	screen: PropTypes.string.isRequired,
	screenTitle: PropTypes.string.isRequired
};

export default withNavigation(GoBack);
