import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { InputText,  Button } from '../components/common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
    }
  }

  componentDidMount(){
    const config = {
      //Here goes the firebase information
    };
    firebase.initializeApp(config);
  }
  static navigationOptions = {
    title: 'SignUp'
  }

  onPress_signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(() => console.log("Errou")).then(() => this.props.navigation.navigate('Main'));
  }


  render(){
    const { containerStyle, inputStyle, headerStyle, photoStyle } = styles;

    return(

      <View style = {containerStyle}>
        <Text style = {headerStyle}>Sign Up</Text>
        <InputText
          hint= "First Name"
          fontSize = {16}
          style = {inputStyle}
          value = {this.state.fName}
          onChangeText = { fName => this.setState({fName})}
        />
        <InputText
          hint= "Last Name"
          fontSize = {16}
          style = {inputStyle}
          value = {this.state.lName}
          onChangeText = { lName => this.setState({lName})}
        />
        <InputText
          hint= "Email"
          fontSize = {16}
          style = {inputStyle}
          value = {this.state.email}
          onChangeText = { email => this.setState({email})}
        />
        <InputText
          hint= "Password"
          fontSize = {16}
          style = {inputStyle}
          value = {this.state.password}
          onChangeText = { password => this.setState({password})}
        />
        <View style = {photoStyle}>
          <FontAwesome name="user-circle" size={64} color="white" />
        </View>
        
        <View style= {{width:'100%'}}>
          <Button color = '#fff' fontSize = {16}>Upload Photo</Button>
        </View>

        <View style= {{width:'100%', flexDirection: 'column-reverse', flex:1}}>
          <Button color = '#ffd600' fontSize = {16} onPress = {this.onPress_signUp.bind(this)}>Sign Up</Button>
        </View>
        
      </View>
    );
  }
}

const styles= {
  containerStyle: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#212121', 
    alignItems: 'center',
    padding: 15,
  },
  inputStyle: {
    marginBottom: 10,
    backgroundColor: '#1b1b1b',
  },
  headerStyle:{
    margin: 30,
    fontFamily: 'GeosansLight',
    color:'#fff',
    fontSize:42
  },
  photoStyle:{
    margin:15,
    marginBottom:20,
  }
}

export default SignUpScreen;
