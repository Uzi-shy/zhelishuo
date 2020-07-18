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
 
import guanzhu from './guanzhu';
import shige from './shige';
import pictures from './pictures';
import author from './author';
import more from './more';
import { BottomTabBar } from '@react-navigation/bottom-tabs';


const Topna = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Home(){
  
  return(
    <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name="浙里有料" component={Zheliyouliao}/>
    <Stack.Screen name="诗歌" component={shige}/>
    <Stack.Screen name="画作" component={pictures}/>
    <Stack.Screen name="作者" component={author}/>
    <Stack.Screen name="更多" component={more}/>

    </Stack.Navigator>
);
}

export default function App() {
  
  
  return (
    <NavigationContainer independent="true"> 
    
      <Topna.Navigator initialRouteName="推荐                                            " >
        
        <Topna.Screen name="                                          关注" component={guanzhu} />
        <Topna.Screen name="推荐                                            " component={Home}    />
      </Topna.Navigator>
    
    </NavigationContainer>
    
  );
}

function Zheliyouliao  ({navigation}){
  
  return (
    <View>
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('E:/ad/zhelishuo/img/诗人1.jpg')}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={{marginVertical:50,marginHorizontal:50}}>{/* 按钮栏目 */}
        


      {/* 整体1号 */}
        <View style={{ width: 280, height: 450,backgroundColor:'white',borderRadius:12,justifyContent: 'space-between',marginHorizontal:30}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            <View style={{padding:5}}>
            <Image       
            source={require('E:/ad/zhelishuo/img/拉钩.gif')}
            style={{width: 40, height: 40,borderRadius:400}}
            />
            </View>
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>小黄</Text>
              <Text>7月12日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/a.jpg')} style={{width: '100%', height: 200}} />
            </TouchableHighlight>
          </View>
          <View>{/* 文字 */}
          <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>春题湖上</Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}>【作者】白居易【朝代】唐     </Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 湖上春来似图画， 乱峰围绕水平铺。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
          </View>
          <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between'}}>{/* 功能栏*/}
          <TouchableHighlight onPress={()=>{Alert.alert("关注+1");}}>
            <SimpleLineIcons name={'user-follow'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("评论+1");}}>
          <Feather name={'message-square'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'like2'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          </View>
        </View>



        {/* 整体2号 */}
        <View style={{ width: 280, height: 450,backgroundColor:'white',borderRadius:12,justifyContent: 'space-between',marginHorizontal:30}}>
          <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
            <View style={{padding:5}}>
            <Image       
            source={require('E:/ad/zhelishuo/img/peiqi.jpg')}
            style={{width: 40, height: 40,borderRadius:400}}
            />
            </View>
            <View style={{padding:5}}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>猪头妹#</Text>
              <Text>7月12日</Text>
            </View>
          </View>
          <View>{/* 图片 */}
            <TouchableHighlight onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/冬.jpg')} style={{width: '100%', height: 200}} />
            </TouchableHighlight>
          </View>
          <View>{/* 文字 */}
          <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>春题湖上</Text>
          <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}>【作者】白居易【朝代】唐     </Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 湖上春来似图画， 乱峰围绕水平铺。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
          <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
          </View>
          <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between'}}>{/* 功能栏*/}
          <TouchableHighlight onPress={()=>{Alert.alert("关注+1");}}>
            <SimpleLineIcons name={'user-follow'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("评论+1");}}>
          <Feather name={'message-square'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          <TouchableHighlight onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'like2'} size={30}/>
          </TouchableHighlight>
          <Text>10086</Text>
          </View>
        </View>

        


      

        
      
        





        

        
        </ScrollView>
      </ImageBackground>
    </View>

  )
}


