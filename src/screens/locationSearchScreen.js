import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import { Header } from 'react-native-elements'

// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'

export default class LocationsearchScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    render(){
        console.log('locationsearchScreen called')
        return(
            <View>
                <Header containerStyle={{backgroundColor:'white'}}></Header>
                <Text>This is locationsearch Screen</Text>
            </View>
        )
    }
}