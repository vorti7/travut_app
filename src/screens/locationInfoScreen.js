import React from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Header, Image, Input, Text } from 'react-native-elements'

import { Icon } from 'react-native-eva-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class LocationinfoScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        };
    }

    componentDidMount(){
        this.timeChange()
    }
    
    timeChange(){
        this.setState({
            time: new Date()
        })
        setTimeout(() => {this.timeChange()}, 3000)
    }

    getDay(time){
        week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        return week[time.getDay()]
    }

    getMonth(time){
        month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        return month[time.getMonth()]
    }

    getWeather(){
        weather = this.props.weather
        if(weather=='sunny'){
            return (
                <View>
                    <Icon name='sun' width={40} height={40} fill='#FFF'/>
                </View>
            )
        }else if(weather=='cloudy'){
            return (
                <View>
                    <Icon name='close' width={40} height={40} fill='#FFF'/>
                </View>
            )
        }else if(weather=='rainy'){
            return (
                <View>
                    <Icon name='umbrella' width={40} height={40} fill='#FFF'/>
                </View>
            )
        }else if(weather=='snowy'){
            return (
                <View>
                    <Icon name='close' width={40} height={40} fill='#FFF'/>
                </View>
            )
        }else if(weather=='night'){
            return (
                <View>
                    <Icon name='moon' width={40} height={40} fill='#FFF'/>
                </View>
            )
        }
    }

    goProviderList(){
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_LIST)
    }
    
    render(){
        console.log('locationinfoScreen called')
        return(
            <ImageBackground style={{flex:1, alignItems: 'center'}} source={{uri:this.props.backgroundImage}}>
                <Header
                    containerStyle={{height:"10%", marginBottom:"5%", backgroundColor:"transparent", borderBottomColor:'transparent'}}
                    leftComponent={
                        <Icon
                            name='arrow-back'
                            width={24}
                            height={24}
                            fill='#FFF'
                        />
                    }
                    centerComponent={
                        <Text style={{fontSize:20, color:'#FFF'}}>{this.props.locationName}</Text>
                    }
                    rightComponent={
                        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                            <Icon
                                name= 'close'
                                width={24}
                                height={24}
                                fill='#FFF'
                            />
                            <Icon
                                name= 'search'
                                width={24}
                                height={24}
                                fill='#FFF'
                            />
                            <Icon
                                name= 'close'
                                width={24}
                                height={24}
                                fill='#FFF'
                            />
                        </View>
                    }
                />
                <View style={{height:"12%", width:"100%", flexDirection: 'row'}}>
                    <View style={{flex:1, paddingLeft:"5%", justifyContent: 'center'}}>
                        <Text h4 h4Style={{color:'#FFF'}}>{this.state.time.getMonth()+1}/{this.state.time.getDate()} ({this.getDay(this.state.time)})</Text>
                        <Text h2 h2Style={{color:'#FFF'}}>{this.state.time.getHours()}:{this.state.time.getMinutes()}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                        <View style={{flex:1, borderStyle:'solid', borderRightWidth:1.5,justifyContent:'center', alignItems:'center'}}>
                            {this.getWeather()}
                            <Text h3 h3Style={{color:'#FFF'}}>{this.props.weather}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text h3 h3Style={{color:'#FFF'}}>{this.props.temperature}</Text>
                            <Text style={{color:'#FFF'}}>{this.props.highestTemp}/{this.props.lowestTemp}</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:"10%",
                    width:"90%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize:15, color:'#FFF'}}>{this.props.description}</Text>
                </View>
                <View style={{height:"17%", width:"100%", alignItems: 'center'}}>
                    <Text style={{fontSize:20, color:'#FFF'}}>{this.getMonth(this.state.time)}</Text>
                    <View style={{width:"100%", margin:'3%', flexDirection:'row', alignItems: 'center'}}>
                        <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-back' width={30} height={50} fill='#FFF'/></View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>Popularity</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{this.props.popularity}</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>High/Low</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{this.props.highestTemp}/{this.props.lowestTemp}</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>Humidity</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{this.props.humidity}</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-forward' width={30} height={50} fill='#FFF'/></View>
                    </View>
                </View>

                <View style={{height:"10%", width:"100%", justifyContent:'center', alignItems:'center'}}>
                    <Icon
                        name='plus-circle-outline'
                        width={20}
                        height={20}
                        fill='#FFF'
                    />
                </View>

                <View style={{height:"14%", width:"80%", backgroundColor:'rgba(0, 0, 0, 0.5)', justifyContent: 'center', flexDirection:'row'}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='flash' width={25} height={25} fill='#FFF'/>
                        <Text style={{color:'#FFF', fontSize:15}}>{this.props.concent}</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='phone' width={25} height={25} fill='#FFF'/>
                        <Text style={{color:'#FFF', fontSize:15}}>{this.props.phoneCode}</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='credit-card' width={25} height={25} fill='#FFF'/>
                        <Text style={{color:'#FFF', fontSize:15}}>{this.props.currency}</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='clock' width={25} height={25} fill='#FFF'/>
                        <Text style={{color:'#FFF', fontSize:15}}>{this.props.timezone}</Text>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Icon name='message-square' width={25} height={25} fill='#FFF'/>
                        <Text style={{color:'#FFF', fontSize:15}}>{this.props.language}</Text>
                    </View>
                </View>
                <View style={{height:"27%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <TouchableOpacity
                            style={{justifyContent:'center', alignItems:'center'}}
                            onPress={this.goProviderList.bind(this)}>
                            <View
                                style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 90/2,
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
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
                                    backgroundColor: '#FFF'
                                }}
                            >
                                <Text style={{color:'#4535AA'}}>Make</Text>
                                <Text style={{color:'#4535AA'}}>Travel</Text>
                            </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                            onPress={this.goProviderList.bind(this)}>
                        <Image
                            style={{height:75,width:75}}
                            source={require('../assets/images/button/test_button.png')}
                        />
                    </TouchableOpacity> */}
                </View>
            </ImageBackground>
        )
    }
}