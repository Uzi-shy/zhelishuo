import React from 'react';
import { ImageBackground,StyleSheet, Alert,Image,Text, View,TextInput,ScrollView,TouchableHighlight } from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from"react-native-vector-icons/AntDesign";
import Feather from"react-native-vector-icons/Feather";
import SimpleLineIcons from"react-native-vector-icons/SimpleLineIcons";
 


import { BottomTabBar } from '@react-navigation/bottom-tabs';


const Topna = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  
  
  return (
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="画作" component={huazuo}/>
      
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

function huazuo({navigation}){
  
  return (
    <View>
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('E:/ad/zhelishuo/img/诗人1.jpg')}>
      

      <ScrollView   style={{marginVertical:15,marginHorizontal:5}}>{/* 按钮栏目 */}

    <View style={{flexDirection: 'row'}}>
      <View>{/* 左 */}
 
        {/* 左1号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/a.jpg')} style={{width: '100%', height:300}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



        {/* 左2号 */}
        <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/春.jpg')} style={{width: '100%', height:170}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



        {/* 左3号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/冬.jpg')} style={{width: '100%', height:300}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



      </View>
      
      
      
      
      
      <View>{/* 右 */}
      {/* 右1号 */}
      <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/蓝色小山.jpg')} style={{width: '100%', height:170}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
      </View>

      {/* 右2号 */}
      <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/诗画浙江.jpg')} style={{width: '100%', height:170}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>




        {/* 右3号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('画作'), Alert.alert("进入画作页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/b.jpg')} style={{width: '100%', height:300}} />
            </TouchableHighlight>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={25}/>
           </TouchableHighlight>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>







      

      </View>




    </View>
        
        
      </ScrollView>

      
      </ImageBackground>
    </View>

  )
}


