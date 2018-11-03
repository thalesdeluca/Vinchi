import React from 'react';
import { View, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({hint, value, onChangeText, secureTextEntry, fontSize = 18, height = (fontSize*2)+10}, style, onPress) => {
    const { containerStyle, inputStyle, buttonStyle } = styles;
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
            <AntDesign name="search1" size={fontSize} color = "#ccc" style = {buttonStyle}/>
            
        </View>
    );
};

const styles = {
    containerStyle:{
        flex:1,
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
    buttonStyle: {
        padding: 10,

    }
}

export { SearchBar };
