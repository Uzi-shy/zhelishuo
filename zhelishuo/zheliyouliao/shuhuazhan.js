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
 
  
//     fetch('http://192.168.50.28:3000/getsearchtimes'
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
//     fetch('http://192.168.50.28:3000/search_user',
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
        title: "相约杭州 诗画江南",
        leibie:"米·顾依达油画展",
        year: "2015.08.05 09:00 - 09.03 17:00",
        posters: { thumbnail: 'http://www.namoc.org/pictures/zlk/m/20101105_wklhjhyegydyhzpz_m.jpg' }
    },
    {
        title: "解衣磅礴",
        leibie:"钱瘦铁、桥本关雪交流回顾展",
        year: "2019.08.05 09:00 - 09.03 17:00",
        posters: { thumbnail: 'https://www.zjam.org.cn/SiteAdmin/Holding/Logo/20200723163026.jpg' }
    },
    {
        title: "向史而新",
        leibie:"浙江百年水彩画作品展",
        year: "2020.08.05 09:00 - 09.03 17:00",
        posters: { thumbnail: 'https://www.zjam.org.cn/SiteAdmin/Holding/Logo/20200731205542.jpg' }
    },
    {
      title: '运河诗画展强势来袭！',
      leibie:"公益小天使“加盟”助力展",
      year: "2020.08.05 09:00 - 09.03 17:00",
      posters: { thumbnail: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3539623675,3335480476&fm=26&gp=0.jpg'},
    },
    {
      title: '水色情缘',
      leibie:"金焕大运河诗画展",
      year: "2020.08.05 09:00 - 09.03 17:00",
      posters: { thumbnail: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597135588382&di=52c88a1cc6eda99f48597e15146fe8e6&imgtype=0&src=http%3A%2F%2Fwww.hqwhw.com%2Fhtml%2Fuploadfile%2F201810151804847.jpg'},
    },

];
    

    return (
      <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: width, height: 60, backgroundColor: 'white',elevation: 5,justifyContent:'center' }}>
                <AntDesign name={'left'} size={25} color={'#000'} style={{position:'absolute',left:10}} onPress={() => {
                    this.props.navigation.goBack()
                }} />
                
                    <Text style={{ fontSize: 24, fontWeight: 'bold', fontFamily: 'yegenyou', }}>书画展</Text>
                
            </View>
          
          
        {/* // <ImageBackground source={require('../img/杜甫.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}> */}
        {/* <View ItemSeparatorComponent={this._separator} /> */}
        <ScrollView style={{marginBottom:60}}>
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
    <TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,padding:8,alignItems:'center',width:width}}  onPress={() => { this.props.navigation.push('书画展细节',{
      title:item.title,
      leibie:item.leibie,
      pic:item.posters.thumbnail,
      date:item.year,

    }),Alert.alert("进入订购系统"); }}>
     				<Image source={{uri:item.posters.thumbnail}} style={{height:120 ,width:120,borderRadius:20,marginRight:10}}/>		
             <View style={{flexDirection:'column'}}>
     					<Text style={{fontSize:17,width:width-180,}}>{item.title}</Text>
               <Text style={{fontSize:17,width:width-180,}}>{item.leibie}</Text>
</View>
                         {/* <Text style={{fontSize:20}}>{item.year}</Text> */}
                     <TouchableOpacity style={{height:30,width:60,backgroundColor:'#7B7B7B',position:'absolute',right:10,bottom:5,borderRadius:18,justifyContent:'center',alignItems:'center',padding:5}} >
                             <Text style={{fontSize:20,color:'white'}}>购票</Text>
                         </TouchableOpacity>
     			</TouchableOpacity>
            
          )}
          >
          </FlatList></ScrollView>
        {/* )} */}
        


        {/* // </ImageBackground> */}
      </View>
    )
  }


}