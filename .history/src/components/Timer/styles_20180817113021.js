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
	},
	sliderLabel: {
		color: colors.primary,
		fontFamily: fonts.heading,
		fontSize: fonts.md
	},
	sliderWrap: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	},
	slider1: {
		marginBottom: 40
	},
	slider2: {
		marginBottom: 20
	},
	textRemaining: {
		alignSelf: 'center',
		color: colors.primary,
		fontFamily: fonts.copy
	},
	cntDown: {
		alignSelf: 'center',
		color: colors.primary,
		fontFamily: fonts.heading
	},
	remainingWrap: {
		flex: 2,
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: -10
	},
	headerWrap: {
		height: 100,
		marginTop: 20
	},
	logoWrap: {
		flex: 2,
		justifyContent: 'center',
		alignContent: 'center'
	},
	logo: {
		alignSelf: 'center',
		width: 150,
		height: 150,
		marginBottom: 20
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: '#3C3B85'
	},
	presetButton: {
		marginBottom: margin.sm,
		padding: padding.sm,
		borderRadius: 8,
		backgroundColor: '#3C3B85'
	},
	checkbox: {
		backgroundColor: 'transparent',
		borderWidth: 0,
		marginBottom: margin.lg,
		marginLeft: -10
	},
	checkboxText: {
		color: colors.primary
	}
});

export default styles;
