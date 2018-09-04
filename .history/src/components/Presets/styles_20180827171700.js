import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary,
		justifyContent: 'flex-start'
	},
	container: {
		flex: 1
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
