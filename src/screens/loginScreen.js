import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

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
            <View>
                <View>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({emailState: email})}/>
                </View>
        
                <View>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({passwordState: password})}/>
                </View>
                <Button
                    onPress={this.loginButtonClicked.bind(this)}
                    title="Login"
                    color="#999999"
                />
                <Button
                    onPress={this.signupClicked.bind(this)}
                    title="Sign up"
                    color="#999999"
                />
            </View>
        )
    }
}