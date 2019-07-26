import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Image, Input, Text, SearchBar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialIcons';

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
                <Header containerStyle={{height:'5%', top : '3%', marginBottom:'8%', backgroundColor:"transparent"}}
                    rightComponent={
                        <Icon
                            name='filter-list'
                            size={24}
                            color='#4535AA'
                        />
                    }
                />
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
                        // leftIcon={
                        //     <Icon
                        //         name='arrow-forward-outline'
                        //         size={24}
                        //         color='#AEA9C9'
                        //     />
                        // }
                        rightIcon={
                            <Icon
                                name='search'
                                size={24}
                                color='#AEA9C9'
                            />
                        }
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
                            style={{justifyContent:'center', alignItems:'center'}}
                            onPress={this.goLocationInfo.bind(this)}>
                            <View
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 90/2,
                                    backgroundColor: '#AEA9C9'
                                }}
                            />
                            <View
                                style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    position: 'absolute',
                                    width: 65,
                                    height: 65,
                                    borderRadius: 65/2,
                                    backgroundColor: '#4535AA'
                                }}
                            >
                                <Text style={{color:'#FFF'}}>Make</Text>
                                <Text style={{color:'#FFF'}}>Travel</Text>
                            </View>
                        {/* <Image
                            style={{height:75,width:75}}
                            source={require('../assets/images/button/test_button.png')}
                        /> */}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}