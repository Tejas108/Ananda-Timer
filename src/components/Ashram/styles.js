import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	paragraph: {
		fontFamily: fonts.copy,
		color: colors.primary,
		marginBottom: margin.sm,
		paddingHorizontal: padding.sm,
		paddingVertical: padding.sm,
		lineHeight: 22,
		fontSize: fonts.md
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		marginTop: 10,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary,
		paddingHorizontal: padding.sm
	}
});

export default styles;
