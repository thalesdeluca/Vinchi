import React,{ Component } from 'react';
import {View, Text} from 'react-native';
import { InputText, Button, Spinner, } from './common';
import Feather from 'react-native-vector-icons/Feather';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
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
            })
            .catch(() => this.setState({ loginLoading: false }));
    }
    loginButton(){
        switch(this.state.loginLoading){
            case true:
                return <Spinner size = {'small'}/>;
                
            default:
                return(
                    <View style = {styles.buttonStyle}>
                        <Button gradient= {['#ffd600','#ffb600','#ff9000']} fontSize = {16} onPress = { this.onPress_login.bind(this) } fontColor = '#fff' start= {{x:0, y:0}} end= {{x:1, y:0}}> LOGIN </Button>
                    </View>
                );
        }
    }
    onPress_signUp(){
        this.props.navigation.navigate('SignUp');
    }


    render(){
        const {containerStyle, inputStyle, headerStyle, forgotStyle, buttonStyle, footerStyle } = styles;

        return(
            <LinearGradient colors = {['#212121', '#111111']} style = {containerStyle}>
            
                    <Text style = {headerStyle}>Vinchi</Text>
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

                    <Text style = {{color: 'rgba(133,133,133,0.7)', marginTop: 20, padding: 10}}>If you don't have an account yet just:</Text>
                    
                    <View style = {{width: '100%'}}>
                        <Button gradient = {['#fff', '#eee','#aaa']} fontSize = {16} onPress = {this.onPress_signUp.bind(this)} fontColor= '#212121' start= {{x:0, y:0}} end= {{x:1, y:0}}> SIGN UP </Button>
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
      paddingBottom: 30,
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
        marginTop: 30,
        width: '100%'
    },
    footerStyle:{
        flex: 1,  
        flexDirection:'column-reverse',
        
    }
  }

export default LoginForm;