// import React, { Component } from 'react';
// import { ImageBackground, StyleSheet, Alert, Image, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableNativeFeedback,FlatList } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import BetterBanner from 'react-native-better-banner';
// // import  { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { ButtonGroup } from 'react-native-elements';
// import PopUp from '../zheliyouliao/Tankuang';


// export default class yummy extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       data:[
//         {
//           img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4143828308,912621730&fm=26&gp=0.jpg',
//           name:'小太阳',
//           wen:'星黛露真可爱',
//           time:'08-10',
//           good:'18',
//         },
//         {
//           img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4143828308,912621730&fm=26&gp=0.jpg',
//           name:'小太阳',
//           wen:'星黛露真可爱',
//           time:'08-10',
//           good:'18',
//         },
//         {
//           img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4143828308,912621730&fm=26&gp=0.jpg',
//           name:'小太阳',
//           wen:'星黛露真可爱',
//           time:'08-10',
//           good:'18',
//         },
//         {
//           img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4143828308,912621730&fm=26&gp=0.jpg',
//           name:'小太阳',
//           wen:'星黛露真可爱',
//           time:'08-10',
//           good:'18',
//         },
//       ]
//     }
//   }


//   renderData(){
//     return(
//       <FlatList 
//       data={this.state.data}
//       keyExtractor={(item,index)=>index}
//       renderItem={this.renderDataItem}
//       />
//     );
//   }

//   renderDataItem=({item})=>{
//     return(
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginBottom:5 }}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <TouchableOpacity>
//                     <Image source={{uri:item.img}} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
//                   </TouchableOpacity>
//                   <TouchableOpacity>
//                     <View>
//                       <Text style={{ fontSize: 15, color: '#4F4F4F' }}>{item.name}</Text>
//                       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                         <Text style={{ fontSize: 17 }}>{item.wen}</Text>
//                         <Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>{item.time}</Text>
//                       </View>
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//                 <View></View>
//                 <View >
//                   <TouchableOpacity style={{}}>
//                     <Ionicons name={'md-heart-outline'} size={20} />
//                     <Text >{item.good}</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>

//     );
//   }

//   render() {
//     return (

//       <View style={{flex:1}}  >
//          <PopUp ref={ref=>this.popUp=ref} >
//     <View style={{alignItems:'center'}}>
//       <Text style={{fontSize:20,fontWeight:'600',marginTop:10}}>分享至</Text>
//       <View style={{flexDirection:'row',padding:15,justifyContent:'space-between',width:'100%',padding:15,marginTop:10}}>
//         <View style={{alignItems:'center'}}>
//         <Image style={{height:50,width:50,opacity:0.8,borderRadius:400,marginBottom:5}} source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3808707680,3285779133&fm=26&gp=0.jpg'}}/>
//           <Text style={{fontSize:16}}>站内好友</Text>
//         </View>
//         <View style={{alignItems:'center'}}>
//             <Image style={{height:50,width:50,opacity:0.8,borderRadius:400,marginBottom:5}} source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3808707680,3285779133&fm=26&gp=0.jpg'}}/>
//           <Text style={{fontSize:16}}>微信好友</Text>
//         </View>
//         <View style={{alignItems:'center'}}>
//             <Image style={{height:50,width:50,opacity:0.8,marginBottom:5}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599578197726&di=e375b446a6abe20bf33d865453f0d045&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F35%2F50%2F25573be76600ffc.jpg'}}/>
//           <Text style={{fontSize:16}}>朋友圈</Text>
//         </View>
//         <View style={{alignItems:'center'}}>
//               <Image style={{height:50,width:50,opacity:0.8,borderRadius:400,marginBottom:5}} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3689593137,3953434942&fm=26&gp=0.jpg'}}/>
//           <Text style={{fontSize:16}}>QQ好友</Text>
//         </View>
//         <View style={{alignItems:'center'}}>
//             <Image style={{height:50,width:50,opacity:0.7,marginBottom:5}} source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3530194320,3326379785&fm=26&gp=0.jpg'}}/>
//           <Text style={{fontSize:16}}>QQ空间</Text>
//         </View>
//         {/* <View style={{alignItems:'center'}}>
//             <Image style={{height:50,width:50}} source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3401603638,3430607400&fm=26&gp=0.jpg'}}/>
//           <Text style={{fontSize:16}}>微博</Text>
//         </View> */}
//       </View>
//       <View style={{height:0.4,backgroundColor:'black',marginVertical:5,width:'100%'}}/>
//       <TouchableOpacity style={{alignItems:'center',padding:10,}}
//       onPress={() => { this.popUp.hide() }} >
//         <Text style={{fontSize:18,color:'#5B5B5B'}}>取消</Text>
//       </TouchableOpacity>
//    </View>
//     </PopUp>





