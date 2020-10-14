import React, { Component, useEffect, useState } from 'react';
import { ImageBackground, 
  StyleSheet, Alert, Image, 
  Text, View, TextInput, ScrollView, 
  TouchableNativeFeedback, TouchableHighlight, Button, 
  Dimensions } from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import DialogSelected from './AlertSelected';
// import Personalnavigation from './personalnavigation';

// import shige from '../src/shige';
// import login from './login';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");
// const selectedArr = ["查看大图", "更改头像"];



// const Stack = createStackNavigator();



// export default function App() {

//   return (
//     <NavigationContainer independent="true"> 
//     <Stack.Navigator mode="modal" headerMode="none">
//     <Stack.Screen name="浙里有料" component={Zheliyouliao}/>
//     <Stack.Screen name="登录" component={login}/>
//     <Stack.Screen name="诗歌" component={shige}/>


//     </Stack.Navigator>
//     </NavigationContainer>


//   );

// }


export default class Zheliyouliao extends Component {



//   constructor(props) {
//     super(props);
//     this.showAlertSelected = this.showAlertSelected.bind(this);
//     this.callbackSelected = this.callbackSelected.bind(this);
//   }

//   showAlertSelected() {
//     this.dialog.show("", selectedArr, '#333333', this.callbackSelected);
//   }
//   // 回调
//   callbackSelected(i) {
//     switch (i) {
//       case 0: // 拍照
//         this.takePhoto();
//         break;
//       case 1: // 图库
//         this.pickMultiple();
//         break;
//     }
//   }

  render() {
    //const {navigation,route}=this.props;
    return (
 











        <ScrollView>
          {/* <DialogSelected ref={(dialog) => {
            this.dialog = dialog;
          }} /> */}
          <ImageBackground style={{ width: '100%' }} source={{uri:'http://121.196.27.141//img/dufu2.jpg'}}>

            <TouchableWithoutFeedback style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 25, marginTop: 25, }}
              onPress={() => {
                this.props.navigation.push("设置");
              }}
            >
              <AntDesign name={"setting"} size={25} style={{ color: '#4F4F4F' }} />
            </TouchableWithoutFeedback>

            <View style={{ backgroundColor: "white", width: width, height: 500, marginTop: 220, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderTopColor: '#BEBEBE', borderWidth: 0.3, elevation: 60 }}>
              <TouchableWithoutFeedback style={{ width: 80, height: 80, marginTop: -30, marginLeft: 30, borderRadius: 400, borderWidth: 0.3, elevation: 60 }}
                onPress={() => { this.showAlertSelected(); }}>
                <Image source={{uri:'http://121.196.27.141//img/boy.jpg'}} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 400 }} />
              </TouchableWithoutFeedback>

              <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>管理员</Text>
                <Text style={{ fontSize: 12, color: '#7B7B7B', marginTop: 10 }}>浙里说账号：10000</Text>
                <TouchableWithoutFeedback >
                  <Text style={{ fontSize: 15, color: '#272727', marginTop: 5 }}>这是一个内测管理员</Text>
                </TouchableWithoutFeedback>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: "100%", marginTop: 10 }}>
                  <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 45, borderRadius: 8, marginRight: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                      <Text>10后</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 70, borderRadius: 8, marginRight: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                      <Text>作者认证</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 70, borderRadius: 8, marginRight: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                      <Text>编辑资料</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View> */}
                {/* <View style={{ flexDirection: 'row', marginTop: 30 }}>
                  <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                    <Text style={{ fontWeight: 'bold', }}>0</Text>
                    <Text style={{ color: '#3C3C3C', fontSize: 16 }}>动态</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                    <Text style={{ fontWeight: 'bold', }}>250</Text>
                    <Text style={{ color: '#3C3C3C', fontSize: 16 }}>关注</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                    <Text style={{ fontWeight: 'bold', }}>360</Text>
                    <Text style={{ color: '#3C3C3C', fontSize: 16 }}>粉丝</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                    <Text style={{ fontWeight: 'bold', }}>3890</Text>
                    <Text style={{ color: '#3C3C3C', fontSize: 16 }}>点赞与收藏</Text>
                  </TouchableWithoutFeedback>

                </View> */}


              </View>
              <View style={{ height: 0.5, backgroundColor: '#ADADAD', marginTop: 20 }} />



              <View style={{padding:15}}>
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',height:40,alignItems:'center'}} onPress={() => {
                                this.props.navigation.navigate('签约管理');
                            }}>
              <Text style={{fontSize:18}}>签约管理</Text>
              <AntDesign name={'right'} size={22} color={'#000'} />
              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#ADADAD',marginBottom:7 }} />
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',height:40,alignItems:'center'}} onPress={() => {
                                this.props.navigation.navigate('作品审核');
                            }}>
              <Text style={{fontSize:18}}>作品审核</Text>
              <AntDesign name={'right'} size={22} color={'#000'} />
              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#ADADAD',marginBottom:7 }} />
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',height:40,alignItems:'center'}} onPress={() => {
                                this.props.navigation.navigate('评论审核');
                            }}>
              <Text style={{fontSize:18}}>评论审核</Text>
              <AntDesign name={'right'} size={22} color={'#000'} />
              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#ADADAD',marginBottom:7 }} />
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',height:40,alignItems:'center'}} onPress={() => {
                                this.props.navigation.navigate('举报处理');
                            }}>
              <Text style={{fontSize:18}}>举报处理</Text>
              <AntDesign name={'right'} size={22} color={'#000'} />
              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#ADADAD',marginBottom:7 }} />
              </View>
              {/* <Personalnavigation /> */}

            </View>





          </ImageBackground>
        </ScrollView>


    );
  }
}


