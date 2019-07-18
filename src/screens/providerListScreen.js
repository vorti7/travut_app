import React from 'react';
import { View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Header, Card, Input, Text } from 'react-native-elements'
import { Icon } from 'react-native-eva-icons';

// import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

export default class ProviderListScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    goProviderInfo(){
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_INFO)
    }

    render(){

        let screenHeight = Dimensions.get('window').height
        let screenWidth = Dimensions.get('window').width
        
        console.log('providerInfoScreen called')

        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header></Header>
                <ScrollView style={{width:"100%"}}>
                    <ProviderCard
                    screenHeight={screenHeight}
                    // screenWidth={screenWidth}
                    ></ProviderCard>
                </ScrollView>
            </View>
        )
    }
}

const ProviderCard = (props) => {
    let cardHeight = props.screenHeight/4
    return(
        // <View style={{margin:'1%', padding:'1%', alignItems: 'center', borderStyle:'solid', borderWidth:1}}>
        <Card style={{alignItems: 'center'}}>
            <View style={{width:"100%", alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={this.goProviderInfo.bind(this)}
                >
                    <Image
                        style={{width:"100%", height:cardHeight}}
                        resizeMode="cover"
                        source={require('../assets/images/test/profile_test01.jpeg')}
                    />
                </TouchableOpacity>
                <View style={{position:'absolute', top:0, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Icon name='star-outline' fill='white' width={48} height={48}/>
                    </View>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:1}}>

                    </View>
                </View>
                <View style={{position:'absolute', bottom:0, alignItems: 'center'}}>
                    <Text h3 h3Style={{color:'white', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:10}}>Provider name01</Text>
                    <Text h4 h4Style={{color:'black', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:5}}>Provider greeting</Text>
                </View>
            </View>
            <View style={{flex:1, height:cardHeight/3, flexDirection:'row'}}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Experience</Text>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Reviews</Text>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Rating</Text>
                </View>
            </View>
        </Card>
        // </View>
    )
}