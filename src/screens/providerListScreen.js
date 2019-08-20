import React from 'react';
import { View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Header, Card, Input, Text, Rating } from 'react-native-elements'
import { Icon } from 'react-native-eva-icons';
import { compose, withApollo } from 'react-apollo'

// import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import { Api } from '../lib/api'

import {Navigator, ScreenConst} from '../navigation'

class ProviderListScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    goProviderInfo(ID, SORTKEY){
        passProps = {
            locationID:this.props.locationID,
            providerID: ID,
            providerSORTKEY: SORTKEY,
            image: 'https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            rating: 4,
            name : 'Han',
            locationName: 'Seoul, South Korea',
            greeting: 'Hello, Im Han nice to meet you!',
            providerLev: 'Super Manager',
            status: 'verified',
            languages: ['English', 'Korean'],
            experience: 32,
            responseRate: '100%',
            responseTime: 6
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_PROVIDER_INFO, passProps)
    }

    render(){
        let screenHeight = Dimensions.get('window').height
        let screenWidth = Dimensions.get('window').width
        
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('providerListScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log(this.props)

        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header
                    containerStyle={{height:'7%', top : '3%', marginBottom:'5%', backgroundColor:"transparent"}}
                    leftComponent={
                        <Icon
                            name='arrow-down'
                            width={34}
                            height={34}
                            fill='#4535AA'
                        />
                    }
                    rightComponent={
                        <Icon
                            name='options-2-outline'
                            width={34}
                            height={34}
                            fill='#4535AA'
                        />
                    }
                />
                <ScrollView style={{width:"100%"}}>
                    {
                        this.props.providers.map((contact,i) => {
                            return(
                                <ProviderCard
                                    key={i}
                                    screenHeight={screenHeight}
                                    goProviderInfo={this.goProviderInfo.bind(this, contact.ID, contact.SORTKEY)}
                                    data={contact}
                                // screenWidth={screenWidth}
                                ></ProviderCard>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const ProviderCard = (props) => {
    let cardHeight = props.screenHeight/3.5
    return(
        // <View style={{margin:'1%', padding:'1%', alignItems: 'center', borderStyle:'solid', borderWidth:1}}>
        <Card
            style={{alignItems: 'center'}}
            containerStyle={{padding:0, borderWidth:0}}
        >
            <View style={{width:"100%", alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={props.goProviderInfo}
                    style={{width:'100%', height:cardHeight}}
                >
                    {
                        props.data.photoURL ?
                        <Image
                            style={{width:"100%", height:cardHeight, borderRadius:10}}
                            resizeMode="cover"
                            source={{uri:props.data.photoURL}}
                        /> :
                        <Image
                            style={{width:"100%", height:cardHeight, borderRadius:10}}
                            resizeMode="cover"
                            source={require('../assets/images/test/providerCard_test00.jpg')}
                        />
                    }
                </TouchableOpacity>
                <View style={{position:'absolute', top:0, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Icon name='star-outline' fill='white' width={40} height={40}/>
                    </View>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:1}}>

                    </View>
                </View>
                <View style={{position:'absolute', bottom:0, alignItems: 'center'}}>
                    <Text h3 h3Style={{color:'white', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:10}}>{props.data.firstName} {props.data.lastNAme}</Text>
                    <Text h4 h4Style={{color:'black', textShadowColor:'#585858', textShadowOffset:{width: 5, height: 5}, textShadowRadius:5}}>Provider greeting</Text>
                </View>
            </View>
            <View style={{flex:1, height:cardHeight/6, flexDirection:'row'}}>
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
            <View style={{flex:1, height:cardHeight/6, flexDirection:'row'}}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h4 h4Style={{color:'#4535AA'}}>{props.data.experience}</Text>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text h4 h4Style={{color:'#4535AA'}}>{props.data.reviews}</Text>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={props.data.rating}
                    />
                </View>
            </View>
        </Card>
        // </View>
    )
}

export default compose(
    // console.log(this.props),
    Api.Provider.queries.listProvidersByLocationID()
)(ProviderListScreen)
