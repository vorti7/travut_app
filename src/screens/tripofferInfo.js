import React, { useState } from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity, Switch, FlatList } from 'react-native';

import { Header, Text, Avatar } from 'react-native-elements';

import { Icon } from 'react-native-eva-icons';
import AuthClass from '../lib/auth'
import { Navigator, ScreenConst } from '../navigation'
import { Api } from '../lib/api'
import { compose } from 'react-apollo'
import { ServiceItemComponent, Buttons } from '../components'

import { Container } from '../components'
import travutStyle from '../styles'

export default function TripofferScreen(props){
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('tripofferScreen called')
    console.log('------------------------------------------------------------------------------------------------------------')

    const [ totalPrice, setTotalPrice ] = useState(0)

    return (
        <View style={travutStyle.common.container.mainContainer}>
            <Container.header/>
            <View style={travutStyle.common.container.midBodyContainer}>
                {/* <FlatList/> */}
            </View>
        </View>
    )
}

// class TripofferScreen extends React.Component{

//     constructor(props) {
//         super(props);

//         this.state = {
//             allPrice:0,
//             serviceState:{

//             }
//         };
//     }
//     dataInitialize(){
//         if(!this.props.data.loading){
//             return [JSON.parse(this.props.tripOffer.tripRequest.tripReqInfo), JSON.parse(this.props.tripOffer.tripOfferInfo)]
//         }else{
//             return [{
//                 "travelType": [""],
//                 "timeInfo": [],
//                 "companion": [""],
//                 "companionInfo": [],
//                 "extra": [""]
//             },{
//                 "offerMessage":{
//                     "content":""
//                 },
//                 "basicSupport":{
//                     "content":""
//                 }
//             }]
//         }
//     }

//     initializeServiceState(){
//         let { serviceState } = this.state
//         if(this.props.data.loading && Object.keys(serviceState).length === 0 && this.props.serviceOffers.length !== 0){
//             for(i=0;i<this.props.serviceOffers.length;i++){
//                 if(serviceState[i]==null){
//                     serviceState[i] = true
//                 }
//             }
//             // console.log(serviceState)
//             this.setState({
//                 serviceState: serviceState
//             })
//             this.getPrice(serviceState)
//         }
//     }

//     serviceSwitch(key){
//         let { serviceState } = this.state
//         // console.log('key: ', key + " ", trigger)
//         serviceState[key] = !serviceState[key]
//         this.setState({
//             serviceState: serviceState
//         })
//         this.getPrice(serviceState)
//     }

//     getPrice(serviceState){
//         let result = 0
//         for(i=0;i<Object.keys(serviceState).length;i++){
//             if(serviceState[i]){
//                 addNum = JSON.parse(JSON.parse(this.props.serviceOffers[i].serviceOfferInfo))["priceAmount"]*1
//                 // console.log(addNum+'addedddddddddddddddddddddd')
//                 // console.log(JSON.parse(this.props.serviceOffers[i].serviceOfferInfo))
//                 result += addNum
//             }
//         }
//         this.setState({
//             allPrice: result
//         })
//     }

//     dateShow(timeInfo){
//         const result = ""
//         if(timeInfo.length==0){
//             return result
//         }
//         // sortedtimeInfo = timeInfo.sort()
//         // for(i=1;i<timeInfo.length;i++){
//         //     console.log(new Date(timeInfo[i])- new Date(timeInfo[i-1]))
//         // }
//         return timeInfo[0]+"~"+timeInfo[1]
//     }

//     goChat(){
//         AuthClass.getTravelerInfo().then(userInfo => {
//             if(!this.props.data.loading){
//                 if(this.props.tripOffer.chatID){
//                     console.log('chatID found')
//                     passProps = {
//                         tripOfferID : this.props.tripOffer.ID,
//                         tripOfferSORTKEY : this.props.tripOffer.SORTKEY,
//                         chatID: this.props.tripOffer.chatID
//                         // chatID: "12d9a5c1-4971-4033-8d45-ff354f5da8e4"
//                     }
//                     Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
//                 }else{
//                     console.log('chatID not found')
//                     passProps = {
//                         tripOfferID : this.props.tripOffer.ID,
//                         tripOfferSORTKEY : this.props.tripOffer.SORTKEY,
//                         chatID: null
//                     }
//                     Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
//                 }
//             }
            
//         })
//     }

