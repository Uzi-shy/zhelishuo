// import React, {Component} from "react";
// import {Image, LayoutAnimation, NativeModules, Platform, StyleSheet, Text, View} from "react-native";
// const {UIManager} = NativeModules;
// const whiteImage = 'https://img13.ihomefnt.com/arts-centre/UserArt/1b606941456e500aeaef2e6e5cdad4b55a42e6f5e6ad9101aee9ebe1c94a0f5c.png!original';
// const imageList = [{
//     picUrl: "https://img9.ihomefnt.com/30f4dfce7e781917bb1261d2f04b845cebbd0f6e924df7d1d1bb549f05c1b7d5.jpg!H-MIDDLE",
//     index: 0
// },
//     {
//         picUrl: "https://img9.ihomefnt.com/0e080f963528294137fd793b3698dc0be072f087ca0aa9894d98e34398d6dbd9.jpg!H-MIDDLE",
//         index: 1
//     },
//     {
//         picUrl: "https://img9.ihomefnt.com/b1f5304a99374d505f69238ac5f0262a6747fb91a09e35ec08790b2df6657a19.jpg!H-MIDDLE",
//         index: 2
//     },
//     {
//         picUrl: "https://img9.ihomefnt.com/5beda375dbb22a112c025b39fcfa714fed9133a7c42eb9003ef02fdea9f6c7a0.jpg!H-MIDDLE",
//         index: 3
//     },
//     {
//         picUrl: "https://img9.ihomefnt.com/30f4dfce7e781917bb1261d2f04b845cebbd0f6e924df7d1d1bb549f05c1b7d5.jpg!H-MIDDLE",
//         index: 4
//     },
//     {
//         picUrl: "https://img9.ihomefnt.com/9024f5d66a650c2d09220a2cdcc703225d143c39acc843930e7eac472b2cdb0f.jpg!H-MIDDLE",
//         index: 5
//     },
//     {
//         picUrl: "https://img9.ihomefnt.com/a09f7b7c939462c48bcab38d4d2921d24e1b858cb614af1ce6a03cde8befc972.jpg!H-MIDDLE",
//         index: 6
//     },
// ]

// export default class Sliding extends Component {
//     state = {
//         changeIndex: 0, //当前中心位置是第几个
//         showImgList: imageList //图片的信息

//     }
//     startX: any; //记录开始的位置
//     _onPress = (type: string) => {
//         let {showImgList, changeIndex} = this.state;
//         LayoutAnimation.easeInEaseOut();
//         //如果第是6个的话 就禁止滑动
//         if ((type === "add" && (changeIndex === 6 || changeIndex + 1 === showImgList.length)) || (changeIndex === 0 && type === "less") || showImgList.length === 1) {
//             return false;
//         }
//         showImgList.map((item: any) => {
//             if (type === "add") {
//                 item.index -= 1;
//             } else {
//                 item.index += 1;
//             }
//             return item;
//         });
//         //给数组里面下标更新数字
//         this.setState({
//             changeIndex: (type === "add" ? changeIndex + 1 : changeIndex - 1),
//             showImgList,
//         })
//     };


//     componentWillUpdate() {
//         LayoutAnimation.easeInEaseOut();
//         //安卓端动画支持
//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental(true)
//         }
//     }
//     //结束后
//     onTouchEnd = (e: any) => {
//         let endX = e.nativeEvent.pageX;
//         if (Math.abs(endX - this.startX) > 30) {
//             //判断是向左还是向右
//             if (endX > this.startX) {
//                 this._onPress("less");
//             } else {
//                 this._onPress("add");
//             }
//         }
//     }

//     //点击记录 按下位置
//     onTouchStart = (e: any) => {
//         this.startX = e.nativeEvent.pageX;
//     }

//     render() {
//         let {showImgList, changeIndex} = this.state;
//         const style = [
//             styles.location0,
//             styles.location1,
//             styles.location2,
//             styles.location3,
//             styles.location4
//         ];
//         let picUrl = showImgList[changeIndex] && showImgList[changeIndex].picUrl;
//         return (
//             <View style={{flex: 1}}>
//                 <View style={styles.goodsImgView}>
//                     <Image source={{uri: picUrl}} style={styles.goodsBigImg}/>
//                 </View>
//                 <View style={styles.changeView} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
//                     <View style={styles.whiteView}>
//                         {/* 切换的模块了 */}
//                         {showImgList.map((item: any, index: number) => {
//                             return (
//                                 <Image key={index}
//                                        source={{uri: item.picUrl}}
//                                        style={[style[item.index + 2]]}/>
//                             )
//                         })}
//                         <Image source={{uri: whiteImage}} style={styles.whiteBac}/>
//                         {/* 基本操作 */}
//                         <View style={styles.circle}/>
//                         <Text
//                             style={styles.toggleTitle}
//                         >
//                             左右滑动切换画作
//                         </Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     goodsImgView: {
//         width: 400,
//         flex: 3,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     goodsBigImg: {
//         width: 300,
//         height: 385,
//     },
//     changeView: {
//         width: 375,
//         flex: 2,
//         justifyContent: "flex-end",
//         alignItems: "center"
//     },
//     whiteView: {
//         width: 375,
//         height: 135,
//         alignItems: "center"
//     },
//     whiteBac: {
//         width: 375,
//         height: 135,
//         position: "absolute",
//         zIndex: 12
//     },
//     toggleTitle: {
//         paddingTop: 45,
//         color: "#8D8B8A",
//         fontSize: 14,
//         zIndex: 12,
//         position: "absolute",
//         bottom: 65,
//     },

