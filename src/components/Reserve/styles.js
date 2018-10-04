import { StyleSheet } from 'react-native';
import { colors, padding, fonts, margin } from '../../styles/base';
import { moderateScale } from '../../styles/Utils';

const styles = StyleSheet.create({
	paragraph: {
		fontFamily: fonts.copy,
		color: colors.primary,
		marginBottom: moderateScale(margin.sm),
		paddingVertical: moderateScale(padding.sm),
		lineHeight: 22,
		fontSize: moderateScale(fonts.md)
	},
	container: {
		flex: 1,
		backgroundColor: colors.secondary,
		paddingHorizontal: moderateScale(padding.sm)
	},
	heading: {
		fontSize: moderateScale(fonts.md),
		fontWeight: 'bold',
		color: colors.primary
	},
	headingInside: {
		marginTop: moderateScale(margin.sm),
		marginBottom: moderateScale(margin.md),
		fontFamily: fonts.heading,
		fontSize: moderateScale(fonts.lg),
		color: colors.primary
	},
	subheading: {
		fontWeight: 'bold',
		fontSize: moderateScale(fonts.md),
		color: colors.primary,
		marginBottom: moderateScale(margin.lg)
	},
	reservationItem: {
		paddingHorizontal: moderateScale(padding.sm)
	},
	image: {
		marginBottom: moderateScale(margin.sm)
	},
	divider: {
		backgroundColor: colors.light,
		marginBottom: moderateScale(margin.md)
	},
	button: {
		borderRadius: 8,
		marginBottom: moderateScale(margin.lg),
		backgroundColor: colors.highlight
	},
	backlink: {
		color: colors.primary,
		fontSize: moderateScale(fonts.sm),
		fontFamily: fonts.copy,
		marginBottom: 3
	},
	indicator: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
	webview: {
		flex: 1
	},
	lodgingWrap: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	tableRow: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch'
	},
	tableCol: {
		flexDirection: 'column',
		flex: 1,
		alignSelf: 'stretch'
	},
	tableContent: {
		fontFamily: fonts.copy,
		color: colors.primary,
		borderWidth: 1,
		padding: moderateScale(5)
	},
	tableHeading: {
		backgroundColor: colors.light
	}
});

export default styles;
