import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary,
		justifyContent: 'flex-start'
	},
	h1: {
		fontFamily: fonts.primary
	}
});

export default styles;
