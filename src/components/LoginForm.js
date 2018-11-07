import React,{ Component } from 'react';
import {View, Text} from 'react-native';
import { InputText, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render(){
        const {containerStyle, inputStyle, headerStyle } = styles;
        return(
            <View style = {containerStyle}>
                <Text style = {headerStyle}>Vinchi</Text>

                <InputText
                
                    hint= "email@gmail.com"
                    onChangeText ={this.onEmailChange.bind(this)}
                    value = {this.props.email}
                    fontSize = {16}
                    style = {inputStyle}
                />

                <InputText
                    hint= "password"
                    secureTextEntry = {true}
                    onChangeText = {this.onPasswordChange.bind(this)}
                    value = {this.props.password}
                    fontSize = {16}
                    style = {inputStyle}
                />
                <Button color= '#fd0'> Login </Button>

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
    },
    headerStyle:{
      color: '#fd0', 
      fontSize: 64, 
      paddingVertical: 30,
      fontFamily: 'Sunshine', 
      alignSelf: 'center',
    },
    inputStyle:{
        marginVertical: 10
    }
  }

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password: state.auth.password
    };
}
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);