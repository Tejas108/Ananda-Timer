import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.secondary,
		justifyContent: 'space-around',
		paddingLeft: padding.sm,
		paddingRight: padding.sm
	},
	logo: {
		alignContent: 'center'
	}
});

export default styles;
