import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Header, Overlay, Text } from 'react-native-elements'
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'

import { Icon } from 'react-native-eva-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';

import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { Buttons } from '../components'

import { Container } from '../components'
import travutStyle from '../styles'

export default function LocationinfoScreen(props){
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('locationinfoScreen called')
    console.log('------------------------------------------------------------------------------------------------------------')

    useEffect(() => {
        setInterval( () => setCurrentTime(new Date()),10000)
    })

    const [ overlayTrigger, setOverlayTrigger ] = useState(false)
    const [ currentTime , setCurrentTime ] = useState(props.currentTime || new Date())

    console.log(currentTime)

    locationArr = props.locationName.split('/')
    cityName = locationArr[locationArr.length-1]
        
    const timeString = (number) => {
        if(number<10){
            return '0'+number
        }else{
            return number
        }
    }

    const getWeather = () => {
        weather = props.weather
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

    goProviderList = () => {
        passProps = {
            locationID: props.locationID
            // locationID: 'LO00701010'
        }
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_LIST, passProps)
    }

    const goTripRequestList = () => {
        AuthClass.getTravelerInfo()
        .then(userInfo => {
            passProps = {
                travelerID:userInfo.username
            }
            Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_MYTRIP_LIST, passProps)
        })
    }

    const goTripRequest = () => {
        passProps={
            locationID:props.locationID,
            // providerID:this.props.providerID
        }
        Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO, passProps)
    }

    return(
        <ImageBackground style={travutStyle.common.container.mainContainer} source={{uri:props.backgroundImage}}>
            <Overlay
                borderRadius={10}
                isVisible={overlayTrigger}
                onBackdropPress={() => setOverlayTrigger(false)}
                windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                overlayBackgroundColor="white"
                width='90%'
                height='90%'
            >
                {/* <View style={{flex:1}}>
                    <View style={{width:'100%', height:'15%', flexDirection:'row'}}>
                        <View style={{width:'65%', height:'100%', flexDirection:'column', alignItems:'flex-start'}}>
                            <View style={{height:'50%', flexDirection:'row', justifyContent:'center', padding:'5%'}}>
                                <Text style={{fontSize:25, fontWeight:'bold'}}>{cityName} </Text>
                                <Icon name='pin' width={25} height={25} fill='#000'/>
                            </View>
                            <View style={{height:'50%', justifyContent:'center', padding:'5%'}}>
                                <Text style={{fontSize:18}}>This is short description</Text>
                            </View>
                        </View>
                        <View style={{width:'35%', height:'100%', backgroundColor:'yellow'}}>

                        </View>
                    </View>
                    <View style={{width:'100%', height:'85%', padding:'5%'}}>
                        <Text style={{fontSize:15}}>
                            {'this is description. this is description. this is description. this is description.\n\nthis is description. this is description. this is description. this is description.this is description. this is description. this is description. this is description.this is description. this is description. this is description. this is description.'}
                        </Text>
                    </View>
                </View> */}
            </Overlay>
             
            <Container.header
                leftContainer = {
                    <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
                        <Buttons.BackBtn
                            componentId = {props.componentId}
                            buttonSize = {25}
                            buttonColor = {"#FFF"}
                        />
                    </View>
                }
                centerContainer = {
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:20, color:'#FFF'}}>{cityName}</Text>
                    </View>
                }
                rightContainer = {
                    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                        <Icon
                            name= 'close'
                            width={25}
                            height={25}
                            fill='#FFF'
                        />
                        <Icon
                            name= 'search'
                            width={25}
                            height={25}
                            fill='#FFF'
                        />
                        <Icon
                            name= 'close'
                            width={25}
                            height={25}
                            fill='#FFF'
                        />
                    </View>
                }
            />
            <View style={travutStyle.common.container.midBodyContainer}>

                <View style={{flex:3, flexDirection: 'row'}}>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        {/* <Text h4 h4Style={{color:'#FFF'}}>{this.timeString(this.state.time.getMonth()+1)}/{this.timeString(this.state.time.getDate())} ({this.getDay(this.state.time)})</Text>
                        <Text h2 h2Style={{color:'#FFF'}}>{this.timeString(this.state.time.getHours())}:{this.timeString(this.state.time.getMinutes())}</Text> */}
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <View style={{flex:1, borderColor:'#FFF', borderStyle:'dotted', borderRightWidth:1.5}}>
                            <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                                {getWeather()}
                            </View>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text h4 h4Style={{color:'#FFF'}}>{props.weather}</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                                <Text h4 h4Style={{color:'#FFF'}}><Text h2>{props.temperature}</Text>°C</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'#FFF', fontSize:20}}>{props.highestTemp}°C/{props.lowestTemp}°C</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={() => setOverlayTrigger(true)}>
                        <Text style={{fontSize:15, color:'#FFF'}}>{props.description}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:4}}>
                    <View style={{flex:1}}>
                        {/* <Text style={{fontSize:20, color:'#FFF'}}>{this.getMonth(this.state.time)}</Text> */}
                    </View>
                    <View style={{flex:2, flexDirection:'row', alignItems: 'center'}}>
                        <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-back' width={30} height={50} fill='#FFF'/></View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>Popularity</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.popularity}</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>High/Low</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.highestTemp}°C/{props.lowestTemp}°C</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF', fontSize:15}}>Humidity</Text>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.humidity}%</Text>
                        </View>
                        <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-forward' width={30} height={50} fill='#FFF'/></View>
                    </View>
                </View>

                <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                    <Icon
                        name='plus-circle-outline'
                        width={20}
                        height={20}
                        fill='#FFF'
                    />
                </View>

                <View style={{flex:4, paddingLeft:'5%', paddingRight:'5%'}}>
                    <View style={{flex:1, backgroundColor:'rgba(0, 0, 0, 0.5)', borderRadius:10, flexDirection:'row'}}>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='flash' width={25} height={25} fill='#FFF'/>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.concent}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='phone' width={25} height={25} fill='#FFF'/>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.phoneCode}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='credit-card' width={25} height={25} fill='#FFF'/>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.currency}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='clock' width={25} height={25} fill='#FFF'/>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.timezone}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Icon name='message-square' width={25} height={25} fill='#FFF'/>
                            <Text style={{color:'#FFF', fontSize:15}}>{props.language}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex:6, flexDirection:'row'}}>
                    <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                        <TouchableOpacity onPress={() => goProviderList()}>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width: 60,
                                height: 60,
                                borderTopLeftRadius:30,
                                borderTopRightRadius:30,
                                backgroundColor:'#000000'
                            }}>
                                <Text>Count</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity
                            style={{flex:1, justifyContent:'center', alignItems:'center'}}
                            onPress={() => goTripRequest()}
                        >
                            <View
                                style={{
                                    position:'absolute',
                                    width: 90,
                                    height: 90,
                                    borderRadius: 90/2,
                                    backgroundColor: '#AEA9C9'
                                }}
                            />
                            <View
                                style={{
                                    position:'absolute',
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
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                        <TouchableOpacity onPress={() => goTripRequestList()}>
                            <View style={{
                                justifyContent:'center',
                                alignItems:'center',
                                width: 60,
                                height: 60,
                                borderTopLeftRadius:30,
                                borderTopRightRadius:30,
                                backgroundColor:'#000000'
                            }}>
                                <Icon name='paper-plane' width={40} height={40} fill='#FFF'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ImageBackground>
    )
}

