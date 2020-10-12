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


import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, Text, View, StyleSheet,
  TouchableOpacity, ActivityIndicator, Image, ScrollView, Alert, RefreshControl,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableHighlight, FlatList,
} from "react-native";
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const {width,height} = Dimensions.get("window")
const itemWidth = (width - 70) / 2;
const itemHight = 500


export default class ContentWaterfall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoading: true,
      isdata1: [
        {
          height:140,
          title: "《饮湖上初晴后雨》\n水光潋滟晴方好,山色空蒙雨亦奇。欲把西湖比西子,淡妆浓抹总相宜",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/饮湖上初晴后雨.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "一叶知秋",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux1.jpg",
          text:
            "《浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:200,
          title: "《夜泛西湖》\n渐见灯明出远寺，更待月黑看湖光。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/夜泛西湖.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "故人泪",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux2.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:200,
          title: "《浙江绍兴观瀑亭》\n源头清接金沙涧，波面平添玉带桥 。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/浙江绍兴观瀑亭.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "笑叹轻舞芳华",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux3.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:140,
          title: "《钱塘湖春行》\n孤山寺北贾亭西，水面初平云脚低。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/钱塘湖春行.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "尘世孤行。",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux4.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },

      ],
      isdata2: [
        {
          height:220,
          title: "《忆杭州梅花因叙旧游寄萧协律》三年闲闷在余杭，曾为梅花醉几场。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/忆杭州梅花因叙旧游寄萧协律.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "风卷残花",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux5.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:140,
          title: "《渡浙江》\n前船后船未相及，五两头平北风急。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/卢纶渡.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "连城",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux6.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:300,
          title: "《浙江晚渡怀古》\n潮声归海鸟初下，草色连江人自迷。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/浙江晚渡怀古.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "三重门。",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux7.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
        {
          height:140,
          title: "《灵隐寺》\n楼观沧海日，门对浙江潮。",
          pick: 
            "http://121.196.27.141/img/zhelishuo/shici/灵隐寺.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            // "http://121.196.27.141/img/zhelikan/fslj.jpg",
          

          author: "空水漫漫",
          toux: "http://121.196.27.141/img/zhelishuo/toux/toux8.jpg",
          text:
            "浮生六记》带我们把日子过成诗 晚清小红楼”，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",
          pinglun: 1, dianzhan: 2, zhuanfa: 3,
          pinglundate: [
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "许三娘",
              words: "好，写的针不戳",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "鲁人甲",
              words: "写到我心坎里了",
              time: "8-10",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "十二",
              words: "我是来看腿的",
              time: "10-4",
            },
            {
              toux: "http://121.196.27.141/img/girl.jpg",
              name: "栗林同学",
              words: "好可爱",
              time: "10-9",
            }
          ]
        },
      ],
      picHight: 0,
      imgH: 1,

    }
  }






  _renderFooter(){
    return(
      <View style={{flexDirection:'row',
            height:24,
            justifyContent:'center',
            alignItems:'center',
            marginBottom:5,}}>
                <ActivityIndicator animating={this.state.refreshing2}
        color='grey'
        size="small" />
                
            </View>
    );
            
    }

  _onRefresh() {

    if (this.state.refreshing == false) {
      this._updateState(true);
      

      //2秒后结束刷新
      setTimeout(() => {
        this._updateState(false);
        
      }, 2000)

    }
  }

  //更新State
  _updateState(refresh) {
    this.setState({ refreshing: refresh });
  }


  render() {

    const { isdata1, isdata2 } = this.state;

    // var h1=parseInt(Math.random() * (5) );


    return (
      <View>


        <View style={{ height: 50, width: "100%", backgroundColor: "#FFFFFF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, elevation: 4, }}>
          <View style={{ flex: 0.7, marginTop: '6%', flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center", }}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={22} color={'#000'} onPress={() => {
                this.props.navigation.goBack();
              }} />
            </View>
            <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 24 }}>古诗词</Text>
            <View>
              {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
            </View>
          </View>
        </View>


        <ScrollView style={{ marginVertical: 5, marginHorizontal: 5,height:height-60 }} showsVerticalScrollIndicator={false}>{/* 按钮栏目 */}
          <View style={{ flexDirection: 'row' }}>
            {/*左*/}
            <View >

              <SafeAreaView style={styles.container}>
                {/* {isLoading ? <ActivityIndicator /> : ( */}
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={isdata1}
                  // bounces={true}
                  numColumns={1}
                  keyExtractor={({ id }, index) => id}
                  refreshControl={
                    <RefreshControl
                      tintColor={'red'}
                      titleColor={'brown'}
                      title={'正在刷新......'}
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                    />
                  }
                  ListFooterComponent={this._renderFooter.bind(this)}
                  onEndReached={this._onRefresh.bind(this)}
                  onEndReachedThreshold={0.3}
                  renderItem={({ item }) => (
                    <View>
                      <View>
                        <View style={styles.item} style={{
                          margin: 5, borderRadius: 5,
                          backgroundColor: 'white',

                        }}>
                          <TouchableOpacity onPress={() => {

                          }}>

                            <Image
                              // onLoadStart={() => { this.setSize(item.pick[0]) }}
                              source={{ uri: item.pick }}
                              style={{ width: itemWidth + 20, height:item.height, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                            />
                          </TouchableOpacity>
                          <Text style={{ padding: 5, width: itemWidth + 20, fontSize: 12, marginVertical: 5 }} numberOfLines={2}>{item.title}</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' ,padding:5}}>
                              <Image style={{ height: 20, width: 20, borderRadius: 400,marginRight:5 }} source={{ uri: item.toux}} />
                              <Text style={{fontSize:10}}>{item.author}</Text>
                            </View>
                            <View style={{ marginRight: 5 }}>
                              <Feather name={'heart'} size={15} />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}

                // refreshing={this.state.isLoading}
                // onRefresh={() => {
                //     this.loadData(); }}//下拉刷新加载数据
                // getHeightForItem={this._getHeightForItem}
                // refreshing = {this.state.refreshing}
                // onRefresh = {this.onRefreshing}
                // onEndReachedThreshold={0.5}
                // onEndReached={this._onEndReached}
                // keyExtractor={this._keyExtractor}
                />
                {/* )} */}
              </SafeAreaView>


            </View>














            {/*右*/}
            <View >

              <SafeAreaView style={styles.container}>
                {/* {isLoading ? <ActivityIndicator /> : ( */}
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={isdata2}
                  // bounces={true}
                  numColumns={1}
                  keyExtractor={({ id }, index) => id}
                  refreshControl={
                    <RefreshControl
                      tintColor={'red'}
                      titleColor={'brown'}
                      title={'正在刷新......'}
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                    />
                  }
                  ListFooterComponent={this._renderFooter.bind(this)}
                  onEndReached={this._onRefresh.bind(this)}
                  onEndReachedThreshold={0.2}
                  renderItem={({ item }) => (
                    <View>
                      <View>
                        <View style={styles.item} style={{
                          margin: 5, borderRadius: 5,
                          backgroundColor: 'white',

                        }}>
                          <TouchableOpacity onPress={() => {

                          }}>

                            <Image
                              // onLoadStart={() => { this.setSize(item.pick[0]) }}
                              source={{ uri: item.pick }}
                              style={{ width: itemWidth + 20, height:item.height, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                            />
                          </TouchableOpacity>
                          <Text style={{ padding: 5, width: itemWidth + 20, fontSize: 12, marginVertical: 5 }} numberOfLines={2}>{item.title}</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center',padding:5 }}>
                              <Image style={{ height: 20, width: 20, borderRadius: 400,marginRight:8 }} source={{ uri: item.toux}} />
                              <Text style={{fontSize:10}}>{item.author}</Text>
                            </View>
                            <View style={{ marginRight: 5 }}>
                              <Feather name={'heart'} size={15} />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}

                // refreshing={this.state.isLoading}
                // onRefresh={() => {
                //     this.loadData(); }}//下拉刷新加载数据
                // getHeightForItem={this._getHeightForItem}
                // refreshing = {this.state.refreshing}
                // onRefresh = {this.onRefreshing}
                // onEndReachedThreshold={0.5}
                // onEndReached={this._onEndReached}
                // keyExtractor={this._keyExtractor}
                />
                {/* )} */}
              </SafeAreaView>


            </View>




          </View>







        </ScrollView>



      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    margin: 5,
    backgroundColor: 'white',
    padding: 7
  },
})
