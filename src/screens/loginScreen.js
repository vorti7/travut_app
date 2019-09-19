import React, { useState } from 'react';
import {View, Alert, KeyboardAvoidingView} from 'react-native';
import { Text } from 'react-native-elements'
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import LinearGradient from 'react-native-linear-gradient'

import { TvlrFormComponent } from '../components'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

import { Button, Overlay } from 'react-native-elements'

export default function LoginScreen(props){
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('Login Screen called')
    console.log('------------------------------------------------------------------------------------------------------------')
    const [ overlayHeight, setOverlayHeight ] = useState('80%')
    const [ isVisible, setIsVisible ] = useState(false)
    const [ overlayTrigger, setOverlayTrigger ] = useState(false)
    const [ signupSuccessOverlay, setSignupSuccessOverlay ] = useState(false)

    const goMainScreen = () => {
        // Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME)
        AuthClass.getTravelerInfo().then(userInfo => {
            console.log(userInfo)
            passProps={
                userID: userInfo.username,
                userSORTKEY: "traveler_"+userInfo.attributes['custom:regDate2'],
                userNickName: userInfo.attributes.name
              }
            // Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME, passProps)
            Navigator.setRootScreen(props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH, passProps)
        })
        // this.setState({ isVisible: false })
    }

    const overlayLogin = () => {
        // this.setState({overlayTrigger: true, signupSuccessOverlay:false})
        // this.setState({overlayHeight: "50%"})
        // console.log(this.state.overlayHeight)
        setOverlayTrigger(true)
        setSignupSuccessOverlay(false)
        setOverlayHeight('50%')
    }

    const overlaySignup = () => {
        // this.setState({overlayTrigger: false, signupSuccessOverlay:false})
        // this.setState({overlayHeight: "80%"})
        // console.log(this.state.overlayHeight)
        setOverlayTrigger(false)
        setSignupSuccessOverlay(false)
        setOverlayHeight('80%')
    }
    
    const overlayShow = () => {
        // this.setState({ isVisible: true });
        setIsVisible(true)
        overlayLogin();
    }

    const signupSuccessTrigger = () => {
        // this.setState({
        //     signupSuccessOverlay : !this.state.signupSuccessOverlay
        // })
        setSignupSuccessOverlay(!signupSuccessOverlay)
    }

    const overlayOff = () => {
        // this.setState({
        //     isVisible: false,
        //     signupSuccessOverlay: false
        // })
        setIsVisible(false)
        setSignupSuccessOverlay(false)
    }

    return(
        <LinearGradient
            colors={['#B6D1F5', '#4535AA']}
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1
            }}
        >
            <Overlay
                borderRadius={10}
                isVisible={isVisible}
                onBackdropPress={() => overlayOff()}
                windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                overlayBackgroundColor="white"
                // width="80%"
                // width={this.state.overlayWidth}
                // height={this.state.overlayHeight}
                height='auto'
            >
                {signupSuccessOverlay ? 
                    <View style={{flexDirection:'column'}}>
                        <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

                        </View>
                        <View style={{width:'100%', padding:'5%', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#4535AA', fontSize:22, fontWeight:'bold'}}>Thank you for registration.</Text>
                        </View>
                        <View style={{width:'100%', padding:'5%', justifyContent:'center', alignItems:'center'}}>
                            <Button
                                onPress={() => overlayLogin()}
                                title="Start"
                                containerStyle={{width:'80%'}}
                                buttonStyle={{backgroundColor:'#4535AA', borderRadius:20}}
                                titleStyle={{fontSize:22}}
                            />
                        </View>
                    </View> :
                    <KeyboardAwareScrollView>
                        <TvlrFormComponent
                            overlayTrigger={overlayTrigger}
                            overlayLogin={() => overlayLogin()}
                            overlaySignup={() => overlaySignup()}
                            goMainScreen={() => goMainScreen()}
                            signupSuccess={() => signupSuccessTrigger()}>
                        </TvlrFormComponent>
                    </KeyboardAwareScrollView>
                }
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
                    onPress={() => overlayShow()}
                    title="Email"
                    titleStyle={{color:'#4535AA', fontSize:25}}
                />
            </View>
        </LinearGradient>
    )    
}

// export default class LoginScreen extends React.Component{

//     constructor(props) {
//         super(props);

//         this.state = {
//             isVisible : false,
//             overlayTrigger : true,
//             signupSuccessOverlay : false,

//             overlayHeight : "80%",
//             overlayWidth : "80%",

//             // loginEmailState : '',
//             // loginPasswordState : '',


//             // emailState : '',
//             // passwordState : '',
//             // passwordCheckState: '',
//             // nameState:'',
  
//             // firstName:'',
//             // lastName:'',
  
//             // nickName: '',
//             // gender: '',
//             // birthday: '',
//             // photoURL: '',
//             // phone: '',
//             // languages: '',
//         };
//     }

    

