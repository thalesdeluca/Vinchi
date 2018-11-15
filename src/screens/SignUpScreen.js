import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Platform, Image } from 'react-native';
import { InputText,  Button, Spinner, TouchableNative } from '../components/common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import FBLoginButton from '../components/FBLoginButton';
import uploadImage from '../functions/UploadImage';
import ImagePicker, { showImagePicker } from 'react-native-image-picker';
class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      picture: null,
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
        let image = null;
        if(this.state.picture){
          image = uploadImage(this.state.picture, 'profiles', user.uid);
        }
        firebase.database().ref("users").child(user.uid).set({
          name: this.state.fName,
          lastName: this.state.lName,
          email: this.state.email,
          profile_image: image._v,
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
  onPress_google(){

  }

  loginFB(result) {
    const credential = firebase.auth.FacebookAuthProvider.credential(result.accessToken);
    firebase.auth().signInWithCredential(credential).then(test =>{
      let user = firebase.auth().currentUser;
        firebase.database().ref("users").child(user.uid).set({
          name: user.displayName,
          lastName: "",
          email: user.email,
          profile_image: user.photoURL,
          verified: true
        });
    });
  }

  imageRender(){
    if(this.state.picture){
      const uploadUri = Platform.OS === 'ios' ?  this.state.picture.path : 'file://' + this.state.picture.path;
      return <Image source = {{uri:uploadUri}} style={{height:'100%', width: '100%', borderRadius: 40}}/>;
    } else {
      return <FontAwesome name="user-circle" size={64} color="white" />;
    }
  }

  render(){
    const { containerStyle, inputStyle, headerStyle, photoStyle, subStyle, altLoginStyle, iconStyle } = styles;

    return(
        <LinearGradient colors = {['#212121', '#111111']} >
            <ScrollView style = {containerStyle}>
              <Text style = {headerStyle}>Sign Up</Text>

              <Text style = {subStyle}>Sign up with:</Text>
              <View style = {altLoginStyle}>

                <FBLoginButton data = { this.loginFB.bind(this) }/>
                <View style ={{paddingHorizontal: 30,}}/>

                <TouchableNative background={TouchableNativeFeedback.Ripple('#545454', false)} onPress = {this.onPress_google.bind(this)}>
                  <FontAwesome name="google-plus-square" size = {48} color = "#f31" style={iconStyle}/>
                </TouchableNative>
              </View>
              
              <Text style = {subStyle}>or:</Text>

              <InputText
                hint= "First Name (Display name)"
                fontSize = {16}
                style = {inputStyle}
                value = {this.state.fName}
                onChangeText = {fName => this.setState({fName})}
              />
              <InputText
                hint= "Last Name"
                fontSize = {16}
                style = {inputStyle}
                value = {this.state.lName}
                onChangeText = {lName => this.setState({lName})}
              />
              <InputText
                hint= "Email"
                fontSize = {16}
                style = {inputStyle}
                value = {this.state.email}
                onChangeText = {email => this.setState({email})}
              />
              <InputText
                hint= "Password"
                fontSize = {16}
                style = {inputStyle}
                value = {this.state.password}
                secureTextEntry = {true}
                onChangeText = {password => this.setState({password})}
              />
              <View style = {photoStyle}>
                { this.imageRender() }
              </View>
              
              <View style= {{width:'100%'}}>
                <Button color = '#fff' fontSize = {16} start= {{x:0, y:0}} end= {{x:1, y:1}} gradient = {['#fff', '#eee','#aaa']} 
                icon = {
                  <FontAwesome name="upload" color='#212121' size={16}/>
                }
                onPress = {() => {
                  ImagePicker.showImagePicker((response) => {
                    if(!response.didCancel){
                      this.setState({ picture: response })
                    }
                  })
                }}>UPLOAD PHOTO</Button>
              </View>

              <View style= {{width:'100%', paddingVertical: 30,}}>
                {this.signUpButton()}
              </View>
            </ScrollView>
        </LinearGradient>
    );
  }
}

const styles= {
  containerStyle: {
    backgroundColor: '#212121', 
    padding: 15,
    
  },
  inputStyle: {
    marginBottom: 10,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    margin: 30,
    fontFamily: 'GeosansLight',
    color:'#fff',
    fontSize:42,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  photoStyle:{
    margin: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 80,
    width: 80,
  },
  subStyle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.3)',
    padding: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  altLoginStyle: {
    flexDirection: 'row',
    paddingVertical:10,
    paddingHorizontal: 20,
    justifyContent: 'center',
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

export default SignUpScreen;
