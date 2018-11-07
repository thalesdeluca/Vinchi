import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Button = (props) =>{
    const { color , onPress, height} = props;
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style= {[{backgroundColor : color, height: height}, styles.containerStyle]}>
                <Text>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles= {
    containerStyle:{
        padding: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#222',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 10,
    }
}

export { Button };