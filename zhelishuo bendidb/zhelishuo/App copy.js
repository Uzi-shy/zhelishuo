import * as React from 'react';
// import {createAppContainer} from react-navigation;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from"react-native-vector-icons/FontAwesome";
import Ionicons from"react-native-vector-icons/Ionicons";
import Fontisto from"react-native-vector-icons/Fontisto";
import Entypo from"react-native-vector-icons/Entypo";

import{createMaterialBottomTabNavigator}from "@react-navigation/material-bottom-tabs"

import{KeyboardAvoidingView, Platform}from 'react-native';
import zheliyouliaonavigation from './zheliyouliao/zheliyouliaonavigation';
import Setting from './gerenzhongxin/register';
import zhelishuo from './zhelishuo/zhelishuo';
import plus from './src/plus';
import enter2 from './gerenzhongxin/enter2';
import zhelikan from './zhelikan/zhelikan';
import gushici from './zhelishuo/shici';

//定义堆栈变量
const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();
const Stack = createStackNavigator();



function HomePage(){
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
    backgroundColor: '#C0C0C0',
    opacity:0.5,
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
        
      <Tab.Screen name="浙里看" component={zhelikan} 
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



     <Tab.Screen name="浙里有料"  component={zheliyouliaonavigation}
       options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'planet'} size={25} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name="个人中心"  component={enter2}
       options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'person-circle'} size={25} color={color}/>
        ),}}></Tab.Screen>


      
      

    </Tab.Navigator></KeyboardAvoidingView>
  );
}

export default function App() {
  
  return (
    
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="浙里" component={HomePage}/>
    <Stack.Screen name="古诗词" component={gushici}/>
    
    </Stack.Navigator>
      
    </NavigationContainer>
  );
}

