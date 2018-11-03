import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback,TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Line, TouchableNative } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
class TabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabSelected : 0,
            mounted: false
        }
    }
    componentDidMount(){
        this.props.selectTab(0);
    }
    selectionHighlight = (tab) =>{
        const selected= '#ffd600';
        const normal=  '#7e7e7e';
       
        switch(tab){
            case 0:
                if(this.props.tab == 0){
                    return selected;
                } else {
                    return normal;
                } 
            case 1:
                if(this.props.tab == 1){
                    return selected;
                } else {
                    return normal;
                }
            case 2:
                if(this.props.tab == 2){
                    return selected;
                } else {
                    return normal;
                }
            case 3:
                if(this.props.tab == 3){
                    return selected;
                } else {
                    return normal;
                }
        }
    }

    changeSelectedTo(index){
        switch(index){
            case 0:
                this.props.selectTab(0);
                break;
            case 1:
                this.props.selectTab(1);
                break;
            case 2:
                this.props.selectTab(2);
                break;
            case 3:
                this.props.selectTab(3);
                break;

                
        }
        
    }
    render(){
        const { containerStyle, buttonStyle, labelStyle,addStyle } = styles;
        return(
            <View style = {{backgroundColor: 'rgba(0,0,0,0)'}}>

                <View style= {{ backgroundColor: '#2e2e2e',}}>
                    <Line type= "horizontal" size= {2} color = '#ffd600'/>
                    <View style = { containerStyle }>
                        <TouchableNative onPress= {() => this.changeSelectedTo(0)} background={TouchableNativeFeedback.Ripple('#545454', false)} style={{borderRadius:20,}}>
                            <View style = { buttonStyle }>
                                <FontAwesome name ='newspaper-o' size= {25} color = {this.selectionHighlight(0)}/>
                                <Text style = { [labelStyle,{color: this.selectionHighlight(0)} ]}>Recents</Text>
                            </View>
                        </TouchableNative>

                        <TouchableNative onPress= {() => this.changeSelectedTo(1)} background={TouchableNativeFeedback.Ripple('#545454', false)} style={{borderRadius:20,}}>
                            <View style = { buttonStyle }>
                                <FontAwesome name ='star' size= {25} color = {this.selectionHighlight(1)}/>
                                <Text style = { [labelStyle,{color: this.selectionHighlight(1)} ]}>Favourites</Text>
                            </View>
                        </TouchableNative>
                        
                        <TouchableNative onPress= {() =>this.changeSelectedTo(2)} background={TouchableNativeFeedback.Ripple('#545454', false)} style={{borderRadius:20,}}>
                            <View style = { buttonStyle }>
                                <FontAwesome name ='bookmark' size= {25} color = {this.selectionHighlight(2)}/>
                                <Text style = { [labelStyle,{color: this.selectionHighlight(2)} ]}>Marked</Text>
                            </View>
                        </TouchableNative>

                        <TouchableNative onPress= {() => this.changeSelectedTo(3)} background={TouchableNativeFeedback.Ripple('#545454', false)} style={{borderRadius:20,}}>
                            <View style = { buttonStyle }>
                                <FontAwesome name ='user' size= {25} color = {this.selectionHighlight(3)}/>
                                <Text style = { [labelStyle,{color: this.selectionHighlight(3)} ]}>My Posts</Text>
                            </View>
                        </TouchableNative>
                    </View>
                </View>
                <TouchableHighlight onPress= {() => this.createPost()} style = {{position:'absolute', alignSelf: 'center', flex: 1, top: '-30%', borderRadius: 50}} underlayColor= 'rgba(0,0,0, 0.2)' >
                    <View style ={{backgroundColor:'#000', borderRadius: 50}}>
                    <AntDesign name='pluscircle' size = {50} color = '#ffd600' />
                    
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return { tab: state.tab };
};


const styles = {
    containerStyle:{
        backgroundColor: '#2e2e2e',
        width: '100%',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonStyle:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        padding: 10,
        borderRadius:20,
        flex:1
    },
    labelStyle: {
        color : '#7e7e7e',
        fontSize: 12,
        fontFamily: 'geosans-light',
    },
    
}

export default connect(mapStateToProps, actions)(TabBar);