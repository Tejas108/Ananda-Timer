import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	paragraph: {
		fontFamily: fonts.copy,
		color: colors.primary,
		marginBottom: margin.sm,
		paddingVertical: padding.sm,
		lineHeight: 22,
		fontSize: fonts.md
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		paddingHorizontal: padding.sm
	},
	heading: {
		marginTop: margin.sm,
		marginBottom: margin.lg,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary,
		paddingHorizontal: padding.sm
	},
	headingInside: {
		marginTop: margin.sm,
		marginBottom: margin.md,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary
	},
	subheading: {
		fontWeight: 'bold',
		fontSize: fonts.md,
		color: colors.primary,
		marginBottom: margin.lg
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
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.highlight
	},
	backlink: {
		color: colors.primary,
		fontSize: fonts.md,
		fontFamily: fonts.copy
	}
});

export default styles;
