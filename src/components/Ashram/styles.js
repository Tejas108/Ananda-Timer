import {StyleSheet} from 'react-native';
import {colors, padding, fonts, margin} from '../../styles/base';

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: fonts.copy,
    color: colors.primary,
    marginBottom: margin.sm,
    paddingHorizontal: padding.sm,
    paddingVertical: padding.sm,
  },
  container: {
    flex: 1,
  },
  heading: {
    fontFamily: fonts.heading,
    fontSize: fonts.lg,
    color: colors.primary,
    paddingHorizontal: padding.sm,
  }

});

export default styles;