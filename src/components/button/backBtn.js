import React from 'react';

import { View } from 'react-native';
import {  } from 'react-native-elements'

export default class BackBtnComponent extends React.Component{

    back(){

    }

    render(){
        return(
            <View>
                <Icon.Button
                    name='arrow-back'
                    size={24}
                    fill='#FFF'
                    onPress={this.back.bind(this)}
                />
            </View>
        )
    }
}