//     goMainScreen() {
//         // Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME)
//         AuthClass.getTravelerInfo().then(userInfo => {
//             console.log(userInfo)
//             passProps={
//                 userID: userInfo.username,
//                 userSORTKEY: "traveler_"+userInfo.attributes['custom:regDate2'],
//                 userNickName: userInfo.attributes.name
//               }
//             // Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME, passProps)
//             Navigator.setRootScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH, passProps)
//         })
//         // this.setState({ isVisible: false })
//     }

//     overlayLogin() {
//         this.setState({overlayTrigger: true, signupSuccessOverlay:false})
//         this.setState({overlayHeight: "50%"})
//         console.log(this.state.overlayHeight)
//     }

//     overlaySignup() {
//         this.setState({overlayTrigger: false, signupSuccessOverlay:false})
//         this.setState({overlayHeight: "80%"})
//         console.log(this.state.overlayHeight)
//     }
    
//     overlayShow() {
//         this.setState({ isVisible: true });
//         this.overlayLogin();
//     }

//     signupSuccessTrigger(){
//         this.setState({
//             signupSuccessOverlay : !this.state.signupSuccessOverlay
//         })
//     }

//     overlayOff(){
//         this.setState({
//             isVisible: false,
//             signupSuccessOverlay: false
//         })
//     }


//     render(){
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('loginScreen called')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         return(
//             // <View style={{flex: 1}}>
//             <LinearGradient
//                 colors={['#B6D1F5', '#4535AA']}
//                 style={{
//                     flex: 1,
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     // backgroundColor: 'white',
//                     opacity: 1
//                 }}
//             >
//                 <Overlay
//                     borderRadius={10}
//                     isVisible={this.state.isVisible}
//                     onBackdropPress={this.overlayOff.bind(this)}
//                     windowBackgroundColor="rgba(0, 0, 0, 0.5)"
//                     overlayBackgroundColor="white"
//                     width={this.state.overlayWidth}
//                     // height={this.state.overlayHeight}
//                     height='auto'
//                 >
//                     {this.state.signupSuccessOverlay ? 
//                         <View style={{flexDirection:'column'}}>
//                             <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>

//                             </View>
//                             <View style={{width:'100%', padding:'5%', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#4535AA', fontSize:22, fontWeight:'bold'}}>Thank you for registration.</Text>
//                             </View>
//                             <View style={{width:'100%', padding:'5%', justifyContent:'center', alignItems:'center'}}>
//                                 <Button
//                                     onPress={this.overlayLogin.bind(this)}
//                                     title="Start"
//                                     containerStyle={{width:'80%'}}
//                                     buttonStyle={{backgroundColor:'#4535AA', borderRadius:20}}
//                                     titleStyle={{fontSize:22}}
//                                 />
//                             </View>
//                         </View> :
//                         <KeyboardAwareScrollView>
//                             <TvlrFormComponent
//                                 overlayTrigger={this.state.overlayTrigger}
//                                 overlayLogin={this.overlayLogin.bind(this)}
//                                 overlaySignup={this.overlaySignup.bind(this)}
//                                 goMainScreen={this.goMainScreen.bind(this)}
//                                 signupSuccess={this.signupSuccessTrigger.bind(this)}>
//                             </TvlrFormComponent>
//                         </KeyboardAwareScrollView>
//                     }
//                 </Overlay>
//                 <View
//                     style={{
//                         justifyContent:'center',
//                         alignItems:'center',
//                         width: 140,
//                         height: 140,
//                         borderRadius: 140/2,
//                         borderWidth: 1,
//                         borderColor: '#FFF'
//                     }}
//                 >
//                     <Text h3 h3Style={{fontWeight:'bold', color:'#FFF'}}>TRV</Text>
//                 </View>
//                 <View style={{height:'10%'}}></View>
//                 <View style={{width:"70%"}}>
//                     <Button
//                         type='solid'
//                         buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
//                         containerStyle={{margin:'3%'}}
//                         title="Google"
//                         titleStyle={{color:'#4535AA', fontSize:25}}
//                     />
//                     <Button
//                         type='solid'
//                         buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
//                         containerStyle={{margin:'3%'}}
//                         title="Facebook"
//                         titleStyle={{color:'#4535AA', fontSize:25}}
//                     />
//                     <View style={{height:'2%'}}></View>
//                     <View style={{borderColor:'#FFF', borderWidth:1}}></View>
//                     <View style={{height:'2%'}}></View>
//                     <Button
//                         type='solid'
//                         buttonStyle={{backgroundColor:'#FFF', borderRadius:10}}
//                         containerStyle={{margin:'3%'}}
//                         onPress={this.overlayShow.bind(this)}
//                         title="Email"
//                         titleStyle={{color:'#4535AA', fontSize:25}}
//                     />
//                 </View>
//             </LinearGradient>
//             // </View>
//         )
//     }
// }