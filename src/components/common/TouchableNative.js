import React, { Component } from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

class TouchableNative extends Component{
    constructor(props){
        super(props);
    }
    selectPlatform = () =>{
        
        if(Platform.OS == 'ios'){
            return (
                <TouchableOpacity style= { this.props.style } onPress = {this.props.onPress}>
                    {this.props.children}
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableNativeFeedback style= { this.props.style } onPress = {this.props.onPress} background = { this.props.background } useForeground = {this.props.useForeground}>
                    {this.props.children}
                </TouchableNativeFeedback>
            );
        }
    }
    render(){
        return(
            this.selectPlatform()
        );
    }
    
}
export { TouchableNative };