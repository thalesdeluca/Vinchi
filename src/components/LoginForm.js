import React,{ Component } from 'react';
import {View, Text} from 'react-native';
import { InputText, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import Feather from 'react-native-vector-icons/Feather';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginLoading : false,
            signUpLoading: false,
        };
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onPress_login(){
        this.setState({ loginLoading: true });
        this.props.navigation.navigate('Main');
    }
    loginButton(){
        switch(this.state.loginLoading){
            case true:
                return <Spinner size = {'small'}/>
                
            default:
                return(
                    <View style = {styles.buttonStyle}>
                        <Button color= '#ffd600' fontSize = {16} onPress = { this.onPress_login.bind(this) }> LOGIN </Button>
                    </View>
                );
        }
    }
    onPress_signUp(){
        this.setState({ singUpLoading : true});
        this.props.navigation.navigate('SignUp');
    }


    render(){
        const {containerStyle, inputStyle, headerStyle, forgotStyle, buttonStyle, footerStyle } = styles;
        console.log(this.state);
        return(
            <View style = {containerStyle}>
                <Text style = {headerStyle}>Vinchi</Text>
                <InputText
                
                    hint= "email@gmail.com"
                    onChangeText ={this.onEmailChange.bind(this)}
                    value = {this.props.email}
                    fontSize = {16}
                    style = {inputStyle}
                    icon = {
                        <Feather name="user" color ='rgba(200,200,200,0.7)' size={16}/>
                    }/>
                <InputText
                    hint= "password"
                    secureTextEntry = {true}
                    onChangeText = {this.onPasswordChange.bind(this)}
                    value = {this.props.password}
                    fontSize = {16}
                    style = {inputStyle}
                    icon = {
                        <Feather name="lock" color='rgba(200,200,200,0.7)' size={16}/>
                    }/>
                
                { this.loginButton()}
                <Text style={forgotStyle}>Forgot Password</Text>

                <Text style = {{color: 'rgba(133,133,133,0.7)', marginTop: 20, padding: 10}}>If you don't have and account yet just:</Text>
                <View style = {{width: '100%'}}>
                    <Button color = '#fff' fontSize = {16} onPress = {this.onPress_signUp.bind(this)}> SIGN UP </Button>
                </View>

                <View style= {footerStyle}>
                    <Text style ={{color: 'rgba(200,200,200,0.4)'}} > Made by Thales de Luca </Text>
                </View>
                
            </View>
            
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
      backgroundColor: '#212121',
      borderColor: '#fff',
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

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password: state.auth.password
    };
}
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);