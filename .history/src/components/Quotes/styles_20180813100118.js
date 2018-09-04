import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	quote: {
		fontFamily: fonts.italic,
		fontSize: fonts.md,
		marginBottom: margin.md,
		color: colors.primary
	},
	citation: {
		fontFamily: fonts.copy,
		color: colors.primary,
		textAlign: 'right'
	}
});

export default styles;
