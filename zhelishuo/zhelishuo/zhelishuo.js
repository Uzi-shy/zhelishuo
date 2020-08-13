import React, {useState}from 'react';
import { ImageBackground,StyleSheet, Alert,Image,Text, View,TextInput,ScrollView,TouchableHighlight,TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from"react-native-vector-icons/AntDesign";
import Feather from"react-native-vector-icons/Feather";
import SimpleLineIcons from"react-native-vector-icons/SimpleLineIcons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';


import shici from './shici';
import pictures from './pictures';
import Author from './author';
import more from './more';

import { BottomTabBar } from '@react-navigation/bottom-tabs';


const Topna = createStackNavigator();
const Stack = createStackNavigator();

function shigefn(){
  
  return(
    <Stack.Navigator >
    <Stack.Screen name="热门" component={remen}  mode="modal" headerMode="none"/>
    
    </Stack.Navigator>
);
}

export default function App() {
  
  
  return (
    <NavigationContainer independent="true"> 
    
      <Topna.Navigator initialRouteName="浙里说"  >

      
      <Topna.Screen name="浙里说" component={shigefn} />
        
      <Topna.Screen name="古诗词" component={shici} />
        <Topna.Screen name="现代诗" component={pictures}    />
        <Topna.Screen name="戏曲" component={Author}    />
        <Topna.Screen name="画作" component={pictures}    />
        <Topna.Screen name="名人大家" component={Author}    />
        <Topna.Screen name="更多" component={more}    />
      </Topna.Navigator>
    
    </NavigationContainer>
    
  );
}


function remen({navigation}){
  const [is,setcount] = useState('grey');  
  const [flag,setflag] = useState(true);
  function add(){
    if(flag){
      setcount('red');
      setflag(!flag);
    }else{
      setflag(!flag);
      setcount('grey');
    }
  }


  
  return (
    <View>
      <ImageBackground style={{width: '100%', height: '100%'}} >
        
        <View style={{flexDirection: 'row'}}>
      <TouchableWithoutFeedback  
                                
                                style={{marginLeft:115}}
                                onPress={() => {
                                }}>
                                 <View style={{marginTop:15,marginLeft:15}}>
                                 <Text style={{fontSize:30,fontFamily:"youran"}}>热门</Text>
                                  </View>
      </TouchableWithoutFeedback>
      <View style={{
        flexDirection: 'row',
        marginLeft:15,
        top:10,
        width:"60%",
        height:"70%",
        backgroundColor:"#C0C0C0",
        borderRadius:10,
      }}>
        <Image source={require('../img/放大镜.jpg')} style={{width: 30, height:30,borderRadius:10,alignItems:"center",top:2}}/>
        <TextInput></TextInput>
        
      </View><Text style={{fontSize:30,fontFamily:"youran",position:'absolute',right:10,top:12}}>搜索</Text>
     </View>

      <ScrollView   style={{marginVertical:5,marginHorizontal:5,marginBottom:50,}}>{/* 按钮栏目 */}

      <ScrollView   showsHorizontalScrollIndicator={false} horizontal={true} style={{marginVertical:7}}>
        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("古诗词")}}>
        <View style={{justifyContent: 'center', alignItems: 'center',width: 60, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            古诗词
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 60, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            现代诗
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 50, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            戏曲
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("画作")}}>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 50, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            画作
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            名人大家
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            书法大作
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            其他文学
          </Text>
        </View>
        </TouchableNativeFeedback>

        
      </ScrollView>
      

    <View style={{flexDirection: 'row'}}>
      <View>{/* 左 */}
 
        {/* 左1号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/a.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1"); add()}}>
           <AntDesign name={'hearto'} size={18} color={is}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



        {/* 左2号 */}
        <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent:'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/春.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



        {/* 左3号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/冬.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>


        {/* 左4号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/戏曲舔狗.gif')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>


        {/* 左5号 */}
        <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent:'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/白居易.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
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
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/蓝色小山.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
      </View>

      {/* 右2号 */}
      <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/诗画浙江.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>




        {/* 右3号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/b.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>



        {/* 右4号 */}
      <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/武生.gif')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
           <Text>10086</Text>
           </View>
          </View>
          </View>
        </View>




        {/* 右4号 */}
        <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
          <View>{/* 图片 */}
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
            <Image     source={require('E:/ad/zhelishuo/img/陆游.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('E:/ad/zhelishuo/img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
            /><Text>小黄</Text>
           <View style={{flexDirection: 'row'}}>
           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
           <AntDesign name={'hearto'} size={18}/>
           </TouchableNativeFeedback>
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


