import React, {useState}from 'react';
import { ImageBackground,StyleSheet, Alert,Image,Text, View,TextInput,
  ScrollView,TouchableHighlight,TouchableWithoutFeedback,TouchableNativeFeedback,
TouchableOpacity } from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from"react-native-vector-icons/AntDesign";
import Feather from"react-native-vector-icons/Feather";
import SimpleLineIcons from"react-native-vector-icons/SimpleLineIcons";




export default function remen({navigation}){

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




      <TouchableWithoutFeedback style={{position:'absolute',right:10}} onPress={()=>{ navigation.navigate("浙里说搜索")}}>
        {/* <Image source={require('../img/放大镜.jpg')} style={{width: 30, height:30,borderRadius:10,position:'absolute',right:70,top:15}}/> */}

      <Text style={{fontSize:30,fontFamily:"youran",position:'absolute',right:10,top:12}}>搜索</Text>
      </TouchableWithoutFeedback>



      
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

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("现代诗")}}>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 60, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            现代诗
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("戏曲")}}>
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

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("名人大家")}}>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            名人大家
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("书法大作")}}>
        <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
          <Text style={{fontSize:20,fontFamily:"youran"}} >
            书法大作
          </Text>
        </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={()=>{ navigation.navigate("其他文学")}}>
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
            <TouchableNativeFeedback onPress={()=>{Alert.alert("进入细节页面"),navigation.navigate("热门细节");}}>
            <Image     source={require('../img/a.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("热门细节");}}>
            <Image     source={require('../img/春.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/冬.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/戏曲舔狗.gif')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/白居易.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/蓝色小山.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/诗画浙江.jpg')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/b.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/武生.gif')} style={{width: '100%', height:170}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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
            <Image     source={require('../img/陆游.jpg')} style={{width: '100%', height:300}} />
            </TouchableNativeFeedback>
            <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
            <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
            <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
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


