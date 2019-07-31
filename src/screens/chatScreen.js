import React from 'react';
import { View, FlatList } from 'react-native';
import { Header, Text, Avatar, Button, ButtonGroup, Input } from 'react-native-elements'
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'

import { Icon } from 'react-native-eva-icons';
// import {Navigator, ScreenConst} from '../navigation'


export default class ChatScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    _renderItem = ({item}) => (
        <ChatItem
            item={item}
        />
    );


    render(){
        console.log('chatScreen called')
        console.log(this.props.chatData)
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
                    data={this.props.chatData}
                    renderItem={this._renderItem}
                />
                <View
                    style={{width:'100%', height:'10%', bottom : 0, position:'absolute', flexDirection:'row'}}
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
                            containerStyle={{with:'100%', height:'70%', backgroundColor:'#EBE8FA', borderRadius:20}}
                            inputContainerStyle={{borderBottomWidth:0}}
                        />
                    </View>
                    <View style={{justifyContent:'center', padding:3}}>
                        <Icon
                            name='arrow-back'
                            width={30}
                            height={30}
                            fill='#EBE8FA'
                        />
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
        console.log(this.props.item)
        let content
        if(this.props.item.auther){
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
                        <Text>{this.props.item.content}</Text>
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
                        <Text style={{color:'#FFF'}}>{this.props.item.content}</Text>
                    </View>
                </View>
            )
        }
        return content
    }
  }