//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 65, width: '100%', alignItems: 'center', backgroundColor: 'white' }}>

//           <View style={{ flexDirection: 'row', marginLeft: 15 }}>
//             <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 400 }}>
//               <Image source={require('../img/拉拉可爱.jpg')} style={{ width: 40, height: 40, borderRadius: 400 }} />
//             </TouchableOpacity>
//             <Text style={{ fontSize: 23, marginLeft: 10, alignItems: 'center' }}>Aich_xx</Text>
//           </View>

//           <View>
//           </View>

//           <TouchableOpacity style={{ width: 60, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, padding: 5 }}>
//             <Text>已关注</Text>
//           </TouchableOpacity>


//         </View>






//        <View style={{flex:1,marginBottom:40}}>
//           <ScrollView   >

//             <BetterBanner
//               bannerImages={[
//                 { uri: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=68517899,3697388917&fm=26&gp=0.jpg" },
//                 { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1975170490,4218500056&fm=26&gp=0.jpg" },
//                 { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2627232186,404872462&fm=26&gp=0.jpg" },
//                 { uri: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031801964,3689772950&fm=26&gp=0.jpg" },
//               ]}
//               onPress={(index) => alert('you pressed index is : ' + index)}
//               isSeamlessScroll={true}
//               isAutoScroll={false}
//               indicatorGroupPosition={'center'}
//               bannerTitles={["one ", "two", "three", "four"]}
//               indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
//             />
//             <View style={{ padding: 15 }}>
//               <Text style={{ fontSize: 17, padding: 13 }}>星黛露，米奇的玩偶-迪士尼小熊达菲的好朋友之一。在迪士尼故事里，星黛露是一只紫色的兔子，她和米奇的玩偶达菲熊相遇后，星黛露告诉达菲：她的梦想是成为百老汇舞蹈家，并和他分享“追随梦想”的意义。2018年3月8日加入上海迪士尼度假区。</Text>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
//                 <Text>08-10</Text>
//                 <View>
//                 </View>
//                 <TouchableOpacity style={{ width: 60, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, padding: 5 }}>
//                   <Text>不喜欢</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5, marginTop: 20, marginBottom: 20 }} />
//               <Text>共45条评论</Text>

//               <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }} >
//                 <Image source={require('../img/拉拉吃饼干.png')} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
//                 <TextInput
//                   style={{ height: 30, width: 300, borderRadius: 20, padding: 5, backgroundColor: '#d0d0d0' }}
//                   placeholder='说点什么'
//                   placeholderTextColor='#5B5B5B'
//                 />
//               </View>

//               <View >
//               {this.renderData()}
//           </View>

//             </View>





//           </ScrollView>
//     </View>







//       {/*底部*/}

//           <View style={{ backgroundColor:"white",height:50,position:'absolute',bottom:0, width: "100%" ,}}>
//             <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5 }} />

//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", Bottom: 40 }}>


//               <View style={{ flexDirection: 'row', padding: 10, }}>{/* 功能栏*/}
//                 <TouchableOpacity style={{ marginRight: 10 }}
//                   onPress={() => {
//                     { this.props.navigation.goBack(); }
//                   }}>
//                   <Ionicons name={'chevron-back-outline'} size={25} color={'#3C3C3C'} />
//                 </TouchableOpacity>

//                 <View style={{ flexDirection: 'row', marginLeft: 5 }}>
//                   <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
//                     <Ionicons name={'md-heart-outline'} size={21} />
//                   </TouchableOpacity>
//                   <Text style={{ marginRight: 10 }}>888</Text>
//                 </View>

//                 <View style={{ flexDirection: 'row', marginLeft: 5 }}>
//                   <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
//                     <EvilIcons name={'comment'} size={27} />
//                   </TouchableOpacity>
//                   <Text style={{ marginRight: 10 }}>999</Text>
//                 </View>

//                 <View style={{ flexDirection: 'row', marginLeft: 5 }}>
//                   <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
//                     <AntDesign name={'staro'} size={20} />
//                   </TouchableOpacity>
//                   <Text>000</Text>
//                 </View>

//               </View>


//               <View style={{ flexDirection: 'row', padding: 10, marginRight: 10 }}>
//               <View style={{ marginRight: 15 }}>
//             <TouchableWithoutFeedback
//               onPress={() =>{this.popUp.show()} }>
//               <AntDesign name={'sharealt'} size={20} />
//             </TouchableWithoutFeedback>

