import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { moderateScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	listItem: {
		backgroundColor: colors.primary,
		padding: padding.sm,
		color: colors.light,
		flexDirection: 'row'
	},
	title: {
		color: '#ffcd32',
		fontSize: moderateScale(14)
	},
	subtitle: {
		fontSize: moderateScale(fonts.sm),
		color: colors.secondary
	}
});

export default styles;
