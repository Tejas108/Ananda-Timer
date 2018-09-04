import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';

export default class Presets extends Component {
	state = { data: [] };

	componentWillMount = () => {
		console.log('did mount');
		// store
		// 	.get('settings')
		// 	.then(data => {
		// 		return data;
		// 	})
		// 	.then(data => {
		// 		this.setState({ data }, () => console.log(this.state));
		// 	})
		// 	.catch(error => {
		// 		console.log('error: ' + error);
		// 	});
	};

	test = () => {
		store
			.get('settings')
			.then(data => {
				return data;
			})
			.then(data => {
				this.setState({ data }, () => console.log(this.state));
			})
			.catch(error => {
				console.log('error: ' + error);
			});
	};

	render() {
		let data = JSON.stringify(this.state.data);
		console.log('data: ' + data);
		test();

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
				{/* {this.state.data.map(item => <Preset title={item.title} key={item.title} />)} */}
			</View>
		);
	}
}
const Preset = props => <Text>{props.preset.title}</Text>;
