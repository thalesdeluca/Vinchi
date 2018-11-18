import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Platform, Image, Alert } from 'react-native';
import { InputText,  Button, Spinner, TouchableNative, ProgressBar, BackButton } from '../components/common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';
import FBLoginButton from '../components/FBLoginButton';
import uploadImage from '../functions/UploadImage';
import ImagePicker, { showImagePicker } from 'react-native-image-picker';
import { StackActions, NavigationActions } from 'react-navigation';
import { GoogleSignin } from 'react-native-google-signin';
import { googleConfig } from '../../api-key';
const resetActionMain = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Main'})],
});
const resetActionLogin = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Login'})],
});
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

  onPress_signUp = () =>{
    this.setState({ loading: true });
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(() => console.log("Errou")).then((result) =>{
      let user = result.user;
      if(this.state.picture){
        uploadImage(this.state.picture, 'profiles', user.uid).then((result) => {
          firebase.database().ref("users").child(user.uid).set({
            name: user.displayName,
            lastName: "",
            email: user.email,
            profile_image: result,
            verified: true
          })
          firebase.auth().currentUser.updateProfile({
            displayName: this.state.fName,
            email: this.state.email,
            photoURL: result,
          }).catch(() =>{
            console.log("error");
            this.setState({ loading: false });
          }).then(() => {
            this.props.navigation.dispatch(resetActionMain);
          });;
        });
      }


    }).catch(() => {
      this.setState({ loading: false });
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
                  }>Create</Button>;
    }
  }
  onPress_google = () =>{
    GoogleSignin.configure();
    GoogleSignin.hasPlayServices().then(() =>{
      GoogleSignin.signIn().then((user) =>{
        console.log(user);
      }).catch((error) => {
        console.log("error on signin: " + error);
      });
    }).catch((error) => {
      console.log("error on hasPlay: " + error);
    });

  }

  loginFB(result) {
    const credential = firebase.auth.FacebookAuthProvider.credential(result.accessToken);
    firebase.auth().signInAndRetrieveDataWithCredential(credential).then(test =>{
      let user = firebase.auth().currentUser;
        firebase.database().ref("users").child(user.uid).set({
          name: user.displayName,
          lastName: "",
          email: user.email,
          profile_image: user.photoURL,
          verified: true
        })
        firebase.auth().currentUser.updateProfile({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }).then(() => {
          this.props.navigation.dispatch(resetActionMain);
        });
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

  imageRender(){
    if(this.state.picture){
      const uploadUri = Platform.OS === 'ios' ?  this.state.picture.path : 'file://' + this.state.picture.path;
      return <Image source = {{uri:uploadUri}} style={{height:'100%', width: '100%', borderRadius: 40}}/>;
    } else {
      return <FontAwesome name="user-circle" size={64} color="white" />;
    }
  }



  passwordBar(){
    let value = this.state.password.length * 10;
    let colorProgress = '#0a2';
    if(value > 100){
      value = 100;
    }
    if(value < 80){
      colorProgress = '#e11'
    } else {
      colorProgress = '#0a2';
    }
    return <ProgressBar color = {colorProgress} goal = '80%' progress = {'' + value + '%'} />
  }

  render(){
    const { containerStyle, inputStyle, headerStyle, photoStyle, subStyle, altLoginStyle, iconStyle } = styles;

    return(
        <LinearGradient colors = {['#212121', '#111111']} >
            <ScrollView style = {containerStyle}>

              <View style = {{marginTop: 15, marginLeft: 5,}}>
                <BackButton color='#fff' onPress = {() => this.props.navigation.dispatch(resetActionLogin)} size= {20}/>
              </View>

              <View style ={{alignItems: 'center', justifyContent: 'center',alignSelf: 'center', flex:1}}>
                <Text style = {headerStyle}>Sign Up</Text>
              </View>

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
              <View style = {{flex: 1, alignItems: 'center', marginHorizontal: 12,}}>
                { this.passwordBar() }
              </View>
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
                }}>Upload Photo</Button>
              </View>

              <View style= {{width:'100%', paddingVertical: 30,}}>
                {this.signUpButton()}
              </View>
            </ScrollView>
        </LinearGradient>
    );
  }
}
const resetAction = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Login'})],
});

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
    marginTop: 0,
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
