import {StyleSheet} from 'react-native';
import {colors, padding, fonts, margin} from '../../styles/base';

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: fonts.copy,
    color: colors.primary,
    marginBottom: margin.sm,
    paddingHorizontal: padding.sm,
    paddingVertical: padding.sm,
    lineHeight: 30,
  },
  container: {
    flex: 1,
  },
  guruHeading: {
    marginTop: 10,
    fontFamily: fonts.heading,
    fontSize: fonts.md,
    color: colors.primary,
    paddingHorizontal: padding.sm,
  }

});

export default styles;