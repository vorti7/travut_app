import React from 'react';
import { View, Image } from 'react-native';
import { Navigator, ScreenConst } from '../navigation'

export default class IntroScreen extends React.Component{

    render(){
        console.log('introScreen called')

        // Navigation.mergeOptions(this.props.componentId, {
        //     topBar: { // disable topbar
        //         visible: false,
        //         drawBehind: true,
        //         animate: false,
        //     },
        // });
        
        // Next Screen after 3sec
        setTimeout(() => {Navigator.checkLoginChangePage(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME, ScreenConst.SCREEN_USER_LOGIN)}, 3000)


        // Navigation.mergeOptions(this.props.componentId, {
        //     sideMenu: {
        //       left: {
        //         visible: false,
        //         enabled: false
        //       },
        //     },
        // });
        return(
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                opacity: 1}}>
                <Image source={require('../assets/images/logo/test_logo.png')} />
            </View>
        )
    }
}