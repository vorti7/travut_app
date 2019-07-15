import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { View } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class LoginFormComponent extends React.Component{

    loginButtonClicked(){
        console.log('Login button clicked')
        AuthClass.loginTraveler(this.state.emailState, this.state.passwordState)
            .then(success => {
                Alert.alert(success)
                Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME)
            })
            .catch(err => Alert.alert(err))
    }
    signupClicked(){
        console.log('Sign up button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_USER_SIGNUP)
    }
    render(){
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({emailState: email})}/>
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({passwordState: password})}/>
                <Button
                    onPress={this.loginButtonClicked.bind(this)}
                    title="Login"
                    type="clear"
                />
                <Button
                    onPress={this.signupClicked.bind(this)}
                    title="Sign up"
                    type="clear"
                />
            </View>
        )
    }
}

