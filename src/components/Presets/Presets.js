import React, { Component } from 'react';
import { Header, Text, ListItem } from 'react-native-elements';
import { TouchableOpacity, View, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation';
import store from 'react-native-simple-store';
import Swipeout from 'react-native-swipeout';
import styles from './styles';
import Burger from '../Burger';
import { moderateScale } from '../../styles/Utils';

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

	handleDelete = () => {
		let id = this.state.activeRow;
		console.log('id: ' + id);
		let newData = this.state.data.slice();
		newData.splice(id, 1);
		this.setState({ data: newData });
		store.save('settings', newData);
	};

	onSwipeOpen = index => {
		this.setState({ activeRow: index });
		console.log('open ' + this.state.activeRow);
	};

	onSwipeClose = index => {
		if (index === this.state.activeRow) {
			this.setState({ activeRow: null });
		}
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

		renameBell = bell => {
			if (bell !== undefined) {
				let bellName = bell.substring(0, bell.length - 4);
				return bellName.toLowerCase().replace(/\b\w/g, m => {
					return m.toUpperCase();
				});
			}
		};

		return (
			<View style={styles.container}>
				<View style={{ alignSelf: 'stretch' }}>
					<Header
						placement="left"
						leftComponent={
							<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
								<Burger />
							</TouchableOpacity>
						}
						centerComponent={{
							text: 'Meditation Presets',
							style: { fontSize: moderateScale(17), fontWeight: 'bold', color: '#3C3B85' }
						}}
						outerContainerStyles={{ backgroundColor: '#c6d9eb', borderBottomWidth: 0 }}
					/>
					{!this.state.data && <Text style={styles.noPresets}>You have no presets</Text>}
				</View>
				<FlatList
					style={styles.list}
					data={this.state.data}
					extraData={this.state.activeRow}
					renderItem={({ item, index }) => (
						<Swipeout
							left={swipeoutBtns}
							style={styles.swipeout}
							autoClose={true}
							close={this.state.activeRow !== index}
							key={item.id}
							sectionId={0}
							onOpen={() => this.onSwipeOpen(index)}
							onClose={() => this.onSwipeClose(index)}
						>
							<ListItem
								key={item.id}
								underlayColor={'#3C3B85'}
								title={`${item.title}`}
								chevronColor="#ffcd32"
								subtitle={
									<View>
										<Text style={styles.subtitle}>
											{item.min +
												' minutes, ' +
												item.int +
												' minute interval, ' +
												(item.music ? 'Ambiance On' : 'Ambiance Off') +
												'\n' +
												renameBell(item.endBell) +
												' end sound, ' +
												(item.intBell ? renameBell(item.intBell) + ' interval sound' : '')}
										</Text>
									</View>
								}
								titleStyle={styles.title}
								textStyle={styles.subtitle}
								onPress={() =>
									navigate('Timer', {
										min: item.min,
										int: item.int,
										music: item.music,
										title: item.title,
										endBell: item.endBell,
										intBell: item.intBell
									})}
							/>
						</Swipeout>
					)}
					keyExtractor={item => item.id}
				/>
			</View>
		);
	}
}
