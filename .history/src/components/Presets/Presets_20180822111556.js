import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';

export default class Presets extends Component {
	constructor() {
		super();
		this.handleGet = this.handleGet.bind(this);
		this.handleMount = this.handleMount.bind(this);
	}
	state = {
		data: null
	};
	componentDidMount = () => {
		console.log('did mount');
		setTimeout(() => {
			this.handleMount();
		}, 1000);
	};

	handleMount = () => {
		store
			.get('settings')
			.then(data => {
				this.handleGet(data);
			})
			.catch(error => {
				console.log('error: ' + error);
			});
	};
	handleGet = data => {
		newData = JSON.stringify(data);
		this.setState({ data: newData });
	};

	render() {
		const data = this.state.data;
		console.log('data: ' + data);

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
				{/* {data.map(item => <Preset title={item.title} />)} */}
			</View>
		);
	}
}
const Preset = props => <Text>{props.preset.title}</Text>;
