import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Header, Overlay, Button, Text } from 'react-native-elements'
import { compose, withApollo } from 'react-apollo'
// import { WebView } from 'react-native-webview'

import { Api } from '../lib/api'

class DBTestScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isVisible : false,
            dbInput : '',
            idInput : '',
            attr1Input : ''
        };
    }

    overlayOn(){
        this.setState({
            isVisible:true
        })
    }

    overlayOff(){
        this.setState({
            isVisible:false
        })
    }

    dbInput(){
        // console.log(this.state.idInput)
        // console.log(this.state.skInput)
        // console.log(this.sate.attr1Input)
        let data = {
            "ID" : this.state.idInput,
            "attr1" :this.state.attr1Input
        }
        this.props.createTestType({createtesttypeinput:data})
        // this.props.createTestType({createtesttypeinput:data}).then((e) => {
        //     console.log(e)
        // })
    }

    _renderItem = ({item}) => (
        <View style={{borderWith:1, marginTop:1, marginBottom:1}}>
            <Text>{item.ID}</Text>
            <Text>{item.SORTKEY}</Text>
        </View>
    );

    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('dbtestScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log(Object.keys(this.props))
        console.log(this.props)

        return(
            <View style={{flex:1}}>
                <Header></Header>
                <Overlay
                    borderRadius={10}
                    isVisible={this.state.isVisible}
                    onBackdropPress={this.overlayOff.bind(this)}
                    windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                    overlayBackgroundColor="white"
                    width='80%'
                    height='auto'
                >
                    {/* <TextInput
                        style={{width:'100%', padding:5, height:100, borderWidth:1}}
                        multiline = {true}
                        numberOfLines = {5}
                        onChangeText = {(dbInput) => this.setState({dbInput: dbInput})}
                    /> */}
                    <TextInput
                        placeholder="ID"
                        onChangeText = {(idInput) => this.setState({idInput: idInput})}
                    />
                    <TextInput
                        placeholder="Attribute1"
                        onChangeText = {(attr1Input) => this.setState({attr1Input: attr1Input})}
                    />
                    <Button
                        type='solid'
                        title="DBINPUT"
                        onPress={this.dbInput.bind(this)}
                    />
                </Overlay>
                <Button
                    type='solid'
                    title="overlay"
                    onPress={this.overlayOn.bind(this)}
                />

                <FlatList
                    data={this.props.testTypes}
                    renderItem={this._renderItem}
                />

            </View>
        )
    }
}

export default compose(
    Api.TestType.queries.listTestTypes(),
    Api.TestType.mutations.createTestType()
)(DBTestScreen)