//     showBottom(){
//         if(this.props.tripOffer.status=="Submitted"){
//             return(
//                 <View
//                     style={{width:'100%', height:'auto', bottom : 0, paddingLeft:'5%', paddingTop:'2%', paddingRight:'5%', position:'absolute', flexDirection:'column', backgroundColor:"#FFF"}}
//                 >
//                     <View style={{alignItems:'center', justifyContent:'center'}}>
//                         <Text style={{fontSize:15, color:'#4535AA'}}>
//                             If you accept the contact, you will be able to chat with the host and coordinate your services.
//                         </Text>
//                         <Text style={{fontSize:20, color:'#16C1A0'}}>
//                             Do you want to connect with the host?
//                         </Text>
//                     </View>
//                     <View style={{width:'100%', flexDirection:'row'}}>
//                         <View style={{width:'50%', padding:10}}>
//                             <TouchableOpacity onPress={()=>{
//                                 let tripOfferUpdateInput = {
//                                     "ID" : this.props.tripOfferID,
//                                     "SORTKEY" : this.props.tripOfferSORTKEY,
//                                     "status" : 'Skipped Offer'
//                                 }
//                                 this.props.updateTripOffer({input:tripOfferUpdateInput}).then((f) => {
//                                     console.log('tripOffer status changed.')
//                                     Navigator.popScreen(this.props.componentId)
//                                 })
//                             }}>
//                                 <View style={{width: '100%', height:'auto', borderWidth:1.5, borderRadius:20, alignItems:'center', borderColor:'#4535AA'}}>
//                                     <Text h4 h4Style={{color:'#4535AA'}}>SKIP</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{width:'50%', padding:10}}>
//                             <TouchableOpacity onPress={()=>{
//                                 let tripOfferUpdateInput = {
//                                     "ID" : this.props.tripOfferID,
//                                     "SORTKEY" : this.props.tripOfferSORTKEY,
//                                     "status" : 'Accepted'
//                                 }
//                                 this.props.updateTripOffer({input:tripOfferUpdateInput}).then((f) => {
//                                     console.log('tripOffer status changed.')
//                                 })
//                             }}>
//                                 <View style={{width: '100%', height:'auto', borderWidth:1.5, borderRadius:20, alignItems:'center', borderColor:'#4535AA'}}>
//                                         <Text h4 h4Style={{color:'#4535AA'}}>ACCEPT</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//             )
//         }else if(this.props.tripOffer.status=='Accepted'){
//             return(
//                 <View
//                     style={{width:'100%', height:'12%', bottom : 0, paddingLeft:'5%', paddingRight:'5%', position:'absolute', flexDirection:'row', backgroundColor:"#FFF"}}
//                 >
//                     <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                         <Icon
//                             name='close-circle-outline'
//                             width={40}
//                             height={40}
//                             fill='#4535AA'
//                         />
//                     </View>
//                     <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                         <Icon
//                             name='home'
//                             width={40}
//                             height={40}
//                             fill='#4535AA'
//                         />
//                     </View>
//                     <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                         <TouchableOpacity onPress={this.goChat.bind(this)}>
//                             <Icon
//                                 name='message-square-outline'
//                                 width={40}
//                                 height={40}
//                                 fill='#4535AA'
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
//                         <View style={{width:'90%', height:'60%', borderRadius:20, backgroundColor:'#4535AA', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
//                             <Icon
//                                 name='checkmark-square-outline'
//                                 width={30}
//                                 height={30}
//                                 fill='#FFF'
//                             />
//                             <Text style={{color:'#FFF', fontSize:20, fontWeight:'bold'}}> ORDER</Text>
//                         </View>
//                     </View>
//                 </View>
//             )
//         }
//     }

//     render(){
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('tripofferScreen called')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         var [requestData, tripOfferData] = this.dataInitialize()
//         this.initializeServiceState()
//         // console.log(this.state.serviceState)
//         // console.log(requestData)
//         // Trip Offer Content By TripOfferID
//         // console.log(this.props.tripOffer)
//         // Servie Offer List By TripOfferID
//         // console.log(this.props.serviceOffers)
//         // Trip Offer Status
//         console.log('Status : ', this.props.tripOffer.status)

