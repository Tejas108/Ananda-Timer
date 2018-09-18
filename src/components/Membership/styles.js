import { StyleSheet } from 'react-native';
import { colors, padding, margin, fonts } from '../../styles/base';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		fontSize: fonts.lg,
		color: colors.primary,
		fontFamily: fonts.heading,
		marginBottom: margin.sm,
		paddingLeft: padding.sm
	},
	content: {
		fontSize: fonts.md,
		color: colors.primary,
		marginTop: margin.md,
		marginBottom: margin.lg
	},
	contentWrap: {
		paddingHorizontal: padding.sm
	},
	background: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary
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
		flex: 1,
		backgroundColor: colors.secondary
	},
	netError: {
		fontSize: moderateScale(fonts.sm),
		color: colors.primary,
		paddingHorizontal: padding.sm,
		textAlign: 'center'
	}
});

export default styles;
