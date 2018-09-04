import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	heading: {
		marginTop: margin.sm,
		marginBottom: margin.md,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary,
		paddingHorizontal: padding.sm
	},
	list: {
		backgroundColor: colors.primary
	},
	listItem: {
		color: colors.light,
		borderColor: 'red'
	},
	swipeout: {
		backgroundColor: colors.secondary
	}
});

export default styles;
