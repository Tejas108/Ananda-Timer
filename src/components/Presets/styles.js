import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		fontSize: 17,
		fontWeight: 'bold',
		color: '#3C3B85'
	},
	list: {
		// backgroundColor: colors.primary
	},
	listItem: {
		color: colors.light
	},
	swipeout: {
		backgroundColor: colors.primary,
		marginBottom: margin.sm
	}
});

export default styles;
