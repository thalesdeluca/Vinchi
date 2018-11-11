import React,{ Component }from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';
import LinearGradient from 'react-native-linear-gradient';
import DrawerContent from './src/components/DrawerContent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
const Stack = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen},
  SignUp: {screen: SignUpScreen},
  
},
{
  headerMode: 'none',
  navigationOptions: {
    header: false,
  }
});
Stack.navigationOptions = ({navigation}) => {
  drawerLockMode= 'locked-closed';
  return {
    drawerLockMode,
  };
};
const Drawer = createDrawerNavigator({
  Stack: {screen: Stack},
}, {
  drawerPosition: 'left',
  drawerBackgroundColor: '#2a2a2a',
  contentComponent : DrawerContent,
  contentOptions:{
    activeTintColor: '#FFF',
    activeBackgroundColor: '#212121',
    
  },
});


export default App = () =>
  <Provider store = { createStore(reducers) }>
    <LinearGradient colors = {['#212121', '#111']} style={{flex: 1}}>
      <StatusBar backgroundColor= "#212121" barStyle= "light-content"/>
      <Drawer/>
    </LinearGradient>
  </Provider>;



