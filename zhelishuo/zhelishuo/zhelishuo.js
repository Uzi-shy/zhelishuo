// import React, {useState,Component}from 'react';
// import { ImageBackground,StyleSheet,
//    Alert,Image,Text, View,TextInput,
//   ScrollView,TouchableHighlight,TouchableWithoutFeedback,
//   TouchableNativeFeedback,
// TouchableOpacity } from 'react-native';
// import BetterBanner from 'react-native-better-banner';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {createAppContainer} from 'react-navigation';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import AntDesign from"react-native-vector-icons/AntDesign";
// import Feather from"react-native-vector-icons/Feather";
// import SimpleLineIcons from"react-native-vector-icons/SimpleLineIcons";




// export default function remen({navigation}){

//   const [is,setcount] = useState('grey');  
//   const [flag,setflag] = useState(true);

//   function add(){
//     if(flag){
//       setcount('red');
//       setflag(!flag);
//     }else{
//       setflag(!flag);
//       setcount('grey');
//     }
//   }



//   return (
//     <View>
//       <ImageBackground style={{width: '100%', height: '100%'}} >

//         <View style={{flexDirection: 'row'}}>
//       <TouchableWithoutFeedback  

//                                 style={{marginLeft:115}}
//                                 onPress={() => {
//                                 }}>
//                                  <View style={{marginTop:15,marginLeft:15}}>
//                                  <Text style={{fontSize:30,fontFamily:"youran"}}>热门</Text>
//                                   </View>
//       </TouchableWithoutFeedback>




//       <TouchableWithoutFeedback style={{position:'absolute',right:10}} onPress={()=>{ navigation.navigate("浙里说搜索")}}>
//         {/* <Image source={require('../img/放大镜.jpg')} style={{width: 30, height:30,borderRadius:10,position:'absolute',right:70,top:15}}/> */}

//       <Text style={{fontSize:30,fontFamily:"youran",position:'absolute',right:10,top:12}}>搜索</Text>
//       </TouchableWithoutFeedback>




//      </View>

//       <ScrollView   style={{marginVertical:5,marginHorizontal:5,marginBottom:50,}}>{/* 按钮栏目 */}

//       <ScrollView   showsHorizontalScrollIndicator={false} horizontal={true} style={{marginVertical:7}}>
//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("古诗词")}}>
//         <View style={{justifyContent: 'center', alignItems: 'center',width: 60, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             古诗词
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("现代诗")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 60, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             现代诗
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("戏曲")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 50, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             戏曲
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("画作")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 50, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             画作
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("名人大家")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             名人大家
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("书法大作")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             书法大作
//           </Text>
//         </View>
//         </TouchableNativeFeedback>

//         <TouchableNativeFeedback onPress={()=>{ navigation.navigate("其他文学")}}>
//         <View style={{marginLeft:15,justifyContent: 'center', alignItems: 'center',width: 80, height:30,borderWidth:1,borderColor:"grey",borderRadius:5}}>
//           <Text style={{fontSize:20,fontFamily:"youran"}} >
//             其他文学
//           </Text>
//         </View>
//         </TouchableNativeFeedback>


//       </ScrollView>


//     <View style={{flexDirection: 'row'}}>
//       <View>{/* 左 */}

//         {/* 左1号 */}
//         <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{Alert.alert("进入细节页面"),navigation.navigate("热门细节");}}>
//             {/* <Image     source={require('../img/a.jpg')} style={{width: '100%', height:300}} /> */}
//             <Image     source={{uri:'file:///E:/ad/zhelishuo/img/a.jpg'}} style={{width: '100%', height:300}} />

//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1"); add()}}>
//            <AntDesign name={'hearto'} size={18} color={is}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>



//         {/* 左2号 */}
//         <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent:'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("热门细节");}}>
//             <Image     source={require('../img/春.jpg')} style={{width: '100%', height:170}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>



//         {/* 左3号 */}
//         <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/冬.jpg')} style={{width: '100%', height:300}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>


//         {/* 左4号 */}
//         <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/戏曲舔狗.gif')} style={{width: '100%', height:300}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>


//         {/* 左5号 */}
//         <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent:'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/白居易.jpg')} style={{width: '100%', height:170}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>



//       </View>





//       <View>{/* 右 */}
//       {/* 右1号 */}
//       <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/蓝色小山.jpg')} style={{width: '100%', height:170}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//       </View>

//       {/* 右2号 */}
//       <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/诗画浙江.jpg')} style={{width: '100%', height:170}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>




//         {/* 右3号 */}
//         <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/b.jpg')} style={{width: '100%', height:300}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>



//         {/* 右4号 */}
//       <View style={{ width: 200, height:250,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5,justifyContent: 'space-between',}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/武生.gif')} style={{width: '100%', height:170}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>




