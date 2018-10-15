// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'; 
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { AuthLoadingScreen } from './src/screens/AuthLoading'

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login with Blockstack"
          onPress={() => this.props.navigation.navigate('App')}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('signOut')}
          title="Sign out"
        />
      ),
    };
  };
  _signOut = () => {
    this.props.navigation.navigate("Auth")
  };

  componentDidMount() {
    this.props.navigation.setParams({ signOut: this._signOut });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

class AttestationsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('signOut')}
          title="Sign out"
        />
      ),
    };
  };
  _signOut = () => {
    this.props.navigation.navigate("Auth")
  };

  componentDidMount() {
    this.props.navigation.setParams({ signOut: this._signOut });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Attestations Screen</Text>
      </View>
    );
  }
}

class IdAttestersScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('signOut')}
          title="Sign out"
        />
      ),
    };
  };
  _signOut = () => {
    this.props.navigation.navigate("Auth")
  };

  componentDidMount() {
    this.props.navigation.setParams({ signOut: this._signOut });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Id Attesters Screen</Text>
      </View>
    );
  }
}

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
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
