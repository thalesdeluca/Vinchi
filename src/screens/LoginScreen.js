import React,{ Component } from 'react';

import LoginForm from '../components/LoginForm';

import firebase from 'firebase';
import config from '../../api-key';
class LoginScreen extends Component{
  static navigationOptions = {
    title:'Login'
  };
  componentDidMount(){
    firebase.initializeApp(config);
  }
  render(){
    return(
      <LoginForm navigation = { this.props.navigation }/>
    );
  }
}

export default LoginScreen;