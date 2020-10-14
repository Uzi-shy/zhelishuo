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

import shirenchaodai from './srchaodai';

import shirenshouzimu from './shirenshouzimu';

import shirenliupai from './shirenliupai';

import shirenxijie from './shirenxijie';






const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();




function Home(){
  
  return(
    <Tab.Navigator>
        <Tab.Screen name="按朝代"   component={shirenchaodai}    />
        <Tab.Screen name="按首字母" component={shirenshouzimu} />
        <Tab.Screen name="按流派"   component={shirenliupai}  /> 
    </Tab.Navigator>
);
}

export default function App() {
      
      
      return (
        <NavigationContainer initialRouteName="按朝代" independent="true"> 

        <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="浙里看" component={Home}/>
        <Stack.Screen name="诗人细节" component={shirenxijie}/>

        
        </Stack.Navigator>
        
     

        </NavigationContainer>
        
      );
    }