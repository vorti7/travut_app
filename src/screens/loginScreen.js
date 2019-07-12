import React from 'react';
import {View, Alert} from 'react-native';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { Input, Button } from 'react-native-elements'

export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          emailState : '',
          passwordState : ''
      };
    }
    
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
        console.log('loginScreen called')
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1,
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center'}}>
                    <View style={{width:"80%"}}>
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
                    </View>
                    <View style={{width:"50%", top:"3%"}}>
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
                </View>
            </View>
        )
    }
}