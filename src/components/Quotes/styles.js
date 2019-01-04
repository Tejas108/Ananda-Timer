import { StyleSheet } from 'react-native';
import { colors, fonts, margin } from '../../styles/base';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	quote: {
		fontFamily: fonts.italic,
		fontSize: moderateScale(22),
		marginBottom: margin.md,
		color: colors.primary
	},
	citation: {
		fontFamily: fonts.copy,
		color: colors.primary,
		textAlign: 'right',
		fontSize: moderateScale(12, 1)
	},
	scrollView: {
		flex: 1,
		padding: 10,
		backgroundColor: '#c6d9eb'
	}
});

export default styles;