//         let screenHeight = Dimensions.get('window').height
//         return(
//             <View style={{flex:1, alignItems: 'center'}}>
//                 <Header
//                     containerStyle={{backgroundColor:'#EBE8FA', height:'12%', paddingTop:0}}
//                     leftComponent={
//                         <Buttons.BackBtn
//                             componentId = {this.props.componentId}
//                             buttonSize = {34}
//                             buttonColor = {"#000"}
//                         />
//                     }
//                     centerComponent={
//                         <View style={{backgroundColor:'#FFF', borderRadius:20, paddingBottom:5, paddingTop:5, paddingLeft:18, paddingRight:18}}>
//                             <Text style={{color:'#16C1A0', fontWeight:'bold', fontSize:18}}>
//                                 {this.props.tripOffer.status}
//                             </Text>
//                         </View>
//                     }
//                     rightComponent={
//                         <Icon
//                             name='star'
//                             width={25}
//                             height={25}
//                             fill='#000'
//                         />
//                     }
//                 />
//                 <ScrollView style={{width:'100%'}}>
//                     <View style={{width:'100%', height:screenHeight * 11/10, backgroundColor:'#EBE8FA'}}>
//                         <View style={{width:'100%', height:'20%', paddingLeft:'5%', paddingRight:'5%', paddingBottom:'2%', flexDirection:'row'}}>
//                             <View style={{flex:1}}>
//                                 <Avatar
//                                     rounded
//                                     // source={{
//                                     //     uri: this.props.providerImage
//                                     // }}
//                                     source={require('../assets/images/test/profile_test00.png')}
//                                     style={{width:'100%', height:'100%'}}
//                                 />
//                             </View>
//                             <View style={{flex:2, flexDirection:'column', paddingLeft:10}}>
//                                 <View style={{flex:1, flexDirection:'row'}}>
//                                     <View style={{flex:3, flexDirection:'column'}}>
//                                         <Text style={{color:'#4535AA', fontSize:15}}>House Host</Text>
//                                         <Text style={{color:'#4535AA', fontSize:20, fontWeight:'bold'}}>{this.props.providerName}</Text>
//                                     </View>
//                                     <View style={{flex:1}}>
//                                         <Icon
//                                             name='home'
//                                             width={25}
//                                             height={25}
//                                             fill='#4535AA'
//                                         />
//                                     </View>
//                                 </View>
//                                 <View style={{flex:1, flexDirection:'column'}}>
//                                     <Text style={{color:'#4535AA', fontSize:15}}>- Englisth, Korean, Japanese</Text>
//                                     <Text style={{color:'#4535AA', fontSize:15}}>- Lives in Seoul (for 10 years)</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={{width:'100%', height:'15%', paddingLeft:'5%', paddingRight:'5%'}}>
//                             <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', padding:'2%'}}>
//                                 <Text>{tripOfferData.offerMessage.content}</Text>
//                             </View>
//                         </View>
//                         <View style={{width:'100%', height:'15%', flexDirection:'column', paddingLeft:'7%', paddingRight:'7%', paddingTop:'3%', paddingBottom:'3%'}}>
//                             <View style={{flex:1, alignItems:'center', flexDirection: 'row'}}>
//                                 <Icon
//                                     name='calendar-outline'
//                                     width={25}
//                                     height={25}
//                                     fill='#4535AA'
//                                 />
//                                 <Text>  {this.dateShow(requestData.timeInfo)}</Text>
//                             </View>
//                             <View style={{flex:1, alignItems:'center', flexDirection:'row'}}>
//                                 <Icon
//                                     name='people-outline'
//                                     width={25}
//                                     height={25}
//                                     fill='#4535AA'
//                                 />
//                                 <Text>  {requestData.companion}</Text>
//                             </View>
//                         </View>
//                         <View style={{width:'100%', height:'25%', paddingLeft:'5%', paddingRight:'5%', flexDirection:'column'}}>
//                             <View style={{paddingBottom:3, borderBottomWidth:0.5}}>
//                                 <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Offer</Text>
//                             </View>
//                             <View style={{flex:2, justifyContent:'flex-start', paddingTop:3}}>
//                                 <Text style={{color:'#4535AA'}}>●</Text>
//                                 <Text style={{color:'#4535AA'}}>●</Text>
//                             </View>
//                             <View style={{flex:1, borderRadius:10, backgroundColor:'#4535AA', flexDirection:'row'}}>
//                                 <View style={{flex:1, justifyContent:'center', alignItems:'flex-start', paddingLeft:'5%'}}>
//                                     <Text style={{fontSize:10, color:'#FFF'}}>● Tax included</Text>
//                                 </View>
//                                 <View style={{flex:1, justifyContent:'center', alignItems:'flex-end',paddingRight:'5%'}}>
//                                     <Text style={{fontSize:20, color:'#FFF'}}>Total<Text h4 h4Style={{color:'#FFF'}}>${this.state.allPrice}</Text></Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={{width:'100%', height:'25%', paddingLeft:'5%', paddingRight:'5%', paddingTop:'3%', paddingBottom:'3%'}}>
//                             <View style={{paddingBottom:3, borderBottomWidth:0.5}}>
//                                 <Text style={{fontSize:20, fontWeight:'bold', color:'#000'}}>Basic Support</Text>
//                             </View>
//                             <View style={{flex:2, justifyContent:'flex-start', paddingTop:3}}>
//                                 <View style={{flexDirection:"row"}}>
//                                     <Icon
//                                         name='checkmark-outline'
//                                         width={15}
//                                         height={15}
//                                     />
//                                     <Text style={{color:'#000'}}>{tripOfferData.basicSupport.content}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>

