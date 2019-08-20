import React from 'react';
import { compose } from 'react-apollo'

import { View, Switch, TouchableOpacity } from 'react-native';
import { Text, Overlay, Input, Button } from 'react-native-elements'
import { WebView } from 'react-native-webview';

import { Api } from '../lib/api'
import { Icon } from 'react-native-eva-icons';

import AuthClass from '../lib/auth'
import { CommentListComponent } from './index'

class ServiceItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            commentInputOverlayTrigger: false,
            commentInput: '',
            // switchState: this.props.serviceState
            switchState: true
        };
    }

    switchToggle(){
        this.setState({switchState:!this.state.switchState})
        this.props.serviceSwitch()
    }

    colorState(){
        if(this.state.switchState){
            return "#EBE8FA"
        }else{
            return "#D6D6D6"
        }
    }

    commentInputOverlayShow(){
        this.setState({commentInputOverlayTrigger:true})
    }

    commentInputOverlayClose(){
        this.setState({commentInputOverlayTrigger:false})
    }

    commentCreate(){
        AuthClass.getTravelerInfo()
        .then(userInfo => {
            let data = {
                "ID" : this.props.parentID,
                "userID" : userInfo.username,
                "contents" : this.state.commentInput,
                // "likeUserIDs" : [],
                // "dislikeUserIDs" : [],
                "regIP" : '127.0.0.1'
            };
           this.props.createComment({createcommentinput:data}).then((e) => {
               this.commentInputOverlayClose()
           })
        })
    }

    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('serviceItemComponent called')
        console.log('------------------------------------------------------------------------------------------------------------')
        // console.log(this.props.comments)
        serviceInfo = JSON.parse(JSON.parse(this.props.service))
        
        return(
            <View style={{height:'auto', alignItems:'center'}}>

                <Overlay
                    borderRadius={10}
                    isVisible={this.state.commentInputOverlayTrigger}
                    onBackdropPress={() => this.setState({ commentInputOverlayTrigger: false })}
                    windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                    overlayBackgroundColor="#4535AA"
                    height='auto'
                >
                    <View style={{flexDirection:'column'}}>
                        <View style={{width:'100%'}}>
                            <Input
                                inputContainerStyle={{borderRadius:10, backgroundColor:'#FFF'}}
                                onChangeText={(comment) => this.setState({commentInput: comment})}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <TouchableOpacity onPress={this.commentCreate.bind(this)}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#FFF'}}>Send</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.commentInputOverlayClose.bind(this)}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#FFF'}}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Overlay>

                <View style={{width:'90%', flexDirection:'column'}}>
                    <View style={{paddingTop:20, paddingBottom:5, flexDirection:'row'}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Name</Text>
                        <View style={{flex:1}}></View>
                        <Switch
                            onValueChange= {this.switchToggle.bind(this)}
                            value={this.state.switchState}
                        />
                    </View>
                    <View style={{minHeight:50, backgroundColor: this.colorState(), borderRadius:10}}>
                        <View>
                            <View style={{minHeight:50, marginLeft:'5%', marginRight:'5%'}}>
                                <View style={{paddingTop:5, paddingBottom:5, paddingLeft:15, paddingRight:15}}>
                                    <Text>{serviceInfo.content}</Text>
                                    {/* <WebView
                                        originWhitelist={['*']}
                                        source={{html: serviceInfo.content}}
                                    /> */}
                                </View>
                                <View style={{minHeight:30, paddingTop:5, paddingBottom:5, paddingLeft:15, paddingRight:15, backgroundColor:'#FFF', flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                                        <Text style={{fontSize:25, color:'#4535AA'}}>{serviceInfo.priceDesc}</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                                        <Text style={{fontSize:25, fontWeight:'bold', color:'#4535AA'}}>${serviceInfo.priceAmount}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{paddingTop:15, paddingBottom:5}}>
                                <CommentListComponent comments={this.props.comments}></CommentListComponent>
                            </View>
                            <View style={{height:30, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Icon
                                    name='message-square-outline'
                                    width={18}
                                    height={18}
                                    fill='#4535AA'
                                />
                                <TouchableOpacity onPress={this.commentInputOverlayShow.bind(this)}>
                                    <Text style={{color:'#4535AA', fontSize:13, borderBottomWidth:0.5}}>추가요청이 있으시면 여기를 눌러 코멘트를 남겨주세요.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default compose(
    Api.Comment.mutations.createComment(),
    // Api.Comment.queries.listCommentsByParentID(),
    Api.Comment.subscriptions.onCreateComment()
)(ServiceItem)