import React, { useState } from 'react';
import {TextInput,Image, ImageBackground,Text,View,Alert,StyleSheet,Button,TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import AntDesign from"react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import enter from './enter';
import login from './login';
import personal from './personal';
import register from './register' ;
import set from './set';
import gerenxx from './gerenxx';


const Stack = createStackNavigator();


function panduandengluzhuangtai(){
  
}

export default function App(){
  
  return(
    
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">

    <Stack.Screen name="浙里说账号登录" component={login}/>
    <Stack.Screen name="个人中心" component={personal}/>
    <Stack.Screen name="注册" component={register}/>
    <Stack.Screen name="设置" component={set}/>
    <Stack.Screen name="个人信息" component={gerenxx}/>


    </Stack.Navigator>
    </NavigationContainer>

  );
}






// function register({navigation}){
  


//   return (
//       <View>
//        <ImageBackground style={{width: '100%', height: '100%',alignItems:'center'}} source={require('E:/ad/zhelishuo/img/仙鹤.jpg')}>
//        <TouchableWithoutFeedback 
//         style={{}}
//           onPress={() => {
//             {     navigation.push('进入') }
//           }}>
//          <View style={{flexDirection:'row',padding:5,marginTop:10,left:5,width:"100%"}}>
//          <Ionicons name={'arrow-back'} size={55} color={'#3C3C3C'}/>
//           </View>
//           </TouchableWithoutFeedback>
//           <Image source={require('E:/ad/zhelishuo/img/logo1.png' )} style={ {width:240, height: 240,marginTop:-40}} />
//         <Text style={{fontSize:42,fontFamily: 'yegenyou',color:'#3C3C3C',marginTop:-22,marginBottom:20}}>诗情画意 在浙里说</Text>



//         <View >
//         <TouchableWithoutFeedback 
//         style={{}}
//           onPress={() => {
//           alert('OK'),
//           navigation.push("浙里说账号登录");


//           }}>
//          <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',padding:5,marginBottom:10}}>
//            <FontAwesome name={'hand-o-right'} size={27} color={'#d0d0d0'}/>
//           <Text style={{fontSize:30,fontFamily: 'hyjianti',color:'#3C3C3C',marginLeft:5}}>浙里说账号登录</Text>
          
//           </View>
//           </TouchableWithoutFeedback>

//           <TouchableWithoutFeedback 
//         style={{}}
//           onPress={() => {
//           alert('OK')
//           }}>
//          <View style={{flexDirection:'row',padding:5,marginBottom:10}}>
//          <FontAwesome name={'weixin'} size={27} color={'#d0d0d0'}/>
          
//           </View>
//           </TouchableWithoutFeedback>


//           <TouchableWithoutFeedback 
//         style={{}}
//           onPress={() => {
//           alert('OK')
//           }}>
//          <View style={{flexDirection:'row',padding:5,marginBottom:10}}>
//          <AntDesign name={'QQ'} size={27} color={'#d0d0d0'}/>
          
//           </View>
//           </TouchableWithoutFeedback>


//           <TouchableWithoutFeedback 
//         style={{}}
//           onPress={() => {
//           alert('OK')
//           }}>
//          <View style={{flexDirection:'row',padding:5,marginBottom:10}}>
//          <FontAwesome name={'weibo'} size={27} color={'#d0d0d0'}/>
          
//           </View>
//           </TouchableWithoutFeedback>
//           </View> 
//          </ImageBackground>

//          </View>
//   );
// }

// const styles = StyleSheet.create({

//   one:{//主视图
//     flex:1, 
    
//     alignItems: 'center',


//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',

//   }
// });