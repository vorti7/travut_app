import React from 'react';
import {View, Alert, Text} from 'react-native';
import { Input, Button } from 'react-native-elements'
import AuthClass from '../../lib/auth'
import {Navigator, ScreenConst} from '../../navigation'

export default class LoginoverlayScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            emailState : '',
            passwordState : ''
        };
    }

    loginClicked(){
        console.log('Login button clicked')
        AuthClass.loginTraveler(this.state.emailState, this.state.passwordState)
            .then(success => {
                Alert.alert(success)
                Navigator.dismissOverlay("loginOverlay")
                // Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME)
            })
            .catch(err => Alert.alert(err))
    }
    signupClicked(){
        console.log('Sign up button clicked')
        Navigator.setRootScreen("loadingOverlay", ScreenConst.SCREEN_USER_SIGNUP)
    }

    render(){
        console.log('Login Overlay Component called')
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <View style={{
                    backgroundColor: 'white',
                    width:'80%',
                    height:'80%'
                }}>

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
                            onPress={this.loginClicked.bind(this)}
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

