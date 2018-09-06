import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	paragraph: {
		fontFamily: fonts.copy,
		color: colors.primary,
		marginBottom: margin.sm,
		paddingVertical: padding.sm,
		lineHeight: 30
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		marginTop: margin.sm,
		marginBottom: margin.lg,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary,
		paddingHorizontal: padding.sm
	},
	subheading: {
		fontWeight: 'bold',
		fontSize: fonts.md,
		color: colors.primary
	},
	reservationItem: {
		paddingHorizontal: padding.sm
	},
	image: {
		marginBottom: margin.sm
	},
	divider: {
		backgroundColor: colors.light,
		marginBottom: margin.md
	}
});

export default styles;