// class LocationinfoScreen extends React.Component{

//     constructor(props) {
//         super(props);

//         this.state = {
//             time: new Date(),
//             descriptionOverlay: false
//         };
//     }

//     componentDidMount(){
//         this.timeChange()
//     }
    
//     timeChange(){
//         this.setState({
//             time: new Date()
//         })
//         setTimeout(() => {this.timeChange()}, 3000)
//     }

//     getDay(time){
//         week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//         return week[time.getDay()]
//     }

//     getMonth(time){
//         month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//         return month[time.getMonth()]
//     }

//     getWeather(){
//         weather = this.props.weather
//         if(weather=='sunny'){
//             return (
//                 <View>
//                     <Icon name='sun' width={40} height={40} fill='#FFF'/>
//                 </View>
//             )
//         }else if(weather=='cloudy'){
//             return (
//                 <View>
//                     <Icon name='close' width={40} height={40} fill='#FFF'/>
//                 </View>
//             )
//         }else if(weather=='rainy'){
//             return (
//                 <View>
//                     <Icon name='umbrella' width={40} height={40} fill='#FFF'/>
//                 </View>
//             )
//         }else if(weather=='snowy'){
//             return (
//                 <View>
//                     <Icon name='close' width={40} height={40} fill='#FFF'/>
//                 </View>
//             )
//         }else if(weather=='night'){
//             return (
//                 <View>
//                     <Icon name='moon' width={40} height={40} fill='#FFF'/>
//                 </View>
//             )
//         }
//     }

