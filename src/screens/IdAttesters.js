
import React from 'react';
import { View, Text, Button, NativeModules } from 'react-native';

export class IdAttestersScreen extends React.Component {

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
  