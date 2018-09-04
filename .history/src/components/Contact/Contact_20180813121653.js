import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './styles';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
//import MapBoxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(pk.eyJ1IjoiYW5hbmRhYXNocmFtIiwiYSI6ImNqa3NkM3ZzNzI1Z2sza3FydmFnNDBza2gifQ.zXw7uMFcvELvDhlkmSmLEw);

export default class Contact extends Component {
	render() {
		return (
			<View style={styles.container}>
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
						outerContainerStyles={{ backgroundColor: '#c6d9eb' }}
					/>
				</View>
				{/* <MapView style={{flex:1,height: 200, backgroundColor: 'red'}}>
					provider={PROVIDER_GOOGLE}
					initialRegion = {
						latitude: 39.7392,
						longitude: -104.9903,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					}
        </MapView> */}
				{/* <MapboxGL.MapView ref={c => (this._map = c)} style={{ flex: 1 }} zoomLevel={1} /> */}
				<Text>Contact Page</Text>
			</View>
		);
	}
}
