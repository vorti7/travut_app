import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import { Header, Card, Badge, Text } from 'react-native-elements';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Icon } from 'react-native-eva-icons';
// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'

export default class MytriplistScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    render(){

        let screenHeight = Dimensions.get('window').height
        let screenWidth = Dimensions.get('window').width
        console.log('mytriplistScreen called')
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header
                    containerStyle={{backgroundColor:'#4535AA', borderTopLeftRadius:30, borderTopRightRadius:30, borderBottomWidth:0, paddingTop:0 }}
                    leftComponent={<VectorIcon name="airplane" size={35} color='white'/>}
                    centerComponent={{ text: 'My Travel', style: { color: '#FFFFFF', fontSize:20 } }}
                    // rightComponent={<Icon name="close-outline" size={35} fill='white'/>}
                />
                    
                <ScrollView style={{backgroundColor:'#4535AA', width:'100%', padding:'3%'}}>
                    <MytripCard
                    screenHeight={screenHeight}
                    >
                    </MytripCard>
                </ScrollView>
            </View>
        )
    }
}

const MytripCard = (props) => {
    let cardHeight = props.screenHeight/4
    return(
        <Card 
            containerStyle={{borderRadius:15, alignItems: 'center', backgroundColor: 'white'}}
        >
            <View style={{flex:1, height:cardHeight/4}}>
                <Text>도시/나라명</Text>
                <Badge value="진행중" status="primary" />
            </View>
            <View style={{flex:1, height:cardHeight/4}}>
                <Text>현지 여행호스트 명에게 요청, 명 확인</Text>
            </View>
            <View style={{flex:1, height:cardHeight/4}}>
                <Text>아직 도착한 여행제안이 없습니다.</Text>
            </View>
            <View style={{flex:1, height:cardHeight/4}}>
                {/* <Icon name="clock_outline" size={35} fill='white'/> */}
                <VectorIcon name="delete-forever" size={35} color='white'/>
            </View>
        </Card>
    )
}