//                     {
//                         this.props.serviceOffers.map((contact, i) => {
//                             console.log(this.state.serviceState[i])
//                             return(
//                                 <ServiceItemComponent serviceSwitch={this.serviceSwitch.bind(this, i)} switchState={this.state.serviceState[i]} parentID={contact.ID+"#"+contact.SORTKEY} service={contact.serviceOfferInfo} key={i}></ServiceItemComponent>
//                             )
//                         })
//                     }
//                     <View style={{height:screenHeight/5}}></View>
//                 </ScrollView>
//                 {this.showBottom()}
//             </View>
//         )
//     }
// }

// // class ServiceComponent extends React.Component{
// //     constructor(props){
// //         super(props);

// //         this.state = {
// //             switchState:false
// //         };
// //     }

// //     switchToggle(){
// //         this.setState({switchState:!this.state.switchState})
// //     }

// //     render(){
// //         // console.log(this.props.service)
// //         serviceInfo = JSON.parse(JSON.parse(this.props.service.serviceOfferInfo))
// //         console.log(serviceInfo)
// //         return(
// //             <View style={{height:'auto', alignItems:'center'}}>
// //                 <View style={{width:'90%', flexDirection:'column'}}>
// //                     <View style={{paddingTop:20, paddingBottom:5, flexDirection:'row'}}>
// //                         <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Name</Text>
// //                         <View style={{flex:1}}></View>
// //                         <Switch
// //                             onValueChange= {this.switchToggle.bind(this)}
// //                             value={this.state.switchState}
// //                         />
// //                     </View>
// //                     <View style={{minHeight:30, backgroundColor:'#EBE8FA', borderRadius:10}}>
// //                         <View>
// //                             <View style={{minHeight:30, padding:10}}>
// //                                 <View style={{padding:10}}>
// //                                     <Text>{serviceInfo.content}</Text>
// //                                 </View>
// //                                 <View style={{backgroundColor:'#FFF', padding:10, flexDirection:'row'}}>
// //                                     <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
// //                                         <Text>{serviceInfo.priceDesc}</Text>
// //                                     </View>
// //                                     <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
// //                                         <Text>${serviceInfo.priceAmount}</Text>
// //                                     </View>
// //                                 </View>
// //                             </View>
// //                             <View style={{height:30, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
// //                                 <Icon
// //                                     name='message-square-outline'
// //                                     width={18}
// //                                     height={18}
// //                                     fill='#4535AA'
// //                                 />
// //                                 <Text style={{color:'#4535AA', fontSize:13, borderBottomWidth:0.5}}>추가요청이 있으시면 여기를 눌러 코멘트를 남겨주세요.</Text>
// //                             </View>
// //                         </View>
// //                     </View>
// //                 </View>
// //             </View>
// //         )
// //     }
// // }

// export default compose(
//     Api.TripOffer.queries.getTripOffer(),
//     Api.ServiceOffer.queries.listServiceOffersByTripOfferID(),
//     Api.TripOffer.mutations.updateTripOffer()
//     // Api.TripOffer.mutations.updateTripOffer(),
//     // Api.Chat.mutations.createChat()
// )(TripofferScreen)