import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';

const LodgingType = props => {
	return (
		<View style={styles.reservationItem}>
			<TouchableOpacity>
				<Image source={props.image} style={styles.image} />
			</TouchableOpacity>
			<Text style={styles.subheading}>{props.title}</Text>
			<Text style={styles.paragraph}>{props.content}</Text>
		</View>
	);
};
export default LodgingType;
