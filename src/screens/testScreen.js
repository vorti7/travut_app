import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements'
import { WebView } from 'react-native-webview'

export default class TestScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('testScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        
        return(
            <View style={{flex:1}}>
                <Header></Header>
                <WebView 
                    source={{ uri: 'https://facebook.github.io/react-native/' }}
                />
                <View style={{height:'20%'}}></View>
            </View>
        )
    }
}