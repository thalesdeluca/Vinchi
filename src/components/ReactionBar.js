import React, { Component } from 'react';
import { View } from 'react-native';
import {UpButton, CommentButton ,MarkButton, ShareButton} from './reaction-buttons';
import { Rule } from './common' 

export default class ReactionBar extends Component{

    render(){

        const { containerStyle }  = styles;
        return(
           
            <View style = {containerStyle}>
                <UpButton color = {'#ffd600' }/>
                <Rule type= "vertical"/>
                <CommentButton color = { '#ffd600'}/>
                <Rule type= "vertical"/>
                <MarkButton color = { '#ffd600'}/>
                <Rule type= "vertical"/>
                <ShareButton color = { '#ffd600'}/>
            </View>
        );
    }

}
const styles = {
    containerStyle:{
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7,
        paddingHorizontal: 10,
        width: '100%'

    },

}

