import React from 'react';
import  Feather  from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
const EditButton = ({ size = 32 }) => {
    return (
        <TouchableOpacity>
            <Feather name="edit" size={size} color="black" />
        </TouchableOpacity>
    );
}

export { EditButton };