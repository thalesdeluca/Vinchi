import React,{ Component }from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
const App = createStackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen},
  SignUp: { screen: SignUpScreen},
  
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default App;



