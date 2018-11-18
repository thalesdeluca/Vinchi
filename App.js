import React,{ Component }from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SplashScreen from './src/screens/SplashScreen';
import CreateScreen from './src/screens/CreateScreen';
import LinearGradient from 'react-native-linear-gradient';
import DrawerContent from './src/components/DrawerContent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
const Drawer = createDrawerNavigator({
  Main: {screen: MainScreen},
}, {
  drawerPosition: 'left',
  drawerBackgroundColor: '#2a2a2a',
  contentComponent : DrawerContent,
  contentOptions:{
    activeTintColor: '#FFF',
    activeBackgroundColor: '#212121',

  },
});
const Stack = createStackNavigator({
  Splash: {screen: SplashScreen},
  Login: {screen: LoginScreen},
  Main: {screen: Drawer},
  SignUp: {screen: SignUpScreen},
  Create: {screen: CreateScreen},

},
{
  headerMode: 'none',
  navigationOptions: {
    header: false,
  }
});



export default App = () =>
  <Provider store = { createStore(reducers) }>
    <LinearGradient colors = {['#212121', '#111']} style={{flex: 1}}>
      <StatusBar backgroundColor= "#212121" barStyle= "light-content"/>
      <Stack/>
    </LinearGradient>
  </Provider>;
