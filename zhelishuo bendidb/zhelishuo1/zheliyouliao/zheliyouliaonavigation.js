import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import zheliyouliao from "./zheliyouliao";
import shirensuoyinnavigtion from "./srnavigation";
import flastlist from "./flastlist1"
import shirenHearder from "./shirenHearder"


const Topna = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

  






    export default function App() {
      
      
      return (
        <NavigationContainer independent="true"> 
        <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="浙里有料" component={zheliyouliao}/>       
        <Stack.Screen name="诗人生平查看更多" component={shirenHearder}/>
        
        </Stack.Navigator>
        
        </NavigationContainer>
        
      );
    }