import React from 'react';
import {View, Alert, Text} from 'react-native';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { TvlrFormComponent } from '../components'

import { Button, Overlay } from 'react-native-elements'

export default class LoginScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isVisible : false,
            // pageTrigger : true,

            loginEmailState : '',
            loginPasswordState : '',


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
    
    emailLoginClicked(){
        Navigator.showOverlay("loginOverlay",  ScreenConst.SCREEN_USER_EMAILLOGIN)
    }
    
    render(){
        console.log('loginScreen called')
        return(
            <View style={{flex: 1}}>
            
                <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                    overlayBackgroundColor="white"
                    width="80%"
                    height="80%"
                >
                    <TvlrFormComponent componentId={this.props.componentId}></TvlrFormComponent>
                </Overlay>

                <View style={{flex: 1,
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center'}}>
                    <View>
                        
                        <View style={{width:"50%"}}>
                            <Button
                                // onPress={this.emailLoginClicked.bind(this)}
                                onPress={() => this.setState({ isVisible: true })}
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