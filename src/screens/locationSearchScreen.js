import React from 'react';
import { View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Header, Image, Input, Text, SearchBar } from 'react-native-elements'
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'

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
        passProps = {
            backgroundImage:'https://images.unsplash.com/photo-1533637322518-7aadda74ddc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=919&q=80',
            locationName: 'Seoul/South Korea',
            timezone: -8,
            weather: 'rainy',
            temperature: 31,
            description: 'This is Seoul',
            popularity: 977.6,
            lowestTemp: 25,
            highestTemp: 32,
            humidity: 71,
            concent: '220V',
            phoneCode: '82-2',
            currency: 'won',
            language:['Korean']
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_INFO, passProps)
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
                        <LocationItem locationName={'Seoul'} locationImage={'https://lh5.googleusercontent.com/p/AF1QipOcxqktNzkz-BMlCXE_KskkE3AXTL0zqtFEuRU=w462-h240-k-no'}/>
                        <LocationItem locationName={'Busan'} locationImage={'https://lh5.googleusercontent.com/p/AF1QipN33SroDbOFnVUpDw3KWI2KaQt5WxVlF_Owh7o9=w408-h270-k-no'}/>
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

const LocationItem = (props) => {
    return (
        <View style={{width:220, height:220, justifyContent:'center', alignItems:'center', marginLeft:10, marginRight:10}}>
            <Image
                style={{
                    width: 220,
                    height: 220,
                    borderRadius: 110
                    // backgroundColor: '#4535AA'
                }}
                source={{uri:props.locationImage}}
            />
            <Text h1 h1Style={{color:'#FFF'}} style={{position:'absolute'}}>{props.locationName}</Text>
        </View>
    )
}

// export default compose(
//         Api.TripRequest.queries.listTripRequests
//     )(LocationsearchScreen)
