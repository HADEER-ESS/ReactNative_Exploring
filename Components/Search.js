import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { InputContext } from '../Provider/Provider';
import Card from './Card';

export default Search = () => {
  const {input , setInput , ready , setReady} = useContext(InputContext)
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(0);
  const [searchData, setSearchData] = useState([]);

  //fetching data in class by using hock
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.log('search fetch error.. ', err));
    setReady(1)
  }, []);

  //render data that i searching for
  const renderChanged = val => {
    setInput(val);
    setOpen(1);
    let capitalizeVal = val.charAt(0).toUpperCase() + val.slice(1);
    let newData = data.filter(item => {
      return item.name.includes(capitalizeVal);
    });
    setSearchData(newData);
    setInput(null);
    if(open === 0){
      setInput('')
    }else{
      setInput(val)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(0)}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#666',
            borderWidth: 1,
            borderRadius: 7,
            backgroundColor: '#fff',
            paddingHorizontal: 17,
            marginHorizontal: 19,
          }}>
          <MaterialIcons
            name="search"
            size={19}
            color="#666"
            style={{marginEnd: 7}}
          />
          <TextInput
            placeholder="Search by country name"
            value={input}
            onChangeText={val => renderChanged(val)}
            autoCapitalize="none"
          />
        </View>
        {ready === 0 ?(
          <ActivityIndicator color="#B2A4FF" size="large" style={{justifyContent:'center' , alignItems:'center'}} />
        ) : (
          <ScrollView nestedScrollEnabled={true} style={{flex: 1}}>
            {open == 0 || input==='' ? <Card data={data}/> : <Card data={searchData}/>}
          </ScrollView>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
