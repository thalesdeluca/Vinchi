import React from 'react';
import {View, Text} from 'react-native';
import { InputText } from './common';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render(){
        return(
            <View>
                <View>
                    <InputText
                        placeholder= "email@gmail.com"
                        label= "Email"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </View>
                <View>
                    <InputText
                        label= "Password"
                        placeholder= "password"
                        secureTextEntry= {secureTextEntry}

                    />
                </View>
            </View>
            
        );
    }
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email
    };
}
export default connect(mapStateToProps, emailChanged)(LoginForm);