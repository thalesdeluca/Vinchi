import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Button = (props) =>{
    const { color , onPress, style, fontSize} = props;
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style= {[{backgroundColor : color}, styles.containerStyle, style]}>
                <Text style = {{fontSize: fontSize, fontWeight: '900',}}>{props.children}</Text>
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
        paddingVertical: 14,
        borderWidth: 0.2,
        borderRadius: 18,
        elevation: 2,
        shadowColor: '#222',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 10,
    }
}

export { Button };