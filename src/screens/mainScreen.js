import React from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { Button, Header } from 'react-native-elements'

export default class MainScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    onClick1(){
        console.log('onClick1 button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH)
    }
    onClick2(){
        console.log('onClick2 button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO)
    }
    onClick3(){
        console.log('onClick3 button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MYTRIP_LIST)   
    }
    onClick4(){
        console.log('onClick4 button clicked')
        Navigator.showOverlay("overlay",  ScreenConst.SCREEN_COMMON_OVERLAY)
    }
    

    logout(){
        AuthClass.logoutTraveler(this.props.componentId)
    }

    render(){
        console.log('mainScreen called')
        return(
            <View>
                <Header containerStyle={{backgroundColor:'white'}}></Header>
                <Button
                    type="clear"
                    onPress={this.onClick1.bind(this)}
                    title = "Location Search"
                />
                <Button
                    type="clear"
                    onPress={this.onClick2.bind(this)}
                    title = "Make Trip"
                />
                <Button
                    type="clear"
                    onPress={this.onClick3.bind(this)}
                    title = "My Trip List"
                />
                <Button
                    type="clear"
                    onPress={this.onClick4.bind(this)}
                    title = "Overlay"
                />


                <Button
                    type="clear"
                    onPress={this.logout.bind(this)}
                    title="Log out"
                />
            </View>
        )
    }
}