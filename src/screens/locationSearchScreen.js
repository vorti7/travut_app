import React from 'react';
import { View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Header, Image, Input, Text, SearchBar } from 'react-native-elements'
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'

import Icon from 'react-native-vector-icons/MaterialIcons';

import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

class LocationsearchScreen extends React.Component{

    componentDidMount(){
    }

    constructor(props) {
        super(props);

        this.state = {
            idString:'Abigail',
            searchString: ''
        };
    }

    goLocationInfo(data){
        console.log(data)
        jsonData = JSON.parse(data.locationInfo)
        passProps = {
            // userID: this.props.userID,
            // userSORTKEY: this.props.userSORTKEY,
            locationID: data.ID,
            backgroundImage: jsonData.backgroundUrl,
            locationName: data.locationName,
            timezone: jsonData.timezone,
            weather: jsonData.weather,
            temperature: jsonData.temperature,
            description: jsonData.description,
            popularity: jsonData.popularity,
            lowestTemp: jsonData.lowestTemp,
            highestTemp: jsonData.highestTemp,
            humidity: jsonData.humidity,
            concent: jsonData.concent,
            phoneCode: jsonData.phonecode,
            currency: jsonData.currency,
            language: jsonData.language
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_INFO, passProps)
    }
    
    goTripRequest(){
        passProps={
            
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO, passProps)
    }

    goTempMain(){
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_INDEX_HOME, {})
    }

    goTripRequestList(){
        AuthClass.getTravelerInfo()
        .then(userInfo => {
            passProps = {
                travelerID:userInfo.username
            }
            Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MYTRIP_LIST, passProps)
        })
    }

    checkLogin(){
        console.log('Check TravelerData .....')
        if(!this.props.data.loading){
            if(this.props.traveler.length==0){
                console.log('need to create travelerData')
                let data = {
                    "ID" : this.props.userID,
                    "SORTKEY" : this.props.userSORTKEY,
                    // "email" : ,
                    "nickName" : this.props.userNickName,
                    "photoURL" : "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    "firstName" : this.props.userNickName,
                    "lastName" : this.props.userNickName,
                    "regIP" : "127.0.0.1"
                };
               this.props.createTraveler({input:data}).then((e) => {
                //    console.log(e);
                    console.log('TravelerData Created')
               })
            }else{
                console.log('travelerData already existed')
            }
        }
    }


    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('locationsearchScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')

        this.checkLogin()

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
                    <TouchableOpacity
                        onPress={this.goTempMain.bind(this)}
                    >
                    <Text h3>Hello, {this.props.userNickName} !</Text>
                    </TouchableOpacity>
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
                        onChangeText={(searchString) => this.setState({searchString: searchString})}
                    />
                </View>
                <View style={{height:"40%", justifyContent: 'center'}}>
                    <ScrollView horizontal={true}>
                        {this.props.locations.map((contact, i) => {
                            const locationArr = contact.locationName.split('/')
                            const locationName = locationArr[locationArr.length-1]
                            const locationUrl = JSON.parse(contact.locationInfo).badgeUrl
                            if(locationName.includes(this.state.searchString.toUpperCase())){
                                return (
                                    <TouchableOpacity onPress={this.goLocationInfo.bind(this, contact)} key={i}>
                                        <LocationItem locationName={locationName} locationImage={locationUrl}/>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                        {/* <LocationItem locationName={'Seoul'} locationImage={'https://lh5.googleusercontent.com/p/AF1QipOcxqktNzkz-BMlCXE_KskkE3AXTL0zqtFEuRU=w462-h240-k-no'}/>
                        <LocationItem locationName={'Busan'} locationImage={'https://lh5.googleusercontent.com/p/AF1QipN33SroDbOFnVUpDw3KWI2KaQt5WxVlF_Owh7o9=w408-h270-k-no'}/> */}
                    </ScrollView>
                </View>
                <View style={{height:"20%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                            style={{justifyContent:'center', alignItems:'center'}}
                            onPress={this.goTripRequest.bind(this)}>
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
                <View style={{position:'absolute', right:'10%', bottom:0, opacity:0.5}}>
                    <TouchableOpacity onPress={this.goTripRequestList.bind(this)}>
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center',
                            width: 50,
                            height: 50,
                            borderTopLeftRadius:25,
                            borderTopRightRadius:25,
                            // borderRadius: 50/2,
                            backgroundColor:'#000000'
                        }}>
                            {/* <Icon name='paper-plane' width={40} height={40} fill='#FFF'/> */}
                            <Icon
                                name='airplanemode-active'
                                size={40}
                                color='#FFF'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const LocationItem = (props) => {
    return (
        <View style={{width:220, height:220, justifyContent:'center', alignItems:'center', marginLeft:5, marginRight:5}}>
            <Image
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100
                    // backgroundColor: '#4535AA'
                }}
                source={{uri:props.locationImage}}
            />
            <Text h2 h2Style={{color:'#FFF'}} style={{position:'absolute'}}>{props.locationName}</Text>
        </View>
    )
}

export default compose(
    Api.Location.queries.listLocations(),
    Api.Traveler.queries.getTraveler(),
    Api.Traveler.mutations.createTraveler()
)(LocationsearchScreen)
