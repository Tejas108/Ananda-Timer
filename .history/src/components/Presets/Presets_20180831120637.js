import React, { Component } from 'react';
import { Header, Icon, Text, List, ListItem } from 'react-native-elements';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';
import Swipeout from 'react-native-swipeout';
import styles from './styles';

export default class Presets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			activeRow: null
		};
	}

	componentWillMount = () => {
		this.subs = [
			this.props.navigation.addListener('willFocus', () => {
				this.init();
			})
		];
	};
	componentWillUnmount = () => {
		this.subs.forEach(sub => {
			sub.remove();
		});
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

	handleDelete = index => {
		console.log('delete ' + index);
		let newData = this.state.data.slice();
		newData.splice(index, 1);
		this.setState({ data: newData });
		store.save('settings', newData);
	};

	onSwipeOpen = rowId => {
		this.setState({ activeRow: rowId });
	};
	onSwipeClose = rowId => {
		this.setState({ activeRow: null });
	};

	render() {
		const { navigate } = this.props.navigation;
		let swipeoutBtns = [
			{
				text: 'Delete',
				backgroundColor: 'red',
				type: 'Delete',
				onPress: () => {
					this.handleDelete();
				}
			}
		];

		return (
			<View style={styles.container}>
				<View style={styles.container}>
					<View style={{ alignSelf: 'stretch' }}>
						<Header
							leftComponent={
								<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
									<Burger />
								</TouchableOpacity>
							}
							outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
						/>
						<Text style={styles.heading}>Presets</Text>
						{!this.state.data.length ? <Text style={{ textAlign: 'center' }}>You have no presets</Text> : null}
					</View>
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
					<Text style={styles.heading}>Presets</Text>
					{!this.state.data.length ? <Text style={{ textAlign: 'center' }}>You have no presets</Text> : null}
				</View>

				<FlatList
					style={styles.list}
					data={this.state.data}
					renderItem={({ item, index }) => (
						<Swipeout
							left={swipeoutBtns}
							style={styles.swipeout}
							autoClose={true}
							close={true}
							rowID={index}
							key={index}
							// onOpen={rowId => this.onSwipeOpen(index)}
							// onClose={rowId => this.onSwipeClose(index)}
						>
							<ListItem
								key={item.id}
								underlayColor={'#3C3B85'}
								title={`${item.title}`}
								titleStyle={{ color: '#ffcd32' }}
								chevronColor="#ffcd32"
								style={{ backgroundColor: 'green' }}
								subtitle={
									item.min + ' minutes, ' + item.int + ' interval, ' + (item.music ? 'Yes Ambiance' : 'No Ambiance')
								}
								titleStyle={{ color: '#ffcd32' }}
								onPress={() =>
									navigate('Timer', {
										min: item.min,
										int: item.int,
										music: item.music,
										title: item.title
									})}
							/>
						</Swipeout>
					)}
					keyExtractor={item => item.id}
				/>
				{/* </List> */}
			</View>
		);
	}
}
