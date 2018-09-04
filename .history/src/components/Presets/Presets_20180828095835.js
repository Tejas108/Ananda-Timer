import React, { Component } from 'react';
import { Header, Icon, Text, List, ListItem } from 'react-native-elements';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';
import styles from './styles';

export default class Presets extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [{ name: 'default', min: 0, int: 0, music: false }], current: {} };
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

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: '86%',
					backgroundColor: '#CED0CE',
					marginLeft: '14%'
				}}
			/>
		);
	};

	render() {
		const { navigate } = this.props.navigation;
		renderSeparator = () => {
			return (
				<View
					style={{
						height: 1,
						width: '86%',
						backgroundColor: '#CED0CE',
						marginLeft: '14%'
					}}
				/>
			);
		};
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
						style={styles.list}
						data={this.state.data}
						renderItem={({ item }) => (
							<ListItem
								key={item.title}
								title={`${item.title}`}
								titleStyle={{ color: '#ffcd32' }}
								chevronColor="#ffcd32"
								subtitle={'minutes: ' + item.min + ' interval: ' + item.int + ' ambient music: ' + item.music}
								titleStyle={{ color: 'white', fontWeight: 'bold' }}
								onPress={() =>
									navigate('Timer', {
										min: item.min,
										int: item.int,
										music: item.music,
										title: `${item.title}`
									})}
							/>
						)}
						keyExtractor={item => item.title}
					/>
				</List>
			</View>
		);
	}
}
