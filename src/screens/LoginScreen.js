import React,{ Component } from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../components/LoginForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';

class LoginScreen extends Component{
  static navigationOptions = {
    title:'Login'
  };
  render(){
    return(
      <Provider store = { createStore(reducers) }>
        <LoginForm/>
      </Provider>
      
    );
  }
}

export default LoginScreen;