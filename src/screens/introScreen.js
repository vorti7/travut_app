import React from 'react';
import { View, Image } from 'react-native';
import { Navigator, ScreenConst } from '../navigation'
import LinearGradient from 'react-native-linear-gradient'
import { Text } from 'react-native-elements'
import AuthClass from '../lib/auth'

export default class IntroScreen extends React.Component{

    outIntroScreen(){
        // Navigator.checkLoginChangePage(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME, ScreenConst.SCREEN_USER_LOGIN)
        Navigator.checkLoginChangePage(this.props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH, ScreenConst.SCREEN_USER_LOGIN)
    }


    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('introScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')

        // Navigation.mergeOptions(this.props.componentId, {
        //     topBar: { // disable topbar
        //         visible: false,
        //         drawBehind: true,
        //         animate: false,
        //     },
        // });
        
        // Next Screen after 3sec
        setTimeout(() => {this.outIntroScreen()}, 3000)
        // setTimeout(() => {Navigator.checkLoginChangePage(this.props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH, ScreenConst.SCREEN_USER_LOGIN)}, 3000)

        // Navigation.mergeOptions(this.props.componentId, {
        //     sideMenu: {
        //       left: {
        //         visible: false,
        //         enabled: false
        //       },
        //     },
        // });
        return(
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
                {/* <Image source={require('../assets/images/logo/test_logo.png')} /> */}
                <View
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                        width: 160,
                        height: 160,
                        borderRadius: 160/2,
                        backgroundColor: 'rgba(255,255,255,0.5)'
                    }}
                >
                    <Text h2 h2Style={{fontWeight:'bold', color:'#FFF'}}>TRV</Text>
                </View>
                <View style={{marginTop:30}}>
                    <Text h3 h3Style={{color:'#FFF'}}>  Loading...</Text>
                </View>
            </LinearGradient>
            // <View style={{flex: 1,
            //     flexDirection: 'column',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     backgroundColor: 'white',
            //     opacity: 1}}>
            //     <Image source={require('../assets/images/logo/test_logo.png')} />
            // </View>
        )
    }
}