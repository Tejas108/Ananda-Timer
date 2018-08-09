import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, View,TouchableOpacity} from 'react-native';
import styles from './styles';

class Sidebar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Home')}>
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Presets')}>
          <Text style={styles.itemText}>Presets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Settings')}>
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={this.navigateToScreen('Contact')}>
          <Text style={styles.itemText}>Contact</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Sidebar;
