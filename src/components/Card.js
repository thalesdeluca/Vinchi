import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback} from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import ReactionBar from './ReactionBar';
import { Rule, TouchableNative } from './common';

export default class Card extends Component{
    constructor(props){
        super(props);
    }
    doSomething(){

    }
    render() {
        const { titleStyle, containerStyle, dateStyle, descriptionStyle, nameStyle, imageStyle } = styles;
        const { title, description, image, date } = props
        return(
            <View style= {containerStyle}>
                <View>
                    <View style= {{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingHorizontal:15}}>
                        <FontAwesome name="user-circle" size={42} color="white" />
                        <View style= {{ justifyContent: 'center',alignItems: 'center', flex:1}}>
                            <Text style = { dateStyle }>{moment(new Date(date * 1000)).format('DD/MM/YYYY')}</Text>
                            <Text style = { nameStyle }>Supermercados Canção</Text>

                        </View>

                    </View>
                    <Rule/>
                    <View style = {{paddingHorizontal: 10}}>
                        <Text style = { titleStyle }>title</Text>

                        <Text style = { descriptionStyle }>description</Text>
                    </View>
                </View>
                <TouchableNative onPress= {() => this.doSomething()} useForeground= {true} >
                    <View style = {imageStyle}>{this.props.children}</View>
                </TouchableNative>
                <Rule/>
                <ReactionBar/>
            </View>
        );
    };


}
const styles = {
    dateStyle:{
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#fff',
        opacity: 0.45,
        fontSize: 10,
        fontFamily: 'GeosansLight',

    },
    nameStyle:{
        color: '#d4d4d4',
        justifyContent: 'center',
        alignSelf: 'center',

        fontSize: 18,
        fontFamily: 'GeosansLight',
    },
    titleStyle:{
        fontSize: 20,
        color: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 5,
        fontFamily: 'Fjalla One',

    },
    descriptionStyle:{
        fontSize: 18,
        flex:1,
        paddingVertical: 10,
        color: '#eee',
        fontFamily: 'GeosansLight',
        textAlign: 'justify'
    },
    containerStyle:{
        paddingTop: 5,
        backgroundColor: '#292929',
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 6,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {width : 1, height: 2},
        shadowRadius: 6

    },
    imageStyle: {
        justifyContent:'center',
        alignItems:'center',
    },
}
