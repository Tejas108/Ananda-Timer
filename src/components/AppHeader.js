import {Header} from "react-native-elements";
import {View} from "react-native";
import React from "react";
import {DrawerActions} from 'react-navigation';
import MenuButton from './MenuButton';

const AppHeader = () => {
  return(
    <View style={{ alignSelf: 'stretch' }}>
      <Header leftComponent={<MenuButton/>}
              outerContainerStyles={{ backgroundColor: '#c6d9eb'}}/>
    </View>
  )
}
export default AppHeader;