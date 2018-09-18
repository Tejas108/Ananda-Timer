import { StyleSheet } from 'react-native';
import { padding, fonts, colors } from '../../styles/base';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#b7b8da',
		paddingVertical: padding.md,
		paddingHorizontal: padding.sm,
		borderBottomColor: colors.light,
		borderBottomWidth: 1
	},
	itemText: {
		fontSize: moderateScale(fonts.md, 0.3),
		color: colors.light,
		fontFamily: fonts.copy
	},
	sideWrap: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: '#b7b8da'
	}
});

export default styles;
