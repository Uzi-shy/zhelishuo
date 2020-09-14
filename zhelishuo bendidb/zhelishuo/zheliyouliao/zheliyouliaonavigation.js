import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import zheliyouliao from "./zheliyouliao";
import shirenHearder from "./shiren/shirenHearder";
import mjjieshao from './mingju/mjjieshao';
import mingjujieshaoshiren from './mingju/mingjujieshaoshiren';
import mingju from './mingju/mingju';
import huazuo from './huazuo/huazuopxnavigation';
import search from './search/search';
import zuozhexj from './huazuo/zuozhexijie';

import quanbuxj from './huazuo/quanbuxijie';

import fenleixj from './huazuo/fenleixijie';

const Topna = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

  






    export default function App() {
      
      
      return (
        <NavigationContainer independent="true"> 
        <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="浙里有料" component={zheliyouliao}/>       
        <Stack.Screen name="诗人生平查看更多" component={shirenHearder}/>
        <Stack.Screen name="名句介绍查看更多" component={mjjieshao}/>
        <Stack.Screen name="画作评析查看更多" component={huazuo}/>
        <Stack.Screen name="名句介绍单个诗人列表" component={mingjujieshaoshiren}/>
        <Stack.Screen name="搜索" component={search}/>
        <Stack.Screen name="名句" component={mingju}/>
        <Stack.Screen name="全部细节" component={quanbuxj}/>
        <Stack.Screen name="分类细节" component={fenleixj}/>
        <Stack.Screen name="作者细节" component={zuozhexj}/>



        
        </Stack.Navigator>
        
        </NavigationContainer>
        
      );
    }