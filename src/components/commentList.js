import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Header, Text, Avatar, Button, ButtonGroup, Input } from 'react-native-elements'


export default class CommentListComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    _renderItem = ({item}) => (
        <CommentItem
            item={item}
        />
    );


    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('commentComponent called')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log(this.props.comments)

        return(
            <View style={{flex:1}}>
                <FlatList
                    ref="flatList"
                    data={this.props.comments}
                    renderItem={this._renderItem}
                    providerID={this.props}
                />
            </View>
        )
    }
}

const CommentItem = (props) => {
    commentWriter = 'Me'
    backgroundColor = '#FFF'
    if(props.item.userID.split('#')[0] == props.providerID ){
        commentWriter = 'Host'
        backgroundColor = '#EBE8FA'
    }
    regTime = remainTime(props.item.regDate)
    return (
        <View>
            <View style={{width:'90%', marginLeft:'5%', marginRight:'5%', paddingBottom:3, flexDirection:'row'}}>
                <Text style={{color:'#4535AA'}}>{commentWriter}</Text>
                <Text style={{color:'#AEA9C9'}}> / {regTime}</Text>
            </View>
            <View style={{width:'90%', marginLeft:'5%', marginRight:'5%', padding:5, borderRadius:5, backgroundColor:'#FFF'}}>
                <Text style={{color:'#4535AA'}}>{props.item.contents}</Text>
            </View>
        </View>
    )
}

const remainTime = (regDate) => {
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