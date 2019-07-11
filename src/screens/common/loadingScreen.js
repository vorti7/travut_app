import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';

export default class loadingScreen extends React.Component{
    render(){
        console.log('Loading Overlay Component called')
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                opacity: 0.5}}>
                <Spinner/>
            </View>
        )
    }
}

