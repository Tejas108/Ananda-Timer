import React from 'react';
import {Text,View,StatusBar,Button} from 'react-native';

export default class Home extends React.Component {

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <Text>I'm home screen</Text>
        <Button title="Go to About" onPress = {() => this.props.navigation.navigate('About')}/>
      </View>
    )
  }

}
