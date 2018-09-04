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
			data: [{ title: 'default', min: 0, int: 0, music: false }],
			activeRow: null
		};
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

	handleDelete = rowId => {
		// this.setState({ activeRow: rowId });
		console.log('delete ' + rowId);
		// this.setState({this.state.data) => ({
		// 	...this.state.data,
		// 	items: this.state.data.filter((item, index) => index !== rowId)
		// }))
		// this.setState({ data: this.state.data.filter(i => i != rowId) });
		var data = this.state.data.filter(function(item) {
			console.log('i ' + item.id + 'row ' + rowId);
			return item.id != rowId;
		});
		this.setState({ data });
	};

	onSwipeOpen = rowId => {
		this.setState({ activeRow: rowId });
		console.log(rowId);
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
				underlayColor: 'red',
				type: 'Delete',
				onPress: () => {
					//console.log('index: ' + this.state.activeRow);
					this.handleDelete(this.state.activeRow);
				}
			}
		];

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
						renderItem={({ item, index }) => (
							<Swipeout
								left={swipeoutBtns}
								style={styles.swipeout}
								autoClose={true}
								close={true}
								rowID={item.id}
								onOpen={rowId => this.onSwipeOpen(rowId)}
								onClose={rowId => this.onSwipeClose(index)}
							>
								<ListItem
									key={item.id}
									title={`${item.title}`}
									titleStyle={{ color: '#ffcd32' }}
									chevronColor="#ffcd32"
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
						//keyExtractor={item => (item.id / 2}
					/>
				</List>
			</View>
		);
	}
}
