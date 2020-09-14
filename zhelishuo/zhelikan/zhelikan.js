import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Homepage from "./HomePage";
import guanzhu from "./guanzhu";
import guanzhuxijie from "./guanzhuxijie";


const Topna = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Home(){
  
      return(
        <Topna.Navigator initialRouteName="推荐"  swipeEnabled={false} >
            
            
            
            <Topna.Screen name="推荐" component={Homepage}    />
            <Topna.Screen name="关注" component={guanzhu} />

          </Topna.Navigator>
    );
    }
    
    export default function App() {
      
      
      return (
        <NavigationContainer independent="true"> 
        <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="浙里看" component={Home}/>
        <Stack.Screen name="关注细节页" component={guanzhuxijie}/>

        
        </Stack.Navigator>
          
        
        </NavigationContainer>
        
      );
    }