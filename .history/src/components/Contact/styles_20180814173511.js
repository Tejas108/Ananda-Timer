import { StyleSheet } from 'react-native';
import { colors, padding, margin, fonts } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		paddingHorizontal: padding.sm
	},
	heading: {
		fontSize: fonts.lg,
		color: colors.primary,
		fontFamily: fonts.heading,
		marginTop: margin.lg,
		flex: 1
	},
	content: {
		fontSize: fonts.md,
		color: colors.primary,
		flex: 2,
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default styles;
