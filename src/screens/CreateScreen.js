import React, { Component } from 'react';
import { View, Text, Image, Platform, Alert, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackButton, InputText, Button, Spinner } from '../components/common';
import { StackActions, NavigationActions } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker, { showImagePicker } from 'react-native-image-picker';
import firebase from 'firebase';
import uploadImage from '../functions/UploadImage';
import md5 from 'react-native-md5';
export default class CreateScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      title : '',
      description: '',
      image: null,
    }
  }
  onPress_Create(){
    this.setState({ loading : true});
    if(this.state.title != '' && this.state.description != ''){
      const user = firebase.auth().currentUser;
      firebase.auth().onAuthStateChanged(() =>{
        console.log("just don't ask me why...")
      });
      uploadImage(this.state.image, 'posts', user.uid).then((result) =>{
        firebase.database().ref('posts').child(user.uid).child(md5.hex_md5(Date.now() +" ")).set({
          title: this.state.title,
          description: this.state.description,
          image: result,
          date: Date.now()
        }).then(() => {
          Alert.alert(
            'Post Created',
            'Post created succesfully',
            [
              {text: 'OK'}
            ],
            { cancelable: true }
          );
          this.setState({loading: false});
          this.props.navigation.dispatch(resetAction);
        }).catch((error) => {
          console.log("Error " + error);
        });
      }).catch(() => {
        Alert.alert(
          'Error on creating post',
          'Could not upload image',
          [
            {text: 'OK'}
          ],
          { cancelable: true }
        );
        this.setState({loading: false});
      });

    } else {
      this.setState({loading: false});
      Alert.alert(
        'Error on creating post',
        'In order to create a post, you need to specify a title and description',
        [
          {text: 'OK'}
        ],
        { cancelable: true }
      );
    }
  }
  imageRender(){
    if(this.state.image){
      const uploadUri = Platform.OS === 'ios' ?  this.state.image.path : 'file://' + this.state.image.path;
      return <Image source = {{uri: uploadUri}} style = {{height: '100%', width: '100%', borderRadius: 6, padding: 1}}/>;
    }
  }
  createButton(){
    switch(this.state.loading){
      case true:
        return <Spinner size= {'small'} color = '#ffd600'/>;
      default:
        return <Button
                  gradient= {['#ffd600','#ffb600','#ff9000']}
                  fontSize = {16}
                  onPress = {this.onPress_Create.bind(this)}
                  start= {{x:0, y:0}} end= {{x:1, y:1}}
                  fontColor= '#fff'
                  icon = {
                    <FontAwesome name = "check-circle" size= {16} color='#ffefa3'/>
                  }>Create</Button>;
    }
  }
  render(){
    const { containerStyle, inputStyle, headerStyle, createStyle, imageStyle } = styles;
    return(
      <LinearGradient colors = {['#212121', '#111111']} style = {containerStyle}>
        <View style = {{marginTop: 15, marginLeft:5}}>
          <BackButton color='#fff' onPress = {() => this.props.navigation.dispatch(resetAction)} size= {20}/>
        </View>

        <View style ={{alignItems: 'center'}}>
          <Text style = {headerStyle}>Create Post</Text>
        </View>

        <InputText
          hint= "Title"
          fontSize = {16}
          style = {inputStyle}
          value = {this.state.title}
          onChangeText = {title => this.setState({ title })}
        />
        <InputText
          hint= "Description"
          fontSize = {16}
          multiline = {true}
          maxLength = {256}
          style = {[inputStyle,{maxLength:200, alignItems: 'flex-start', height:150,}]}
          value = {this.state.description}
          onChangeText = {description => this.setState({ description })}
        />

        <Button
          color = "#fff"
          fontColor = '#ffb600'
          icon = {
            <Feather name="image" color= '#ffb600' size= {16}/>
          }
          onPress = { () => {
            ImagePicker.showImagePicker((response) => {
              if(!response.didCancel){
                this.setState({ image: response })
              }
            });
          }}>Add Image</Button>

          <View style = {imageStyle}>
            { this.imageRender() }
          </View>

          <View style = {createStyle}>
            { this.createButton() }
          </View>




      </LinearGradient>
    );
  }
}
const resetAction = StackActions.reset({
  index : 0,
  actions : [ NavigationActions.navigate({ routeName: 'Main'})],
});

const styles = {
  containerStyle: {
    flex:1,
    flexDirection: 'column',
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
    color: '#fff',
    fontSize: 42,
    alignSelf: 'center',
  },
  createStyle: {
    justifyContent: 'flex-end',
    flex: 1,
    alignSelf: 'center',
    width:'100%'
  },
  imageStyle: {
    margin: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 100,
    width: 85,
    borderStyle :'dashed',
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 6
  }
}
