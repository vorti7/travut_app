import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';

export default class loadingOverlayComponent extends React.Component{
    render(){
        console.log('Loading Overlay Component called')
        console.log(this.props.componentId)
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

