import {StyleSheet} from 'react-native';
import {padding,fonts,colors} from '../../styles/base';

const styles = StyleSheet.create({
item:{
  backgroundColor: colors.light,
  paddingVertical: padding.sm,
  paddingHorizontal: padding.sm,
  borderBottomColor: '#bbb',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
  itemText: {
  fontSize: fonts.lg,
    color: colors.primary
  }
});

export default styles;