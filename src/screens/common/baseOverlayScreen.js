import React from 'react';
import { View } from 'react-native';

export default class baseOverlayScreen extends React.Component{
    render(){
        console.log('Base Overlay Component called')
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                opacity: 0.5}}>
                <View style={{
                    backgroundColor: 'white',
                    width:'80%',
                    height:'80%',
                    opacity: 1.0
                }}>

                </View>
            </View>
        )
    }
}

