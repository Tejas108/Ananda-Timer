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
		// marginTop: margin.sm,
		// marginBottom: margin.lg,
		// fontFamily: fonts.heading,
		fontSize: fonts.md,
		fontWeight: 'bold',
		color: colors.primary
		// paddingHorizontal: padding.sm
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
		fontSize: fonts.sm,
		fontFamily: fonts.copy
	},
	indicator: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
	webview: {
		flex: 1
	},
	lodgingWrap: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center'
	}
});

export default styles;
