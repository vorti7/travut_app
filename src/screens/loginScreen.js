import React from 'react';
import {View, Alert, KeyboardAvoidingView} from 'react-native';
import { Text } from 'react-native-elements'
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import LinearGradient from 'react-native-linear-gradient'

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
        // this.setState({ isVisible: false })
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
            // <View style={{flex: 1}}>
            <LinearGradient
                colors={['#B6D1F5', '#4535AA']}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'white',
                    opacity: 1
                }}
            >
                <Overlay
                    borderRadius={10}
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                    overlayBackgroundColor="white"
                    width={this.state.overlayWidth}
                    // height={this.state.overlayHeight}
                    height='auto'
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
                <View
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                        width: 140,
                        height: 140,
                        borderRadius: 140/2,
                        borderWidth: 1,
                        borderColor: '#FFF'
                    }}
                >
                    <Text h3 h3Style={{fontWeight:'bold', color:'#FFF'}}>TRV</Text>
                </View>
                <View style={{height:'10%'}}></View>
                <View style={{width:"70%"}}>
                    <Button
                        type='solid'
                        buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
                        containerStyle={{margin:'3%'}}
                        title="Google"
                        titleStyle={{color:'#4535AA', fontSize:25}}
                    />
                    <Button
                        type='solid'
                        buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
                        containerStyle={{margin:'3%'}}
                        title="Facebook"
                        titleStyle={{color:'#4535AA', fontSize:25}}
                    />
                    <View style={{height:'2%'}}></View>
                    <View style={{borderColor:'#FFF', borderWidth:1}}></View>
                    <View style={{height:'2%'}}></View>
                    <Button
                        type='solid'
                        buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
                        containerStyle={{margin:'3%'}}
                        onPress={this.overlayShow.bind(this)}
                        title="Email"
                        titleStyle={{color:'#4535AA', fontSize:25}}
                    />
                </View>
            </LinearGradient>
            // </View>
        )
    }
}