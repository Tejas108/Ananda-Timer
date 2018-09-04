import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		justifyContent: 'space-around',
		paddingLeft: padding.sm,
		paddingRight: padding.sm
	},
	logo: {
		alignSelf: 'stretch'
	}
});

export default styles;
