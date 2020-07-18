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
 

import shige from './shige';
import pictures from './pictures';
import author from './author';
import more from './more';




const Stack = createStackNavigator();



export default function App() {
  
  
  return (
    <NavigationContainer independent="true"> 
    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="浙里有料" component={Zheliyouliao}/>
    <Stack.Screen name="诗歌" component={shige}/>
    <Stack.Screen name="画作" component={pictures}/>
    <Stack.Screen name="作者" component={author}/>
    <Stack.Screen name="更多" component={more}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

function Zheliyouliao  ({navigation}){
  
  return (
    <View>
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('E:/ad/zhelishuo/img/诗人1.jpg')}>
        
        
        <View>
          <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>个人中心</Text>
        </View>
        <View>
        <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            <View style={{padding:5}}>
            <Image       
            source={require('E:/ad/zhelishuo/img/古风头像男.jpg')}
            style={{marginHorizontal:5,width: 70, height: 70,borderRadius:400}}
            />
            </View>
            <View style={{padding:15}}>
              <Text style={{fontSize:28,fontWeight:"bold"}}>小黄</Text><Text>暂无签名</Text>
            </View>   
        </View>
        <View style={{flexDirection: 'row',marginHorizontal:5}}>
              <Text>粉丝 1086  </Text><Text>  关注 1086</Text>
        </View>
        </View>


        <Text style={{fontSize:18,fontWeight:"bold",marginHorizontal:5}}>作品</Text>
      <ScrollView   style={{marginVertical:15,marginHorizontal:5}}>{/* 按钮栏目 */}
        

        <View style={{flexDirection: 'row'}}>{/* 横栏1,2 */}

        {/* 整体1号 */}
        <View style={{ width: '45%', height:200,backgroundColor:'white',borderRadius:10,marginVertical:15,marginHorizontal:5}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>7月17日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/拉钩.gif')} style={{width: '100%', height:170,borderRadius:10}} />
            </TouchableHighlight>
          </View>
        </View>



        {/* 整体2号 */}
        <View style={{ width: '45%', height:200,backgroundColor:'white',borderRadius:10,marginVertical:15,marginHorizontal:5}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>7月16日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/冬.jpg')} style={{width: '100%', height:170,borderRadius:10}} />
            </TouchableHighlight>
          </View>
        </View>
        
        
        
        
        </View>



        <View style={{flexDirection: 'row'}}>{/* 横栏3,4 */}

        {/* 整体3号 */}
        <View style={{ width: '45%', height:200,backgroundColor:'white',borderRadius:10,marginVertical:15,marginHorizontal:5}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>7月15日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/c.jpg')} style={{width: '100%', height:170,borderRadius:10}} />
            </TouchableHighlight>
          </View>
        </View>



        {/* 整体4号 */}
        <View style={{ width: '45%', height:200,backgroundColor:'white',borderRadius:10,marginVertical:15,marginHorizontal:5}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>7月13日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/peiqi.jpg')} style={{width: '100%', height:170,borderRadius:10}} />
            </TouchableHighlight>
          </View>
        </View>
        
        
        
        
        </View>


        <View style={{flexDirection: 'row'}}>{/* 横栏5 */}

        {/* 整体5号 */}
        <View style={{ width: '45%', height:200,backgroundColor:'white',borderRadius:10,marginVertical:15,marginHorizontal:5}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>7月12日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/头像男.jpg')} style={{width: '100%', height:170,borderRadius:10}} />
            </TouchableHighlight>
          </View>
        </View>


        </View>
 

   
        




        
      </ScrollView>
      </ImageBackground>
    </View>

  )
}


