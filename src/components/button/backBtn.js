import React from 'react';

import { View } from 'react-native';
// import {  } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Navigator, ScreenConst } from '../../navigation'

export default class BackBtnComponent extends React.Component{

    back(){
        Navigator.popScreen(this.props.componentId)
    }

    render(){
        return(
            <View>
                <Icon.Button
                    name='arrow-back'
                    size={this.props.buttonSize}
                    color={this.props.buttonColor}
                    backgroundColor='transparent'
                    onPress={this.back.bind(this)}
                />
            </View>
        )
    }
}

