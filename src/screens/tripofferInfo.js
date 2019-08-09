import React from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity, Switch } from 'react-native';

import { Header, Text, Avatar } from 'react-native-elements';

import { Icon } from 'react-native-eva-icons';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { Api } from '../lib/api'
import { compose } from 'react-apollo'

class TripofferScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    goChat(){
        AuthClass.getTravelerInfo().then(userInfo => {
            if(!this.props.data.loading){
                if(this.props.tripOffer.chatID){
                    console.log('chatID found')
                    passProps = {
                        tripOfferID : this.props.tripOffer.ID,
                        tripOfferSORTKEY : this.props.tripOffer.SORTKEY,
                        chatID: this.props.tripOffer.chatID
                    }
                    Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
                }else{
                    console.log('chatID not found')
                    passProps = {
                        tripOfferID : this.props.tripOffer.ID,
                        tripOfferSORTKEY : this.props.tripOffer.SORTKEY,
                        chatID: null
                    }
                    Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
                    // let chatCreateInput = {
                    //     "name" : "text",
                    //     "usersID": "sdfasdgs",
                    //     "regIP" : "127.0.0.1"
                    // }
                    // this.props.createChat({createchatinput:chatCreateInput}).then((e) => {
                    //     console.log('chat room created')
                    //     let tripOfferUpdateInput = {
                    //         "ID" : this.props.tripOffer.ID,
                    //         "SORTKEY" : this.props.tripOffer.SORTKEY,
                    //         "chatID" : e.data.createChat.ID
                    //     }
                    //     this.props.updateTripOffer({updatetripofferinput:tripOfferUpdateInput}).then(() => {
                    //         passProps = {
                    //             chatID: e.data.createChat.ID
                    //         }
                    //         Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
                    //     })
                    // })
                }
            }
            
        })
    }

    
    
    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('tripofferScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')

        // Trip Offer Content By TripOFferID
        // console.log(this.props.tripOffer)
        // Servie Offer List By TripOfferID
        // console.log(this.props.serviceOffers)

        let screenHeight = Dimensions.get('window').height
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header
                    containerStyle={{backgroundColor:'#EBE8FA', height:'12%'}}
                    leftComponent={
                        <Icon
                            name='arrow-back'
                            width={34}
                            height={34}
                            fill='#000'
                        />
                    }
                    centerComponent={
                        <View style={{backgroundColor:'#FFF', borderRadius:20, paddingBottom:5, paddingTop:5, paddingLeft:18, paddingRight:18}}>
                            <Text style={{color:'#16C1A0', fontWeight:'bold', fontSize:18}}>
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

                    {
                        this.props.serviceOffers.map((contact, i) => {
                            return(
                                <ServiceComponent key={i}></ServiceComponent>
                            )
                        })
                    }
                    {/* <View style={{height:screenHeight, alignItems:'center'}}>
                        <View style={{width:'90%', flexDirection:'column'}}>
                            <View style={{paddingTop:20, paddingBottom:5, flexDirection:'row'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Name</Text>
                                <View style={{flex:1}}></View>
                                <Switch

                                />
                            </View>
                            <View style={{minHeight:30, backgroundColor:'#EBE8FA', borderRadius:10}}>
                                <View>
                                    <View style={{minHeight:30, padding:10}}>

                                    </View>
                                    <View style={{height:30, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                        <Icon
                                            name='message-square-outline'
                                            width={18}
                                            height={18}
                                            fill='#4535AA'
                                        />
                                        <Text style={{color:'#4535AA', fontSize:13, borderBottomWidth:0.5}}>추가요청이 있으시면 여기를 눌러 코멘트를 남겨주세요.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View> */}
                    <View style={{height:screenHeight/5}}></View>
                </ScrollView>
                <View
                    style={{width:'100%', height:'12%', bottom : 0, paddingLeft:'5%', paddingRight:'5%', position:'absolute', flexDirection:'row', backgroundColor:"#FFF"}}
                >
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Icon
                            name='close-circle-outline'
                            width={40}
                            height={40}
                            fill='#4535AA'
                        />
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Icon
                            name='home'
                            width={40}
                            height={40}
                            fill='#4535AA'
                        />
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity onPress={this.goChat.bind(this)}>
                            <Icon
                                name='message-square-outline'
                                width={40}
                                height={40}
                                fill='#4535AA'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'90%', height:'60%', borderRadius:20, backgroundColor:'#4535AA', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Icon
                                name='checkmark-square-outline'
                                width={30}
                                height={30}
                                fill='#FFF'
                            />
                            <Text style={{color:'#FFF', fontSize:20, fontWeight:'bold'}}> ORDER</Text>
                        </View>
                    </View>

                    
                </View>
            </View>
        )
    }
}

class ServiceComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            switchState:false
        };
    }

    switchToggle(){
        this.setState({switchState:!this.state.switchState})
    }

    render(){
        return(
            <View style={{height:'auto', alignItems:'center'}}>
                <View style={{width:'90%', flexDirection:'column'}}>
                    <View style={{paddingTop:20, paddingBottom:5, flexDirection:'row'}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Name</Text>
                        <View style={{flex:1}}></View>
                        <Switch
                            onValueChange= {this.switchToggle.bind(this)}
                            value={this.state.switchState}
                        />
                    </View>
                    <View style={{minHeight:30, backgroundColor:'#EBE8FA', borderRadius:10}}>
                        <View>
                            <View style={{minHeight:30, padding:10}}>
                                <View style={{padding:10}}>
                                    <Text>This is Service Contents.</Text>
                                </View>
                                <View style={{backgroundColor:'#FFF', padding:10, flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                                        <Text>Price options</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                                        <Text>$ Test Price</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{height:30, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Icon
                                    name='message-square-outline'
                                    width={18}
                                    height={18}
                                    fill='#4535AA'
                                />
                                <Text style={{color:'#4535AA', fontSize:13, borderBottomWidth:0.5}}>추가요청이 있으시면 여기를 눌러 코멘트를 남겨주세요.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default compose(
    Api.TripOffer.queries.getTripOffer(),
    Api.TripOffer.mutations.updateTripOffer(),
    Api.ServiceOffer.queries.listServiceOffersByTripOfferID(),
    Api.Chat.mutations.createChat()
)(TripofferScreen)