import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default LandingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1 , justifyContent:'center' , backgroundColor:'#B2A4FF'}}>
        <Image source={require("../Assets/explore.png")} style={{width:"100%" , height:"50%"}}/>
        <View style={{margin:45}}>
          <Button title="let's explore" style={{borderRadius:11}} color="#ABC9FF" onPress={()=>navigation.navigate("home")}/>
        </View>
    </View>
  )
}

