import { StyleSheet } from 'react-native';
import { padding, fonts, colors } from '../../styles/base';

const styles = StyleSheet.create({
	item: {
		backgroundColor: colors.light,
		paddingVertical: padding.md,
		paddingHorizontal: padding.sm,
		borderBottomColor: colors.primary,
		borderBottomWidth: 1
	},
	itemText: {
		fontSize: fonts.sm,
		color: colors.primary,
		fontFamily: fonts.copy,
		fontWeight: 'bold'
	},
	sideWrap: {
		marginTop: 40
	}
});

export default styles;
