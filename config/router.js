import {createMaterialTopTabNavigator} from "react-navigation";
import Timer from "../src/components/Timer";
import Guided from "../src/components/Guided";
import About from "../src/components/About";

export const Navigator = createMaterialTopTabNavigator({
  Timer: {
    screen: Timer,
    navigationOptions: {}
  },
  Guided: {
    screen: Guided,
    navigationOptions: {}
  },
  About: {
    screen: About,
    navigationOptions: {}
  },
},{
  initialRouteName: 'Timer',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#3C3B85',
    style: {
      backgroundColor: '#c6d9eb'
    },
    indicatorStyle: {
      backgroundColor: '#ffcd32'
    }
  }
})