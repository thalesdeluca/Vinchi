import React,{ Component }from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';

const App = StackNavigator({
  Main: MainScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default App;



