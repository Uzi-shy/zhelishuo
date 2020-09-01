import * as React from 'react';
// import {createAppContainer} from react-navigation;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text,TouchableWithoutFeedback } from 'react-native';
//固定
import{KeyboardAvoidingView, Platform}from 'react-native';

//icon
import FontAwesome from"react-native-vector-icons/FontAwesome";
import Ionicons from"react-native-vector-icons/Ionicons";
import Fontisto from"react-native-vector-icons/Fontisto";
import Entypo from"react-native-vector-icons/Entypo";
import AntDesign from 'react-native-vector-icons/AntDesign';

//浙里看

import Homepage from "./zhelikan/HomePage";
import guanzhu from "./zhelikan/guanzhu";
import guanzhuxijie from "./zhelikan/guanzhuxijie";


//浙里说
import zhelishuosearch from './zhelishuo/search';
import zhelishuoshici from './zhelishuo/shici';
import zhelishouxiandaishi from './zhelishuo/xiandaishi';
import zhelishouxiqu from './zhelishuo/xiqu';
import zhelishuohuazuo from './zhelishuo/huazuo';
import zhelishuoshufadazuo from './zhelishuo/shufadazuo';
import zhelishuomrdj from './zhelishuo/mingrendajia';
import zhelishuoqitawenxue from './zhelishuo/qitawenxue';


//在浙里说
import plus from './src/plus';



//浙里有料
import zheliyouliao from './zheliyouliao/zheliyouliao';

import search from './zheliyouliao/search/search';

import shirenHearder from "./zheliyouliao/shiren/shirenHearder";
import mjjieshao from './zheliyouliao/mingju/mjjieshao';
import mingjujieshaoshiren from './zheliyouliao/mingju/mingjujieshaoshiren';
import mingju from './zheliyouliao/mingju/mingju';

import huazuona from './zheliyouliao/huazuo/huazuopxnavigation';
import zuozhexj from './zheliyouliao/huazuo/zuozhexijie';
import quanbuxj from './zheliyouliao/huazuo/quanbuxijie';
import fenleixj from './zheliyouliao/huazuo/fenleixijie';
import quanbu from './zheliyouliao/huazuo/quanbu';

import fenlei from './zheliyouliao/huazuo/huazuofenlei';

import zuozhe from './zheliyouliao/huazuo/zuozhe';


//个人中心


import Setting from './gerenzhongxin/register';
import zhelishuo from './zhelishuo/zhelishuo';

import enter2 from './gerenzhongxin/enter2';
import zhelikan from './zhelikan/zhelikan';
import gushici from './zhelishuo/shici';

//定义堆栈变量
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Topna = createMaterialTopTabNavigator();


//浙里看顶部
function zhelikantopbar(){
  return(
    <Topna.Navigator initialRouteName="推荐"  swipeEnabled={false} >
            <Topna.Screen name="推荐" component={Homepage}    />
            <Topna.Screen name="关注" component={guanzhu} />
          </Topna.Navigator>
  );

};


//画作评析查看更多
function huazuopx() {
      
      
  return (
    

    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="top" component={huazuotop}/>
    <Stack.Screen name="全部细节" component={quanbuxj}/>
    <Stack.Screen name="分类细节" component={fenleixj}/>
    <Stack.Screen name="作者细节" component={zuozhexj}/>
    
    </Stack.Navigator>
    
    
  );
}

//画作顶部
function huazuotop ({navigation}){
  return(
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:80,backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20,elevation:5}}>
            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                navigation.goBack();
                            }} />
            <Text style={{fontSize:30,fontWeight:'bold',fontFamily:'yegenyou',marginTop:15}}>画作评析</Text>
            <TouchableWithoutFeedback style={{marginTop:15,marginRight:20}}>
              <Ionicons name={'search'} size={30}  />
            </TouchableWithoutFeedback>
          </View>
          <View style={{height:'100%',width:'100%',backgroundColor:"pink",}}>
          <Topna.Navigator>
        <Topna.Screen name="全部"   component={quanbu} />
        <Topna.Screen name="分类"   component={fenlei} />
        <Topna.Screen name="作者"   component={zuozhe}  />   
        </Topna.Navigator>
          </View>
    </View>
   
  );

}




//底部导航
function bottombar(){
  return(

<KeyboardAvoidingView 
behavior={Platform.O5=="ios"?"padding":"height"}
style={{flex:1}}
>
  <Tab.Navigator 
  //激活状态的图标颜色
  activeColor="#000000"
  //熄灭状态图标颜色
  inactiveColor="#393939"
  
  barStyle={{
    labelcolor:"white",
    backgroundColor: 'white',
    // opacity:0.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: "102%",
    marginLeft: "-1%",
    padding: 0,
    margin: 0,
    position: "absolute"
}}
  >
        
      <Tab.Screen name="浙里看" component={zhelikantopbar} 
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'book'} size={25} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name="浙里说"  component={zhelishuo}
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'brush'} size={25} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name="在浙里说" component={plus} 
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'md-add-circle-sharp'} size={25} color={color}/>
        ), }}></Tab.Screen>



     <Tab.Screen name="浙里有料"  component={zheliyouliao}
       options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'planet'} size={25} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name="个人中心"  component={enter2}
       options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'person-circle'} size={25} color={color}/>
        ),}}></Tab.Screen>

    </Tab.Navigator>
    </KeyboardAvoidingView>
  );
}

export default function App() {
  
  return (
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="bottombar" component={bottombar}/>
    
    <Stack.Screen name="关注细节页" component={guanzhuxijie}/>

    <Stack.Screen name="浙里说搜索" component={zhelishuosearch}/>
    <Stack.Screen name="古诗词" component={zhelishuoshici}/>
    <Stack.Screen name="现代诗" component={zhelishouxiandaishi}/>
    <Stack.Screen name="戏曲" component={zhelishouxiqu}/>
    <Stack.Screen name="画作" component={zhelishuohuazuo}/>
    <Stack.Screen name="名人大家" component={zhelishuomrdj}/>
    <Stack.Screen name="书法大作" component={zhelishuoshufadazuo}/>
    <Stack.Screen name="其他文学" component={zhelishuoqitawenxue}/>


    <Stack.Screen name="搜索" component={search}/>
    <Stack.Screen name="诗人生平查看更多" component={shirenHearder}/>
    <Stack.Screen name="名句介绍查看更多" component={mjjieshao}/>
    <Stack.Screen name="名句" component={mingju}/>

    
    <Stack.Screen name="名句介绍单个诗人列表" component={mingjujieshaoshiren}/>
    
    <Stack.Screen name="画作评析查看更多" component={huazuopx}/>
    <Stack.Screen name="全部细节" component={quanbuxj}/>
    <Stack.Screen name="分类细节" component={fenleixj}/>
    <Stack.Screen name="作者细节" component={zuozhexj}/>


    </Stack.Navigator>
    </NavigationContainer>
  );
}

