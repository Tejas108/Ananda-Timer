import React, { Component } from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';

export default class Presets extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{ title: 'frodo', min: 10, int: 20, music: false }] };
	}

	componentWillMount = () => {
		console.log('did mount');
		this.init();
		this.setState(this.state);
	};

	init = () => {
		store
			.get('settings')
			.then(data => {
				this.setState({ data });
			})
			.catch(error => {
				console.log('error: ' + error);
			});
	};

	render() {
		//let data = JSON.stringify(this.state.data);
		// console.log('data: ' + data);
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
				{this.state.data ? (
					this.state.data.map(item => <Preset title={item.title} key={item.title} />)
				) : (
					<Text>You Have No Presets</Text>
				)}
			</View>
		);
	}
}
const Preset = props => (
	<TouchableOpacity>
		<Text>{props.title}</Text>
	</TouchableOpacity>
);
