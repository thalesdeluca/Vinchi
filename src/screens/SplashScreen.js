import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Spinner } from '../components/common';
import firebase from 'firebase';
import config from '../../api-key';
import { StackActions, NavigationActions } from 'react-navigation';
export default class SplashScreen extends Component{
  static navigationOptions = {
  }
  
  componentDidMount(){
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.navigation.dispatch(resetAction);
      } else {
        this.props.navigation.dispatch(resetActionLogin);
      }
    })
  }
  render(){
    return(
      <LinearGradient colors = {['#212121', '#000']} style = {styles.containerStyle}>
        <Image source = {require('../../assets/logo.png')} style = {styles.logoStyle} resizeMode= 'contain'/>
        <Text style={{color:'#888', padding: 20}}>O App da Economia</Text>
        <Spinner size={'small'} color='#ffd600' style= {{padding: 20}}/>
      </LinearGradient>
    );
  }
}
const resetAction = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Main'})],
});
const resetActionLogin = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Login'})],
});

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  logoStyle:{
    alignSelf: 'center',
    width: '100%',
    height: '10%',
  }
}