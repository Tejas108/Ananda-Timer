import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale } from '../styles/Utils';

const Burger = () => <Icon name="bars" style={styles.icon} size={30} color="#3C3B85" type={'font-awesome'} />;

export default Burger;

const styles = StyleSheet.create({
	icon: {
		padding: 10,
		marginLeft: 10
	}
});
