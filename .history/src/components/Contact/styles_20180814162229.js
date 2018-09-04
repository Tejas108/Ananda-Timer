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
	}
});

export default styles;
