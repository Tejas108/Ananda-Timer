import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { moderateScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	copy: {
		fontFamily: fonts.copy,
		fontSize: moderateScale(fonts.sm),
		color: colors.primary,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm,
		lineHeight: moderateScale(5),
		textAlign: 'center'
	},
	helpCopy: {
		fontFamily: fonts.copy,
		fontSize: moderateScale(fonts.sm),
		color: colors.primary,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm,
		lineHeight: moderateScale(15)
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		paddingHorizontal: padding.sm
	},
	img: {
		alignSelf: 'center'
	}
});

export default styles;