//     goProviderList(){
//         passProps = {
//             locationID: this.props.locationID
//             // locationID: 'LO00701010'
//         }
//         Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_LIST, passProps)
//     }

//     goTripRequestList(){
//         AuthClass.getTravelerInfo()
//         .then(userInfo => {
//             passProps = {
//                 travelerID:userInfo.username
//             }
//             Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MYTRIP_LIST, passProps)
//         })
//     }

//     goTripRequest(){
//         passProps={
//             locationID:this.props.locationID,
//             // providerID:this.props.providerID
//         }
//         Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO, passProps)
//     }

//     timeString(number){
//         if(number<10){
//             return '0'+number
//         }else{
//             return number
//         }
//     }

//     showDescription(){
//         this.setState({ descriptionOverlay: true })
//     }
    
//     render(){
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('locationinfoScreen called')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         locationArr = this.props.locationName.split('/')
//         cityName = locationArr[locationArr.length-1]
//         console.log(this.state.time.toDateString())
//         console.log(this.state.time.toTimeString())
//         return(
//             <ImageBackground style={{flex:1, alignItems: 'center'}} source={{uri:this.props.backgroundImage}}>
//                 <Overlay
//                     borderRadius={10}
//                     isVisible={this.state.descriptionOverlay}
//                     onBackdropPress={() => this.setState({ descriptionOverlay: false })}
//                     windowBackgroundColor="rgba(0, 0, 0, 0.5)"
//                     overlayBackgroundColor="white"
//                     width='90%'
//                     height='90%'
//                 >
//                     <View style={{flex:1}}>
//                         <View style={{width:'100%', height:'15%', flexDirection:'row'}}>
//                             <View style={{width:'65%', height:'100%', flexDirection:'column', alignItems:'flex-start'}}>
//                                 <View style={{height:'50%', flexDirection:'row', justifyContent:'center', padding:'5%'}}>
//                                     <Text style={{fontSize:25, fontWeight:'bold'}}>{cityName} </Text>
//                                     <Icon name='pin' width={25} height={25} fill='#000'/>
//                                 </View>
//                                 <View style={{height:'50%', justifyContent:'center', padding:'5%'}}>
//                                     <Text style={{fontSize:18}}>This is short description</Text>
//                                 </View>
//                             </View>
//                             <View style={{width:'35%', height:'100%', backgroundColor:'yellow'}}>

