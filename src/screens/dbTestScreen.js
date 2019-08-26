import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Header, Overlay, Button, Text } from 'react-native-elements'
import { compose, withApollo, graphql } from 'react-apollo'
// import { WebView } from 'react-native-webview'

// import { graphqlMutation } from 'aws-appsync-react'

import { Api } from '../lib/api'

// import { createTestType } from '../lib/api/testtype/mutations'
// import { listTestTypes } from '../lib/api/testtype/queries'
// import gql from 'graphql-tag'

// const CreateTestType = gql`mutation createTestType($createtesttypeinput: CreateTestTypeInput!) {
//     createTestType(input: $createtesttypeinput) {
//       ID
//       attr1
//     }
//   }`

// const ListTestTypes = gql`query getTestTypes {
//     listTestTypes {
//       items {
//           ID
//           SORTKEY
//           attr1
//       }
//     }
//   }`

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
            // "SORTKEY": "sgsag",
            "attr1" :this.state.attr1Input
        }
        this.props.onAdd({createtesttypeinput:data})
        console.log('Input : ',data)
        // this.props.createTestType({createtesttypeinput:data}).then((e) => {
        //     console.log(e)
        // })
    }

    _renderItem = ({item}) => (
        <View style={{borderWith:1, marginTop:1, marginBottom:1}}>
            <Text>{item.ID}</Text>
            <Text>{item.attr1}</Text>
            {/* <Text>{item.SORTKEY}</Text> */}
        </View>
    );

    render(){
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log('dbtestScreen called')
        console.log('------------------------------------------------------------------------------------------------------------')
        console.log(Object.keys(this.props))
        console.log(this.props.testTypes)
        

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
    
    // graphql(ListTestTypes, {
    //     options: {
    //         fetchPolicy: 'cache-and-network'
    //     },
    //     props: props => ({
    //         testTypes: props.data.listTestTypes ? props.data.listTestTypes.items : []
    //     })
    // }),
    // graphqlMutation(CreateTestType, ListTestTypes, 'TestType')
)(DBTestScreen)

