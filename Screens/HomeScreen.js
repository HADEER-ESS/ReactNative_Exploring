import React from "react";
import {  TouchableWithoutFeedback, View } from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";


export default class HomeScreen extends React.Component{
    render(){
    return(
        <View style={{flex:1}}>
            <Header title={"Hello World"}/>
            <Search/>                 
        </View>
        )
    }
}