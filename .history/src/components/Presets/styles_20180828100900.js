import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.secondary
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.md,
		backgroundColor: colors.primary,
		justifyContent: 'flex-start'
	},
	heading: {
		marginTop: margin.sm,
		marginBottom: margin.md,
		fontFamily: fonts.heading,
		fontSize: fonts.lg,
		color: colors.primary,
		paddingHorizontal: padding.sm
	},
	list: {
		backgroundColor: colors.primary
	},
	listItem: {
		color: colors.light,
		borderColor: 'red'
	},
	presetText: {
		textAlign: 'center',
		marginTop: margin.lg,
		color: 'red'
	}
});

export default styles;
