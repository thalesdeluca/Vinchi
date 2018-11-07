import React from 'react';
import { View, TextInput} from 'react-native';

const InputText = ({hint, value, onChangeText, secureTextEntry, fontSize = 18, height = (fontSize*2)+10, style}) => {
    const { containerStyle, inputStyle } = styles;

    return (
        <View style = {[containerStyle, {height: height}, style]}>
            <TextInput 
                secureTextEntry = {secureTextEntry}
                value = { value }
                onChangeText = { onChangeText }
                style = {[inputStyle, {fontSize : fontSize}]} 
                placeholder= { hint }
                underlineColorAndroid= 'transparent'
                autoCorrect = { false }/>
        </View>
    );
};

const styles = {
    containerStyle:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:3,
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderRadius: 20,
        elevation: 2,
        shadowColor: '#222',
        shadowOffset: {width:1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    inputStyle:{
        color:'#000',
        paddingHorizontal: 5,
        flex: 2,
    }, 
}

export { InputText };
