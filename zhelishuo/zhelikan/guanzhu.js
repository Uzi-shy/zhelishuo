import React, { Fragment,Component,useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListFooterComponent,
  TouchableNativeFeedback,
  Dimensions,
  Alert,
} from 'react-native';
const { width, height } = Dimensions.get("window");
// import {ip} from '../server/server';

import EvilIcons from"react-native-vector-icons/EvilIcons";
import Ionicons from"react-native-vector-icons/Ionicons";
import Feather from"react-native-vector-icons/Feather";
const ip="http://121.196.27.141:3000";
// const ip="http://192.168.50.30:3000";

export default App = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [isdata, setData] = useState([]);

  useEffect(() => {
    fetch(ip+'/index/guanzhu')

      .then((response) => response.json())
      .then((json) => setData(json.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  

  return (
      <View style={{ flex: 1, padding: 24 }}>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
          showsVerticalScrollIndicator = {false}
            data={isdata}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                
            
            
            <View>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: item.toux}} style={{width: 47, height: 47,borderRadius:400}}/>
          <View>
          <Text style={{fontSize:20, }}>   {item.username} </Text>
          <Text style={{fontSize:12, }}>     {item.day} </Text>
          <View style={{ elevation: 5,backgroundColor: 'white', height:250,  width:280, marginRight:15,   marginLeft:15,   marginBottom:15,   alignItems:'center',}}>
            <TouchableNativeFeedback onPress={()=>{navigation.navigate('关注细节页',{
              username:item.username,
              toux:item.toux,
              day:item.day,
              pic:item.pic,
              txt:item.txt,
              good:item.good,
              pinglun:item.pinglun,
              
              quanwen:item.quanwen,
            }) }}>
            <Image     source={{uri: item.pic}} style={{width: '100%', height: '65%'}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:18}}>{item.txt}</Text>
            <View style={{width:'100%', height:'15%',position:'absolute', flexDirection: 'row' ,padding:5,justifyContent: 'space-between',bottom:0}}>{/* 功能栏*/}
            <View style={{flexDirection:"row",marginLeft:30}}>
              <TouchableNativeFeedback style={{}} onPress={()=>{ }}>
              <EvilIcons name={'comment'} size={32} />
            </TouchableNativeFeedback>
             <Text>{item.good}</Text>
            </View>
            <View style={{flexDirection:"row",marginRight:30}}> 
              <TouchableNativeFeedback onPress={()=>{ }}>
              <Ionicons name={'md-heart-outline'} size={29} />
            </TouchableNativeFeedback>
            <Text>{item.pinglun}</Text>

            </View>
            
           
           
            </View>
            
          </View>
          
          </View>
          
        </View>
        
    </View>
    <View style={{ right: 2, height: 0.5, backgroundColor: '#7B7B7B', marginTop: 10,marginBottom:10,width:width }} />
            </View>
            
            )
          }
          />
        )}
        
        
    </View>
  );
};
