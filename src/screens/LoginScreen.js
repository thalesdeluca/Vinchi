import React,{ Component } from 'react';

import LoginForm from '../components/LoginForm';

class LoginScreen extends Component{
  static navigationOptions = {
    title:'Login',
  };
  
  render(){
    return(
      <LoginForm navigation = { this.props.navigation }/>
    );
  }
}

export default LoginScreen;