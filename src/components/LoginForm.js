import React,{ Component } from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import { InputText, Button, Spinner } from './common';
import Feather from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import FBLoginButton from '../components/FBLoginButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            loginLoading : false,
        };
    }

    onPress_login(){
        this.setState({ loginLoading: true });
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Main');
                this.setState({ loginLoading: false });
            }).catch(() => {
                this.setState({ loginLoading: false })
                Alert.alert(
                  'Error on login',
                  'Something has occurred and we could not sign you in',
                  [
                    {text: 'OK'}
                  ],
                  { cancelable: true }
                )
              });
    }
    loginButton(){
        switch(this.state.loginLoading){
            case true:
                return <Spinner size = {'small'}/>;

            default:
                return(
                    <View style = {styles.buttonStyle}>
                        <Button color = '#ffb600' fontSize = {18} onPress = { this.onPress_login.bind(this) } fontColor = '#fff' start= {{x:0, y:0}} end= {{x:1, y:1}}> Log In </Button>
                    </View>
                );
        }
    }
    onPress_signUp(){
        this.props.navigation.navigate('SignUp');
    }

    onPress_loginFB(access){
        const credential = firebase.auth.FacebookAuthProvider.credential(access);
        firebase.auth().signInAndRetrieveDataWithCredential(credential).then(() => {
            console.log("teste");
            this.props.navigation.navigate('Main');
        }).catch(() => {
            Alert.alert(
              'Error on login',
              'Something has occurred and we could not sign you in',
              [
                {text: 'OK'}
              ],
              { cancelable: true }
            )
          });
    }



    render(){
        const {containerStyle, inputStyle, headerStyle, forgotStyle, buttonStyle, footerStyle, altLoginStyle, iconStyle } = styles;

        return(
            <LinearGradient colors = {['#212121', '#111111']} style = {containerStyle}>

                    <Text style = {headerStyle}>Vinchi</Text>
                    <Text style = {{color: 'rgba(133,133,133,0.7)'}} >Login with:</Text>
                    <View style = {altLoginStyle}>
                        <FBLoginButton data = { this.onPress_loginFB.bind(this) }/>
                        <View style ={{paddingHorizontal: 30,}}/>

                        <TouchableHighlight>
                        <FontAwesome name="google-plus-square" size = {48} color = "#f31" style={iconStyle}/>
                        </TouchableHighlight>
                    </View>
                    <InputText
                        hint= "email@gmail.com"
                        value = {this.state.email}
                        fontSize = {16}
                        style = {inputStyle}
                        onChangeText = {email => this.setState({ email })}
                        icon = {
                            <Feather name="user" color ='rgba(200,200,200,0.7)' size={16}/>
                        }/>

                    <InputText
                        hint= "password"
                        secureTextEntry = {true}
                        value = {this.state.password}
                        onChangeText = {password => this.setState({ password })}
                        fontSize = {16}
                        style = {inputStyle}
                        icon = {
                            <Feather name="lock" color='rgba(200,200,200,0.7)' size={16}/>
                        }/>

                    { this.loginButton()}

                    <Text style={forgotStyle}>Forgot Password</Text>

                    <Text style = {{color: 'rgba(133,133,133,0.7)', marginTop: 10, padding: 10}}>If you don't have an account yet just:</Text>

                    <View style = {{width: '100%'}}>
                        <Button color= '#fff' fontSize = {18} onPress = {this.onPress_signUp.bind(this)} fontColor= '#ffb600' start= {{x:0, y:0}} end= {{x:1, y:1}}> Sign In </Button>
                    </View>

                    <View style= {footerStyle}>
                        <Text style ={{color: 'rgba(200,200,200,0.4)'}} > Made by Thales de Luca </Text>
                    </View>

                </LinearGradient>
        );
    }
}

const styles = {
    containerStyle:{
      flex:1,
      paddingHorizontal: 24,
      paddingTop: 5,
      backgroundColor: '#212121',
      alignItems: 'center',
    },
    headerStyle:{
      color: '#ffd600',
      fontSize: 72,
      paddingTop: 50,
      paddingBottom: 10,
      fontFamily: 'Sunshine',
      alignSelf: 'center',
    },
    inputStyle:{
      marginBottom: 10,
      backgroundColor: '#303030',
    },
    forgotStyle: {
        color: '#d1d1d1',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    buttonStyle: {
        marginTop: 12,
        width: '100%'
    },
    footerStyle:{
        flex: 1,
        flexDirection:'column-reverse',

    },
    altLoginStyle: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    iconStyle: {
      backgroundColor:"#fff",
      height: 44,
      width:43,
      borderWidth: 4,
      borderRadius: 12,
      borderColor: '#212121',
      borderBottomWidth:0,
      borderBottomColor: 'transparent'
    }
  }

export default LoginForm;
