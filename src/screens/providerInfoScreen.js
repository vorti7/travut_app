import React from 'react';
import { View , ScrollView, Dimensions } from 'react-native';
import { Header, Image, Input, Text } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class ProviderInfoScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render(){
        console.log('providerInfoScreen called')
        let screenHeight = Dimensions.get('window').height
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header></Header>
                <ScrollView style={{width:'100%'}}>
                    <View
                        style={{
                            backgroundColor:'red',
                            width:'100%',
                            height:40/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'orange',
                            width:'100%',
                            height:15/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'yellow',
                            width:'100%',
                            height:45/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'green',
                            width:'100%',
                            height:15/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'blue',
                            width:'100%',
                            height:25/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'darkblue',
                            width:'100%',
                            height:35/100 * screenHeight
                        }}
                    ></View>
                    <View
                        style={{
                            backgroundColor:'blueviolet',
                            width:'100%',
                            height:70/100 * screenHeight
                        }}
                    ></View>
                </ScrollView>
                
            </View>
        )
    }
}