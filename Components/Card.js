import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default  Card = ({data }) => {
  const navigation = useNavigation()
    return (
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop:21}}>
          {data.map((element, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('item', {
                    name: element.name,
                    Image: element.flags.png,
                    capital: element.capital,
                    region: element.region,
                    subregion: element.subregion,
                    lang: element.languages[0].name,
                    currencyName: element.currencies[0].name,
                    currencySynbol: element.currencies[0].symbol,
                  })
                }
                key={index}
                style={{
                  backgroundColor: '#EEEE',
                  width: '50%',
                  borderWidth: 1,
                  borderColor : '#FFF',
                  borderStartWidth: 1,
                  marginBottom: 21,
                  borderRadius:11,
                }}>
                <Image
                  source={{uri: `${element.flags.png}`}}
                  style={{
                    width: 100,
                    height: 51,
                    marginStart: 50,
                    marginVertical: 15,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'black',
                    marginVertical: 11,
                  }}>
                  {element.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
}
// return(
//     <View key={index} style={{backgroundColor:'#EEEEEE' , width:'50%' , borderBottomColor : "#666"  , borderBottomWidth:1 , borderStartColor:'#666' , borderStartWidth:1 , marginBottom:21 }}>
//         <Image source={{uri:`${element.flags.png}`}} style={{width:100 , height:51 , marginStart:50}}/>
//         <Text style={{textAlign:'center' , fontSize:17 , fontWeight:'bold' , color:'black' , marginVertical:11}}>{element.name}</Text>
//     </View>
// )
