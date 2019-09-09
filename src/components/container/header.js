import React, { useState } from 'react';
import { View, Platform } from 'react-native';
// import { Header, Image, Input, Text, SearchBar } from 'react-native-elements'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function header(props){
    return (
        <View style={{...props.style, flex:1, flexDirection:'row', paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0}}>
            <View style = {{flex:1}}>{props.leftContainer}</View>
            <View style = {{flex:1}}>{props.centerContainer}</View>
            <View style = {{flex:1}}>{props.rightContainer}</View>
        </View>
    )
}