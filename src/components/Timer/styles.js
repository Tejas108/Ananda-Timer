import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale, moderateScale, verticalScale } from '../../styles/Utils';

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
		fontSize: moderateScale(fonts.md)
	},
	sliderWrap: {
		flex: 2,
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'column',
		textAlign: 'center'
	},
	slider1: {
		marginBottom: 40,
		width: wp('80%')
	},
	slider: {
		width: wp('80%')
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
		height: verticalScale(100),
		marginTop: 40
	},
	logoWrap: {
		flex: 2,
		justifyContent: 'center',
		alignContent: 'center'
	},
	logo: {
		alignSelf: 'center',
		width: moderateScale(150, 0.5),
		height: moderateScale(150, 0.5)
		// marginBottom: 20
	},
	button: {
		borderRadius: 8,
		marginBottom: margin.lg,
		backgroundColor: colors.primary
	},
	presetButton: {
		marginBottom: margin.sm,
		padding: padding.sm,
		borderRadius: 8,
		backgroundColor: colors.primary
	},
	checkbox: {
		backgroundColor: 'transparent',
		borderWidth: 0,
		marginBottom: margin.lg,
		marginLeft: -10
	},
	checkboxText: {
		color: colors.primary,
		fontSize: moderateScale(fonts.sm)
	},
	modalContent: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'flex-start',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	modalLabel: {
		color: colors.primary,
		marginBottom: margin.md
	},
	modalValMsg: {
		marginTop: margin.sm,
		marginBottom: margin.sm
	},
	modalInput: {
		borderWidth: 1,
		borderColor: '#555',
		marginBottom: margin.md,
		width: '100%'
	},
	presetText: {
		textAlign: 'center',
		marginTop: margin.lg,
		color: colors.primary,
		fontSize: moderateScale(fonts.md)
	}
});

export default styles;
