import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'

export default class MytriplistScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    render(){
        console.log('mytriplistScreen called')
        return(
            <View>
                <Text>This is mytriplist Screen</Text>
            </View>
        )
    }
}