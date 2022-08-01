import React, { useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from './Card';

export default Search = () => {
  const [data , setData] = useState([])
  const [input , setInput] = useState(null)
  const [open , setOpen] = useState(0);
  const [searchData , setSearchData] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(resData => setData(resData))
    .catch(err => console.log("search fetch error.. " , err))
  },[])
  const renderChanged = (val)=>{
    setInput(val)
    setOpen(1)
    let capitalizeVal = val.charAt(0).toUpperCase() + val.slice(1)
    let newData = data.filter((item)=>{
      return item.name.includes(capitalizeVal)
    });
    setSearchData(newData)
  }

  return (
    <TouchableWithoutFeedback onPress={()=>setOpen(0)}>
    <View style={{flex:1}}>
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
      <MaterialIcons name='search' size={19} color="#666" style={{marginEnd:7}}/>
      <TextInput placeholder="Search by country name"
      value={input}
      onChangeText={(val) => renderChanged(val)}
      autoCapitalize='none'
      />
      </View>
      <ScrollView nestedScrollEnabled={true} style={{flex:1}}>
      {
        open == 0?
        <Card data={data}/> :
      <Card data={searchData}/>
      }
      
      </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};
