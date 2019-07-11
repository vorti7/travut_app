import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class SignupScreen extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          emailState : '',
          passwordState : '',
          passwordCheckState: '',
          nameState:''
      };
    }
    signupClicked(){
        console.log('Sign up button clicked')
        if(this.state.passwordState != this.state.passwordCheckState){
            Alert.alert("Password does not match.")
        }else{
            console.log("Attempt Signup")
            const signupForm = {
                username: this.state.emailState,
                password: this.state.passwordState,
                attributes: {
                  name: this.state.nameState,
                }
            }
            
            AuthClass.signupTraveler(signupForm)
            .then(success => {
                Alert.alert(success)
                // AuthClass.loginTraveler
                Navigator.popScreen(this.props.componentId)
            })
            .catch(err => Alert.alert(err))

        }
    }
    
    render(){
        console.log('signupScreen called')
        return(
            <View>
                <Text>This is Second Screen.</Text>
                <View>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        textContentType='emailAddress'
                        onChangeText={(email) => this.setState({emailState: email})}/>
                </View>
                <View>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({passwordState: password})}/>
                </View>
                <View>
                    <TextInput
                        placeholder="Password again"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(passwordchk) => this.setState({passwordCheckState:passwordchk})}/>
                </View>
                <View>
                    <TextInput
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({nameState: name})}/>
                </View>
                <Button
                    onPress={this.signupClicked.bind(this)}
                    title="Sign up"
                    color="#999999"
                />
            </View>
        )
    }
}