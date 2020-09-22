import React, { Fragment,Component,useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from"react-native-vector-icons/FontAwesome";
import Ionicons from"react-native-vector-icons/Ionicons";
import Fontisto from"react-native-vector-icons/Fontisto";
import Entypo from"react-native-vector-icons/Entypo";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import user from './user';

import tie from './tiezi';


import {st} from './search';







const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();


export default class wofabu extends Component{
  constructor(props) {
    super(props);



    this.state = {
        
        searchText:"",
        times:0,
        
    }
};
      
      render(){
      return (
        <NavigationContainer initialRouteName="帖子" independent="true"> 

        <Tab.Navigator>
        <Tab.Screen name="帖子"   component={tie}   />
        <Tab.Screen name="用户" component={user} />
         
        
      </Tab.Navigator>

        </NavigationContainer>
        
      );
    }
  }