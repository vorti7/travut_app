import React from 'react';
import { compose } from 'react-apollo'

import { View, Switch } from 'react-native';
import { Text } from 'react-native-elements'
import { Api } from '../lib/api'
import { Icon } from 'react-native-eva-icons';

class ServiceItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            switchState:false
        };
    }

    switchToggle(){
        this.setState({switchState:!this.state.switchState})
    }

    render(){
        console.log(this.props.parentID)
        console.log(this.props.comments)
        // console.log(this.props.service)
        serviceInfo = JSON.parse(JSON.parse(this.props.service))
        // console.log(serviceInfo)
        return(
            <View style={{height:'auto', alignItems:'center'}}>
                <View style={{width:'90%', flexDirection:'column'}}>
                    <View style={{paddingTop:20, paddingBottom:5, flexDirection:'row'}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#4535AA'}}>Service Name</Text>
                        <View style={{flex:1}}></View>
                        <Switch
                            onValueChange= {this.switchToggle.bind(this)}
                            value={this.state.switchState}
                        />
                    </View>
                    <View style={{minHeight:30, backgroundColor:'#EBE8FA', borderRadius:10}}>
                        <View>
                            <View style={{minHeight:30, padding:10}}>
                                <View style={{padding:10}}>
                                    <Text>{serviceInfo.content}</Text>
                                </View>
                                <View style={{backgroundColor:'#FFF', padding:10, flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                                        <Text>{serviceInfo.priceDesc}</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                                        <Text>${serviceInfo.priceAmount}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{height:30, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Icon
                                    name='message-square-outline'
                                    width={18}
                                    height={18}
                                    fill='#4535AA'
                                />
                                <Text style={{color:'#4535AA', fontSize:13, borderBottomWidth:0.5}}>추가요청이 있으시면 여기를 눌러 코멘트를 남겨주세요.</Text>
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
    Api.Comment.queries.listCommentsByParentID()
)(ServiceItem)