//           </View>
//                 <View style={{ marginRight: 10 }}>
//                   <TouchableWithoutFeedback
//                     onPress={() => { Alert.alert('ok') }}>
//                     <Feather name={'more-horizontal'} size={20} />
//                   </TouchableWithoutFeedback>
//                 </View>
//               </View></View>

//           </View>







//       </View>

//     );
//   }
// } 


import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Alert, Image, Text, View, 
  TextInput, ScrollView, TouchableWithoutFeedback, TouchableHighlight, ActivityIndicator,TouchableOpacity,RefreshControl,
  TouchableNativeFeedback, FlatList,Share } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import BetterBanner from 'react-native-better-banner';
// import  { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ButtonGroup } from 'react-native-elements';
import PopUp from '../zheliyouliao/Tankuang';

// var username="";
var one =1;

export default class yummy extends Component {






  constructor(props) {
    super(props);


    this.state = {

      words:"",
      // userdata:[],
      isLoading: true,
      isdata: [],
      flag: false,
      guanzhu: "未关注",
      id: '',
      username:'',
      picdata: [
        {
          uri: ""
        }
      ]
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
      this.componentWillMount();
      

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


  

  add() {
    if (this.state.flag) {
      this.setState({ guanzhu: "未关注" });
      this.setState({ flag: !this.state.flag });
    } else {
      this.setState({ flag: !this.state.flag });
      this.setState({ guanzhu: "已关注" });
    }
  }

  

  onShare = async () => 
  {
    const { navigation, route } = this.props;
    try {
      const result = await Share.share({
        message:route.params.title
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  

  componentWillMount(){
    one=1;
    fetch('http://192.168.50.30:3000/judgelogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        })
        .then(function (res) {
          return res.json();})
        
      .then((json) => {
        console.log("json.username:"+json.username)
        this.setState({username:json.username})
        console.log("username:"+this.state.username)
      })
      .catch((error) => console.error(error));
      // this.componentDidMount();
  }

  componentDidMount() {
    // one=1;
    // this.componentWillMount();
    fetch('http://192.168.50.30:3000/personal',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:this.state.username,
        })
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isdata: json.result });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };


  _onPressinsertpinglun(){
    
    const { navigation, route } = this.props;

    
    var date = new Date();
    var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (year ==2020) {
          year="";
      }
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
    var currentdate = year+ " " +month + seperator1 + strDate;
    console.log("time"+currentdate)
    if(this.state.words!=""){
      fetch('http://192.168.50.30:3000/insertpinglun', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id:route.params.id,
          toux:'file:///storage/emulated/0/Android/data/com.zhelishuo/files/Pictures/1452d3ee-b906-4400-a329-6cb3d7113656.jpg',
          name:"小欣欣",
          words:this.state.words,
          time:currentdate,
        })
      })

    }
  };


  render() {
    const { navigation, route } = this.props;
    const { userdata,isdata, isLoading } = this.state;
    // this.setState({username:userdata[0].username})

    // var one=1;

    // this.setState({id:route.params.id});
    // this.setState({username:route.params.username});
    // let picData = this.state.picdata;
    // let len = picData.length;
    // for (let i = 0; i < len; i++) {
    //     picData[i]="uri:"+picData[i];
    // }
    if(one<=5){
      
      this.componentDidMount();
      one=one+1;
    }
      
    

    return (

      <View style={{ flex: 1 }}  >
        

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 65, width: '100%', alignItems: 'center', backgroundColor: 'white' }}>

          <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 15,justifyContent: 'space-between', }}>

            <TouchableOpacity style={{ marginTop: -5, marginLeft: 5, width: 40, height: 40, borderRadius: 400 }}>
              <Image source={{ uri: route.params.toux }} style={{ width: 40, height: 40, borderRadius: 400 }} />

            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginLeft: 10, alignItems: 'center' }}>{route.params.name}</Text>
            <TouchableOpacity style={{
              width: 60,
              height: 30,
              borderRadius: 20,
              borderColor: 'grey',
              marginLeft: 200,
              borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 5
            }}
              onPress={() => {
                this.add();
              }}
            >
              <Text>{this.state.guanzhu}</Text>
            </TouchableOpacity>
          </View>

        </View>






        <View style={{ flex: 1, marginBottom: 40 }}>
          <ScrollView   >

            <BetterBanner
              bannerImages={
                [{ uri: route.params.pick[0] },
                { uri: route.params.pick[1] },
                { uri: route.params.pick[2] },
                ]
              }
              
              onPress={(index) => alert('you pressed index is : ' + index)}
              isSeamlessScroll={true}
              isAutoScroll={false}
              indicatorGroupPosition={'center'}
              bannerTitles={[route.params.title]}
              indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
            />
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 17, padding: 13 }}>{route.params.words}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
              <Text>08-10</Text>
              <View>
              </View>
              <TouchableOpacity style={{ width: 60, height: 30, borderRadius: 20, borderColor: 'grey', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginRight: 20, padding: 5 }}>
                <Text>不喜欢</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5, marginTop: 20, marginBottom: 20 }} />
            <Text>共{ route.params.pinglundate.length}条评论</Text>



            {isLoading ? <ActivityIndicator /> : (
              <FlatList
              showsVerticalScrollIndicator={false}
              data={isdata}
              bounces={true}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20,marginLeft:20 }} >
              <Image source={{ uri: item.toux.uri }} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 20 }} />
              <TextInput
                style={{ height: 30, width: 250, borderRadius: 20, padding: 5, backgroundColor: '#d0d0d0' }}
                placeholder='说点什么'
                placeholderTextColor='#5B5B5B'
                onChangeText={(text) => {
                  this.setState({ words: text });
              }}
              />
              <TouchableOpacity onPress={() => {
                            this._onPressinsertpinglun();
                            this.props.navigation.push("浙里说");
                        }}>
                            <Text style={{
                                paddingHorizontal: 15,
                                backgroundColor: "black",
                                color: "#fff",
                                paddingVertical: 5, borderRadius: 20, marginRight: 5,marginLeft:12
                            }}>
                                发布
                              </Text>
                        </TouchableOpacity>
            </View>
              )}
              />
            )}
            
            

            <View >
              {/* {this.renderData()} */}
              <FlatList
                      showsVerticalScrollIndicator={false}
                      data={route.params.pinglundate}
                      // bounces={true}
                      // numColumns={1}
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
                      onEndReachedThreshold={1}
                      renderItem={({ item }) => (
                        <View>
                                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginLeft:20 ,marginBottom:15 }}>
                 <View style={{ flexDirection: 'row' }}>
                   <TouchableOpacity>
                     <Image source={{uri:item.toux}} style={{ width: 30, height: 30, borderRadius: 400, marginRight: 10 }} />
                   </TouchableOpacity>
                   <TouchableOpacity>
                     <View>
                       <Text style={{ fontSize: 15, color: '#4F4F4F' }}>{item.name}</Text>
                       <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                         <Text style={{ fontSize: 17 }}>{item.words}</Text>
                         <Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}>{item.time}</Text>
                       </View>
                     </View>
                   </TouchableOpacity>
                 </View>
                 <View></View>
                 <View >
                   <TouchableOpacity style={{}}>
                     <Ionicons name={'md-heart-outline'} size={20} />
                     <Text >{item.good}1</Text>
                   </TouchableOpacity>
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
            </View>









          </ScrollView>
          <View style={{ bottom: 15, position: "absolute", flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>




          </View>
        </View>




        {/*底部*/}

        <View style={{ backgroundColor: "white", height: 50, position: 'absolute', bottom: 0, width: "100%", }}>
          <View style={{ height: 0.5, width: "100%", backgroundColor: '#BEBEBE', elevation: 0.5 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%", Bottom: 40 }}>


            <View style={{ flexDirection: 'row', padding: 10, }}>{/* 功能栏*/}
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => {
                  { this.props.navigation.goBack(); }
                }}>
                <Ionicons name={'chevron-back-outline'} size={25} color={'#3C3C3C'} />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
                  <Ionicons name={'md-heart-outline'} size={21} />
                </TouchableOpacity>
              <Text style={{ marginRight: 10 }}>{route.params.dianzhan}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
                  <EvilIcons name={'comment'} size={27} />
                </TouchableOpacity>
                <Text style={{ marginRight: 10 }}>{route.params.pinglun}</Text>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
                  <AntDesign name={'staro'} size={20} />
                </TouchableOpacity>
                <Text>{route.params.zhuanfa}</Text>
              </View>

            </View>


            <View style={{ flexDirection: 'row', padding: 10, marginRight: 10 }}>
              <View style={{ marginRight: 15 }}>
                <TouchableWithoutFeedback
                  onPress={() => { this.onShare(); }}>
                  <AntDesign name={'sharealt'} size={20} />
                </TouchableWithoutFeedback>

              </View>
              <View style={{ marginRight: 10 }}>
                <TouchableWithoutFeedback
                  onPress={() => { Alert.alert('ok') }}>
                  <Feather name={'more-horizontal'} size={20} />
                </TouchableWithoutFeedback>
              </View>
            </View></View>

        </View>


















      </View>

    );
  }
} 