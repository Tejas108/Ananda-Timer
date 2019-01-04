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
		marginBottom: margin.sm
	},
	content: {
		fontSize: moderateScale(fonts.md),
		color: colors.primary,
		marginTop: margin.md,
		marginBottom: margin.lg
	},
	contentWrap: {
		paddingHorizontal: padding.sm,
		flex: 1
	},
	background: {
		height: '100%'
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary
	},
	netError: {
		fontSize: moderateScale(fonts.sm),
		color: colors.primary,
		paddingHorizontal: padding.sm,
		textAlign: 'center'
	}
});

export default styles;