//                             </View>
//                         </View>
//                         <View style={{width:'100%', height:'85%', padding:'5%'}}>
//                             <Text style={{fontSize:15}}>
//                                 {'this is description. this is description. this is description. this is description.\n\nthis is description. this is description. this is description. this is description.this is description. this is description. this is description. this is description.this is description. this is description. this is description. this is description.'}
//                             </Text>
//                         </View>
//                     </View>
//                 </Overlay>
//                 <Header
//                     containerStyle={{height:"10%", marginBottom:"5%", backgroundColor:"transparent", borderBottomColor:'transparent'}}
//                     leftComponent={
//                         <Buttons.BackBtn
//                             componentId = {this.props.componentId}
//                             buttonSize = {24}
//                             buttonColor = {"#FFF"}
//                         />
//                     }
//                     centerComponent={
//                         <Text style={{fontSize:20, color:'#FFF'}}>{cityName}</Text>
//                     }
//                     rightComponent={
//                         <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
//                             <Icon
//                                 name= 'close'
//                                 width={24}
//                                 height={24}
//                                 fill='#FFF'
//                             />
//                             <Icon
//                                 name= 'search'
//                                 width={24}
//                                 height={24}
//                                 fill='#FFF'
//                             />
//                             <Icon
//                                 name= 'close'
//                                 width={24}
//                                 height={24}
//                                 fill='#FFF'
//                             />
//                         </View>
//                     }
//                 />
//                 <View style={{height:"12%", width:"100%", flexDirection: 'row'}}>
//                     <View style={{width:'50%', paddingLeft:"5%", justifyContent: 'center'}}>
//                         <Text h4 h4Style={{color:'#FFF'}}>{this.timeString(this.state.time.getMonth()+1)}/{this.timeString(this.state.time.getDate())} ({this.getDay(this.state.time)})</Text>
//                         <Text h2 h2Style={{color:'#FFF'}}>{this.timeString(this.state.time.getHours())}:{this.timeString(this.state.time.getMinutes())}</Text>
//                     </View>
//                     <View style={{width:'50%', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
//                         <View style={{flex:1, borderColor:'#FFF', borderStyle:'dotted', borderRightWidth:1.5,justifyContent:'center', alignItems:'center'}}>
//                             {this.getWeather()}
//                             <Text h4 h4Style={{color:'#FFF'}}>{this.props.weather}</Text>
//                         </View>
//                         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                             <Text h4 h4Style={{color:'#FFF'}}><Text h2>{this.props.temperature}</Text>°C</Text>
//                             <Text style={{color:'#FFF', fontSize:20}}>{this.props.highestTemp}°C/{this.props.lowestTemp}°C</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{height:"10%",
//                     width:"90%",
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}>
//                     <TouchableOpacity onPress={this.showDescription.bind(this)}>
//                         <Text style={{fontSize:15, color:'#FFF'}}>{this.props.description}</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{height:"17%", width:"100%", alignItems: 'center'}}>
//                     <Text style={{fontSize:20, color:'#FFF'}}>{this.getMonth(this.state.time)}</Text>
//                     <View style={{width:"100%", margin:'3%', flexDirection:'row', alignItems: 'center'}}>
//                         <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-back' width={30} height={50} fill='#FFF'/></View>
//                         <View style={{flex:1, alignItems: 'center'}}>
//                             <Text style={{color:'#FFF', fontSize:15}}>Popularity</Text>
//                             <Text style={{color:'#FFF', fontSize:15}}>{this.props.popularity}</Text>
//                         </View>
//                         <View style={{flex:1, alignItems: 'center'}}>
//                             <Text style={{color:'#FFF', fontSize:15}}>High/Low</Text>
//                             <Text style={{color:'#FFF', fontSize:15}}>{this.props.highestTemp}°C/{this.props.lowestTemp}°C</Text>
//                         </View>
//                         <View style={{flex:1, alignItems: 'center'}}>
//                             <Text style={{color:'#FFF', fontSize:15}}>Humidity</Text>
//                             <Text style={{color:'#FFF', fontSize:15}}>{this.props.humidity}%</Text>
//                         </View>
//                         <View style={{flex:1, alignItems: 'center'}}><Icon name='arrow-ios-forward' width={30} height={50} fill='#FFF'/></View>
//                     </View>
//                 </View>

