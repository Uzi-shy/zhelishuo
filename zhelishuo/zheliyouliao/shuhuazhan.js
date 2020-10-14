// import React, { UseState } from 'react';
// import { ScrollView, Image, FlatList, StyleSheet, Text, View, Button, Alert, TouchableNativeFeedback, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';

// //显示函数
// // export default function show(){
// //   return(
// //     <View>
// //   <Image source={require('./img/钢铁侠.jpg')} />
// //   </View>
// //   )
// // }

// //钩子
// // const[ismoviename,setmoviename]=useState(" ");
// // const[ismovietime,setmovietime]=useState(" ");
// // const[ismoviebt,setmoviebt]=useState(true);


// //模拟数据
// const movieclass = [
//     {
//         title: "书画展1",
//         year: "2015",
//         posters: { thumbnail: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1851677674,942728091&fm=26&gp=0.jpg' }
//     },
//     {
//         title: "书画展2",
//         year: "2019",
//         posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618411815&di=3d45d7737fe8bb4d70b057f8de0cc27f&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fent_spider%2Fdci_2013%2F06%2Fc1aa87e3bfaaabdb359da494e7da23f1.jpg' }
//     },
//     {
//         title: "书画展3",
//         year: "2020",
//         posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593618478624&di=3c711560ef9594a6bd8207c62cf13f86&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fbaike%2Fg%3D0%3Bw%3D268%2Fsign%3D5c0b09c5d762853582e0d72ae7d244f0%2F8718367adab44aede928cdd3b11c8701a18bfba7.jpg' }
//     }

// ];
// // onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}
// //渲染函数
// export default function render({ navigation }) {
//     const movie1 = movieclass[0];
//     const movie2 = movieclass[1];
//     const movie3 = movieclass[2];

//     return (
//         <View>
//             <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", height: 80, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 10 }}>
//                 <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
//                     navigation.goBack()
//                 }} />
//                 <View>
//                     <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'yegenyou', marginTop: 15, marginLeft: 150 }}>书画展</Text>
//                 </View>
//             </View>
//             <ScrollView style={{height:600}}>

//                 <View style={{
//                     flex: 1,
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                 }}>
//                     <View style={styles.container}>
                        
//                         <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
//                         <Image source={{ uri: movie1.posters.thumbnail }} style={styles.thumbnail} />
//                         <View style={styles.rightContainer}>
//                             <Text style={styles.title}>{movie1.title}</Text>
//                             <Text style={styles.year}>{movie1.year}</Text>
//                         </View>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.container}>
                        
//                         <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
//                         <Image source={{ uri: movie3.posters.thumbnail }} style={styles.thumbnail} />
//                         <View style={styles.rightContainer}>
//                             <Text style={styles.title}>{movie2.title}</Text>
//                             <Text style={styles.year}>{movie2.year}</Text>
//                         </View>
//                         </TouchableOpacity>
//                     </View>


//                     <View style={styles.container}>
                        
//                         <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => { navigation.push('书画展细节'),Alert.alert("进入订购系统"); }}>
//                         <Image source={{ uri: movie3.posters.thumbnail }} style={styles.thumbnail} />
//                         <View style={styles.rightContainer}>
//                             <Text style={styles.title}>{movie3.title}</Text>
//                             <Text style={styles.year}>{movie3.year}</Text>
//                         </View>
//                         </TouchableOpacity>
//                     </View>
                    



//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

// //组件样式
// const styles = StyleSheet.create({


