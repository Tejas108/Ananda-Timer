import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	paragraph: {
		fontFamily: fonts.copy,
		fontSize: moderateScale(fonts.md),
		color: colors.primary,
		marginBottom: margin.sm,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm,
		lineHeight: moderateScale(22)
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	guruHeading: {
		marginTop: 10,
		fontFamily: fonts.heading,
		fontSize: moderateScale(fonts.lg),
		color: colors.primary,
		paddingHorizontal: padding.sm
	}
});

export default styles;
