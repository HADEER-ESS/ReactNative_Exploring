import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({title}){
    const navigation = useNavigation()
    const backToHome = () => {  
        navigation.goBack();
    }
    return(
        <View style={{height:60 , backgroundColor:'#fff' , alignItems:'center' , justifyContent:'center' , paddingHorizontal:25}}>
        {
            title == "Hello World" 
            ?
            <Text style={{fontSize:25 , fontWeight:'bold' , color:'#31087B'}}>{title}</Text>
            :
            <View style={{flex:1 ,width:'100%' , justifyContent:'space-between' ,flexDirection:'row' , alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{backToHome()}} >
                    <MaterialIcons name="arrow-back" color='#666' size={25}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                <Text style={{fontSize:21 , fontWeight:'bold' , color:'#31087B' , textAlign:'center'}}>{title}</Text>
                </View>
            </View>
        }
            
        </View>
    )
}