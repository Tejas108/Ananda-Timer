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
		paddingHorizontal: 10,
		backgroundColor: '#c6d9eb'
	}
});

export default styles;
