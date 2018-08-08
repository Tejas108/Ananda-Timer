import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

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
        <ScrollView>
          <View>
            <Text onPress={this.navigateToScreen('Presets')}>
              Presets
            </Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Settings')}>
              Settings
            </Text>
          </View>
          <View>
            <Text onPress={this.navigateToScreen('Contact')}>
              Contact
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Sidebar;
