import React from 'react';
import { View } from 'react-native';

const Line = ({ type = "horizontal", size = 1, color = '#fff'}) =>{
    const { vertical, horizontal } = styles;
    lineType = () =>{
        if(type == "vertical"){
            return <View style={[vertical,{ borderRightColor: color, borderRightWidth: size}]}/>; 
        } else{
            return <View style={[horizontal,{ borderBottomColor: color, borderBottomWidth: size}]}/>;
        }
    }

    return (
        this.lineType()
    );
}
const styles = {
    horizontal: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    vertical: {
        borderRightWidth: 1,
        borderRightColor: '#fff',   
    } 
}
export { Line };