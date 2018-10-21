import React from 'react';
import { View, Text, Button, NativeModules } from 'react-native';
import { connect } from 'react-redux';

import { loginWithBlockstack } from "../actions/actionCreator";

blockstack = NativeModules.BlockstackNativeModule;

export class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userData: null,
            fileContents: null,
            fileUrl: null
        };
    }

    // componentDidMount() {
    //     this.createSession()
    // }

    // async createSession() {
    //     config = {
    //         appDomain: "https://flamboyant-darwin-d11c17.netlify.com",
    //         scopes: ["store_write"]
    //     }
    //     result = await blockstack.createSession(config)

    //     console.log("created " + result["loaded"])
    //     this.setState({ loaded: result["loaded"] })
    // }

    // async signIn() {
    //     console.log("signIn")
    //     console.log("current state: " + JSON.stringify(this.state))
    //     result = await blockstack.signIn();
    //     console.log("result: " + JSON.stringify(result))
    //     alert(JSON.stringify(result))
    //     this.setState({ userData: { decentralizedID: result["decentralizedID"] } })
    //     this.props.blockstackData = result;
    //     loginAction(result)
    //     this.props.navigation.navigate('App')
    // }
    async login() {
        alert("calling login")
        this.props.loginWithBlockstack()
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Login with Blockstack"
                   
                    onPress={() => this.login()}
                />
            </View>
        );
    }
}

const mapDispatchToProps = {
    loginWithBlockstack
  };
  
  export default connect(null,mapDispatchToProps)(LoginScreen);