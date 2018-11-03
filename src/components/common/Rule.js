import React from 'react';
import { View } from 'react-native';

const Rule = ({ type = "horizontal", size = 1, color = '#fff', }) =>{
    const { vertical, horizontal } = styles;
    ruleType = () =>{
        if(type == "vertical"){
            return <View style={[vertical,{ borderRightColor: color, borderRightWidth: size, }]}/>; 
        } else{
            return <View style={[horizontal,{ borderBottomColor: color, borderBottomWidth: size}]}/>;
        }
    }

    return (
        this.ruleType()
    );
}
const styles = {
    horizontal: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        opacity: 0.08,
        marginHorizontal: 4,
        marginTop: 10,
        marginBottom:6,
    },
    vertical: {
        borderRightWidth: 1,
        borderRightColor: '#fff',
        opacity: 0.08,
        height:'80%',
        
        
    } 
}
export { Rule };