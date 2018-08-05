import {SafeAreaView, StyleSheet} from "react-native";
import {colors} from './base';
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  safe: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.secondary,
  },
});

export default styles;