//         {/* 右4号 */}
//         <View style={{ width: 200, height:380,backgroundColor:'white',borderRadius:10,marginVertical:5,marginHorizontal:5}}>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.navigate('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('../img/陆游.jpg')} style={{width: '100%', height:300}} />
//             </TouchableNativeFeedback>
//             <Text style={{fontSize:14,fontWeight:"bold"}}>一句话的介绍可以很长长长长</Text>
//             <View style={{padding:20,flexDirection: 'row',marginVertical:10,justifyContent: 'space-between'}}>{/* 信息栏 */}
//             <Image     source={require('../img/古风头像男.jpg')} style={{width: 25, height: 25,borderRadius:400}}
//             /><Text>小黄</Text>
//            <View style={{flexDirection: 'row'}}>
//            <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'hearto'} size={18}/>
//            </TouchableNativeFeedback>
//            <Text>10086</Text>
//            </View>
//           </View>
//           </View>
//         </View>









//       </View>




//     </View>


//       </ScrollView>


//       </ImageBackground>
//     </View>

//   )
// }


import React, { Component } from 'react';
import {
  Dimensions, SafeAreaView, Text, View, StyleSheet,
  TouchableOpacity, ActivityIndicator, Image, ScrollView, Alert, RefreshControl,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableHighlight,FlatList,
} from "react-native";

import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
// import MasonryList from "@appandflow/masonry-list';"

const itemWidth = (width - 70) / 2;
const itemHight = 500






