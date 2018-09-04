import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary,
		// flex: 1,
		justifyContent: 'flex-start'
	}
});

export default styles;
