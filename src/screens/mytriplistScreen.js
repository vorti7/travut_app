import React, { useState } from 'react';
import { View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

import { Header, Card, Badge, Text } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/MaterialIcons'

import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'
// import { Icon } from 'react-native-eva-icons';
// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'

class MytriplistScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }

    
    
    render(){
        let screenHeight = Dimensions.get('window').height
        let screenWidth = Dimensions.get('window').width
        console.log('mytriplistScreen called')
        console.log(this.props)
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header
                    containerStyle={{backgroundColor:'#4535AA', borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomWidth:0, paddingTop:0 }}
                    leftComponent={<VectorIcon name="local-airport" size={35} color='white'/>}
                    rightComponent={<VectorIcon name="close" size={35} color='white'/>}
                    centerComponent={{ text: 'My Travel', style: { color: '#FFFFFF', fontSize:20 } }}
                    // rightComponent={<Icon name="close-outline" size={35} fill='white'/>}
                />
                    
                <ScrollView style={{backgroundColor:'#4535AA', width:'100%', padding:'3%'}}>
                    {
                        this.props.passProps.map((contact, i) => {
                            // console.log(contact)
                            return (
                                <MytripCard
                                    key={i}
                                    cardHeight={screenHeight/4}
                                    locationName={contact.locationName}
                                    recipientsCnt={contact.recipientsCnt}
                                    checkedCnt={contact.checkedCnt}
                                    tripOffers={contact.tripOffers}
                                    expirationDate={contact.expirationDate}
                                />
                            )
                        })
                    }
                    <View 
                        style={{borderRadius:15, height:screenHeight/4, backgroundColor: 'rgba(255,255,255,0.3)', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:0, margin:'2%', alignItems:'center', justifyContent:'center'}}
                    >
                        <VectorIcon
                            name="add"
                            size={35}
                            color='rgba(255,255,255,0.8)'
                        />
                    </View>
                    <View style={{height:screenHeight/8}}>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const MytripCard = (props) => {
    let cardHeight = props.cardHeight
    let locationName = props.locationName.split('/', 2)
    const [ extraView, setExtraView ] = useState(false)
    return(
        <View 
            style={{borderRadius:15, backgroundColor: '#FFF', paddingLeft:'5%', paddingRight:'5%', paddingTop:0, paddingBottom:'5%', margin:'2%'}}
        >
            <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
                <View
                    style={{flex:1, justifyContent: 'center', alignItems:'flex-start'}}
                >
                    <Text><Text style={{color:'#4535AA'}}>{locationName[0]}</Text>/<Text style={{color:'#AEA9C9'}}>{locationName[1]}</Text></Text>
                </View>
                <View
                    style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}
                >
                    {statusBadge('진행중')}
                </View>
            </View>
            <View style={{flex:1, height:cardHeight/4}}>
                <Text>현지 여행호스트 {props.recipientsCnt}명에게 요청, {props.checkedCnt}명 확인</Text>
            </View>
            <TouchableHighlight onPress={() => setExtraView(!extraView)}>
                <View style={{flex:1, height:cardHeight/4}}>
                    <Text>아직 도착한 여행제안이 없습니다.</Text>
                </View>
            </TouchableHighlight>
            <View style={{flex:1, height:cardHeight/4, flexDirection:'row'}}>
                    <VectorIcon name="schedule" size={25} color='#4535AA'/>
                    <View style={{flex:1, left:5}}>
                        <Text style={{color:'#4535AA'}}>{Math.floor(((new Date(props.expirationDate)).getTime() - (new Date()).getTime()) / (1000*60*60))} 시간 남음</Text>
                    </View>
                    <VectorIcon name="delete-forever" size={25}/>
            </View>
            {extraView ? extraCard(cardHeight) : <View/>}
        </View>
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
                style={{backgroundColor:'#B05CBA', borderRadius:20, paddingBottom:3, paddingTop:3, paddingLeft:18, paddingRight:18}}
            >
                <Text style={{fontSize:12, color:'#FFF'}}>진행중</Text>
            </View>
        )
    }else if(status=='완료'){

    }
}

export default compose(
    Api.TripRequest.queries.listTripRequests()
)(MytriplistScreen)
