import React, { Component } from 'react';
import { Header, Icon, Text, Button } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';
import store from 'react-native-simple-store';

export default class Presets extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{ title: 'default', min: 0, int: 0, music: false }], current: {} };
	}

	componentDidMount = () => {
		this.subs = [
			this.props.navigation.addListener('willFocus', () => {
				this.init();
			})
		];
	};
	componentWillMount = () => {
		console.log('did mount');
		this.init();
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
	goTo = () => {
		console.log('goto called');
		navigate('Timer', { data: { min: this.state.data.min } });
	};
	render() {
		const { navigate } = this.props.navigation;
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
					this.state.data.map((item, i) => (
						<Button
							title={item.title}
							key={i}
							min={item.min}
							int={item.int}
							music={item.music}
							onPress={() => this.goTo()}
						/>
					))
				) : (
					<Text>You Have No Presets</Text>
				)}
			</View>
		);
	}
}
