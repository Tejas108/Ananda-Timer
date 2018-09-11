import { StyleSheet } from 'react-native';
import { colors, padding, margin, fonts } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	heading: {
		fontSize: fonts.lg,
		color: colors.primary,
		fontFamily: fonts.heading,
		marginBottom: margin.sm
	},
	content: {
		fontSize: fonts.md,
		color: colors.primary,
		marginTop: margin.md,
		marginBottom: margin.lg
	},
	contentWrap: {
		paddingHorizontal: padding.sm
	},
	background: {
		height: '100%'
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary
	}
});

export default styles;
