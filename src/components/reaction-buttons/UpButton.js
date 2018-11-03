import React, { Component } from 'react';

import { View, Text, TouchableNativeFeedback } from 'react-native';
import { TouchableNative } from '../common';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';

class UpButton extends Component {
    constructor(props){
        super(props);
        this.state = { color: '#616161'};
        this._onPress = this._onPress.bind(this);
    }
    _onPress(){ 
        switch(this.state.color){
            case this.props.color:
                this.setState({
                    color : '#616161'
                });
                break;
            case  '#616161':
                this.setState({
                    color : this.props.color
                });
                break;
    
        }
    }

    render(){
        const { structureStyle, countStyle } = styles;
        return(
            <TouchableNative style= {{padding: 5}} background={TouchableNativeFeedback.Ripple('#545454', false)} onPress = { this._onPress }>
                <View style= {structureStyle}>
                        <FontAwesome name="chevron-up" size= {20} color = {this.state.color}/>
                        <Text style = {[countStyle, {color : this.state.color}]}>UP!</Text>
                </View>
            </TouchableNative>
        );
    };
}
const styles = {
    structureStyle:{
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#d0d0d0',
        flex:1
    },
    countStyle: {
        paddingLeft: 5,
        color: '#616161',
        fontSize: 10
    }
}

export { UpButton };
