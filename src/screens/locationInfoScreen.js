import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Image, Input, Text } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class LocationinfoScreen extends React.Component{

    constructor(props) {
        super(props);
                
        timeInfo = new Date()

        this.state = {
        };
    }
    
    goProviderList(){
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_LIST)
    }
    
    render(){
        console.log('locationinfoScreen called')
        
        console.log(timeInfo.getDate())
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header containerStyle={{height:"10%", backgroundColor:"transparent"}}></Header>
                <View style={{height:"17%", width:"100%", flexDirection: 'row'}}>
                    <View style={{flex:1, paddingLeft:"5%", justifyContent: 'center'}}>
                        <Text h3>03/12 (Fri)</Text>
                        <Text h2>07:30 PM</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex:1, borderStyle:'solid', borderRightWidth:1.5}}>

                        </View>
                        <View style={{flex:1}}>

                        </View>
                    </View>
                </View>
                <View style={{height:"13%",
                    width:"90%",
                    backgroundColor:"green",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>This is Location Info</Text>
                </View>
                <View style={{height:"23%", justifyContent: 'center', backgroundColor:"yellow"}}>
                </View>

                <View style={{height:"17%", width:"80%", backgroundColor:'rgba(0, 0, 0, 0.5)', justifyContent: 'center'}}>
                </View>
                <View style={{height:"20%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                            onPress={this.goProviderList.bind(this)}>
                        <Image
                            style={{height:75,width:75}}
                            source={require('../assets/images/button/test_button.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}