import React, { Component } from 'react';
import { Header, Icon, Text, Button, List, ListItem } from 'react-native-elements';
import { TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';
import styles from './styles';

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

	render() {
		const { navigate } = this.props.navigation;
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
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
				</View>
				<Text style={styles.heading}>Presets</Text>
				<List>
					<FlatList
						data={this.state.data}
						renderItem={({ item }) => (
							<ListItem
								roundAvatar
								title={`${item.title}`}
								key={i}
								onPress={() =>
									navigate('Timer', {
										min: item.min,
										int: item.int,
										music: item.music,
										title: `${item.title}`
									})}
								containerStyle={{ borderBottomWidth: 0 }}
							/>
						)}
						key={this.title}
					/>
				</List>
				{/* <ScrollView>
					{this.state.data ? (
						this.state.data.map((item, i) => (
							<Button
								animation="slideInDown"
								buttonStyle={styles.button}
								rounded={true}
								fontFamily={'Helvetica'}
								fontSize={24}
								title={item.title}
								key={i}
								onPress={() =>
									navigate('Timer', {
										min: item.min,
										int: item.int,
										music: item.music,
										title: item.title
									})}
							/>
						))
					) : (
						<Text>You Have No Presets</Text>
					)}
				</ScrollView> */}
			</View>
		);
	}
}