//     circle: {
//         backgroundColor: "#333",
//         width: 10,
//         height: 10,
//         borderRadius: 25,
//         position: "absolute",
//         top: 30,
//         zIndex: 13
//     },
//     location0: {
//         position: "absolute",
//         bottom: 70,
//         left: 20,
//         width: 90,
//         height: 90,
//         transform: [{rotate: "-35deg"}],
//         zIndex: 9,
//         borderRadius: 6
//     },
//     location1: {
//         position: "absolute",
//         bottom: 94,
//         left: 55,
//         width: 105,
//         height: 105,
//         transform: [{rotate: "-17deg"}],
//         zIndex: 10,
//         borderRadius: 6
//     },
//     location2: {
//         position: "absolute",
//         bottom: 100,
//         width: 130,
//         height: 130,
//         zIndex: 11,
//         borderRadius: 6
//     },
//     location3: {
//         position: "absolute",
//         bottom: 94,
//         right: 55,
//         width: 105,
//         height: 105,
//         transform: [{rotate: "17deg"}],
//         zIndex: 10,
//         borderRadius: 6
//     },
//     location4: {
//         position: "absolute",
//         bottom: 70,
//         right: 20,
//         width: 90,
//         height: 90,

//         transform: [{rotate: "35deg"}],
//         zIndex: 9,
//         borderRadius: 6
//     }
// });


import React from 'react';
import { ImageBackground, StyleSheet, Alert, Image, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";



export default function huazuo({ navigation }) {

  return (
    <View>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../img/诗人1.jpg')}>

      <View style={{ height: 90, width: "100%", backgroundColor: "#FFFFFF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, elevation: 5, }}>
          <View style={{ flex: 0.7, marginTop: '6%', flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center", }}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                navigation.goBack();
              }} />
            </View>
            <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 30 }}>书法大作</Text>
            <View>
              {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
            </View>
          </View>
        </View>


        <ScrollView style={{ marginVertical: 15, marginHorizontal: 5 }}>{/* 按钮栏目 */}

          <View style={{ flexDirection: 'row' }}>
            <View>{/* 左 */}

              {/* 左1号 */}
              <View style={{ width: 200, height: 380, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5 }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/a.jpg')} style={{ width: '100%', height: 300 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
                      </TouchableHighlight>
                      <Text>10086</Text>
                    </View>
                  </View>
                </View>
              </View>



              {/* 左2号 */}
              <View style={{ width: 200, height: 250, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5, justifyContent: 'space-between', }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/春.jpg')} style={{ width: '100%', height: 170 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
                      </TouchableHighlight>
                      <Text>10086</Text>
                    </View>
                  </View>
                </View>
              </View>



              {/* 左3号 */}
              <View style={{ width: 200, height: 380, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5, justifyContent: 'space-between', }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/冬.jpg')} style={{ width: '100%', height: 300 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
                      </TouchableHighlight>
                      <Text>10086</Text>
                    </View>
                  </View>
                </View>
              </View>



            </View>





            <View>{/* 右 */}
              {/* 右1号 */}
              <View style={{ width: 200, height: 250, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5, justifyContent: 'space-between', }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/蓝色小山.jpg')} style={{ width: '100%', height: 170 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
                      </TouchableHighlight>
                      <Text>10086</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* 右2号 */}
              <View style={{ width: 200, height: 250, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5, justifyContent: 'space-between', }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/诗画浙江.jpg')} style={{ width: '100%', height: 170 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
                      </TouchableHighlight>
                      <Text>10086</Text>
                    </View>
                  </View>
                </View>
              </View>




              {/* 右3号 */}
              <View style={{ width: 200, height: 380, backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5 }}>
                <View>{/* 图片 */}
                  <TouchableHighlight onPress={() => { navigation.navigate('画作'), Alert.alert("进入画作页面"); }}>
                    <Image source={require('../img/b.jpg')} style={{ width: '100%', height: 300 }} />
                  </TouchableHighlight>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>一句话的介绍可以很长长长长</Text>
                  <View style={{ padding: 20, flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>{/* 信息栏 */}
                    <Image source={require('../img/古风头像男.jpg')} style={{ width: 25, height: 25, borderRadius: 400 }}
                    /><Text>小黄</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableHighlight onPress={() => { Alert.alert("点赞+1"); }}>
                        <AntDesign name={'hearto'} size={25} />
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


