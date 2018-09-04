import { StyleSheet } from 'react-native';
import { colors, padding, margin, fonts } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		marginTop: 20
	},
	heading: {
		fontSize: fonts.lg,
		color: colors.primary,
		fontFamily: fonts.heading
	}
});

export default styles;
