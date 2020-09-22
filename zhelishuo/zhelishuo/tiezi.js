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
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
var one =1;

export default class wofabu extends Component {
  constructor(props) {
    super(props);



    this.state = {
        title:"小",
        times:0,



      
      isdata: [],
      refreshing: false,
      isLoading: true,
    }
  };


  _onRefresh() {

    if (this.state.refreshing == false) {
      this._updateState(true);
      this.getsearchtimes();
      this.searchzuopingtiezi();
      

      //2秒后结束刷新
      setTimeout(() => {
        this._updateState(false);
        this.getsearchtimes();
      this.searchzuopingtiezi();
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
  getsearchtimes(){
 
  
    fetch('http://192.168.50.28:3000/getsearchtimes'
    , {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
  .then(function (res) {return res.json();})
  .then((json)=> {
    
    this.setState({title:json.title});
    console.log("title:"+this.state.title)
  })
      .catch((error) => console.error(error))
};

  //搜索帖子数据
  searchzuopingtiezi() {
    console.log("title2:"+this.state.title)
    fetch('http://192.168.50.28:3000/search_zuoping_yi',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          title:this.state.title,
          
        })
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isdata: json.result });
        // zpwdata = json.result;
        console.log('isdata:'+this.state.isdata);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

  };



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

    },2000)
   
    
    

    return (
      <View>
        {/* // <ImageBackground source={require('../img/杜甫.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}> */}
        <View ItemSeparatorComponent={this._separator} />
        <View style={{}}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={isdata}
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
            <View style={{ marginLeft: 20, marginBottom: 15 }}>
        <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 5, marginTop: 5, padding: 5, alignItems: 'center' }} >
          <Image source={{ uri: item.gerenxx[0].toux.uri }} style={{ height: 50, width: 50, borderRadius: 400, marginRight: 15 }} />
          <Text style={{ fontSize: 20 }}>{item.gerenxx[0].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "60%" }}>
          <Text style={{ marginBottom: 10, fontSize: 17 }}>{item.title}</Text>
          <Image source={{ uri: item.pick[0] }} style={{ height: 180, resizeMode: 'cover' }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginRight: 15 }}>
          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <TouchableOpacity onPress={() => { Alert.alert("点赞+1"); }}>
              <Ionicons name={'md-heart-outline'} size={21} />
            </TouchableOpacity>
            <Text style={{ marginRight: 10 }}>{item.dianzhan}</Text>
          </View>


          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <TouchableOpacity onPress={() => { Alert.alert("评论+1"); }}>
              <EvilIcons name={'comment'} size={27} />
            </TouchableOpacity>
            <Text style={{ marginRight: 10 }}>{item.pinglun}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <TouchableOpacity onPress={() => { Alert.alert("收藏+1"); }}>
              <AntDesign name={'staro'} size={20} />
            </TouchableOpacity>
            <Text>{item.dianzhan}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <TouchableOpacity onPress={() => { Alert.alert("转发+1"); }}>
              <Fontisto name={'share-a'} size={21} />
            </TouchableOpacity>
            <Text style={{ marginRight: 10 }}>{item.dianzhan}</Text>
          </View>
        </View>
      </View>
            
            
          )}
          >
          </FlatList>
        )}
        </View>



        {/* // </ImageBackground> */}
      </View>
    )
  }


}