//     rightContainer: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     thumbnail: {
//         width: 60,
//         height: 90
//     },
//     title: {
//         fontSize: 20,
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     year: {
//         textAlign: 'center',
//     }
// });

// //长列表
// // export default App(){
// //   return(
// //     render();
// //   )
// // }



// import React, {Component } from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Image,
//   Text,
//   StatusBar,
//   FlatList,
//   RefreshControl,
//   ActivityIndicator,
//   ListFooterComponent,
//   TouchableNativeFeedback,
//   Alert,
//   ImageBackground,
//   TouchableOpacity
// } from 'react-native';

// export default class wofabu extends Component{
    
           

//     _renderItem = (item) => {
// 		return (
// 			<TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,padding:5,alignItems:'center'}} >
// 				<Image source={{uri:item.item.toux}} style={{height:40 ,width:40,borderRadius:400,marginRight:15}}/>		
// 					<Text style={{fontSize:20}}>{item.item.user}</Text>
//                     <TouchableOpacity style={{height:30,width:60,backgroundColor:'#7B7B7B',marginLeft:200,borderRadius:18,justifyContent:'center',alignItems:'center',padding:5}} >
//                         <Text style={{fontSize:20,color:'white'}}>关注</Text>
//                     </TouchableOpacity>
// 			</TouchableOpacity>
// 		)
//     };

//     _separator = () => {
// 		return <View style={{height:0.5, width:'100%',backgroundColor:'#7b7b7b'}}/>
// 	};

//     render(){
//         const data=[

//             {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
//                 user:'小黄黄',
//             },
//             {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1671636840,3657579619&fm=26&gp=0.jpg',
//                 user:'小欣欣',
//             },
//             {
//                 toux:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3454843111,408121797&fm=26&gp=0.jpg',
//                 user:'小红红',
//             },
//             {
//                 toux:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3841377910,1249074638&fm=26&gp=0.jpg',
//                 user:'小帆帆',
//             },
//             {
//                 toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
//                 user:'小闻闻',
//             },
//             {
//                 toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1213264833,772204269&fm=26&gp=0.jpg',
//                 user:'小小小',
//             },
//             {
//                 toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
//                 user:'小闻闻',
//             },
//             {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
//                 user:'小黄黄',
//             },
//              {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
//                 user:'小黄黄',
//             },
//              {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
//                 user:'小黄黄',
//             },
//              {
//                 toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
//                 user:'小黄黄',
//             },
//         ]
    
//         return(

//             <ImageBackground source={require('../img/dufu2.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}>
//                 <View ItemSeparatorComponent={this._separator}/>
// 				<View style={{}}>
// 					<FlatList
// 						ItemSeparatorComponent={this._separator}
// 						renderItem={this._renderItem}
// 						data={data}
// 					>
// 					</FlatList>
// 				</View>


                
//             </ImageBackground>
//         )
//     }


// }

import React, { Fragment, Component, useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListFooterComponent,
  TouchableNativeFeedback,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
var one =1;

export default class wofabu extends Component {
  constructor(props) {
    super(props);



    this.state = {
        title:"1",
        times:0,



      
      isdata: [],
      refreshing: false,
      isLoading: true,
    }
  };


  _onRefresh() {

    if (this.state.refreshing == false) {
      this._updateState(true);
    //   this.getsearchtimes();
    //   this.searchzuopingtiezi();
      

      //2秒后结束刷新
      setTimeout(() => {
        this._updateState(false);
    //     this.getsearchtimes();
    //   this.searchzuopingtiezi();
      }, 2000)

    }
  }

  //更新State
  _updateState(refresh) {
    this.setState({ refreshing: refresh });
  }

  // _renderItem = (item) => {
  //   return (
  //     <View style={{ marginLeft: 20, marginBottom: 15 }}>
  //       <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5, padding: 5, alignItems: 'center' }} >
  //         <Image source={{ uri: item.gerenxx[0].toux.uri }} style={{ height: 50, width: 50, borderRadius: 400, marginRight: 15 }} />
  //         <Text style={{ fontSize: 20 }}>{item.item.user}</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{ width: "60%" }}>
  //         <Text style={{ marginBottom: 10, fontSize: 17 }}>{item.gerenxx[0].name}</Text>
  //         <Image source={{ uri: item.item.pic }} style={{ height: 180, resizeMode: 'cover' }} />
  //       </TouchableOpacity>
  //       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginRight: 15 }}>
  //         <View style={{ flexDirection: 'row', marginLeft: 5 }}>
  //           <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
  //             <Ionicons name={'md-heart-outline'} size={21} />
  //           </TouchableOpacity>
  //           <Text style={{ marginRight: 10 }}>{item.item.good}</Text>
  //         </View>


  //         <View style={{ flexDirection: 'row', marginLeft: 5 }}>
  //           <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
  //             <EvilIcons name={'comment'} size={27} />
  //           </TouchableOpacity>
  //           <Text style={{ marginRight: 10 }}>{item.item.pinglun}</Text>
  //         </View>

  //         <View style={{ flexDirection: 'row', marginLeft: 5 }}>
  //           <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
  //             <AntDesign name={'staro'} size={20} />
  //           </TouchableOpacity>
  //           <Text>{item.item.shouc}</Text>
  //         </View>

  //         <View style={{ flexDirection: 'row', marginLeft: 5 }}>
  //           <TouchableOpacity onPress={() => { Alert.alert("转发+1"); }}>
  //             <Fontisto name={'share-a'} size={21} />
  //           </TouchableOpacity>
  //           <Text style={{ marginRight: 10 }}>{item.item.share}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   )
  // };

  _separator = () => {
    return <View style={{ height: 0.5, width: '100%', backgroundColor: '#7b7b7b' }} />
  };



  //获取搜索次数和文本
//   getsearchtimes(){
 
  
//     fetch('http://192.168.50.30:3000/getsearchtimes'
//     , {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//   })
//   .then(function (res) {return res.json();})
//   .then((json)=> {
    
//     this.setState({title:json.title});
//     console.log("title:"+this.state.title)
//   })
//       .catch((error) => console.error(error))
// };

  //搜索帖子数据
//   searchzuopingtiezi() {
//     console.log("title2:"+this.state.title)
//     fetch('http://192.168.50.30:3000/search_user',
//       {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({

//           title:this.state.title,
          
//         })
//       })
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ isdata: json.result });
//         // zpwdata = json.result;
//         console.log('isdata:'+this.state.isdata);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });

//   };



  render() {
    const { isdata, isLoading } = this.state;
    // if(one%5==0){
      
    //    this.getsearchtimes();
    //    this.searchzuopingtiezi();
      //  one=one+1;
    // }
    // if(one%5==0){
    //   this._onRefresh();
    //   one=one+1;
    // }

    setTimeout(() => {
      this._onRefresh();

    },10000)
   
    //模拟数据
const movieclass = [
    {
        title: "歌颂祖国",
        leibie:"抗疫书画作品展",
        data: " 2020-09-30 09:00 ~ 2020-10-11 17:30",
        location:"浙江图书馆一楼内大厅",
        money:"免费",
        jieshao:"为庆祝中华人民共和国成立七十一周年，继承和发扬中华民族优秀的传统文化，丰富和活跃群众业余文化生活，加强艺术爱好者之间的交流。同时，歌颂疫情期间的英雄人物、英雄事迹 ，浙江图书馆和北山街道联合举办“庆祝中华人民共和国成立七十一周年暨‘歌颂祖国’抗疫书画作品展”。本次展览将展出160幅书画作品。参展的书法作品篆、隶、行、楷、草种类齐全；绘画作品或写实或会意，或浓墨重彩或轻描淡写，风格多样，各有意趣。作品表达了艺术家们对党，对祖国，对人民，对新时代的衷心热爱和美好祝愿。",
        posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/歌颂祖国.png', }
    },
    {
        title: "2020一万个太阳",
        leibie:"大型公益画展在仙居开幕",
        data: "2020.09.26 09:00 ~ 10.26",
        location:"浙江省台州市仙居县仙鹤山云鹤春天美术馆",
        money:"免费",
        jieshao:"“一万个太阳”是服务以自闭症学生为代表的心智障碍青少年群体的公益项目，也是国内迄今规模最大、规格最高的大型自闭症学生绘画大展。项目以“艺术+公益+文旅IP”的形式，倡导社会关注心智障碍青少年群体。画展以“心性艺术”为学术主线，共含五个分展。《毕加索——全国培智学校学生“山海经”主题创作展》由杭州市杨绫子学校、酒泉特殊教育学校、张家界市特殊教育学校等学生创作，他们用稚嫩却大胆的笔触，展示出自己心中《山海经》的原生世界；《我的太阳——黄太阳作品展》则展示了一个自闭症艺术家独特的精神世界。分展《云鹤——INXX&仙鹤山跨界设计作品联展》来源于上古画作和自闭症学生的绘画作品，这些艺术作品在设计师的手下融入了日常潮服；而绘有飞虎、青鸾、凤凰等图案的汉砖砚精品原作，展出在《长翅膀的王国——“山海经”汉画像提拓展》《汉砖砚精品特展》等区，融历史厚重与人文气息为一体。该画展将持续到10月26日。",
        posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/一万个太阳.jpg' }
    },
    {
        title: "唐诗之路•诗画剡溪",
        leibie:"浙江百年水彩画作品展",
        data: "2020.09.28  ~ 10.08",
        location:"市文创园",
        money:"免费",
        jieshao:"唐诗之路•诗画剡溪”书画展在市文创园开展。市领导柴理明、梁中参加活动。据悉，此次书画展共展出145幅优秀作品，其中28幅为特邀作品，展出时间至10月8日结束，有兴趣的市民朋友可前往观赏。",
        posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/唐诗.jpg' }
    },
    {
      title: '秋蕊香——齐白石黄宾虹花鸟画展',
      leibie:"百年浙江美术展",
      data: "2020.09.08 ~ 10.18",
      location:"浙江美术馆三层7、8、9号展厅",
      money:"免费",
      jieshao:"齐白石、黄宾虹是近现代中国画坛的两位巨匠，在中国近现代美术史上具有卓越的贡献和地位，是近百年中国画创作和发展的巅峰代表。生前分别被授予“人民艺术家”和“中国人民优秀画家”称号，素以“北齐南黄”并称。为进一步弘扬中华优秀传统文化，宣传、推广、展示齐白石和黄宾虹两位大师的艺术成就，浙江美术馆、北京画院、浙江省博物馆共同策划举办“秋蕊香——齐白石黄宾虹花鸟画展”。",
      posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/秋.gif',
      thumbnail1:'http://121.196.27.141/img/zheliyouliao/书画展/秋1.png',
      thumbnail2:'http://121.196.27.141/img/zheliyouliao/书画展/秋2.png',},
    },
    {
      title: '襟向弁峰开',
      leibie:"范斌钟文刚书画展",
      data: "2020.09.15 下午开始",
      location:"小西街西岸当代美术馆",
      money:"免费",
      jieshao:"“襟向弁峰开”出自北宋米芾名帖《苕溪诗帖》中的“句留荆水话，襟向弁峰开”。本次展览由湖州市文学艺术界联合会、湖州师范学院党委宣传部主办，湖州师范学院艺术学院、湖州市新闻传媒中心专题部、市书法家协会、市美术家协会、九三学社湖州文澜书画院承办。",
      posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/范斌.png'},
    },
    {
      title: '知天命',
      leibie:"杨力郡中国画小品展",
      data: "2020.09.26 ~ 10.18",
      location:"寿崇德艺术馆",
      money:"免费",
      jieshao:"“襟向弁峰开”出自北宋米芾名帖《苕溪诗帖》中的“句留荆水话，襟向弁峰开”。本次展览由湖州市文学艺术界联合会、湖州师范学院党委宣传部主办，湖州师范学院艺术学院、湖州市新闻传媒中心专题部、市书法家协会、市美术家协会、九三学社湖州文澜书画院承办。",
      posters: { thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/杨力郡.jpg',
      // thumbnail1:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆1.png',
      // thumbnail2:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆2.png',
      // thumbnail3:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆3.png'
    },
    },
    {
      title: '文心连社稷，翰墨颂小康',
      leibie:"古越书画院迎国庆书画作品展",
      data: "2020.09.25 9:30 ~ 10.13",
      location:"诸暨市博物馆",
      money:"免费",
      jieshao:"2020.09.25日至10月13日，“文心连社稷，翰墨颂小康”古越书画院迎国庆书画作品展将亮相诸暨市博物馆。此次展览共推出百余幅书画作品，体裁多样、内容丰富，或浓墨重彩，或淡雅写意，充分体现了创作者们对伟大祖国的美好祝愿，对幸福生活的向往追求，对家乡故园的热情赞颂。开展当日，古越书画院还策划了丰富的开幕式活动：浙江画院研究员、中国美术家协会会员楼有刚向诸暨市博物馆捐赠国画作品《硕果累累》；邀请十余位知名书画家现场创作15米长卷书画作品；向到场观众送出200本《古越艺丛》。 今年是“两个一百年”奋斗目标的交汇之年，是“两个五年”的交点之年，也是高水平全面建成小康社会的决胜之年。诸暨市委市政府紧紧围绕“健康暨阳、幸福暨阳”目标，统筹城乡区域发展，科学筹划、协调推进、形成以城带乡、以乡促城、城乡互动的发展格局，带领诸暨人民在新时代浪潮中筑梦前行；紧扣乡村振兴总抓手，围绕争创“全面小康指数十强县”新目标，锚定方向、精准施策，狠抓落实、靶向发力，奋力谱写新时代诸暨高水平全面建成小康社会新篇章。文心连社稷，礼赞新时代。用艺术的语言记录时代发展，用艺术的手段弘扬时代精神，是文化工作者的责任和担当。为反映和展示我市在全面建设小康进程的精神面貌和幸福生活，诸暨市博物馆携手古越书画院深入基层、深入生活，精心创作，围绕人民群众切身体会的获得感、幸福感、安全感，用笔墨深情展现人民群众共建美好家园、共享幸福生活的场景，汇聚同心同德奔小康的强大力量。小康源自奋斗，小康点亮生活。此次展览共推出百余幅书画作品，体裁多样、内容丰富，或浓墨重彩，或淡雅写意，充分体现了创作者们对伟大祖国的美好祝愿，对幸福生活的向往追求，对家乡故园的热情赞颂。",
      posters: { 
      thumbnail: 'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆.jpg',
      thumbnail1:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆1.jpg',
      thumbnail2:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆2.jpg',
      thumbnail3:'http://121.196.27.141/img/zheliyouliao/书画展/迎国庆3.jpg'},
    },

];
    

    return (
      <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: width, height: 50, backgroundColor: 'white',elevation: 4,justifyContent:'center' }}>
                <AntDesign name={'left'} size={25} color={'#000'} style={{position:'absolute',left:10}} onPress={() => {
                    this.props.navigation.goBack()
                }} />
                
                    <Text style={{ fontSize: 30,  fontFamily: 'youran', }}>诗画艺术展</Text>
                
            </View>
          
          
        {/* // <ImageBackground source={require('../img/杜甫.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}> */}
        {/* <View ItemSeparatorComponent={this._separator} /> */}
        <ScrollView style={{marginBottom:50}}>
        {/* {isLoading ? <ActivityIndicator /> : ( */}
          <FlatList
            data={movieclass}
            ItemSeparatorComponent={this._separator}
            
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
          renderItem={({ item }) => (
    //         <View style={{ marginLeft: 20, marginBottom: 15 }}>
    //     <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5, padding: 5, alignItems: 'center' }} >
    //       <Image source={{ uri: item.gerenxx[0].toux.uri }} style={{ height: 50, width: 50, borderRadius: 400, marginRight: 15 }} />
    //       <Text style={{ fontSize: 20 }}>{item.gerenxx[0].name}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ width: "60%" }}>
    //       <Text style={{ marginBottom: 10, fontSize: 17 }}>{item.title}</Text>
    //       <Image source={{ uri: item.pick[0] }} style={{ height: 180, resizeMode: 'cover' }} />
    //     </TouchableOpacity>
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginRight: 15 }}>
    //       <View style={{ flexDirection: 'row', marginLeft: 5 }}>
    //         <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
    //           <Ionicons name={'md-heart-outline'} size={21} />
    //         </TouchableOpacity>
    //         <Text style={{ marginRight: 10 }}>{item.dianzhan}</Text>
    //       </View>


    //       <View style={{ flexDirection: 'row', marginLeft: 5 }}>
    //         <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
    //           <EvilIcons name={'comment'} size={27} />
    //         </TouchableOpacity>
    //         <Text style={{ marginRight: 10 }}>{item.pinglun}</Text>
    //       </View>

    //       <View style={{ flexDirection: 'row', marginLeft: 5 }}>
    //         <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
    //           <AntDesign name={'staro'} size={20} />
    //         </TouchableOpacity>
    //         <Text>{item.dianzhan}</Text>
    //       </View>

    //       <View style={{ flexDirection: 'row', marginLeft: 5 }}>
    //         <TouchableOpacity onPress={() => { Alert.alert("转发+1"); }}>
    //           <Fontisto name={'share-a'} size={21} />
    //         </TouchableOpacity>
    //         <Text style={{ marginRight: 10 }}>{item.dianzhan}</Text>
    //       </View>
    //     </View>
    //   </View>
    <TouchableWithoutFeedback style={{flexDirection:'row',marginBottom:5,marginTop:5,padding:8,alignItems:'center',width:width}} >
     				<Image source={{uri:item.posters.thumbnail}} style={{height:120 ,width:90,borderRadius:10,marginRight:10}}/>		
             <View style={{flexDirection:'column'}}>
     					<Text style={{fontSize:18,width:width-180,}}>{item.title}</Text>
               <Text style={{fontSize:15,width:width-180,}}>{item.leibie}</Text>
</View>
                         {/* <Text style={{fontSize:20}}>{item.year}</Text> */}
                     <TouchableOpacity style={{height:30,width:60,backgroundColor:'#3C3C3C',position:'absolute',right:10,bottom:5,borderRadius:18,justifyContent:'center',alignItems:'center',padding:5}} onPress={() => { this.props.navigation.push('书画展细节',{
      title:item.title,
      leibie:item.leibie,
      pic:item.posters.thumbnail,
      pic1:item.posters.thumbnail1,
      pic2:item.posters.thumbnail2,
      pic3:item.posters.thumbnail3,
      date:item.data,
      jieshao:item.jieshao,
      money:item.money,
      location:item.location

    }) }}>
                             <Text style={{fontSize:17,color:'white'}}>购票</Text>
                         </TouchableOpacity>
     			</TouchableWithoutFeedback>
            
          )}
          >
          </FlatList></ScrollView>
        {/* )} */}
        


        {/* // </ImageBackground> */}
      </View>
    )
  }


}