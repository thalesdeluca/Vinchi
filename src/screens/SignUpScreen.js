import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { InputText } from '../components/common';
class SignUpScreen extends Component{
  static navigationOptions = {
    title: 'SignUp'
  }
  render(){
    const { containerStyle } = styles;
    return(
      
      <View style = {containerStyle}>
        
      </View>
    );
  }
}

const styles= {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  }
}

export default SignUpScreen;