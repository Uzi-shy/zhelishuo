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

import { View,Text,TouchableWithoutFeedback } from 'react-native';

import zuozhexj from './zuozhexijie';

import quanbuxj from './quanbuxijie';

import fenleixj from './fenleixijie';
import zheliyouliao from '../zheliyouliao';




const Tab = createMaterialTopTabNavigator();



const Stack = createStackNavigator();

function top (){
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
          <Tab.Navigator>
        <Tab.Screen name="全部"   component={quanbu} />
        <Tab.Screen name="分类"   component={fenlei} />
        <Tab.Screen name="作者"   component={zuozhe}  />   
        
        </Tab.Navigator>

          </View>
      
        
      
    </View>

    
    
    
   
  );

}


export default function App() {
      
      
      return (
        <NavigationContainer initialRouteName="全部" independent="true"> 

        <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="top" component={top}/>
        <Stack.Screen name="全部细节" component={quanbuxj}/>
        <Stack.Screen name="分类细节" component={fenleixj}/>
        <Stack.Screen name="作者细节" component={zuozhexj}/>
        <Stack.Screen name="浙里有料" component={zheliyouliao}/>
        </Stack.Navigator>
        </NavigationContainer>
        
      );
    }