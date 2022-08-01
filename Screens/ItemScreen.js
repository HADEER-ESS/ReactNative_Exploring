import React from 'react';
import {View, Text, Image, Button, TouchableOpacity, Linking, Alert} from 'react-native';
import Header from '../Components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//in class
//when send data with navigation, we recieve it in (this.props.route.params.------)
//in function
//recieved income data in route.. from it we access the params (route.params.----)
export default ItemScreen = ({route}) => {
  const Wikipedia = `https://en.wikipedia.org/wiki/${route.params.name}`;
  const openWikipedia = () => {
    Linking.canOpenURL(Wikipedia)
    .then(supported => {
      if(supported){
        Linking.openURL(Wikipedia)
      }else{
        Alert.alert("can't handel this URL")
      }
    })
  }
  return (
    <View style={{flex: 1}}>
      <Header title={route.params.name}/>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          source={{uri: `${route.params.Image}`}}
          style={{width: '100%', height: '40%'}}
        />
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            marginStart: 32,
            marginTop: 19,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Country Name:{' '}
            </Text>
            <Text style={{fontSize: 21}}>{route.params.name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Capital city:{' '}
            </Text>
            <Text style={{fontSize: 21}}>{route.params.capital}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Located in:{' '}
            </Text>
            <Text style={{fontSize: 21}}>{route.params.region}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Subregion:{' '}
            </Text>
            <Text style={{fontSize: 21}}>{route.params.subregion}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Language :{' '}
            </Text>
            <Text style={{fontSize: 21}}>{route.params.lang}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 9,
            }}>
            <Text style={{fontSize: 21, fontWeight: 'bold', color: 'black'}}>
              Currency :{' '}
            </Text>
            <Text style={{fontSize: 21}}>
              {route.params.currencyName} ({route.params.currencySynbol})
            </Text>
          </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
        <Text style={{fontSize:15 , paddingEnd:9 , color:'black'}}>To explore more visit Wikipedia:</Text>
        <TouchableOpacity 
        onPress={openWikipedia}
        style={{backgroundColor:'#5800FF' ,
        borderRadius:50 ,
        borderColor:'black',
        borderEndWidth:1 ,
        width:50 ,
        height:50 ,
        justifyContent: 'center'}}>
          <FontAwesome name='wikipedia-w' size={25} color="#fff" style={{textAlign:'center'}}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
