import React from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'

import { Button, Header } from 'react-native-elements'

export default class MainScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    onClick1(){
        console.log('onClick1 button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_LOCATION_SEARCH)
    }
    onClick2(){
        console.log('onClick2 button clicked')
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MAKETRIP_INTRO)
    }
    onClick3(){
        console.log('onClick3 button clicked')

        // passProps = {
        //     passProps:[
        //         {
        //             locationName : 'Seoul/Korea',
        //             recipientsCnt : 35,
        //             checkedCnt : 2,
        //             tripOffer : [],
        //             expirationDate : '2020-07-31'
        //         }
        //     ]
        // }

        AuthClass.getTravelerInfo()
        .then(success => {
            passProps = {
                travelerID:success
            }
            Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MYTRIP_LIST, passProps)
        })
        // Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_MYTRIP_LIST, passProps)   
    }

    onClick4(){
        console.log('onClick4 button clicked')
        passProps = {
            tripOfferID:'1d492b69-7050-4d6e-a62a-aeb65d5657ce',
            tripOfferSORTKEY:'trip_offer_1565058020424',
            providerImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            providerName: 'George Clooney',
            languages: [ 'Korean', 'English', 'Japanese' ],
            locationName: 'Seoul',
            greeting: 'Hi. This is Clooney!',
            dateData: 'this is dateData',
            companion: 'Friends',
            price: 1092
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_TRIPOFFER_INFO, passProps)
    }

    onClick5(){
        console.log('onClick5 button clicked')
        passProps = {
            chatID: 'chatID01',
            chatData : [
                {
                    type: 'text',
                    auther: 'A',
                    autherImage: '',
                    content:'Hello!'
                },
                {
                    type: 'text',
                    auther: '',
                    autherImage: '',
                    content:'Hello!'
                },
                {
                    type: 'text',
                    auther: '',
                    autherImage: '',
                    content:'This is test message\n this is test message\n this is test message'
                },
                {
                    type: 'text',
                    auther: 'A',
                    autherImage: '',
                    content:'This is test message\n this is test message\n this is test message'
                }
            ]
        }
        Navigator.pushScreen(this.props.componentId, ScreenConst.SCREEN_CHAT, passProps)
    }

    overlay(){
        console.log('onClick5 button clicked')
        Navigator.showOverlay("overlay",  ScreenConst.SCREEN_COMMON_OVERLAY)
    }
    

    logout(){
        AuthClass.logoutTraveler(this.props.componentId)
    }

    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('mainScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        return(
            <View>
                <Header containerStyle={{backgroundColor:'white'}}></Header>
                <Button
                    type="clear"
                    onPress={this.onClick1.bind(this)}
                    title = "Location Search"
                />
                <Button
                    type="clear"
                    onPress={this.onClick2.bind(this)}
                    title = "Make Trip"
                />
                <Button
                    type="clear"
                    onPress={this.onClick3.bind(this)}
                    title = "My Trip List"
                />
                <Button
                    type="clear"
                    onPress={this.onClick4.bind(this)}
                    title = "Trip Offer"
                />
                <Button
                    type="clear"
                    onPress={this.onClick5.bind(this)}
                    title = "Show Chat"
                />

                <Button
                    type="clear"
                    onPress={this.overlay.bind(this)}
                    title = "Overlay"
                />
                <Button
                    type="clear"
                    onPress={this.logout.bind(this)}
                    title="Log out"
                />
            </View>
        )
    }
}