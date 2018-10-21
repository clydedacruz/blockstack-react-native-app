import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
      return (
        <View >
            <Text>
            Hi { this.props.userName } 

            </Text>
       
        </View>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    const { userName } = state
    return { userName }
  };
  
  export default connect(mapStateToProps)(Home);