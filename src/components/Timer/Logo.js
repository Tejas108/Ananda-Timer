import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import Images from 'assets/images';

const Logo = () => (
	<View style={styles.logoWrap}>
		<Animatable.Image animation="fadeIn" source={Images.logo} style={styles.logo} />
	</View>
);

export default Logo;
