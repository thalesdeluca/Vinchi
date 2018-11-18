import React,{ Component } from 'react';
import {  View, Image, Dimensions, Text, ScrollView, FlatList } from 'react-native';
import Card from '../components/Card';
import TabBar from '../components/TabBar';
import { BurgerButton, SearchBar } from '../components/common';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';
export default class MainScreen extends Component{
  static navigationOptions = {
    title: 'Main',
  };
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
  createPost(){

  }
  renderList(){
    firebase.database().ref('posts').child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      console.log(snapshot.val());
    });
    return(
      <View/>

      );
  }
  render() {
    const { backgroundStyle, contentStyle, headerStyle, } = styles;
    return (

        <LinearGradient colors = {['#212121', '#111']} style = {backgroundStyle}>
          <View style = {contentStyle}>
              <View style= {headerStyle}>
                <View style = {{paddingRight: 20, paddingLeft: 10}}>
                  <BurgerButton size= {25} color= "#fff" onPress= { () => this.props.navigation.openDrawer() }/>
                </View>
                <SearchBar hint= "Search" fontSize= {14}/>
              </View>
              <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontFamily:'GeosansLight', paddingBottom:5}}>Showing results around</Text>
              <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontFamily:'GeosansLight',paddingBottom:5}}>Rua Alberto Carazzai, Centro - Cornélio Procópio - PR</Text>

              { this.renderList() }
          </View>

          <View style= {{height: '10%', backgroundColor: 'rgba(0,0,0,0)'}}>

            <TabBar navigation = {this.props.navigation}/>
          </View>
        </LinearGradient>
    );
  }
}

const styles= {
  backgroundStyle:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#212121',
  },
  contentStyle:{
    height: '90%'
  },
  headerStyle:{
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

}
