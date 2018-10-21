import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

export class ProfileScreen extends React.Component {
    constructor(props) {
      super(props)
    }
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
      // alert(this.state)
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Profile Screen</Text>
          <Text> Name {this.props.userName}</Text>
          {/* <Text> {JSON.stringify(this.props.userData)}</Text> */}

        </View>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        userName: state.userName
    };
  }

  export default connect(mapStateToProps)(ProfileScreen);
