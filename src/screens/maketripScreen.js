import React from 'react';
import { View, ScrollView, Picker, Alert } from 'react-native';
import { Header, Text, Button, ButtonGroup, Input } from 'react-native-elements'
import { Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { Api } from '../lib/api'
import { compose, withApollo } from 'react-apollo'

import { Icon } from 'react-native-eva-icons';

import AuthClass from '../lib/auth'
// import {Navigator, ScreenConst} from '../navigation'


class MaketripScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            count:0,
            qList:[
                
            ],
            aList:[

            ],

            buttonGroupSelectedIndex:0,
            maleNum:'',
            femaleNum:'',
            ageGroup:'',

            // currentDate:'',
            // minDate:'',
            // maxDate:'',

            calendarDate: {},

            textInput:''
        };
        this.updateIndex = this.updateIndex.bind(this)
        this.setCalendar = this.setCalendar.bind(this)
        this.addCalendarData = this.addCalendarData.bind(this)
    }

    today = new Date()
    componentDidMount(){
        this.addQuestion(0)
        // AuthClass.getTravelerInfo()
        // .then(success => {
        //     // Alert.alert(success)
        // })
        // .catch(err => Alert.alert(err))
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
            answerType:'companion',
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
             answerType:'companionInfo',
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
            ],
            answerType:'timeInfo'
        },
         {
            type: 1,
            question: [
                'What kind of travel do you want?'
            ],
            answerType:'travelType',
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
            ],
            answerType:'extra'
        }
    ]
    
    completeTripRequest(){
        AuthClass.getTravelerInfo()
        .then(success => {
            // input = {
            //     "createtriprequestinput":  {
            //         "ID" : success,
            //         "locationID" : "LO00000000",
            //         "status" : "status",
            //         "travelerIDs" : [success],
            //         "tripReqInfo" : JSON.parse(this.state.aList),
            //         "recipientsCnt" : 0,
            //         "checkedIDs" : [],
            //         "participantsIDs" : [],
            //         "refusersIDs" : [],
            //         "regIP" : "127.0.0.1",
            //         "updateIP" : "127.0.0.1"
            //     }
            // }

            Alert.alert(
                'Trip Request successfully created!',
                'Would you like to send Trip Request to your trip Provider?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => {console.log('OK Pressed')

                                                let jsonData = {}
                                                this.state.aList.map((contact, i) => {
                                                    // jsonData[contact.answerType] = contact.answer
                                                    console.log(contact.type)
                                                    console.log(contact.answer)
                                                    jsonData[contact.type] = contact.answer
                                                });
                                                // console.log(jsonData)
                                                let data = {
                                                    "ID" : success,
                                                    "locationID" : "LO00000000",
                                                    "status" : "status",
                                                    "travelerIDs" : [success],
                                                    "tripReqInfo" : JSON.stringify(jsonData),
                                                    "recipientsCnt" : 0,
                                                    "checkedIDs" : [],
                                                    "participantsIDs" : [],
                                                    "refusersIDs" : [],
                                                    "regIP" : "127.0.0.1"
                                                };
                                                console.log(data)
                                                // console.log(JSON.stringify(this.state.aList))
                                                // console.log("{\"a\":1, \"b\":3, \"string\": 234}")
                                               this.props.createTripRequest({input:data}).then((e) => {
                                                   console.log(e);
                                               })
                                            }
                  },
                ],
                {cancelable: false},
            );
        })
        .catch(err => Alert.alert(err))
        
        
    }


    addQuestion(count){
        if (count>=this.questionList.length){
            // make trip complete!
            this.completeTripRequest()
            return
        }
        let { qList } = this.state
        // console.log(this.questionList[count].question)
        this.setState({
            qList: qList.concat({question:this.questionList[count].question})
        })
        // console.log(this.state.qList, this.state.aList)
    }

    // addAnswer(){
    //     let { aList, count } = this.state
    //     // if(this.questionList[count].type == 1){
    //     //     console.log(this.questionList[count].answerList)
    //     // }
        
    //     this.setState({
    //         aList: aList.concat({answer:['this is answer']})
    //     })
    //     this.setState({
    //         count: count+1
    //     })
    //     // console.log(this.state.qList, this.state.aList)
    // }

    updateIndex (buttonGroupselectedIndex) {
        let { aList, count } = this.state
        this.setState({buttonGroupselectedIndex})
        // console.log('Answer Index : ',this.state.buttonGroupselectedIndex)
        // console.log(this.questionList[count].answerList[buttonGroupselectedIndex])
        this.setState({
            aList: aList.concat({type:this.questionList[count].answerType, answer:[this.questionList[count].answerList[buttonGroupselectedIndex]]})
        })
        this.setState({
            count: count+1
        })
        this.addQuestion(count+1)
    }

    setCalendar(checkedDate){
        let { calendarDate } =this.state
        // var obj = {}
        // obj[checkedDate.year+'-'+checkedDate.month+'-'+checkedDate.day] = {marked:true}
        calendarDate[checkedDate.dateString] = {selected: true, selectedColor: '#4535AA', textColor: '#FFFFFF'}
        this.setState({
            calendarDate: calendarDate
        })
        console.log(calendarDate)
        // console.log(this.state.calendarDate)
    }

    addCalendarData(){
        let { aList, count, calendarDate } = this.state
        this.setState({
            aList: aList.concat({type:this.questionList[count].answerType, answer:Object.keys(calendarDate)})
        })
        this.setState({
            count: count+1
        })
        this.addQuestion(count+1)
    }

    addTextData(){
        let { aList, count } = this.state
        this.setState({
            aList: aList.concat({type:this.questionList[count].answerType, answer:[this.state.textInput]})
        })
        this.setState({
            count: count+1
        })
        this.addQuestion(count+1)
    }

    showAnswerSelect(){
        let {qList, aList, count, buttonGroupselectedIndex } = this.state

        const peopleNum = ['0','1','2','3','4','5','6','7','8','9']
        const ageNum = ['10~20', '20~30', '30~40', '40~50', '50~60'] 

        if(qList.length!=aList.length)
            if(this.questionList[count].type == 0)
                return (
                    <View style={{backgroundColor:'#FFF', flexDirection:'row'}}>
                        <Input containerStyle={{flex:1}} placeholder='' onChangeText={(textInput) => this.setState({textInput: textInput})}></Input>
                        <Button title='submit' onPress={this.addTextData.bind(this)}></Button>
                    </View>
                )
            else if(this.questionList[count].type == 1)
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
                    <View style={{width:'100%', height:'auto', flexDirection:'column', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <Text>Male</Text>
                                <Picker
                                    selectedValue={this.state.maleNum}
                                    style={{height: 50, width: 100}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({maleNum: itemValue})
                                    }
                                >
                                    {peopleNum.map((contact, i) => {
                                        return (
                                            <Picker.Item key={i} label={contact} value={contact}/>
                                        )
                                    })}
                                </Picker>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text>Female</Text>
                                <Picker
                                    selectedValue={this.state.femaleNum}
                                    style={{height: 50, width: 100}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({femaleNum: itemValue})
                                    }
                                >
                                    {peopleNum.map((contact, i) => {
                                        return (
                                            <Picker.Item key={i} label={contact} value={contact}/>
                                        )
                                    })}
                                </Picker>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text>Age Group</Text>
                                <Picker
                                    selectedValue={this.state.ageGroup}
                                    style={{height: 50, width: 100}}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ageGroup: itemValue})
                                    }
                                >
                                    {ageNum.map((contact, i) => {
                                        return (
                                            <Picker.Item key={i} label={contact} value={contact}/>
                                        )
                                    })}
                                </Picker>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Button onPress={()=>{
                                this.setState({
                                    aList: aList.concat({type:this.questionList[count].answerType, answer:["I don't know..."]})
                                })
                                this.setState({
                                    count: count+1
                                })
                                this.addQuestion(count+1)
                            }} title="I don't know"/>
                            <Button onPress={()=>{
                                this.setState({
                                    aList: aList.concat({type:this.questionList[count].answerType, answer:['Male : '+this.state.maleNum, 'Female : '+this.state.femaleNum, 'Age Group : '+this.state.ageGroup]})
                                })
                                this.setState({
                                    count: count+1
                                })
                                this.addQuestion(count+1)
                            }} title='Submit'/>
                        </View>
                    </View>
                )
            else if(this.questionList[count].type == 3)
                return (
                    <View>
                        <Calendar
                            current={new Date()}
                            minDate={new Date((new Date()).getTime() + (24 * 60 * 60 * 1000))}
                            maxDate={new Date((new Date()).getTime() + (100 * 24 * 60 * 60 * 1000))}
                            onDayPress={(day) => {this.setCalendar(day)}}
                            markedDates={this.state.calendarDate}
                        />
                        <View>
                            <Button
                                onPress={this.addCalendarData.bind(this)}
                                title='submit'
                            />
                        </View>
                    </View>
                )
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
                <Header
                    containerStyle={{backgroundColor: 'transparent', height:'5%', top : '3%', marginBottom:'8%'}}
                    leftComponent={<Icon name='plus-square-outline' width={30} height={30}/>}
                    centerComponent={{ text: 'Swipe down to return', style: { color: '#000' } }}
                    rightComponent={<Icon name='close-square-outline' width={30} height={30}/>}
                />
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

export default Api.TripRequest.mutations.createTripRequest() (MaketripScreen)
