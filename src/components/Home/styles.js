import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	logoWrap: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: padding.sm,
		backgroundColor: colors.secondary
	},
	ashramlogo: {
		height: scale(150)
	}
});

export default styles;
