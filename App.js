import React,{ Component }from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';

const App = createStackNavigator({
  Login: LoginScreen,
  Main: MainScreen,
  
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default App;



