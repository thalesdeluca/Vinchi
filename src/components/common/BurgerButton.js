import React from 'react';
import Feather  from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
const BurgerButton = ({ size = 32, color = "#000", onPress }) => {
    return (
        <TouchableOpacity onPress = { onPress }>
            <Feather name="menu" size={size} color={color}/>
        </TouchableOpacity>
    );
}

export { BurgerButton };