export default class ContentWaterfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoading: true,
      isdata1: [],
      isdata2:[],
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
      this.componentDidMount();

      //2秒后结束刷新
      setTimeout(() => {
        this._updateState(false);
        this.componentDidMount();
      }, 2000)

    }
  }

  //更新State
  _updateState(refresh) {
    this.setState({ refreshing: refresh });
  }



  componentDidMount() {
    fetch('http://192.168.50.30:3000/zuoping_yi1',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isdata1: json.result });
        // zpwdata = json.result;
        console.log(this.state.isdata1);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

      fetch('http://192.168.50.30:3000/zuoping_yi2',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isdata2: json.result });
        // zpwdata = json.result;
        console.log(this.state.isdata2);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  };
  // componentDidMount = () => {
  //     this.onRefreshing();
  // }


  //获取图片高度
  // getHight(uri){
  //   Image.getSize(uri,(width,height) => {
  //     //width 图片的宽度
  //     //height 图片的高度

  //     this.setState({picHight:height});
  //     console.log(myHeight);
  //     console.log(picHight);


  //   }
  //   )
  // }

  //循环瀑布流
  getHight() {
    var num = parseInt(Math.random() * (4));;
    var suijiheight = num * 120;
    this.setState({ picHight: suijiheight });
    console.log(suijiheight);
    console.log(this.state.picHight);
  }


  //设置图片宽高--android、ios有兼容
  //android
  setSize(imgItem) {



    this.setState({ imgH: Image.resolveAssetSource(imgItem).height });
    console.log(this.state.imgH)


  }



   
  

  render() {
    const { isdata1,isdata2, isLoading, imgH } = this.state;



    


    return (
      <View >
        <View style={{ height: 50, width: "100%", backgroundColor: "#FFFFFF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, elevation: 4, }}>
          <View style={{ flex: 0.7, marginTop: '6%', flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", }}>
            {/* <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={22} color={'#000'} onPress={() => {
                this.props.navigation.goBack();
              }} />
            </View> */}
            {/* <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 24 }}>古诗词</Text> */}
            <Text style={{ fontSize: 30, fontFamily: "youran" }}>热门</Text>
            
            {/* <View> */}
              {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
            {/* </View> */}
          </View>
          <View style={{position:"absolute",right:15,top:15}}>
          <TouchableWithoutFeedback style={{  }} onPress={() => { this.props.navigation.navigate("浙里说搜索") }}>
              <Ionicons name={'search'} size={30}  />
            </TouchableWithoutFeedback></View>
        </View>

        <View >


          <View style={{ flexDirection: 'row' }}>
            




            




          </View>

          <ScrollView showsHorizontalScrollIndicator={false} style={{ marginVertical: 5, marginHorizontal: 5,height:560 }}>{/* 按钮栏目 */}
          <View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginVertical: 5, }}>
              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("古诗词") }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    古诗词</Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("现代诗") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 60, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    现代诗
           </Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("戏曲") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 50, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    戏曲
           </Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("画作") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 50, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    画作
           </Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("名人大家") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 80, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    名人大家</Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("书法大作") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 80, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    书法大作
           </Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate("飞花令") }}>
                <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', width: 80, height: 30, borderWidth: 1, borderColor: "grey", borderRadius: 5 }}>
                  <Text style={{ fontSize: 20, fontFamily: "youran" }} >
                    飞花令
           </Text>
                </View>
              </TouchableNativeFeedback>


            </ScrollView></View>


            <View style={{ flexDirection: 'row' }}>
              {/*左*/}
              <View >

                <SafeAreaView style={styles.container}>
                  {isLoading ? <ActivityIndicator /> : (
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
                              margin: 5, borderRadius: 10,
                              backgroundColor: 'white',
                               
                            }}>
                              <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('热门细节',
                                  {
                                    id: item._id,
                                    username: item.username,
                                    toux: item.gerenxx[0].toux.uri,
                                    name: item.gerenxx[0].name,
                                    pick: item.pick,
                                    words: item.words,
                                    title: item.title,
                                    gerenxx: item.gerenxx[0],
                                    pinglun:item.pinglun,
                                    dianzhan:item.dianzhan,
                                    zhuanfa:item.zhuanfa,
                                    pinglundate:item.pinglunstate,
                                  });
                              }}>

                                <Image
                                  // onLoadStart={() => { this.setSize(item.pick[0]) }}
                                  source={{ uri: item.pick[0] }}
                                  style={{ width: itemWidth+20, height: item.hight,borderTopLeftRadius: 10,borderTopRightRadius: 10 }}
                                />
                              </TouchableOpacity>
                              <Text style={{ padding:5,width: itemWidth+20,fontSize: 15, marginVertical: 5 }}>{item.title}</Text>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  <Image style={{ height: 25, width: 25, borderRadius: 400 }} source={{ uri: item.gerenxx[0].toux.uri }} />
                                  <Text>{item.gerenxx[0].name}</Text>
                                </View>
                                <View style={{ marginRight: 5 }}>
                                  <Feather name={'heart'} size={20} />
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
                  )}
                </SafeAreaView>


              </View>





              








              {/*右*/}
              <View >

                <SafeAreaView style={styles.container}>
                  {isLoading ? <ActivityIndicator /> : (
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
                              margin: 5, borderRadius: 10,
                              backgroundColor: 'white',
                              
                            }}>
                              <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('热门细节',
                                  {
                                    id: item._id,
                                    username: item.username,
                                    toux: item.gerenxx[0].toux.uri,
                                    name: item.gerenxx[0].name,
                                    pick: item.pick,
                                    words: item.words,
                                    title: item.title,
                                    gerenxx: item.gerenxx[0],
                                    pinglun:item.pinglun,
                                    dianzhan:item.dianzhan,
                                    zhuanfa:item.zhuanfa,
                                    pinglundate:item.pinglunstate,
                                  });
                              }}>

                                <Image
                                  // onLoadStart={() => { this.setSize(item.pick[0]) }}
                                  source={{ uri: item.pick[0] }}
                                  style={{  width: itemWidth+20, height: item.hight,borderTopLeftRadius: 10,borderTopRightRadius: 10 }}
                                />
                              </TouchableOpacity>
                              <Text style={{ width: itemWidth+20,fontSize: 15, marginVertical: 5 }}>{item.title}</Text>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  <Image style={{ height: 25, width: 25, borderRadius: 400 }} source={{ uri: item.gerenxx[0].toux.uri }} />
                                  <Text>{item.gerenxx[0].name}</Text>
                                </View>
                                <View style={{ marginRight: 5 }}>
                                  <Feather name={'heart'} size={20} />
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
                  )}
                </SafeAreaView>


              </View>




            </View>


          </ScrollView>













        </View>

      </View>




    )


  }



  // _keyExtractor = (item, index) => {
  //     return item.text + index;
  // }




  // _renderItem = ({ item }) => {
  //     //   const itemHeight = this._getHeightForItem({item});
  //     return (
  //         <View style={styles.item}>
  //             <TouchableOpacity>
  //                 <Image
  //                     // source={{ uri: item.pick[0] }}
  //                     style={{ width: itemWidth, height: 140 }}
  //                 />
  //             </TouchableOpacity>
  //             <Text style={{ fontSize: 15, marginVertical: 5 }}>{item.title}</Text>
  //             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
  //                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //                     {/* <Image style={{ height: 25, width: 25, borderRadius: 400 }} source={{ uri: item.toux }} /> */}
  //                     <Text>{item.author}</Text>
  //                 </View>
  //                 <View style={{ marginRight: 5 }}>
  //                     <Feather name={'clock'} size={20} />
  //                 </View>
  //             </View>
  //         </View>
  //     )


  // }
  //     loadData() {
  //       this.setState({
  //           isLoading: true
  //       })

  //       //模拟网络请求
  //       setTimeout(() => {
  //           //把数据反转
  //           let newArray = [];
  //           for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
  //               newArray.push(this.state.dataArray[i]);
  //           }
  //           this.setState({
  //               isLoading: false,
  //               dataArray: newArray
  //           })

  //       }, 3000);
  //   }




  // _onPressContent = (item) => {
  //     this.props.navigation.navigate('ContentDetail', {item});
  // }

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