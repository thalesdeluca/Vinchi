import React from 'react';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
const BackButton = ({ size = 32 }) => {
    return (
        <TouchableOpacity>
            <AntDesign name="left" size={size} color="black" />
        </TouchableOpacity>
    );
}

export { BackButton };