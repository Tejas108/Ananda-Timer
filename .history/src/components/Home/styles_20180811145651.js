import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingLeft: padding.sm,
		paddingRight: padding.sm,
		paddingTop: padding.sm
	},
	logo: {
		flex: 1,
		alignContent: 'stretch'
	},
	quote: {
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		marginBottom: margin.md,
		color: colors.primary
	},
	citation: {
		fontFamily: fonts.copy,
		color: colors.primary,
		textAlign: 'right'
	}
});

export default styles;
