import {StyleSheet} from 'react-native';
import {colors,padding,fonts,margin} from '../../styles/base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-around',
    alignContent: 'stretch',
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
    width: 100,
    height: 100,
    marginBottom: 20
  },
  button: {
    marginBottom: margin.md,
    borderWidth: 2,
    borderRadius: 10
  },
  presetButton: {
    marginBottom: margin.md,
    borderWidth: 1,
    padding: padding.sm,
    marginTop: margin.sm,
    borderRadius: 10
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginBottom: margin.md,
    marginLeft: -10
  },
  checkboxText: {
    color: colors.primary
  }

});

export default styles;