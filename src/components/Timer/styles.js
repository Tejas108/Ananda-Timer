import {StyleSheet} from 'react-native';
import {colors,padding,fonts} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingLeft: padding.md,
    paddingRight: padding.md,

  },
  sliderLabel: {
    color: colors.primary,
    fontFamily: fonts.heading,
    fontSize: fonts.md
  },
  textRemaining: {
    alignSelf: 'center',
    color: colors.primary,
    fontFamily: fonts.copy,
  },
  cntDown: {
    alignSelf: 'center',
    color: colors.primary,
    fontFamily: fonts.heading,
  },
  remainingWrap: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logoWrap: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: 40
  },

});

export default styles;