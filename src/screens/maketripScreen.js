import React from 'react';
import {View, ScrollView} from 'react-native';
import { Header, Text, Button } from 'react-native-elements'

// import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'


export default class MaketripScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count:0,
            qList:[
                
            ],
            aList:[

            ]
        };
    }

    componentDidMount(){
        this.addQuestion()
    }

    //example questionList Data
    questionList = [
        {
            type: 0,
            question: [
                'Thanks!',
                'Question00'
            ]
        },
        {
            type: 1,
            question: [
                 'Hello Abigail!',
                 'Question01'
             ],
             ansswerList: [
                'Answer01',
                'Answer02',
                'Answer03'
            ]
        },
        {
            type: 2,
            question: [
                'Thanks!',
                'Question02'
            ]
        },
         {
            type: 3,
            question: [
                'Thanks!',
                'Question03'
            ]
        }
    ]
    
    
    addQuestion(){
        let { qList, count } = this.state
        // console.log(this.questionList[count].question)
        this.setState({
            qList: qList.concat({question:this.questionList[count].question})
        })
        console.log(this.state.qList, this.state.aList)
    }

    addAnswer(){
        let { aList, count } = this.state
        this.setState({
            aList: aList.concat({answer:['this is answer']})
        })
        this.setState({
            count: count+1
        })
        console.log(this.state.qList, this.state.aList)
    }

    showAnswerSelect(){
        let {qList, aList, count} = this.state
        if(qList.length!=aList.length)
            if(this.questionList[count].type == 0)
                return <AnswerType00></AnswerType00>
            else if(this.questionList[count].type == 1)
                return <AnswerType01></AnswerType01>
            else if(this.questionList[count].type == 2)
                return <AnswerType02></AnswerType02>
            else if(this.questionList[count].type == 3)
                return <AnswerType03></AnswerType03>
        else
            return<View></View>
    }

    showList(){
        let { qList, aList, count } = this.state
        let returnList = []
        for( let i = 0; i<count+1; i++ ){
            if(qList.length>=i+1){
                returnList.push(<LeftBubble key={'q'+i} aQuestion={qList[i]}></LeftBubble>)
            }
            if(aList.length>=i+1){
                returnList.push(<RightBubble key={'a'+i} aAnswer={aList[i]}></RightBubble>)
            }
        }
        return returnList
    }

    render(){
        console.log('maketripScreen called')
        
        return(
            <View style={{flex:1, alignItems: 'center'}}>
                <Header></Header>
                <ScrollView style={{width:'100%', padding:'3%'}}>
                    {this.showList()}
                </ScrollView>
                <View style={{position:'absolute', bottom:0, width:'100%', backgroundColor:'red'}}>
                    {this.showAnswerSelect()}
                    <Button onPress={this.addQuestion.bind(this)} title="addQuestion"></Button>
                    <Button onPress={this.addAnswer.bind(this)} title="addAnswer"></Button>
                </View>
            </View>
        )
    }
}

const LeftBubble = (props) => {
    return(
        <View style={{width:'100%', alignItems:'flex-start'}}>
            {props.aQuestion.question.map((contact, i) => {
                return (<View style={{width:'auto',
                                        height:'auto',
                                        padding:10,
                                        margin:4,
                                        borderRadius: 10,
                                        backgroundColor: '#FFFFFF',
                                        borderWidth: 0.5,
                                        borderColor: '#000000',
                                        shadowOpacity: 1,
                                        shadowRadius: 2,
                                        shadowOffset: {
                                        height: 10,
                                        width: 10
                                        },
                                        elevation:5
                                    }} key={i}>
                                    <Text>{contact}</Text>
                        </View>)
            })}
        </View>
    )
}

const RightBubble = (props) => {
    return(
        <View style={{width:'100%', alignItems:'flex-end'}}>
            {props.aAnswer.answer.map((contact, i) => {
                return (<View style={{width:'auto',
                                        height:'auto',
                                        padding:10,
                                        margin:4,
                                        borderRadius: 10,
                                        backgroundColor: '#4535AA',
                                        borderWidth: 0.5,
                                        borderColor: '#000000',
                                        shadowOpacity: 1,
                                        shadowRadius: 2,
                                        shadowOffset: {
                                        height: 10,
                                        width: 10
                                        },
                                        elevation:5
                                    }} key={i}>
                                    <Text style={{color:'#FFFFFF'}}>{contact}</Text>
                        </View>)
            })}
        </View>
    )
}

const AnswerType00 = (props) => {
    console.log('AnswerType00 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 00</Text>
        </View>
    )
}
const AnswerType01 = (props) => {
    console.log('AnswerType01 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 01</Text>
        </View>
    )
}
const AnswerType02 = (props) => {
    console.log('AnswerType02 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 01</Text>
        </View>
    )
}
const AnswerType03 = (props) => {
    console.log('AnswerType03 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 01</Text>
        </View>
    )
}