//                 <View style={{height:"10%", width:"100%", justifyContent:'center', alignItems:'center'}}>
//                     <Icon
//                         name='plus-circle-outline'
//                         width={20}
//                         height={20}
//                         fill='#FFF'
//                     />
//                 </View>

//                 <View style={{height:"14%", width:"80%", backgroundColor:'rgba(0, 0, 0, 0.5)', justifyContent: 'center', flexDirection:'row'}}>
//                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='flash' width={25} height={25} fill='#FFF'/>
//                         <Text style={{color:'#FFF', fontSize:15}}>{this.props.concent}</Text>
//                     </View>
//                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='phone' width={25} height={25} fill='#FFF'/>
//                         <Text style={{color:'#FFF', fontSize:15}}>{this.props.phoneCode}</Text>
//                     </View>
//                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='credit-card' width={25} height={25} fill='#FFF'/>
//                         <Text style={{color:'#FFF', fontSize:15}}>{this.props.currency}</Text>
//                     </View>
//                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='clock' width={25} height={25} fill='#FFF'/>
//                         <Text style={{color:'#FFF', fontSize:15}}>{this.props.timezone}</Text>
//                     </View>
//                     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//                         <Icon name='message-square' width={25} height={25} fill='#FFF'/>
//                         <Text style={{color:'#FFF', fontSize:15}}>{this.props.language}</Text>
//                     </View>
//                 </View>
//                 <View style={{height:"27%",
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}>

//                     <TouchableOpacity
//                             style={{justifyContent:'center', alignItems:'center'}}
//                             onPress={this.goTripRequest.bind(this)}>
//                             <View
//                                 style={{
//                                     width: 90,
//                                     height: 90,
//                                     borderRadius: 90/2,
//                                     backgroundColor: 'rgba(255, 255, 255, 0.5)'
//                                 }}
//                             />
//                             <View
//                                 style={{
//                                     justifyContent:'center',
//                                     alignItems:'center',
//                                     position: 'absolute',
//                                     width: 65,
//                                     height: 65,
//                                     borderRadius: 65/2,
//                                     backgroundColor: '#FFF'
//                                 }}
//                             >
//                                 <Text style={{color:'#4535AA'}}>Make</Text>
//                                 <Text style={{color:'#4535AA'}}>Travel</Text>
//                             </View>
//                     </TouchableOpacity>
//                     {/* <TouchableOpacity
//                             onPress={this.goProviderList.bind(this)}>
//                         <Image
//                             style={{height:75,width:75}}
//                             source={require('../assets/images/button/test_button.png')}
//                         />
//                     </TouchableOpacity> */}
//                 </View>
//                 <View style={{position:'absolute', left:'10%' , bottom:0, opacity:0.8}}>
//                     <TouchableOpacity onPress={this.goProviderList.bind(this)}>
//                         <View style={{
//                             justifyContent:'center',
//                             alignItems:'center',
//                             width: 50,
//                             height: 50,
//                             borderRadius: 50/2,
//                             backgroundColor:'#4535AA'
//                         }}>
//                             <Text style={{color:'#FFF'}}>10</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{position:'absolute', right:'10%', bottom:0, opacity:0.5}}>
//                     <TouchableOpacity onPress={this.goTripRequestList.bind(this)}>
//                         <View style={{
//                             justifyContent:'center',
//                             alignItems:'center',
//                             width: 50,
//                             height: 50,
//                             borderTopLeftRadius:25,
//                             borderTopRightRadius:25,
//                             // borderRadius: 50/2,
//                             backgroundColor:'#000000'
//                         }}>
//                             <Icon name='paper-plane' width={40} height={40} fill='#FFF'/>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>
//         )
//     }
// }


// export default compose(
//     Api.Location.queries.getLocation()
// )(LocationinfoScreen)