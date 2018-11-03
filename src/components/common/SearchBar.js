import React from 'react';
import { View, TextInput} from 'react-native';

const SearchBar = ({hint, value, onChangeText, secureTextEntry, fontSize = 18, height = (fontSize*2)+10}, style) => {
    const { containerStyle, inputStyle } = styles;
    return (
        <View style = {[containerStyle, {height: height}, style]}>
            <TextInput 
                secureTextEntry = {secureTextEntry}
                value = { value }
                onChangeText = { onChangeText }
                style = {[inputStyle, {fontSize : fontSize, lineHeight:fontSize+5}]} 
                placeholder= { hint }
                underlineColorAndroid= 'transparent'
                autoCorrect = { false }/>
        </View>
    );
};

const styles = {
    containerStyle:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:10,
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
        lineHeight:23,
        flex: 2,
    }
}

export { SearchBar };
