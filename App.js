// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import thunkMiddleware from 'redux-thunk'

import { AuthLoadingScreen } from './src/screens/AuthLoading'
import { LoginScreen } from './src/screens/Login'
import ProfileScreen from './src/screens/Profile'
import { AttestationsScreen } from './src/screens/Attestations'
import { IdAttestersScreen } from './src/screens/IdAttesters'


import Home from './src/screens/Home'

import { createStore,combineReducers,applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
// import { userInfo } from 'os';
import loginReducer from "./src/reducers/loginReducer";


const TabNavigator = createBottomTabNavigator({
  "Profile": { screen: ProfileScreen },
  "Attestations": { screen: AttestationsScreen },
  "ID Attesters": { screen: IdAttestersScreen },
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Profile') {
          iconName = 'ios-contact';
        } else if (routeName === 'Attestations') {
          iconName = 'ios-list';
        } else if (routeName === 'Id Attesters') {
          iconName = 'ios-person-add';
        }
        // alert("iconName"+iconName)

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: false
    },
  });

const AppStack = createStackNavigator(
  {
    TabNavigator: TabNavigator,
  }
);

const AuthStack = createStackNavigator({ Login: LoginScreen });

// export default createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );

//remove




//



const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);



function reducer() {
  return {
    userName: "Clyde",
    userData:{}
  };
}


const rootReducer = combineReducers({
  loginReducer
});


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ));

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <AppSwitchNavigator
        />
      </Provider>
    );
  }
}