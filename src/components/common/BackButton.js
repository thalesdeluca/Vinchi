import React from 'react';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
const BackButton = ({ size = 32, color = 'black', onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="left" size={size} color={color} />
        </TouchableOpacity>
    );
}

export { BackButton };