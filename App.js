import React,{ Component }from 'react';
import {  View, Image, TouchableHighlight, Dimensions, StatusBar, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from './src/components/Card';
import TabBar from './src/components/TabBar';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { BurgerButton, SearchBar } from './src/components/common';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  /*
  * GeosansLight-Oblique
  * GeosansLight
  * Open Sans Condensed Bold
  * Open Sans Condensed Light
  * Raleway Bold
  * Raleway Light
  * Raleway Medium
  * Raleway Regular
  * Raleway Thin
  * Sunshine
  * */
  createPost(){

  }
  render() {
    const { backgroundStyle, contentStyle, headerStyle, } = styles;
    return (
      <Provider store ={ createStore(reducers) }>
        <View style = {backgroundStyle}>
          <View style = {contentStyle}>
            
            <ScrollView>
              <View style= {headerStyle}>
                <View style = {{paddingRight: 20, paddingLeft: 10}}>
                  <BurgerButton size= {25} color= "#fff"/>
                </View>
                <SearchBar hint= "Search" fontSize= {12} />
              </View>
              <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontFamily:'GeosansLight', paddingBottom:5}}>Showing results around</Text>
              <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontFamily:'GeosansLight',paddingBottom:5}}>Rua Alberto Carazzai, Centro - Cornélio Procópio - PR</Text>
              <Card>
                <Image source = {require('./assets/a.png')} style = {{height: Dimensions.get('screen').height/3, width: '100%'}}/>
              </Card>
              <Card>
                <Image source = {require('./assets/a.png')} style = {{height: Dimensions.get('screen').height/3, width: '100%'}}/>
              </Card>
              <Card>
                <Image source = {require('./assets/a.png')} style = {{height: Dimensions.get('screen').height/3, width: '100%'}}/>
              </Card>
              <Card>
                <Image source = {require('./assets/a.png')} style = {{height: Dimensions.get('screen').height/3, width: '100%'}}/>
              </Card>

              
              </ScrollView>
          </View>
          
          <View style= {{height: '20%', backgroundColor: 'rgba(0,0,0,0)'}}>
            
            <TabBar />
          </View>
          
          
        </View>
      </Provider>
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
    paddingTop:StatusBar.currentHeight,
    height: '90%'
  },
  headerStyle:{
    flexDirection: 'row', 
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center'
  }

}

