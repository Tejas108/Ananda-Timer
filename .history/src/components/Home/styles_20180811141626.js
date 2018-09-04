import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		justifyContent: 'space-around',
		alignContent: 'stretch',
		paddingLeft: padding.md,
		paddingRight: padding.md
	}
});

export default styles;
