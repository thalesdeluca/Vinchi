import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { Rule, Button } from './common';
import firebase from 'firebase';
export default class DrawerContent extends Component{ 
  imageRender() {
    if(firebase.apps.length && firebase.auth().currentUser){
      let user = firebase.auth().currentUser.photoURL;
      if(user){
        return <Image source= {{uri: user}} style = {{height:100, width:100, borderRadius:60}}/>;
      } else {
        
      }
    } else {
      return <FontAwesome name="user-circle" size= {72} color='#fff'/>;
    }
  }
  getUserName() {
    if(firebase.apps.length && firebase.auth().currentUser){
      return firebase.auth().currentUser.displayName;
    }
  }
  render(){
    const { containerStyle, pictureStyle, nameStyle, itemStyle, textStyle, contentStyle, footerStyle } = styles;
    return(
      <View style = { containerStyle }>
        <View style = { pictureStyle }>
          { this.imageRender() }
          <Text style = { nameStyle }>{ this.getUserName() }</Text>
        </View>
        <View style = {{ paddingHorizontal: 10, }}>
          <Rule type= 'horizontal'/>
        </View>
        <View style = { contentStyle }>
          <View style = { itemStyle }>
            <FontAwesome name="bell" size={16} color = '#fff'/>
            <Text style = { textStyle }>Notifications</Text>
          </View>

          <View style = { itemStyle }>
            <FontAwesome name="gear" size={16} color = '#fff'/>
            <Text style = { textStyle }>Settings</Text>
          </View>

          <View style = { footerStyle }>
            <Button
              color = '#ffb600'
              fontColor= '#fff' 
              start = {{x: 0, y :0}}
              end = {{x:1 , y:1}}
              onPress = {() => {
                if(firebase.apps.length && firebase.auth().currentUser){
                  firebase.auth().signOut().then(() =>{
                    this.props.navigation.dispatch(resetAction);
                  })
                }
              }
              }>LOG OUT</Button>
          </View>

          </View>
        </View>
    );
  }
}
const resetAction = StackActions.reset({
  index: 0,
  actions: [ NavigationActions.navigate({ routeName: 'Login' })]
});
const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  pictureStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  nameStyle:{
    paddingTop: 10,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Open Sans Condensed',
  },
  contentStyle: {
    flex: 1,
    padding: 10,
    paddingBottom: 30 
  },
  itemStyle: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    paddingHorizontal: 20,
    fontFamily: 'GeosansLight',
    fontSize: 20,
  },
  footerStyle: {
    flex:1, 
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
}