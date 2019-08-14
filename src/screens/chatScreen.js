import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header, Text, Avatar, Button, ButtonGroup, Input } from 'react-native-elements'
import { Navigator, ScreenConst } from '../navigation';
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'
import AuthClass from '../lib/auth'

import { Icon } from 'react-native-eva-icons';
import { buildSubscription } from 'aws-appsync'


class ChatScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            chatIDState: this.props.chatID,
            messageState:'',
            loadingMessageState:{
                userID:'test',
                message:'loading...'
            }
        };
    }

    componentDidMount(){
        this.props.subscribeToNewMessages()
    }

    sendMessage(){
        this.refs.flatList.scrollToEnd()
        // Navigator.showOverlay("spinnerOverlay",  ScreenConst.SCREEN_COMMON_LOADING)
        if(this.state.chatIDState){
            console.log('chatID : ',this.state.chatIDState)
            AuthClass.getTravelerInfo().then(userInfo => {
                console.log(userInfo)
                let data = {
                    "ID" : this.state.chatIDState,
                    "userID" : userInfo.username,
                    "type" : "text",
                    "message": this.state.messageState,
                    "regIP" : "127.0.0.1"
                }
                // console.log(data)
                this.props.createMessage({createmessageinput:data}).then((e) => {
                    // console.log(',,,,,,,', e);
                    console.log(this.props.messages)

                    // console.log('create message done : ', this.props)

                    // this.props.data.refetch().then(() => {
                    //     Navigator.dismissOverlay("spinnerOverlay")
                    // })
                    // console.log(e.data.createMessage);
                    // console.log('before this.props.message',this.props.messages);
                    // this.props.messages.push(e.data.createMessage);
                    // console.log('after this.props.message', this.props.messages);
                    

                })
            })
        }else{
            console.log('chatID needed')
            let chatCreateInput = {
                "name" : "text",
                "usersID": this.props.tripOfferID+"#"+this.props.tripOfferSORTKEY,
                "regIP" : "127.0.0.1"
            }
            this.props.createChat({createchatinput:chatCreateInput}).then((e) => {
                console.log('chat room created')
                let tripOfferUpdateInput = {
                    "ID" : this.props.tripOfferID,
                    "SORTKEY" : this.props.tripOfferSORTKEY,
                    "chatID" : e.data.createChat.ID
                }
                console.log(tripOfferUpdateInput)
                this.props.updateTripOffer({input:tripOfferUpdateInput}).then((f) => {
                    console.log('tripOffer now have chatID')
                    this.setState({chatIDState: f.data.updateTripOffer.chatID})
                    sendMessage()
                })
            })
                    
        }
    }

    _renderItem = ({item}) => (
        <ChatItem
            item={item}
        />
    );


    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('chatScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('chatting Contents-------------------------------------------------------------------------------------------')
        console.log(this.props.messages)
        console.log('propsData Contents------------------------------------------------------------------------------------------')
        // console.log(this.props.data)
        // console.log(this.props.chatID)
        // console.log(this.props.tripOfferID)
        // console.log(this.props.tripOfferSORTKEY)

        console.log(Object.keys(this.props))
        return(
            <View style={{flex:1}}>
                <Header
                    containerStyle={{backgroundColor:'#FFF', borderBottomWidth:0, paddingTop:0 }}
                    leftComponent={<Icon name="arrow-down-outline" width={35} height={35} color='#EBE8FA'/>}
                    rightComponent={
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Text>To</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center'}}>
                                <Avatar
                                    size="small"
                                    rounded
                                    title='NT'
                                />
                            </View>
                        </View>
                    }
                />
                <FlatList
                    ref="flatList"
                    data={this.props.messages}
                    renderItem={this._renderItem}
                />
                <View
                    style={{width:'100%', height:'10%', bottom : 0, flexDirection:'row'}}
                >
                    <View style={{justifyContent:'center', padding:3}}>
                        <Icon
                            name='image'
                            width={30}
                            height={30}
                            fill='#EBE8FA'
                        />
                    </View>
                    <View style={{flex:1, justifyContent: 'center'}}>
                        <Input
                            placeholder='Type message...'
                            containerStyle={{width:'100%', height:'70%', backgroundColor:'#EBE8FA', borderRadius:20}}
                            inputContainerStyle={{borderBottomWidth:0}}
                            onChangeText={(messageInput) => this.setState({messageState: messageInput})}
                        />
                    </View>
                    <View style={{justifyContent:'center', padding:3}}>
                        <TouchableOpacity onPress={this.sendMessage.bind(this)}>
                            <Icon
                                name='arrow-back'
                                width={30}
                                height={30}
                                fill='#EBE8FA'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

class ChatItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        // const itemPosition = this.props.item.auther ? 'flex-start' : 'flex-end';
        // console.log(this.props)
        itemData = this.props.item
        // console.log(itemData)
        let content
        if(itemData.userID){
            content = (
                <View style={{width:'100%', alignItems:'flex-start', flexDirection:'row', paddingTop:10}}>
                    <Avatar
                        size='medium'
                        rounded
                        title='NT'
                    />
                    <View style={{
                        width:'auto',
                        height:'auto',
                        padding:10,
                        marginLeft:15,
                        borderRadius: 10,
                        backgroundColor: '#FFF',
                        borderWidth: 0.5,
                        borderColor: '#000',
                        shadowOpacity: 1,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 10,
                            width: 10
                        },
                        elevation:5
                        }}
                    >
                        <Text>{itemData.message}</Text>
                    </View>
                </View>
            )
        }else{
            content=(
                <View style={{width:'100%', alignItems:'flex-end',  paddingTop:10}}>
                    <View style={{
                        width:'auto',
                        height:'auto',
                        padding:10,
                        marginRight:15,
                        borderRadius: 10,
                        backgroundColor: '#4535AA',
                        borderWidth: 0.5,
                        borderColor: '#000',
                        shadowOpacity: 1,
                        shadowRadius: 2,
                        shadowOffset: {
                            height: 10,
                            width: 10
                        },
                        elevation:5
                        }}
                    >
                        <Text style={{color:'#FFF'}}>{itemData.message}</Text>
                    </View>
                </View>
            )
        }
        return content
    }
}

export default compose(
    // Api.Message.queries.listMessagesByChatID(),
    Api.Message.mutations.createMessage(),
    Api.Message.subscriptions.onCreateMessage(),
    Api.Chat.mutations.createChat(),
    // Api.TripOffer.queries.listTripOffers(),
    Api.TripOffer.mutations.updateTripOffer()
)(ChatScreen)