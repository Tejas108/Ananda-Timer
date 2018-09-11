import { StyleSheet } from 'react-native';
import { padding, fonts, colors } from '../../styles/base';

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#b7b8da',
		paddingVertical: padding.md,
		paddingHorizontal: padding.sm,
		borderBottomColor: colors.light,
		borderBottomWidth: 1
	},
	itemText: {
		fontSize: fonts.md,
		color: colors.light,
		fontFamily: fonts.copy
	},
	sideWrap: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: '#b7b8da'
	}
});

export default styles;
