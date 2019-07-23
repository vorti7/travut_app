import React from 'react';
import {View, Alert, Text, KeyboardAvoidingView} from 'react-native';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { TvlrFormComponent } from '../components'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import { Button, Overlay } from 'react-native-elements'

export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isVisible : false,
            overlayTrigger : true,

            overlayHeight : "80%",
            overlayWidth : "80%",

            // loginEmailState : '',
            // loginPasswordState : '',


            // emailState : '',
            // passwordState : '',
            // passwordCheckState: '',
            // nameState:'',
  
            // firstName:'',
            // lastName:'',
  
            // nickName: '',
            // gender: '',
            // birthday: '',
            // photoURL: '',
            // phone: '',
            // languages: '',
        };
    }

    

    goMainScreen() {
        Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME)
    }

    overlayLogin() {
        this.setState({overlayTrigger: true})
        this.setState({overlayHeight: "50%"})
        console.log(this.state.overlayHeight)
    }

    overlaySignup() {
        this.setState({overlayTrigger: false})
        this.setState({overlayHeight: "80%"})
        console.log(this.state.overlayHeight)
    }
    
    overlayShow() {
        this.setState({ isVisible: true });
        this.overlayLogin();
    }

    render(){
        console.log('loginScreen called')
        return(
            <View style={{flex: 1}}>
                <Overlay
                    borderRadius={10}
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                    overlayBackgroundColor="white"
                    width={this.state.overlayWidth}
                    height={this.state.overlayHeight}
                >
                    <KeyboardAwareScrollView>
                        <TvlrFormComponent
                            overlayTrigger={this.state.overlayTrigger}
                            overlayLogin={this.overlayLogin.bind(this)}
                            overlaySignup={this.overlaySignup.bind(this)}
                            goMainScreen={this.goMainScreen.bind(this)}>
                        </TvlrFormComponent>
                    </KeyboardAwareScrollView>
                </Overlay>
                <View style={{flex: 1,
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center'}}>
                    <View>
                        
                        <View style={{width:"50%"}}>
                            <Button
                                onPress={this.overlayShow.bind(this)}
                                title="Email Login"
                            />
                            <Button
                                title="Google Login"
                            />
                            <Button
                                title="Facebook Login"
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}