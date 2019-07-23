import React from 'react';
import { View, ScrollView, Picker } from 'react-native';
import { Header, Text, Button, ButtonGroup } from 'react-native-elements'

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

            ],
            buttonGroupSelectedIndex:0
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    componentDidMount(){
        this.addQuestion()
    }





    //example questionList Data
    // 0 - 주관식
    // 1 - 객관식
    // 2 - 
    // 3 - calendar
    questionList = [
        {
            type: 1,
            question: [
                'Good morning Abigail! :)',
                'Who are you going with in Seoul?'
            ],
            answerList: [
               'With lover',
               'With friends',
               'With family',
               'alone'
           ]
        },
        {
            type: 2,
            question: [
                 'Wow, very nice!',
                 'Please let me know about travel members.'
             ],
             answerList: [
                ['male', 'people'],
                ['female', 'people'],
                ['age group', 'ageGroup']
            ]
        },
        {
            type: 3,
            question: [
                'When are you going to travel?',
            ]
        },
         {
            type: 1,
            question: [
                'What kind of travel do you want?'
            ],
            answerList: [
                '다채로운 관광',
                '조용한 휴식',
                '친구들과 잊지못할 추억 만들기',
                '미슐랭 맛집 탐험대',
                '현지식 맛집 탐험대',
                '신나는 액티비티'
           ]
        },
        {
            type: 0,
            question: [
                'Thank you for letting us know.',
                'Do you have any additional requests?'
            ]
        }
    ]
    
    


    addQuestion(){
        let { qList, count } = this.state
        // console.log(this.questionList[count].question)
        this.setState({
            qList: qList.concat({question:this.questionList[count].question})
        })
        // console.log(this.state.qList, this.state.aList)
    }

    addAnswer(){
        let { aList, count } = this.state
        // if(this.questionList[count].type == 1){
        //     console.log(this.questionList[count].answerList)
        // }
        
        this.setState({
            aList: aList.concat({answer:['this is answer']})
        })
        this.setState({
            count: count+1
        })
        // console.log(this.state.qList, this.state.aList)
    }

    updateIndex (buttonGroupselectedIndex) {
        let { aList, count } = this.state
        this.setState({buttonGroupselectedIndex})
        // console.log('Answer Index : ',this.state.buttonGroupselectedIndex)
        // console.log(this.questionList[count].answerList[buttonGroupselectedIndex])
        this.setState({
            aList: aList.concat({answer:[this.questionList[count].answerList[buttonGroupselectedIndex]]})
        })
        this.setState({
            count: count+1
        })
        this.addQuestion()
    }

    showAnswerSelect(){
        let {qList, aList, count, buttonGroupselectedIndex } = this.state

        const peopleNum = [0,1,2,3,4,5,6,7,8,9]
        const ageNum = ['10~20', '20~30', '30~40', '40~50', '50~60'] 

        if(qList.length!=aList.length)
            if(this.questionList[count].type == 0)
                return <AnswerType00></AnswerType00>
            else if(this.questionList[count].type == 1)
                // return <AnswerType01 answerList={this.questionList[count].answerList}></AnswerType01>
                return (
                    <View style={{width:'100%', height:'auto'}}>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={buttonGroupselectedIndex}
                            buttons={this.questionList[count].answerList}
                        />
                    </View>
                )
            else if(this.questionList[count].type == 2)
                return (
                    <View style={{width:'100%', height:100}}>
                        {this.questionList[count].answerList.map((contact, i) => {
                            return (
                                <View key = {i}>
                                    <Picker>

                                    </Picker>
                                </View>
                            )
                        })}
                    </View>
                )
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
                <View style={{position:'absolute', bottom:0, width:'100%'}}>
                    {this.showAnswerSelect()}
                    {/* <Button onPress={this.addQuestion.bind(this)} title="addQuestion"></Button>
                    <Button onPress={this.addAnswer.bind(this)} title="addAnswer"></Button> */}
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
        <View style={{width:'100%', height:'auto'}}>
            {/* {props.answerList.map((contact, i) => {
                return (
                <Button key={i} title={contact}/>)
            })} */}
            <ButtonGroup
                buttons={props.answerList}
            />
        </View>
    )
}
const AnswerType02 = (props) => {
    console.log('AnswerType02 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 02</Text>
        </View>
    )
}
const AnswerType03 = (props) => {
    console.log('AnswerType03 showed')
    return(
        <View style={{width:'100%', height:100}}>
            <Text>This is type 03</Text>
        </View>
    )
}