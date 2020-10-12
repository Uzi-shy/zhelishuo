import React, { useState } from 'react';
import {TextInput,Image, ImageBackground,Text,View,Alert,StyleSheet,Button,TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import AntDesign from"react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import enter from './enter';
import login from './login';
import personal from './personal';
import register from './register' ;
import set from './set/set';
import gerenxx from './gerenxx';
import adpersonal from './Administrator/adpersonal';
import yiqianyue from './Administrator/qianyue_yi';
import weiqianyue from './Administrator/qianyue_wei';
import yishenhe from './Administrator/zuoping_yi';
import weishenhe from './Administrator/zuoping_wei';
import yishenhepl from './Administrator/pinglun_yi';
import weishenhepl from './Administrator/pinglun_wei';
import yichuli from './Administrator/jubao_yi';
import weichuli from './Administrator/jubao_wei';
import zpshlc from './Administrator/zuoping_look';
import zpshyilc from './Administrator/zuoping_yilook';

import zhanghaoanquan from './set/zhanghaoanquan';
import about from './set/about';
import bianjiziliao from './set/bianjiziliao';
import pingbishezhi from './set/pingbishezhi';
import tongzhishezhi from './set/tongzhishezhi';
import tongyongshezhi from './set/tongyong';
import pingjiafankui from './set/pingjiafankui';
import gexinqianming from './gexinianming';
import bianjigerenxinxi from './bianjigerenxinxi';
import map from '../zheliyouliao/map';
import renzheng from './renzheng';
import yonghuxieyi from './yonghuxieyi';
//黑夜模式
import personalnight from './personalnight';


const Stack = createStackNavigator();
const Topna = createMaterialTopTabNavigator();
const Top = createMaterialTopTabNavigator();

function qygl ({navigation}){
  return(
    <View>
      <View style={{flexDirection:'row',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                navigation.goBack();
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15,marginLeft:140}}>签约管理</Text>
            
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Topna.Navigator>
        <Topna.Screen name="已签约"   component={yiqianyue} />
        <Topna.Screen name="未签约"   component={weiqianyue} />  
        </Topna.Navigator>
          </View>
    </View>
  );
};


function zpsh ({navigation}){
  return(
  <View>
      <View style={{flexDirection:'row',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                navigation.goBack();
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15,marginLeft:140}}>作品审核</Text>
            
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Top.Navigator>
        <Top.Screen name="已审核"   component={yishenhe} />
        <Top.Screen name="未审核"   component={weishenhe} />  
        </Top.Navigator>
          </View>
    </View>
    );
};

function plsh ({navigation}){
  return(

 
  <View>
      <View style={{flexDirection:'row',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                navigation.goBack();
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15,marginLeft:140}}>评论审核</Text>
            
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Topna.Navigator>
        <Topna.Screen name="已审核"   component={yishenhepl} />
        <Topna.Screen name="未审核"   component={weishenhepl} />  
        </Topna.Navigator>
          </View>
    </View>
   );
};
function jbcl ({navigation}){
  return(
  <View>
      <View style={{flexDirection:'row',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                navigation.goBack();
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15,marginLeft:140}}>举报处理</Text>
            
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Topna.Navigator>
        <Topna.Screen name="已处理"   component={yichuli} />
        <Topna.Screen name="未处理"   component={weichuli} />  
        </Topna.Navigator>
          </View>
    </View>
    );
};



export default function App(){
  
  return(
    
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">

    <Stack.Screen name="浙里说账号登录" component={login}/>
    <Stack.Screen name="用户个人中心" component={personal}/>
    <Stack.Screen name="用户个人中心黑夜模式" component={personalnight}/>
    <Stack.Screen name="注册" component={register}/>
    <Stack.Screen name="设置" component={set}/>
    <Stack.Screen name="个性签名" component={gexinqianming}/>
    <Stack.Screen name="个人信息" component={gerenxx}/>
    <Stack.Screen name="编辑个人资料" component={bianjigerenxinxi}/>
    <Stack.Screen name="地图" component={map}/>
    <Stack.Screen name="认证" component={renzheng}/>


    <Stack.Screen name="管理员个人中心" component={adpersonal}/>

    <Stack.Screen name="签约管理" component={qygl}/>

    <Stack.Screen name="作品审核" component={zpsh}/>
    <Stack.Screen name="查看作品审核" component={zpshlc}/>
    <Stack.Screen name="管理已审核作品" component={zpshyilc}/>
    

    <Stack.Screen name="评论审核" component={plsh}/>

    <Stack.Screen name="举报处理" component={jbcl}/>

    <Stack.Screen name="账号安全" component={zhanghaoanquan}/>

    <Stack.Screen name="通用设置" component={tongyongshezhi}/>

    <Stack.Screen name="通知设置" component={tongzhishezhi}/>

    <Stack.Screen name="屏蔽设置" component={pingbishezhi}/>

    <Stack.Screen name="编辑资料" component={bianjiziliao}/>

    <Stack.Screen name="评价反馈" component={pingjiafankui}/>

    <Stack.Screen name="关于浙里说" component={about}/>
    
    <Stack.Screen name="用户协议" component={yonghuxieyi}/>




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