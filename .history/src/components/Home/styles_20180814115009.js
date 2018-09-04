import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	logoWrap: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		paddingHorizontal: padding.sm,
		backgroundColor: colors.secondary
	}
});

export default styles;
