import React from 'react';
import AuthClass from '../lib/auth'
import { Api } from '../lib/api'
import { Navigator, ScreenConst } from '../navigation'
import { compose } from 'react-apollo'

import { View, Alert } from 'react-native';
import { Input, Button, Text, CheckBox } from 'react-native-elements'
import { Icon } from 'react-native-eva-icons';

export default class TvlrFormComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            confirmCheck: false,

            loginEmailState : '',
            loginPasswordState : '',


            emailState : '',
            passwordState : '',
            passwordCheckState: '',
            nameState:'',
        }
    }

    loginButtonClicked(){
        console.log('Login button clicked')
        AuthClass.loginTraveler(this.state.loginEmailState, this.state.loginPasswordState)
            .then(success => {
                Alert.alert(success)
                this.props.goMainScreen()
            })
            .catch(err => Alert.alert(err))
    }
    goSignupClicked(){
        console.log('Go sign up button clicked')
        this.props.overlaySignup()
    }
    goLoginClicked(){
        console.log('Go log in button clicked')
        this.props.overlayLogin()
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
                // Navigator.popScreen(this.props.componentId)
                this.props.overlayLogin()
            })
            .catch(err => Alert.alert(err))

        }
    }

    signupClicked_us(){
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
            
            AuthClass.signupTraveler_us(signupForm)
            .then(success => {
                Alert.alert(success)
                // AuthClass.loginTraveler
                // Navigator.popScreen(this.props.componentId)
                this.props.overlayLogin()
            })
            .catch(err => Alert.alert(err))

        }
    }

    // addTraveler = () => {
    //     createInput = {

    //     }
    //     this.props.createTraveler({input:createInput})
    // }

    render(){
        if(this.props.overlayTrigger){
            return(
                <View style={{flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Input
                        leftIcon={
                            <Icon name='email' fill='#AEA9C9' width={30} height={30}/>
                        }
                        placeholder="Email"
                        keyboardType="email-address"
                        containerStyle={{width:'80%', borderRadius: 15, paddingTop:'1%', paddingBottom:'1%', marginTop:'2%', marginBottom:'2%', backgroundColor:'#EBE8FA'}}
                        inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                        onChangeText={(email) => this.setState({loginEmailState: email})}/>
                    <Input
                        leftIcon={
                            <Icon name='lock' fill='#AEA9C9' width={30} height={30}/>
                        }
                        placeholder="Password"
                        secureTextEntry={true}
                        containerStyle={{width:'80%', borderRadius: 15, paddingTop:'1%', paddingBottom:'1%', marginTop:'2%', marginBottom:'2%', backgroundColor:'#EBE8FA'}}
                        inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                        onChangeText={(password) => this.setState({loginPasswordState: password})}/>
                    <Button
                        onPress={this.loginButtonClicked.bind(this)}
                        title="Login"
                        containerStyle={{width:'80%', marginTop:'2%', marginBottom:'2%'}}
                        buttonStyle={{backgroundColor:'#4535AA', borderRadius:20}}
                        titleStyle={{fontSize:22}}
                    />
                    <Button
                        onPress={this.goSignupClicked.bind(this)}
                        title="Sign up"
                        containerStyle={{width:'80%', marginTop:'2%', marginBottom:'2%'}}
                        buttonStyle={{backgroundColor:'#4535AA', borderRadius:20}}
                        titleStyle={{fontSize:22}}
                    />
                    <View>
                        <Text style={{color:'#707070', borderBottomWidth:1}}>FORGOT PASSWORD</Text>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{width:"80%"}}>
                        <View style={{width:"100%", marginTop:'2%', marginBottom:'2%'}}>
                            <Text style={{color:'#4535AA'}}>FULL NAME</Text>
                            <Input
                                placeholder="Enter your full name"
                                containerStyle={{borderRadius: 10, paddingTop:'1%', paddingBottom:'1%', backgroundColor:'#EBE8FA'}}
                                inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                                onChangeText={(name) => this.setState({nameState: name})}/>
                        </View>
                        <View style={{width:"100%", marginTop:'2%', marginBottom:'2%'}}>
                            <Text style={{color:'#4535AA'}}>E-MAIL</Text>
                            <Input
                                placeholder="Enter your e-mail"
                                keyboardType="email-address"
                                containerStyle={{borderRadius: 10, paddingTop:'1%', paddingBottom:'1%', backgroundColor:'#EBE8FA'}}
                                inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                                textContentType='emailAddress'
                                onChangeText={(email) => this.setState({emailState: email})}/>
                        </View>
                        <View style={{width:"100%", marginTop:'2%', marginBottom:'2%'}}>
                            <Text style={{color:'#4535AA'}}>PASSWORD</Text>
                            <Input
                                placeholder="Create your password"
                                secureTextEntry={true}
                                containerStyle={{borderRadius: 10, paddingTop:'1%', paddingBottom:'1%', backgroundColor:'#EBE8FA'}}
                                inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                                onChangeText={(password) => this.setState({passwordState: password})}/>
                        </View>
                        <View style={{width:"100%",marginTop:'2%', marginBottom:'2%'}}>
                            <Text style={{color:'#4535AA'}}>CONFIRM PASSWORD</Text>
                            <Input
                                placeholder="Repeat your password"
                                secureTextEntry={true}
                                containerStyle={{borderRadius: 10, paddingTop:'1%', paddingBottom:'1%', backgroundColor:'#EBE8FA'}}
                                inputContainerStyle={{borderBottomWidth:0, backgroundColor:'transparent'}}
                                onChangeText={(passwordchk) => this.setState({passwordCheckState:passwordchk})}/>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <CheckBox checked={this.state.confirmCheck}
                                        //   containerStyle={{margin:0, backgroundColor:'green'}}
                                          title='Accept the Terms and Conditions.'
                                          onPress={() => this.setState({confirmCheck: !this.state.confirmCheck})}
                                          />
                                {/* <Text>Accept the Terms and Conditions.</Text> */}
                            </View>
                            
                            <Button
                                containerStyle={{width:'50%', height:'auto'}}
                                buttonStyle={{backgroundColor:'#4535AA', borderRadius:10}}
                                titleStyle={{fontSize:22}}
                                onPress={this.signupClicked.bind(this)}
                                title="Sign up"
                            />

                            <View style={{flexDirection:'row', marginTop:'3%', alignItems:'center'}}>
                                <Text style={{color:'#4535AA'}}>Already have an account?</Text>
                                <Button
                                    titleStyle={{fontSize:15, color:'#4535AA'}}
                                    onPress={this.goLoginClicked.bind(this)}
                                    buttonStyle={{borderColor:'#AEA9C9', borderRadius:10}}
                                    type="outline"
                                    title="LOGIN"
                                />
                            </View>
                        </View>
                        
                    </View>
                </View>
            )
        }
        
    }
}

// export default compose(
//     Api.Traveler.queries.listTravelers(),
//     Api.Traveler.mutations.createTraveler()
// )(TvlrFormComponent)