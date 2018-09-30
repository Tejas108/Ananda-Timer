import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { moderateScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		fontSize: moderateScale(17),
		fontWeight: 'bold',
		color: colors.primary
	},
	title: {
		color: '#ffcd32'
	},
	subtitle: {
		fontSize: moderateScale(fonts.sm),
		color: colors.secondary,
		paddingHorizontal: padding.sm
	},
	listItem: {
		color: colors.light
	},
	swipeout: {
		backgroundColor: colors.primary,
		marginBottom: moderateScale(margin.sm)
	},
	noPresets: {
		color: colors.primary,
		fontSize: moderateScale(fonts.sm),
		paddingHorizontal: padding.sm,
		textAlign: 'center'
	}
});

export default styles;
