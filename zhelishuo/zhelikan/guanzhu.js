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
  Alert
} from 'react-native';

import AntDesign from"react-native-vector-icons/AntDesign";
import Feather from"react-native-vector-icons/Feather";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isdata, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/index/guanzhu')

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
          <Text style={{fontSize:22,fontFamily: 'yegenyou'}}>   {item.username} </Text>
          <Text style={{fontSize:12,fontFamily: 'yegenyou'}}>     {item.day} </Text>
          <View style={{ elevation: 5,backgroundColor: 'white', height:250,  width:280, marginRight:15,   marginLeft:15,   marginBottom:15,   alignItems:'center',}}>
            <TouchableNativeFeedback onPress={()=>{ Alert.alert("进入诗歌页面");}}>
            <Image     source={{uri: item.pic}} style={{width: '100%', height: '65%'}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:20,fontFamily: 'yegenyou'}}>{item.txt}</Text>
            <View style={{width:'100%', height:'15%',position:'absolute', flexDirection: 'row' ,padding:5,justifyContent: 'space-between',bottom:0}}>{/* 功能栏*/}
            <TouchableNativeFeedback onPress={()=>{ Alert.alert("评论+1");}}>
            <Feather name={'message-square'} size={25}/>
            </TouchableNativeFeedback>
            <Text>{item.good}</Text>
            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
            <AntDesign name={'like2'} size={25}/>
            </TouchableNativeFeedback>
            <Text>{item.pinglun}</Text>
            </View>
          </View>
          </View>
        </View>
    </View>
            </View>
            
            )
          }
          />
        )}
        
        
    </View>
  );
};
