import { NativeModules } from 'react-native';

import {
  Login,
  LoginComplete,
  Logout
} from "./actionTypes";


blockstack = NativeModules.BlockstackNativeModule;

const createSession = async () => {
  config = {
    appDomain: "https://flamboyant-darwin-d11c17.netlify.com",
    scopes: ["store_write"]
  }
  result = await blockstack.createSession(config)

  console.log("created " + result["loaded"])
  // this.setState({ loaded: result["loaded"] })
  return result;
}

const signIn = async () => {
  console.log("signIn")

  result = await blockstack.signIn();
  console.log("result: " + JSON.stringify(result))
  // alert(JSON.stringify(result))

  return result;
  // this.setState({ userData: { decentralizedID: result["decentralizedID"] } })
  // this.props.blockstackData = result;
  // loginAction(result)
  // this.props.navigation.navigate('App')
}



const doLoginAction = () => ({
  type: Login
});

const completeLoginIn = (blockstackData) => ({
  type: LoginComplete,
  blockstackData
});

function isBlockstackSessionCreated(state) {
  const blockstackData = state.blockstackData
  if (!blockstackData) {
    return false;
  } else if (blockstackData.loaded) {
    return true;
  } else {
    return false;
  }
}

// const loginWithBlockstack = ()=>{

//   return async function(dispatch, getState) {
//     if(isBlockstackSessionCreated(getState)){
//       await createSession();
//       result = await signIn();
//       return dispatch(completeLoginIn(result))
//     }
//   }
// };
const loginWithBlockstack = () => async dispatch => {

  alert("called login action")
  if (isBlockstackSessionCreated(getState)) {
    await createSession();
    result = await signIn();
    dispatch(completeLoginIn(result))
  } else {
    result = await signIn();
    dispatch(completeLoginIn(result))
  }

}

const logout = () => ({
  type: Logout
});

export { loginWithBlockstack, logout };
