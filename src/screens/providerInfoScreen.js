import React from 'react';
import { View , ScrollView, Dimensions, Image } from 'react-native';
import { Header, Input, Text, Button } from 'react-native-elements'

import { Icon } from 'react-native-eva-icons';
import { compose, withApollo } from 'react-apollo'

// import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthClass from '../lib/auth'
import { Api } from '../lib/api'
import {Navigator, ScreenConst} from '../navigation'
import { Buttons } from '../components'

import { Container } from '../components'
import travutStyle from '../styles'

export default function ProviderInfoScreen(props){

    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('------------------------------------------------------------------------------------------------------------')
    console.log('ProviderInfoScreen called')
    console.log('------------------------------------------------------------------------------------------------------------')

    return(
        <View style={travutStyle.common.container.mainContainer}>
            <Container.header/>
        </View>
    )
}

// class ProviderInfoScreen extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     goTripRequest(){
//         passProps={
//             locationID:this.props.locationID,
//             providerID:this.props.providerID
//         }
//         Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO, passProps)
//     }
    
//     render(){
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         console.log('providerInfoScreen called')
//         console.log('------------------------------------------------------------------------------------------------------------')
//         let screenHeight = Dimensions.get('window').height
//         console.log(this.props)
//         return(
//             <View style={{flex:1, alignItems: 'center'}}>
//                 {/* <Header
//                     containerStyle={{height:'7%', top : '3%', marginBottom:'5%', backgroundColor:"rgba(0, 0, 0, 0)"}}
//                     leftComponent={
//                         <Icon
//                             name='arrow-back'
//                             width={34}
//                             height={34}
//                             fill='#FFF'
//                         />
//                     }
//                     rightComponent={
//                         <Icon
//                             name='more-horizontal'
//                             width={34}
//                             height={34}
//                             fill='#FFF'
//                         />
//                     }
//                 /> */}
//                 <ScrollView style={{width:'100%'}}>
//                     <View
//                         style={{
//                             width:'100%',
//                             height:40/100 * screenHeight
//                             }}
//                     >
//                         {this.props.provider.photoURL ?
//                             <Image
//                                 style={{
//                                     flex: 1
//                                 }}
//                                 resizeMode="cover"
//                                 source={{uri:this.props.provider.photoURL}}
//                             /> :
//                             <Image
//                                 style={{
//                                     flex: 1
//                                 }}
//                                 resizeMode="cover"
//                                 source={require('../assets/images/test/providerCard_test00.jpg')}
//                             />
//                         }
//                     </View>
//                     <View
//                         style={{
//                             width:'100%',
//                             height:15/100 * screenHeight,
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }}
//                     >
//                         <Text h4>Greeting Message</Text>
//                     </View>
//                     <View
//                         style={{
//                             width:'100%',
//                             height:35/100 * screenHeight,
//                             flexDirection: 'row'
//                         }}
//                     >
//                         <View style={{width:'60%', height:'100%', backgroundColor: '#EBE8FA', borderTopRightRadius:10, borderBottomRightRadius:10, padding:10, justifyContent: 'center'}}>
//                             <View><Text style={{fontSize:20}}>{this.props.providerLev}</Text></View>
//                             <View><Text style={{fontSize:20}}>{this.props.status}</Text></View>
//                             <View><Text style={{fontSize:20}}>{this.props.locationName}</Text></View>
//                             <View><Text style={{fontSize:20}}></Text></View>
//                         </View>
//                         <View style={{width:'40%', height:'100%', flexDirection:'column'}}>
//                             <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                                 <Text style={{color:'#AEA9C9', fontSize:20}}>Experience</Text>
//                                 <Text style={{color:'#4535AA', fontSize:20}}>{this.props.provider.experience ? this.props.provider.experience : 0}</Text>
//                             </View>
//                             <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                                 <Text style={{color:'#AEA9C9', fontSize:20}}>Response Rate</Text>
//                                 <Text style={{color:'#4535AA', fontSize:20}}>{this.props.provider.responseRate ? this.props.provider.responseRate : 0}</Text>
//                             </View>
//                             <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                                 <Text style={{color:'#AEA9C9', fontSize:20}}>Replies Within</Text>
//                                 <Text style={{color:'#4535AA', fontSize:20}}>{this.props.provider.responseTime ? this.props.provider.responseTime : 0}</Text>
//                             </View>
//                         </View>
//                     </View>
//                     <View
//                         style={{
//                             width:'100%',
//                             height:15/100 * screenHeight,
//                             alignItems:'center',
//                             justifyContent:'center'
//                         }}
//                     >
//                         <Button
//                             onPress={this.goTripRequest.bind(this)}
//                             buttonStyle={{backgroundColor:'#4535AA'}}
//                             title="  Make Travel With  "
//                         />
//                     </View>
//                     <View
//                         style={{
//                             paddingTop:10,
//                             paddingBottom:10,
//                             height:25/100 * screenHeight
//                         }}
//                     >
//                         <Text style={{color:"#AEA9C9", fontSize:20, left: '5%', paddingBottom:5}}>About me</Text>
//                         <View style={{width:'90%', flex:1, backgroundColor:'#F2F2F2', borderRadius:10, left:'5%', right:'5%'}}></View>
//                     </View>
//                     <View
//                         style={{
//                             paddingTop:10,
//                             paddingBottom:10,
//                             height:35/100 * screenHeight
//                         }}
//                     >
//                         <Text style={{color:"#AEA9C9", fontSize:20, left: '5%', paddingBottom:5}}>Possible Services</Text>
//                         <View style={{width:'90%', flex:1, backgroundColor:'#F2F2F2', borderRadius:10, left:'5%', right:'5%'}}></View>
//                     </View>
//                     <View
//                         style={{
//                             paddingTop:10,
//                             paddingBottom:10,
//                             height:70/100 * screenHeight
//                         }}
//                     >
//                         <Text style={{color:"#4535AA", fontSize:20, left: '5%', paddingBottom:5}}>Reviews</Text>
//                         <View style={{width:'90%', flex:1, backgroundColor:'#F2F2F2', borderRadius:10, left:'5%', right:'5%'}}></View>
//                     </View>
//                     <View
//                         style={{
//                             height:10/100 * screenHeight
//                         }}
//                     ></View>
//                 </ScrollView>
//                 <View
//                     style={{width:'100%', height:'7%', top : '3%', padding:0, marginBottom:'5%', position:'absolute', flexDirection:'row', backgroundColor:"transparent"}}
//                 >
//                     <View style={{paddingLeft:10}}>
//                         <Buttons.BackBtn
//                             componentId = {this.props.componentId}
//                             buttonSize = {34}
//                             buttonColor = {"#FFF"}
//                         />
//                     </View>
    
//                     <View
//                         style={{flex:1}}
//                     />

//                     <View style={{paddingRight:10}}>
//                         <Icon
//                             name='more-horizontal'
//                             width={34}
//                             height={34}
//                             fill='#FFF'
//                         />
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// export default compose(
//     Api.Provider.queries.getProvider()
// )(ProviderInfoScreen)
