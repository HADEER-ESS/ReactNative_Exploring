import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen import
import HomeScreen from "./Screens/HomeScreen" ;
import ItemScreen from "./Screens/ItemScreen";
const Stack = createNativeStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="item" component={ItemScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}