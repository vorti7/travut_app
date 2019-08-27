import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify';

export default function hooksTest() {

    const [ overlay, setOverlay ] = useState(0)
    const testTypes = getTestTypesFunc()

    const [ IDString, setIDString ] = useState("")
    const [ attrString, setAttrString ] = useState("")


    console.log(testTypes)
    return (
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:5}}>
                    <TextInput
                        style={{flex:1, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(IDString) => setIDString(IDString)}
                        value={IDString}
                    />
                    <TextInput
                        style={{flex:1, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(attrString) => setAttrString(attrString)}
                        value={attrString}
                    />
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Button
                        title="Input Data"
                        onPress={() => createTestTypeFunc({"ID": IDString, "attr1":attrString})}
                    />
                </View>
            </View>
            <View style={{flex:5}}>

            </View>
        </View>
    )
}

const listTestTypes = `query getTestTypes {
    listTestTypes {
      items {
          ID
          attr1
      }
    }
}`
const createTestType = `mutation createTestType($createtesttypeinput: CreateTestTypeInput!) {
    createTestType(input: $createtesttypeinput) {
      ID
      attr1
    }
  }`

function getTestTypesFunc() {
    const [testTypes, updateTestTypes] = useState([])

    useEffect(async() => {
        try{
            const testTypeData = await API.graphql(graphqlOperation(listTestTypes))
            updateTestTypes(testTypeData.data.listTestTypes.items)
        } catch (err) {
            console.log('error : ', err)
        }
    }, [])
    return testTypes
}

async function createTestTypeFunc(inputData) {
    console.log(inputData)
    try {
      await API.graphql(graphqlOperation(createTestType, {createtesttypeinput: inputData}))
      console.log('successfully created testType')
    } catch (err) {
      console.log('error creating testType: ', err)
    }
}