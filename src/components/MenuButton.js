import React, {Component} from 'react';
import {Image, ScrollView, TouchableOpacity, View,Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {DrawerActions} from 'react-navigation';

const MenuButton = () => {
    return(
      <View style={{ alignSelf: 'stretch' }}>
        <Header leftComponent={
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="bars" style={{ padding: 10, marginLeft: 10 }} size={20} color="#3C3B85"
                  type={"font-awesome"}/>
          </TouchableOpacity>
        }
                outerContainerStyles={{ backgroundColor: '#c6d9eb' }}/>
      </View>
    );
};

export default MenuButton;