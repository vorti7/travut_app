import React from 'react';
import { View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

import { Header, Card, Badge, Text, Avatar, Image } from 'react-native-elements';

import { Icon } from 'react-native-eva-icons';
// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'

export default class TripofferScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }

    
    
    render(){
        console.log('tripofferScreen called')
        let screenHeight = Dimensions.get('window').height
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header
                    containerStyle={{backgroundColor:'#EBE8FA', height:'15%'}}
                    leftComponent={
                        <Icon
                            name='arrow-back'
                            width={34}
                            height={34}
                            fill='#000'
                        />
                    }
                    centerComponent={
                        <View style={{backgroundColor:'#FFF', borderRadius:20, paddingBottom:3, paddingTop:3, paddingLeft:18, paddingRight:18}}>
                            <Text style={{color:'#16C1A0', fontWeight:'bold'}}>
                                Offer Accepted
                            </Text>
                        </View>
                    }
                    rightComponent={
                        <Icon
                            name='star'
                            width={25}
                            height={25}
                            fill='#000'
                        />
                    }
                />
                <ScrollView style={{width:'100%'}}>
                    <View style={{width:'100%', height:screenHeight * 11/10, backgroundColor:'#EBE8FA'}}>
                        <View style={{width:'100%', height:'20%', paddingLeft:'5%', paddingRight:'5%', paddingBottom:'2%', flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: this.props.providerImage
                                    }}
                                    style={{width:'100%', height:'100%'}}
                                />
                                {/* <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 40
                                        // backgroundColor: '#4535AA'
                                    }}
                                    source={{uri:this.props.providerImage}}
                                /> */}
                            </View>
                            <View style={{flex:2, flexDirection:'column', paddingLeft:10}}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <View style={{flex:3, flexDirection:'column'}}>
                                        <Text style={{color:'#4535AA', fontSize:15}}>House Host</Text>
                                        <Text style={{color:'#4535AA', fontSize:20, fontWeight:'bold'}}>{this.props.providerName}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Icon
                                            name='home'
                                            width={25}
                                            height={25}
                                            fill='#4535AA'
                                        />
                                    </View>
                                </View>
                                <View style={{flex:1, flexDirection:'column'}}>
                                    <Text style={{color:'#4535AA', fontSize:15}}>- Englisth, Korean, Japanese</Text>
                                    <Text style={{color:'#4535AA', fontSize:15}}>- Lives in Seoul (for 10 years)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:'100%', height:'15%', paddingLeft:'5%', paddingRight:'5%'}}>
                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', padding:'2%'}}>
                                <Text>{this.props.greeting}</Text>
                            </View>
                        </View>
                        <View style={{width:'100%', height:'15%', flexDirection:'column', paddingLeft:'7%', paddingRight:'7%', paddingTop:'3%', paddingBottom:'3%'}}>
                            <View style={{flex:1, alignItems:'center', flexDirection: 'row'}}>
                                <Icon
                                    name='calendar-outline'
                                    width={25}
                                    height={25}
                                    fill='#4535AA'
                                />
                                <Text>{this.props.dateData}</Text>
                            </View>
                            <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
                                <Icon
                                    name='people-outline'
                                    width={25}
                                    height={25}
                                    fill='#4535AA'
                                />
                                <Text>{this.props.companion}</Text>
                            </View>
                        </View>
                        <View style={{width:'100%', height:'25%', paddingLeft:'5%', paddingRight:'5%', flexDirection:'column'}}>
                            <View style={{paddingBottom:3, borderBottomWidth:0.5}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Offer</Text>
                            </View>
                            <View style={{flex:2, justifyContent:'flex-start', paddingTop:3}}>
                                <Text style={{color:'#4535AA'}}>●</Text>
                                <Text style={{color:'#4535AA'}}>●</Text>
                            </View>
                            <View style={{flex:1, borderRadius:10, backgroundColor:'#4535AA', flexDirection:'row'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'flex-start', paddingLeft:'5%'}}>
                                    <Text style={{fontSize:10, color:'#FFF'}}>● Tax included</Text>
                                </View>
                                <View style={{flex:1, justifyContent:'center', alignItems:'flex-end',paddingRight:'5%'}}>
                                    <Text style={{fontSize:20, color:'#FFF'}}>Total<Text h4 h4Style={{color:'#FFF'}}>${this.props.price}</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:'100%', height:'25%', paddingLeft:'5%', paddingRight:'5%', paddingTop:'3%', paddingBottom:'3%'}}>
                            <View style={{paddingBottom:3, borderBottomWidth:0.5}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>Basic Support</Text>
                            </View>
                            <View style={{flex:2, justifyContent:'flex-start', paddingTop:3}}>
                                <View>
                                    <Icon
                                        name='checkmark-outline'
                                        width={15}
                                        height={15}
                                    />
                                    <Text style={{color:'#000'}}></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width:'100%', height:screenHeight}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{height:20, backgroundColor:'green'}}>

                            </View>
                            <View style={{height:50, backgroundColor:'red'}}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
