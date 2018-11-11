import React,{ Component }from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';
const App = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen},
  SignUp: { screen: SignUpScreen},
  
},
{
  headerMode: 'none',
  navigationOptions: {
    header: false,
  }
});

export default Stack = () =>
  <View style={{flex: 1}}>
    <StatusBar backgroundColor= "#212121" barStyle= "light-content"/>
    <App/>
  </View>;



