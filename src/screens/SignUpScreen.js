import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { InputText,  Button, Spinner } from '../components/common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      loading : false,
    }
  }

  
  static navigationOptions = {
    title: 'SignUp',
  }

  onPress_signUp(){
    this.setState({ loading: true });
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(() => console.log("Errou")).then(() =>{
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() =>{
        let user = firebase.auth().currentUser;
        firebase.database().ref("users").child(user.uid).set({
          name: this.state.fName,
          lastName: this.state.lName,
          email: this.state.email,
          verified: firebase.auth().currentUser.emailVerified
        });
        
      });
    });

  }
  
  signUpButton(){
    switch(this.state.loading){
      case true: 
        return <Spinner size= {'small'} color = '#ffd600'/>;
      default:
        return <Button 
                  gradient= {['#ffd600','#ffb600','#ff9000']}  
                  fontSize = {16} 
                  onPress = {this.onPress_signUp.bind(this)} 
                  start= {{x:0, y:0}} end= {{x:1, y:1}} 
                  fontColor= '#fff' 
                  icon = {
                    <FontAwesome name = "check-circle" size= {16} color='#ffefa3'/>
                  }>COMPLETE</Button>;
    }
  }


  render(){
    const { containerStyle, inputStyle, headerStyle, photoStyle } = styles;

    return(
        <LinearGradient colors = {['#212121', '#111111']} style = {containerStyle}>
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
            secureTextEntry = {true}
            onChangeText = { password => this.setState({password})}
          />
          <View style = {photoStyle}>
            <FontAwesome name="user-circle" size={64} color="white" />
          </View>
          
          <View style= {{width:'100%'}}>
            <Button color = '#fff' fontSize = {16} start= {{x:0, y:0}} end= {{x:1, y:1}} gradient = {['#fff', '#eee','#aaa']} 
            icon = {
              <FontAwesome name="upload" color='#212121' size={16}/>
            }>UPLOAD PHOTO</Button>
          </View>

          <View style= {{width:'100%', flexDirection: 'column-reverse', flex:1}}>
            { this.signUpButton()}
          </View>
        </LinearGradient>
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
    backgroundColor: '#303030',
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
