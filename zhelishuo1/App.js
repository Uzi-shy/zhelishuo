import * as React from 'react';
// import {createAppContainer} from react-navigation;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from"react-native-vector-icons/FontAwesome";
import Ionicons from"react-native-vector-icons/Ionicons";
import Fontisto from"react-native-vector-icons/Fontisto";

import{KeyboardAvoidingView, Platform}from 'react-native';
import Home from './src/HomePage';
import Setting from './src/SettingPage';
import User from './src/UserPage';
import shige from './src/shige';
import register from './src/register';
import person from './src/personal';

//定义堆栈变量
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();




function HomePage(){
  return(
<KeyboardAvoidingView 
behavior={Platform.O5=="ios"?"padding":"height"}
style={{flex:1}}
>
  <Tab.Navigator >
        
      <Tab.Screen name="浙里有料" component={Home} 
      options={{
        tabBarIcon:({color})=>(
          <Fontisto name={'beach-slipper'} size={30} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name="浙里说"  component={User}
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'brush'} size={30} color={color}/>
        ),}}></Tab.Screen>



      <Tab.Screen name="个人中心"  component={Setting}
       options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'person-circle'} size={30} color={color}/>
        ),}}></Tab.Screen>


      <Tab.Screen name=" " component={Home} 
      options={{
        tabBarIcon:({color})=>(
          <Ionicons name={'md-add-circle-sharp'} size={70} color={color}/>
        ), }}></Tab.Screen>
      

    </Tab.Navigator></KeyboardAvoidingView>
  );
}

export default function App() {
  
  return (
    
    <NavigationContainer independent="true"> 
      <HomePage/>
    </NavigationContainer>
  );
}

