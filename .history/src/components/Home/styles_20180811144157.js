import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
    alignContent: 'center',
    justifyContent: 'center'
		paddingLeft: padding.sm,
		paddingRight: padding.sm,
		paddingTop: padding.sm
	},
	logo: {
		alignSelf: 'stretch'
	},
	quote: {
    fontFamily: fonts.heading,
    fontSize
  }
});

export default styles;
