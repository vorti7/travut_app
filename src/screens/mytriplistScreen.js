import React, { useState } from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Header, Card, Badge, Text } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'

import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'
// import { Icon } from 'react-native-eva-icons';
// import AuthClass from '../lib/auth'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Navigator, ScreenConst} from '../navigation'

import { TripOfferListComponent, TripRequestInsideListComponent } from '../components'

import { Container } from '../components'
import travutStyle from '../styles'

export default function MytriplistScreen(props){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('mytriplistScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        const getTripRequest = Api.TripRequest.listTripRequestsByTravelerID(props.travelerID)
        let tripRequestList = getTripRequest.data.listLocations ? getTripRequest.data.listLocations.items :[]
        console.log(props.travelerID)
        console.log(tripRequestList)

        const [ detailTrigger, setDetailTrigger ] = useState(false)
        const [ detailIndex, setDetailIndex ] = useState(-1)
        let screenHeight = Dimensions.get('window').height
        let screenWidth = Dimensions.get('window').width


        const goMakeTrip = () => {
            Navigator.pushScreen(props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO)
        }

        const remainTime = (time) => {
            if (time>24*60*60*1000){
                return Math.floor(time/(24*60*60*1000)) + "days ago"
            }else if(time>60*60*1000){
                return Math.floor(time/(60*60*1000)) + "hours ago"
            }else if(time>0){
                return Math.floor(time/(60*1000)) + "mins ago"
            }else{
                return 'expired'
            }
        }

        const locationNameShow = (locationName) => {
            let locationNameShow
            if(locationName){
                let locationArray = locationName.split('/')
                if(locationArray.length>1){
                    locationNameShow = (
                        <Text><Text style={{color:'#4535AA'}}>{locationArray[locationArray.length-2]}</Text>/<Text style={{color:'#AEA9C9'}}>{locationArray[locationArray.length-1]}</Text></Text>
                    )
                }else{
                    locationNameShow = (
                        <Text><Text style={{color:'#4535AA'}}>{locationArray[0]}</Text></Text>
                    )
                }
            }else{
                locationNameShow = (
                    <Text><Text style={{color:'#4535AA'}}>No Location Info</Text></Text>
                )
            }
            return locationNameShow
        }
    
        const showDetail = (i) => {
            console.log('showdetail clicked')
            setDetailIndex(i)
            setDetailTrigger(true)
        }

        const detailCard = () => {
            if(detailTrigger){
                showItem = props.tripRequests[detailIndex]
                return (
                    <View style={{width:'100%', height:'100%', backgroundColor: '#4535AA'}}>
                        <View 
                            style={{flex:1, backgroundColor: '#FFF', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, borderTopLeftRadius:30, borderTopRightRadius:30}}
                        >
                            <View style={{height:'10%', flexDirection:'row'}}>
                                <View
                                    style={{flex:2, justifyContent: 'center', alignItems:'flex-start'}}
                                >
                                    <View style={{flexDirection:'row'}}>
                                        <Icon
                                            name='event-note'
                                            size={30}
                                            color='#4535AA'
                                        />
                                        <Text style={{fontSize:20, color:'#4535AA'}}> View request content</Text>
                                    </View>
                                    {/* {this.locationNameShow(showItem.location.locationName)} */}
                                </View>
                                <View
                                    style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
                                >
                                    {statusBadge('진행중')}
                                </View>
                            </View>
                            <View style={{height:'auto'}}>
                                <Text style={{fontWeight:'bold', fontSize:18}}>현지 여행호스트 {showItem.recipientsCnt}명에게 요청, {showItem.checkedIDs.length}명 확인</Text>
                            </View>
                            <View style={{height:'10%', flexDirection:'row'}}>
                                <View
                                    style={{flex:2, justifyContent: 'center', alignItems:'flex-start'}}
                                >
                                    <View style={{flexDirection:'row'}}>
                                        <Icon name="schedule" size={30} color='#4535AA'/>
                                        <Text style={{fontSize:20, color:'#4535AA'}}> {Math.floor(((new Date(showItem.expTime*1)).getTime() - (new Date()).getTime()) / (1000*60*60))} 시간 남음</Text>
                                    </View>
                                </View>
                                <View
                                    style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
                                >
                                    <Icon name="delete-forever" size={25}/>
                                </View>
                            </View>
                            {//props.data.checkedIDs.length>0
                                true ? <TripOfferListComponent componentId={props.componentId} tripRequestID={showItem.ID+'#'+showItem.SORTKEY}></TripOfferListComponent> : 
                                <View style={{flex:1, height:cardHeight/4}}>
                                    <Text>아직 도착한 여행제안이 없습니다.</Text>
                                </View>
                            }
                            {/* <ScrollView style={{flex:1}}>
                                <TripRequestInsideListComponent
                                    componentId={this.props.componentId}
                                    tripRequestID={showItem.ID+'#'+showItem.SORTKEY}
                                />
                            </ScrollView> */}
                        </View>
                    </View>
                )
            }else{
                console.log('Something wrong!!!')
                return(
                    <View>
                        <Text>Nothing to show</Text>
                    </View>
                )
            }
        }


        return(
            <View style={travutStyle.common.container.mainContainer}>
                <Container.header/>
                <View style={travutStyle.common.container.midBodyContainer}>
                    {detailTrigger ?
                    detailCard() :
                    <ScrollView style={{backgroundColor:'#4535AA', width:'100%', padding:'3%'}}>

                        {
                            tripRequestList.map((contact, i) => {
                                // console.log(contact)
                                return (
                                    <MytripCard
                                        key={i}
                                        data={contact}
                                        cardHeight={screenHeight/4}
                                        componentId={props.componentId}
                                        showDetail={() => showDetail(i)}
                                    />
                                )
                            })
                        }

                        <TouchableOpacity onPress={() => goMakeTrip()}>
                            <View 
                                style={{borderRadius:15, height:screenHeight/4, backgroundColor: 'rgba(255,255,255,0.3)', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:0, margin:'2%', alignItems:'center', justifyContent:'center'}}
                            >
                                <VectorIcon
                                    name="add"
                                    size={35}
                                    color='rgba(255,255,255,0.8)'
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={{height:screenHeight/8}}>
                        </View>
                    </ScrollView>
                    }
                </View>
            </View>
        )
}

const MytripCard = (props) => {
    console.log(props)
    let cardHeight = props.cardHeight
    const [ extraView, setExtraView ] = useState(false)
    const [ offerListView, setOfferListView ] = useState(false)
    
    let locationNameShow
    if(props.data.location){
        let locationName = props.data.location.locationName.split('/')
        if(locationName.length>1){
            locationNameShow = (
                <Text><Text style={{color:'#4535AA'}}>{locationName[locationName.length-2]}</Text>/<Text style={{color:'#AEA9C9'}}>{locationName[locationName.length-1]}</Text></Text>
            )
        }else{
            locationNameShow = (
                <Text><Text style={{color:'#4535AA'}}>{locationName[0]}</Text></Text>
            )
        }
    }else{
        locationNameShow = (
            <Text><Text style={{color:'#4535AA'}}>No Location Info</Text></Text>
        )
    }
    
    

    return(
        <TouchableOpacity onPress={() => props.showDetail()}>
            <View 
                style={{borderRadius:15, backgroundColor: '#FFF', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:'5%', margin:'2%'}}
            >
                <TouchableOpacity onPress={() => setExtraView(!extraView)}>
                <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
                    <View
                        style={{flex:1, justifyContent: 'center', alignItems:'flex-start'}}
                    >
                        {/* <Text><Text style={{color:'#4535AA'}}>{locationName.length-2}</Text>/<Text style={{color:'#AEA9C9'}}>{locationName[locationName.length-1]}</Text></Text> */}
                        {locationNameShow}
                    </View>
                    <View
                        style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
                    >
                        {statusBadge('진행중')}
                    </View>
                </View>
                </TouchableOpacity>
                <View style={{flex:1, height:cardHeight/4}}>
                    <Text>현지 여행호스트 {props.data.recipientsCnt}명에게 요청, {props.data.checkedIDs.length}명 확인</Text>
                </View>
                <View style={{height:'auto'}}>
                    {//props.data.checkedIDs.length>0
                        true ? <TripOfferListComponent componentId={props.componentId} tripRequestID={props.data.ID+'#'+props.data.SORTKEY}></TripOfferListComponent> : 
                        <View style={{flex:1, height:cardHeight/4}}>
                            <Text>아직 도착한 여행제안이 없습니다.</Text>
                        </View>
                    }
                </View>
                <TouchableOpacity onPress={() => setOfferListView(!offerListView)}>
                    <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
                            <VectorIcon name="schedule" size={25} color='#4535AA'/>
                            <View style={{flex:1, left:5}}>
                                <Text style={{color:'#4535AA'}}>{Math.floor(((new Date(props.data.expTime*1)).getTime() - (new Date()).getTime()) / (1000*60*60))} 시간 남음</Text>
                            </View>
                            <VectorIcon name="delete-forever" size={25}/>
                    </View>
                </TouchableOpacity>
                {extraView ? extraCard(cardHeight) : <View/>}
            </View>
        </TouchableOpacity>
    )
}

const extraCard = (cardHeight) => {
    return(
        <View style={{flex:1, height:cardHeight*2, backgroundColor:'#DBDBDB'}}>
            
        </View>
    )
}

const statusBadge = (status) => {
    if(status=='진행중'){
        return(
            <View
                style={{backgroundColor:'#B05CBA', borderRadius:20, paddingBottom:3, paddingTop:3, paddingLeft:25, paddingRight:25}}
            >
                <Text style={{fontSize:15, color:'#FFF'}}>진행중</Text>
            </View>
        )
    }else if(status=='완료'){

    }
}







// class MytriplistScreen extends React.Component{

//     constructor(props) {
//         super(props);
        
//         this.state = {
//             detailIndex: -1,
//             detailTrigger: false
//         };
//     }

    
//     goMakeTrip(){
//         Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO)
//     }

//     remainTime(time){
//         if (time>24*60*60*1000){
//             return Math.floor(time/(24*60*60*1000)) + "days ago"
//         }else if(time>60*60*1000){
//             return Math.floor(time/(60*60*1000)) + "hours ago"
//         }else if(time>0){
//             return Math.floor(time/(60*1000)) + "mins ago"
//         }else{
//             return 'expired'
//         }
//     }

//     locationNameShow(locationName){
//         let locationNameShow
//         if(locationName){
//             let locationArray = locationName.split('/')
//             if(locationArray.length>1){
//                 locationNameShow = (
//                     <Text><Text style={{color:'#4535AA'}}>{locationArray[locationArray.length-2]}</Text>/<Text style={{color:'#AEA9C9'}}>{locationArray[locationArray.length-1]}</Text></Text>
//                 )
//             }else{
//                 locationNameShow = (
//                     <Text><Text style={{color:'#4535AA'}}>{locationArray[0]}</Text></Text>
//                 )
//             }
//         }else{
//             locationNameShow = (
//                 <Text><Text style={{color:'#4535AA'}}>No Location Info</Text></Text>
//             )
//         }
//         return locationNameShow
//     }
    
//     showDetail(i){
//         console.log('showdetail clicked')
//         this.setState({
//             detailIndex: i,
//             detailTrigger: true
//         })
//     }

//     detailCard(){
//         if(this.state.detailTrigger){
//             showItem = this.props.tripRequests[this.state.detailIndex]
//             return (
//                 <View style={{width:'100%', height:'100%', backgroundColor: '#4535AA'}}>
//                     <View 
//                         style={{flex:1, backgroundColor: '#FFF', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, borderTopLeftRadius:30, borderTopRightRadius:30}}
//                     >
//                         <View style={{height:'10%', flexDirection:'row'}}>
//                             <View
//                                 style={{flex:2, justifyContent: 'center', alignItems:'flex-start'}}
//                             >
//                                 <View style={{flexDirection:'row'}}>
//                                     <Icon
//                                         name='event-note'
//                                         size={30}
//                                         color='#4535AA'
//                                     />
//                                     <Text style={{fontSize:20, color:'#4535AA'}}> View request content</Text>
//                                 </View>
//                                 {/* {this.locationNameShow(showItem.location.locationName)} */}
//                             </View>
//                             <View
//                                 style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
//                             >
//                                 {statusBadge('진행중')}
//                             </View>
//                         </View>
//                         <View style={{height:'auto'}}>
//                             <Text style={{fontWeight:'bold', fontSize:18}}>현지 여행호스트 {showItem.recipientsCnt}명에게 요청, {showItem.checkedIDs.length}명 확인</Text>
//                         </View>
//                         <View style={{height:'10%', flexDirection:'row'}}>
//                             <View
//                                 style={{flex:2, justifyContent: 'center', alignItems:'flex-start'}}
//                             >
//                                 <View style={{flexDirection:'row'}}>
//                                     <Icon name="schedule" size={30} color='#4535AA'/>
//                                     <Text style={{fontSize:20, color:'#4535AA'}}> {Math.floor(((new Date(showItem.expTime*1)).getTime() - (new Date()).getTime()) / (1000*60*60))} 시간 남음</Text>
//                                 </View>
//                             </View>
//                             <View
//                                 style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
//                             >
//                                 <Icon name="delete-forever" size={25}/>
//                             </View>
//                         </View>
//                         {//props.data.checkedIDs.length>0
//                             true ? <TripOfferListComponent componentId={this.props.componentId} tripRequestID={showItem.ID+'#'+showItem.SORTKEY}></TripOfferListComponent> : 
//                             <View style={{flex:1, height:cardHeight/4}}>
//                                 <Text>아직 도착한 여행제안이 없습니다.</Text>
//                             </View>
//                         }
//                         {/* <ScrollView style={{flex:1}}>
//                             <TripRequestInsideListComponent
//                                 componentId={this.props.componentId}
//                                 tripRequestID={showItem.ID+'#'+showItem.SORTKEY}
//                             />
//                         </ScrollView> */}
//                     </View>
//                 </View>
//             )
//         }else{
//             console.log('Something wrong!!!')
//             return(
//                 <View>
//                     <Text>Nothing to show</Text>
//                 </View>
//             )
//         }
//     }

//     render(){
//         let screenHeight = Dimensions.get('window').height
//         let screenWidth = Dimensions.get('window').width
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('mytriplistScreen called')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         // console.log(this.props)
//         return(
//             <View style={{flex:1, alignItems: 'center'}}>
//                 <Header
//                     containerStyle={{backgroundColor:'#4535AA', borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomWidth:0, paddingTop:0 }}
//                     leftComponent={<VectorIcon name="local-airport" size={35} color='white'/>}
//                     rightComponent={<VectorIcon name="close" size={35} color='white'/>}
//                     centerComponent={{ text: 'My Travel', style: { color: '#FFFFFF', fontSize:20 } }}
//                 />
//                 {this.state.detailTrigger ?
//                 this.detailCard() :
//                 <ScrollView style={{backgroundColor:'#4535AA', width:'100%', padding:'3%'}}>

//                     {
//                         this.props.tripRequests.map((contact, i) => {
//                             // console.log(contact)
//                             return (
//                                 <MytripCard
//                                     key={i}
//                                     data={contact}
//                                     cardHeight={screenHeight/4}
//                                     componentId={this.props.componentId}
//                                     showDetail={() => this.showDetail(i)}
//                                 />
//                             )
//                         })
//                     }

//                     <TouchableOpacity onPress={this.goMakeTrip.bind(this)}>
//                         <View 
//                             style={{borderRadius:15, height:screenHeight/4, backgroundColor: 'rgba(255,255,255,0.3)', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:0, margin:'2%', alignItems:'center', justifyContent:'center'}}
//                         >
//                             <VectorIcon
//                                 name="add"
//                                 size={35}
//                                 color='rgba(255,255,255,0.8)'
//                             />
//                         </View>
//                     </TouchableOpacity>
//                     <View style={{height:screenHeight/8}}>
//                     </View>
//                 </ScrollView>
//                 }
                
//             </View>
//         )
//     }
// }

// const MytripCard = (props) => {
//     console.log(props)
//     let cardHeight = props.cardHeight
//     const [ extraView, setExtraView ] = useState(false)
//     const [ offerListView, setOfferListView ] = useState(false)
    
//     let locationNameShow
//     if(props.data.location){
//         let locationName = props.data.location.locationName.split('/')
//         if(locationName.length>1){
//             locationNameShow = (
//                 <Text><Text style={{color:'#4535AA'}}>{locationName[locationName.length-2]}</Text>/<Text style={{color:'#AEA9C9'}}>{locationName[locationName.length-1]}</Text></Text>
//             )
//         }else{
//             locationNameShow = (
//                 <Text><Text style={{color:'#4535AA'}}>{locationName[0]}</Text></Text>
//             )
//         }
//     }else{
//         locationNameShow = (
//             <Text><Text style={{color:'#4535AA'}}>No Location Info</Text></Text>
//         )
//     }
    
    

//     return(
//         <TouchableOpacity onPress={() => props.showDetail()}>
//             <View 
//                 style={{borderRadius:15, backgroundColor: '#FFF', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:'5%', margin:'2%'}}
//             >
//                 <TouchableOpacity onPress={() => setExtraView(!extraView)}>
//                 <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
//                     <View
//                         style={{flex:1, justifyContent: 'center', alignItems:'flex-start'}}
//                     >
//                         {/* <Text><Text style={{color:'#4535AA'}}>{locationName.length-2}</Text>/<Text style={{color:'#AEA9C9'}}>{locationName[locationName.length-1]}</Text></Text> */}
//                         {locationNameShow}
//                     </View>
//                     <View
//                         style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
//                     >
//                         {statusBadge('진행중')}
//                     </View>
//                 </View>
//                 </TouchableOpacity>
//                 <View style={{flex:1, height:cardHeight/4}}>
//                     <Text>현지 여행호스트 {props.data.recipientsCnt}명에게 요청, {props.data.checkedIDs.length}명 확인</Text>
//                 </View>
//                 <View style={{height:'auto'}}>
//                     {//props.data.checkedIDs.length>0
//                         true ? <TripOfferListComponent componentId={props.componentId} tripRequestID={props.data.ID+'#'+props.data.SORTKEY}></TripOfferListComponent> : 
//                         <View style={{flex:1, height:cardHeight/4}}>
//                             <Text>아직 도착한 여행제안이 없습니다.</Text>
//                         </View>
//                     }
//                 </View>
//                 <TouchableOpacity onPress={() => setOfferListView(!offerListView)}>
//                     <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
//                             <VectorIcon name="schedule" size={25} color='#4535AA'/>
//                             <View style={{flex:1, left:5}}>
//                                 <Text style={{color:'#4535AA'}}>{Math.floor(((new Date(props.data.expTime*1)).getTime() - (new Date()).getTime()) / (1000*60*60))} 시간 남음</Text>
//                             </View>
//                             <VectorIcon name="delete-forever" size={25}/>
//                     </View>
//                 </TouchableOpacity>
//                 {extraView ? extraCard(cardHeight) : <View/>}
//             </View>
//         </TouchableOpacity>
//     )
// }

// const extraCard = (cardHeight) => {
//     return(
//         <View style={{flex:1, height:cardHeight*2, backgroundColor:'#DBDBDB'}}>
            
//         </View>
//     )
// }

// const statusBadge = (status) => {
//     if(status=='진행중'){
//         return(
//             <View
//                 style={{backgroundColor:'#B05CBA', borderRadius:20, paddingBottom:3, paddingTop:3, paddingLeft:25, paddingRight:25}}
//             >
//                 <Text style={{fontSize:15, color:'#FFF'}}>진행중</Text>
//             </View>
//         )
//     }else if(status=='완료'){

//     }
// }

// export default compose(
//     // Api.TripRequest.queries.listTripRequests()
//     Api.TripRequest.queries.listTripRequestsByTravelerID()
// )(MytriplistScreen)