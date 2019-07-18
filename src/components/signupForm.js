import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { View } from 'react-native';
import { Input, Button } from 'react-native-elements'

export default class SignupFormComponent extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          emailState : '',
          passwordState : '',
          passwordCheckState: '',
          nameState:'',

          firstName:'',
          lastName:'',

          nickName: '',
          gender: '',
          birthday: '',
          photoURL: '',
          phone: '',
          languages: '',
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
            <ScrollView>
                <Text h1>Signup Page</Text>
                <View style={{width:"80%", bottom:"3%"}}>
                    <Input
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        textContentType='emailAddress'
                        onChangeText={(email) => this.setState({emailState: email})}/>
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({passwordState: password})}/>
                    <Input
                        placeholder="Password again"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(passwordchk) => this.setState({passwordCheckState:passwordchk})}/>
                    <Input
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(name) => this.setState({nameState: name})}/>
                </View>

                <View style={{width:"80%", bottom:"3%"}}>
                    <Input
                        placeholder="firstName"
                        underlineColorAndroid='transparent'
                        onChangeText={(firstName) => this.setState({nameState: firstName})}/>
                    <Input
                        placeholder="lastName"
                        underlineColorAndroid='transparent'
                        onChangeText={(lastName) => this.setState({nameState: lastName})}/>
                </View>

                <View style={{width:"80%", bottom:"3%"}}>
                    <Input
                        placeholder="nickName"
                        underlineColorAndroid='transparent'
                        onChangeText={(nickName) => this.setState({nameState: nickName})}/>
                    <Input
                        placeholder="gender"
                        underlineColorAndroid='transparent'
                        onChangeText={(gender) => this.setState({nameState: gender})}/>
                    <Input
                        placeholder="birthday"
                        underlineColorAndroid='transparent'
                        onChangeText={(birthday) => this.setState({nameState: birthday})}/>
                    <Input
                        placeholder="photoURL"
                        underlineColorAndroid='transparent'
                        onChangeText={(photoURL) => this.setState({nameState: photoURL})}/>
                    <Input
                        placeholder="phone"
                        underlineColorAndroid='transparent'
                        onChangeText={(phone) => this.setState({nameState: phone})}/>
                    <Input
                        placeholder="languages"
                        underlineColorAndroid='transparent'
                        onChangeText={(language) => this.setState({nameState: language})}/>
                </View>

                <Button
                    onPress={this.signupClicked.bind(this)}
                    title="Sign up"
                />
            </ScrollView>
        )
    }

    
}
