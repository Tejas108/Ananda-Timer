import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { Image, ScrollView, TouchableOpacity, View, Button } from 'react-native';
import styles from './styles';
import Images from 'assets/images';
import { DrawerActions } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

class Guruji extends React.Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Icon
									name="bars"
									style={{ padding: 10, marginLeft: 10 }}
									size={20}
									color="#3C3B85"
									type={'font-awesome'}
								/>
							</TouchableOpacity>
						}
						innerContainerStyles={{ borderWidth: 0 }}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderWidth: 0 }}
					/>
				</View>
				<ScrollView style={styles.container}>
					<Animatable.View animation="fadeIn" View style={{ flex: 1 }}>
						<Image source={Images.guruji} style={{ alignSelf: 'center' }} />
					</Animatable.View>
					<Text style={styles.guruHeading}>Shri Brahmananda Saraswati</Text>
					<Text style={styles.paragraph}>
						Ashram Founder Shri Brahmananda Sarasvati, also known as Ramamurti S. Mishra, M.D., was a highly respected
						spiritual teacher for countless students and devotees from all walks of life. A prolific author on the
						science and philosophy of Yoga-Vedanta, he combined the universal message of these teachings with his deep
						knowledge of both Eastern and Western medicine and psychology. His areas of specialty ranged from Ayurveda
						to modern psychiatry and neurosurgery.
					</Text>
					<Text style={styles.paragraph}>
						Shri Brahmananda Sarasvati is the Founder and Spiritual Director of the Yoga Society of New York, Inc.
						(1958) and its country center Ananda Ashram (1964). He also established the Yoga Society of San Francisco,
						Inc. (1972), known as Brahmananda Ashram, and inspired several other centers of meditation in the United
						States and abroad.
					</Text>
					<Text style={styles.paragraph}>
						He was a master of the Sanskrit language, and his lifework can be considered a comprehensive and authentic
						modern synthesis of the ancient teachings. His written works include Fundamentals of Yoga, The Textbook of
						Yoga Psychology (a commentary on Patanjali's Yoga Sūtras), Self Analysis and Self Knowledge (on
						Shankaracharya's Ātma Bodha), translations of Upanishads and other ancient Sanskrit texts, as well as
						numerous essays and stories. In addition, much of his teaching exists in recorded form.
					</Text>
					<Text style={styles.paragraph}>
						His life was dedicated to the integration of Eastern and Western sciences, culture and philosophy, and he
						presented the timeless message of meditation and Self-realization in a truly contemporary form. Shri
						Brahmananda Sarasvati left his physical body in 1993, yet his spiritual presence and teachings continue to
						be a source of inspiration and guidance for all.
					</Text>
					<Text style={styles.paragraph}>
						As a pioneer who prepared the ground in the West for a new way of thinking and living, he planted the seeds
						of Self-knowledge in the hearts of many people the world over. These seeds continue to grow and are destined
						to help bring about the ultimate goal of world peace and harmony in spiritual unity.
					</Text>
				</ScrollView>
			</View>
		);
	}
}
export default Guruji;
