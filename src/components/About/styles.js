import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { moderateScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	copy: {
		fontFamily: fonts.copy,
		fontSize: moderateScale(fonts.md),
		color: colors.primary,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm,
		lineHeight: moderateScale(22),
		textAlign: 'center'
	},
	helpCopy: {
		fontFamily: fonts.copy,
		fontSize: moderateScale(fonts.md),
		color: colors.primary,
		lineHeight: moderateScale(22)
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm
	},
	title: {
		fontFamily: fonts.heading,
		fontSize: moderateScale(fonts.lg),
		color: colors.primary
	}
});

export default styles;
