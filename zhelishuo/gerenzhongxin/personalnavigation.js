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

import wofabu from './wofabu';

import woxihuan from './woxihuan';

import woshoucang from './woshoucang';

import aitewo from './aitewo';




const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();


export default function App() {
      
      
      return (
        <NavigationContainer independent="true"> 

        <Tab.Navigator
        tabBarOptions={{

          labelStyle: {
            backgroundColor: "#fff"
          },
          //选中状态的选项卡的文本颜色
          activeTintColor: "black",
          activeTintColor: "#333",
          // 未选中的选项卡的颜色
          inactiveTintColor: "#778899",
          adaptive: true,
          // 导航栏状态
          tabStyle: {
            // backgroundColor: "red",
          },
          // 样式设置
          style: {
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            height: 50,
            elevation: 0,
          },
          //底部横条样式设置
          indicatorStyle: {
            height: 0,
          },
          iconStyle: {
            width: '100%',
          },
          //显示标签和显示icon
          showLabel: false,
          showIcon: true,
          tabBarVisible: false,
          // mode:"model",
        }}
      >
        <Tab.Screen
          name="发布"
          component={wofabu}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name={'layout'} size={28} color={color} />
            ),

          }}
        />
        <Tab.Screen
          name="喜欢"
          component={woxihuan}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name={'hearto'} size={28} color={color} />
            ),
            headerShown: false, // 是否渲染导航栏，默认 true
          }}
        >
          {/* {() => {
            return (
              <Stack.Navigator
                headerMode="none"
              >
                <Stack.Screen name="leaveMessage" component={leaveMessage} />
                <Stack.Screen name="MainText" component={MainText}
                  options={{
                    headerShown: false, // 是否渲染导航栏，默认 true
                  }}
                />
              </Stack.Navigator>
            )
          }} */}
        </Tab.Screen>
        <Tab.Screen
          name="收藏"
          component={woshoucang}
          options={{
            tabBarIcon: ({ color }) => (
                <AntDesign name={'staro'} size={28} color={color} />
            ),
          }}
        >
          {/* {() => {
            return (
              <MessageStack.Navigator
                headerMode="none"
                headerShown={false}
              >
                <MessageStack.Screen name="Message" component={Message} />
                <MessageStack.Screen name="chating" component={chating}
                  options={{
                    headerShown: false, // 是否渲染导航栏，默认 true
                  }}
                />
                

              </MessageStack.Navigator>
            )
          }} */}
        </Tab.Screen>
        <Tab.Screen
          name="@我"
          component={aitewo}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name={'at'} size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

       
 
          
        
        </NavigationContainer>
        
      );
    }