import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Spinner } from '../components/common';
import firebase from 'firebase';
import { config, googleConfig } from '../../api-key';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import reducers from '../reducers';
import * as actions from '../actions';
import { GoogleSignin } from 'react-native-google-signin';
class SplashScreen extends Component{
  static navigationOptions = {
  }
  componentDidMount(){
    firebase.initializeApp(config);
    this.setUpGoogleAuth();
    firebase.auth().useDeviceLanguage();
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.dispatch(user ? resetAction : resetActionLogin);
    });
  }
  setUpGoogleAuth(){
    GoogleSignin.configure();
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
const mapStateToProps = state => {
  return { display_profile: state.display_profile };
}

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

export default connect(mapStateToProps, actions)(SplashScreen);
