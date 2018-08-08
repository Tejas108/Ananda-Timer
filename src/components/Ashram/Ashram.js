import React, {Component} from 'react';
import {Header, Icon, Text} from 'react-native-elements';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Images from 'assets/images';
import {DrawerActions} from "react-navigation";

class Ashram extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'stretch' }}>
          <Header leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="bars" style={{ padding: 10, marginLeft: 10 }} size={20} color="#3C3B85"
                    type={"font-awesome"}/>
            </TouchableOpacity>
          }
                  outerContainerStyles={{ backgroundColor: '#c6d9eb' }}/>
        </View>
        <ScrollView style={styles.container}>
          <View style={{ flex: 1 }}>
            <Image source={Images.ananda} style={{ flex: 1, alignSelf: 'stretch' }}/>
          </View>
          <Text style={styles.heading}>
            Ananda Ashram
          </Text>
          <Text style={styles.paragraph}>
            Ananda Ashram in Monroe, New York, is a Yoga retreat and spiritual-educational center
            just over one hour from New York City, founded in 1964 by Shri Brahmananda Sarasvati (then Ramamurti S.
            Mishra, M.D.) as the country center of the Yoga Society of New York, Inc.
          </Text>
          <Text style={styles.paragraph}>
            Located in the foothills of the Catskill Mountains, the Ashram provides a serene, natural environment with
            woods and meadows surrounding a lake. Accommodations are simple and meals are vegetarian.
          </Text>
          <Text style={styles.paragraph}>
            We offer daily meditation programs with Yoga-Vedanta studies, chanting and readings, and daily yoga and
            Sanskrit classes, plus classical Indian dance and music instruction and a variety of weekend workshops and
            special events. The Ashram is open year-round and welcomes guests from all origins, faiths and cultural
            backgrounds.
          </Text>
          <Text style={styles.paragraph}>
            Ananda Ashram is also the location of the International Schools of East-West Unity (Gurukula), Inc.,
            established by the Founder in 1992. The workshops and courses offered throughout the year cover the various
            aspects of Yoga, the creative arts and natural health, and East-West cultural performances highlight summer
            weekends and special celebrations. Guest teachers and artists from a variety of traditions are regular
            contributors. The Ashram philosophy is nonsectarian with an emphasis placed on Self-awareness and
            meditation.
          </Text>
          <Text style={styles.paragraph}>
            Guest and student accommodations provide dorm and semiprivate rooms with around fifty beds. Facilities
            include
            classrooms, meditation room, program halls, temples, memorial shrine, gift shop, seasonal swimming pool and
            publication center. The inspirational Ashram environment is well suited for a meditative retreat, holistic
            studies and exploration of the deeper aspects of life.
          </Text>
          <Text style={styles.paragraph}>
            Ananda Ashram is easily accessible by car, bus or train.
          </Text>
          <Text style={styles.heading}>
            Historical Perspective
          </Text>
          <Text style={styles.paragraph}>
            Ashrams have existed in the East from the earliest period of civilization as places of meditation, spiritual
            practice and research, higher learning and culture, where teachers and students lived and worked in
            togetherness. Ananda Ashram was dedicated as a universal center following that same tradition, for the
            exploration and application of the principles of Yoga and Vedanta through East-West philosophical and
            cultural
            exchange. Since its beginning, the Ashram has introduced and hosted many outstanding teachers, guest
            lecturers
            and artists from various disciplines. A preferred platform is given to those who focus on the underlying
            unity
            of all. In its core program, Ananda Ashram strives to maintain a distinguished, nonsectarian spiritual and
            educational standard throughout.
          </Text>
          <Text style={styles.heading}>
            Universal Teachings
          </Text>
          <Text style={styles.paragraph}>
            Yoga is understood here to be the essential harmony and union of individual existence with cosmic
            existence, as well as the physical, mental and spiritual practices leading to its realization. Non-dualistic
            Vedanta philosophy declares the oneness of all beings in the Supreme Spirit and the ultimate freedom of the
            Self as Pure Consciousness, referred to by Shri Brahmananda Sarasvati as the "I-Am" beyond the body and
            mind.
            These and related teachings are studied at Ananda Ashram both through English sources and through the
            original
            Sanskrit texts, with emphasis on the Upanishads, Yoga Sūtras, Bhagavad Gītā, and Shankaracharya's writings.
          </Text>
          <Text style={styles.paragraph}>
            Special advantage is taken of Shri Brahmananda's translations, commentaries, books, essays and recordings,
            recognized as a comprehensive and authentic modern synthesis of the classical teachings. The truths
            expressed
            by the great masters, the realized sages and thinkers of various world religions and philosophies as well as
            of the sciences and arts, are incorporated and honored in the light of Vedanta.
          </Text>
        </ScrollView>
      </View>
    )
  }
}

export default Ashram;