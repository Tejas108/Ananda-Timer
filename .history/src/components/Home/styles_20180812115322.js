import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingLeft: padding.sm,
		paddingRight: padding.sm,
		paddingTop: padding.sm
	},
	logo: {
		borderWidth: 1
	}
});

export default styles;
