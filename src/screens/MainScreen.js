import React,{ Component } from 'react';
import {  View, Image, Dimensions, Text, ScrollView, FlatList,Alert } from 'react-native';
import Card from '../components/Card';
import TabBar from '../components/TabBar';
import { BurgerButton, SearchBar, Spinner, Button } from '../components/common';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash';
export default class MainScreen extends Component{
  static navigationOptions = {
    title: 'Main',
  };
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: null
    }

  }
  componentDidMount(){
    this.getData();
  }
  getData = async () => {
    this.setState({loading: true});
    const user = firebase.auth().currentUser.uid;
    firebase.database().ref('/posts/').once('value', snapshot => {
      const data = _.map(snapshot.val(), array => {
        return array;
      });
      var items = [];
      data.forEach((child) => {
        const a = Object.values(child);
        a.forEach((posts) => {
          items.push({
            post : posts,
          });
        });
      });
      this.setState({data : items, loading : false});
    });
  }
  renderHeader(){
    return(
      <View style= {{width:'100%'}}>
        <View style= {styles.headerStyle}>
          <View style = {{paddingRight: 20, paddingLeft: 10}}>
            <BurgerButton size= {25} color= "#fff" onPress= { () => this.props.navigation.openDrawer() }/>
          </View>
          <SearchBar hint= "Search" fontSize= {14}/>
        </View>
        <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontFamily:'GeosansLight', paddingBottom:5}}>Showing results around</Text>
        <Text style= {{alignSelf:'center', justifyContent: 'center', color: '#fff', fontSize: 16, fontFamily:'GeosansLight',paddingBottom:5}}>Rua Alberto Carazzai, Centro - Cornélio Procópio - PR</Text>
      </View>
    );
  }
  refreshList() {
    this.getData();
  }

  renderList(){
    if(this.state.data){
      if(this.state.data.length > 0){
        return (
          <FlatList
            style = {{flex:1, width:'100%'}}
            data = {this.state.data}
            onRefresh = {() => this.refreshList()}
            refreshing = {this.state.loading}
            renderItem = {({item, length}) => {
              const datePost = new Date(item.post.date);
              const dateString = datePost.getDate() + "/" + (datePost.getMonth() + 1) + "/" + datePost.getFullYear();
              return(
                <Card
                  title = {item.post.title}
                  description = {item.post.description}
                  date = {dateString}
                  username = {item.post.username}
                  uimage = {item.post.uimage}>
                  <Image
                    source ={{uri: item.post.image}}
                    style = {{height: Dimensions.get('screen').height/3, width: '100%', backgroundColor : '#121212'}}
                    resizeMode= 'cover'/>
                </Card>
              );

            }}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent = {() => this.renderHeader()}/>
        );
      } else {
        return(
          <View style= {{flex: 1, width: '100%'}}>
            { this.renderHeader() }
            <View style = {{alignItems: 'center', justifyContent: 'center', flex:1}}>
              <FontAwesome5 name = "frown-open" size= {72} color= '#ffd600' style= {{padding: 20}}/>
              <Text style = {{fontSize: 18, color: '#888'}}> Não há publicações ao seu redor. </Text>
              <View style = {{justifyContent: 'center'}}>
                <Button
                  color= '#fff'
                  onPress = { () => this.setState({loaded: true})}
                  style = {{borderRadius:60, margin: 10, alignItems: 'center', justifyContent: 'center', width: 54}}
                  icon = {
                  <FontAwesome5 name = "redo-alt" color= "#ffd600" size= {24}/>
                }/>
              </View>
            </View>
          </View>
        );
      }
    } else {
      return <Spinner size= {42} color = '#ffd600'/>;
    }
  }

  render() {
    const { backgroundStyle, contentStyle, headerStyle, } = styles;
    console.log(this.state.data);
    return (
        <LinearGradient colors = {['#212121', '#111']} style = {backgroundStyle}>
          <View style = {contentStyle}>
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
    height: '90%',
    justifyContent:'center',
    alignItems: 'center',
  },
  headerStyle:{
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

}
