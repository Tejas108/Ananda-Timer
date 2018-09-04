import { StyleSheet } from 'react-native';
import { colors, padding, margin, fonts } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
		// paddingHorizontal: padding.sm
	},
	heading: {
		fontSize: fonts.lg,
		color: colors.primary,
		fontFamily: fonts.heading,
		marginTop: margin.lg,
		marginBottom: margin.lg,
		paddingHorizontal: padding.sm
	},
	content: {
		fontSize: fonts.lg,
		color: colors.primary,
		marginTop: margin.md,
		marginBottom: margin.md
	},
	contentWrap: {
		paddingHorizontal: padding.sm
	}
});

export default styles;
