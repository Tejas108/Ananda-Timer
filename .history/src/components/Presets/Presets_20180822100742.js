import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';

export default class Presets extends Component {
	constructor() {
		super();
		this.state = {
			data: null
		};
		this.handleGet = this.handleGet.bind(this);
	}
	componentDidMount = () => {
		store
			.get('settings')
			.then(data => {
				this.handleGet(data);
			})
			.catch(error => {
				console.log('error: ' + error);
			});

		console.log('state: ' + this.state.data);
	};

	handleGet = data => {
		newData = JSON.stringify(data);
		this.setState({ data: newData });
		console.log('state: ' + this.state.data);
	};

	render() {
		const data = this.state.data;
		console.log('render data: ' + data);

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
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<Text>I'm presets screen</Text>
				{data.map(item => item.title)}
			</View>
		);
	}
}
