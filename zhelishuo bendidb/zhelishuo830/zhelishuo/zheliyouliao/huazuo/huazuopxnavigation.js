import * as React from 'react';
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

import quanbu from './quanbu';

import fenlei from './huazuofenlei';

import zuozhe from './zuozhe';






const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();


export default function App() {
      
      
      return (
        <NavigationContainer initialRouteName="全部" independent="true"> 

        <Tab.Navigator>
        <Tab.Screen name="全部"   component={quanbu}    />
        <Tab.Screen name="分类" component={fenlei} />
        <Tab.Screen name="作者"   component={zuozhe}  />   
        
      </Tab.Navigator>

        </NavigationContainer>
        
      );
    }