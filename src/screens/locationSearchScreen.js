import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Image, Input, Text } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class LocationsearchScreen extends React.Component{

    componentDidMount(){
        
    }

    constructor(props) {
        super(props);

        this.state = {
            idString:'Abigail'
        };
    }

    goLocationInfo(){
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_INFO)
    }
    
    render(){
        console.log('locationsearchScreen called')
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header containerStyle={{height:"10%", backgroundColor:"transparent"}}></Header>
                <View style={{height:"17%"}}>
                    <Text h3>Hello, {this.state.idString} !</Text>
                    <Text h4>Where do you want to go?</Text>
                </View>
                <View style={{height:"13%",
                    width:"76%",
                    // justifyContent: 'center'
                }}>
                    <Input
                        textAlign={'center'}
                        placeholder='Search for a location'
                    />
                </View>
                <View style={{height:"40%", justifyContent: 'center'}}>
                    <ScrollView horizontal={true}>
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                        <Image
                            source={require('../assets/images/logo/test_logo.png')}
                        />
                    </ScrollView>
                </View>
                <View style={{height:"20%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                            onPress={this.goLocationInfo.bind(this)}>
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