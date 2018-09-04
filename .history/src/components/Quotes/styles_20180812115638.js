import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet({
	quote: {
		fontFamily: fonts.italic,
		fontSize: fonts.lg,
		marginBottom: margin.md,
		color: colors.primary
	},
	citation: {
		fontFamily: fonts.copy,
		color: colors.primary,
		textAlign: 'right'
	}
});
