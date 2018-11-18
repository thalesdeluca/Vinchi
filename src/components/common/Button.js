import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props) =>{
    const { color, gradient, onPress, style, fontSize, fontColor, start, end, icon, fontFamily = 'system font'} = props;
    if(gradient){
        return(
            <TouchableOpacity onPress = { onPress }>
                <LinearGradient colors= { gradient } start = {start} end = {end} style = { [styles.containerStyle, style]} >
                    <View style = {styles.iconStyle}>
                        {icon}
                    </View>
                    <Text style = { {fontSize: fontSize, color : fontColor, fontFamily: fontFamily}}>{ props.children }</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style= { [{backgroundColor : color}, styles.containerStyle, style] }>
                <View style = {styles.iconStyle}>
                    {icon}
                </View>
                <Text style = { {fontSize: fontSize, color : fontColor, fontFamily: fontFamily} }>{ props.children }</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles= {
    containerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 0.2,
        borderRadius: 18,
        elevation: 2,
        shadowColor: '#111',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    iconStyle:{
        paddingHorizontal: 5,
    }
}

export { Button };