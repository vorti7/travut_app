import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { compose } from 'react-apollo'

import { View, TouchableOpacity } from 'react-native';
import { Text, Avatar } from 'react-native-elements'
import { Api } from '../lib/api'
import { Icon } from 'react-native-eva-icons';

class TripOfferItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    goOfferInfo(){
        if(!this.props.data.loading){
            passProps = {
                // tripOfferID:'1d492b69-7050-4d6e-a62a-aeb65d5657ce',
                // tripOfferSORTKEY:'trip_offer_1565539010674',
                tripOfferID: this.props.item.ID,
                tripOfferSORTKEY: this.props.item.SORTKEY,
                providerImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                providerName: this.props.provider.items[0].firstName + " " + this.props.provider.items[0].lastName,
                languages: this.props.provider.items[0].languages,
                locationName: 'Location Name',
                greeting: 'Greeting Message',
                dateData: 'this is dateData',
                companion: 'Friends',
                price: 1092
            }
            Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_TRIPOFFER_INFO, passProps)
        }
    }

    remainTime(regDate){
        // console.log('now : ', new Date().getTime())
        // console.log('regDate : ', regDate)
        let remainTime =  new Date().getTime() - regDate
        console.log(remainTime)
        if (remainTime>24*60*60*1000){
            return Math.floor(remainTime/(24*60*60*1000)) + "days ago"
        }else if(remainTime>60*60*1000){
            return Math.floor(remainTime/(60*60*1000)) + "hours ago"
        }else if(remainTime>0){
            return Math.floor(remainTime/(60*1000)) + "mins ago"
        }else{
            return 'recent'
        }
    }
    
    render(){
        console.log("TripOffer A Item -------------------")

        if(this.props.item.status!=="Empty" && this.props.item.status!=="Writing"){
            return(
                <TouchableOpacity onPress={this.goOfferInfo.bind(this)}>
                <View style={{width:'100%', height:90, borderRadius:5, marginTop:10, marginBottom:10, backgroundColor:'#EBE8FA'}}>
                    <View style={{width:'100%', height:'20%', flexDirection:'row'}}>
                        <View style={{width:'20%', flexDirection:'row'}}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:1, backgroundColor:'#FFFFFF', borderBottomLeftRadius:5, borderBottomRightRadius:5, alignItems:'center', justifyContent:'center'}}>
                                <Icon name='star' width={20} height={20} fill='#B05CBA'/>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>
                        <View style={{width:'80%', alignItems: 'flex-end', paddingRight:25}}>
                            <Text>{this.remainTime(this.props.item.regDate)}</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', height:'60%', flexDirection:'row'}}>
                        <View style={{width:'20%', justifyContent:'center', alignItems:'center'}}>
                            <Avatar
                                size='medium'
                                rounded
                                title='NT'
                                source={require('../assets/images/test/profile_test00.png')}
                            />
                        </View>
                        <View style={{width:'80%'}}>
                            <Text style={{fontSize:20}}>Provider Name</Text>
                            <Text style={{fontSize:10}}>Trip Offer Greeting Message</Text>
                            <Text style={{fontSize:10}}>{this.props.item.status}</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', height:'20%', flexDirection:'row'}}>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }else{
            return (
                <View></View>
            )
        }
        
    }
}

export default compose(
    Api.Provider.queries.getProviderByScan()
)(TripOfferItem)