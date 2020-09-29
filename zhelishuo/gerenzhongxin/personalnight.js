import React, { Component, useState } from 'react';
import {
  ImageBackground,
  StyleSheet, Alert, Image,
  Text, View, TextInput, ScrollView, ActivityIndicator,
  TouchableNativeFeedback, TouchableHighlight, Button,
  Dimensions, FlatList, RefreshControl
} from 'react-native';
import BetterBanner from 'react-native-better-banner';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DialogSelected from './AlertSelected';
import Personalnavigation_night from './personalnavigation_night';
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import PopUp from './PopUp';

// import shige from '../src/shige';
// import login from './login';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});



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





  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      image: {
        uri: '',
        width: 0,
        height: 0,
        mime: 0,
      },
      images: null,
      isLoading: true,
      isdata: [],
    }



    // this.state = {
    //   isLoading: true,
    //   data: [],
    // }
  }

  //下拉视图开始刷新时调用
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

  // componentDidMount() {
  //   fetch('/personal', {
  //     method: 'GET'})
  //     .then((response) => response.json())
  //     .then((json) => {this.setState({ data: json.data }); })
  //     .catch((error) => console.error(error))
  //     .finally(() => { this.setState({ isLoading: false }); });
  // };



  //拍照剪切
  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      cropperCircleOverlay: true,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => alert(e));
  }



  // cleanupImages() {
  //   ImagePicker.clean()
  //     .then(() => {
  //       console.log('removed tmp images from tmp directory');
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // }

  // cleanupSingleImage() {
  //   let image =
  //     this.state.image ||
  //     (this.state.images && this.state.images.length
  //       ? this.state.images[0]
  //       : null);
  //   console.log('will cleanup image', image);

  //   ImagePicker.cleanSingle(image ? image.uri : null)
  //     .then(() => {
  //       console.log(`removed tmp image ${image.uri} from tmp directory`);
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // }

  cropLast() {
    if (!this.state.image) {
      return Alert.alert(
        'No image',
        'Before open cropping only, please select image'
      );
    }

    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 200,
      height: 200,
    })
      .then((image) => {
        console.log('received cropped image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  // pickMultiple() {
  //   ImagePicker.openPicker({
  //     multiple: true,
  //     waitAnimationEnd: false,
  //     sortOrder: 'desc',
  //     includeExif: true,
  //     forceJpg: true,
  //   })
  //     .then((images) => {
  //       this.setState({
  //         image: null,
  //         images: images.map((i) => {
  //           console.log('received image', i);
  //           return {
  //             uri: i.path,
  //             width: i.width,
  //             height: i.height,
  //             mime: i.mime,
  //           };
  //         }),
  //       });
  //     })
  //     .catch((e) => alert(e));
  // }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  // renderVideo(video) {
  //   console.log('rendering video');
  //   return (
  //     <View style={{ height: 300, width: 300 }}>
  //       <Video
  //         source={{ uri: video.uri, type: video.mime }}
  //         style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
  //         rate={1}
  //         paused={false}
  //         volume={1}
  //         muted={false}
  //         resizeMode={'cover'}
  //         onError={(e) => console.log(e)}
  //         onLoad={(load) => console.log(load)}
  //         repeat={true}
  //       />
  //     </View>
  //   );
  // }





  componentDidMount() {
    const { navigation, route } = this.props;
    fetch('http://192.168.50.28:3000/personal',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          username: route.params.username,
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

  renderImage(image) {
    return (
      <View style={{ height: 80, width: 80, borderRadius: 400, backgroundColor: '#333333' }}>
        <Image
          style={{ width: 80, height: 80, resizeMode: 'contain', borderRadius: 400 }}
          source={image}
        /></View>
    );
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }




  render() {

    const { isdata, isLoading } = this.state;


    //const {navigation,route}=this.props;
    return (

      <View style={{ marginBottom: 50 }}>
        <ScrollView style={{}}>
          <PopUp ref={ref => this.popUp = ref}>
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ fontSize: 20, marginBottom: 5 }}>选择照片</Text>
              <View style={{ height: 0.5, backgroundColor: '#333333', width: '100%', marginVertical: 10 }} />
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.pickSingle(true, true), this.popUp.hide() }}>
                <Text style={{ fontSize: 15 }}>查看大图</Text>

              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#333333', width: '100%', marginVertical: 10 }} />
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.pickSingleWithCamera(true), this.popUp.hide() }}>
                <Text style={{ fontSize: 15 }}>拍照</Text>

              </TouchableOpacity>
              <View style={{ height: 0.5, backgroundColor: '#333333', width: '100%', marginVertical: 10 }} />
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.pickSingle(true, true), this.popUp.hide() }}>
                <Text style={{ fontSize: 15 }}>从相册中选择</Text>

              </TouchableOpacity>

              <View style={{ height: 0.5, backgroundColor: '#333333', width: '100%', marginVertical: 10 }} />
              <View style={{ height: 10, width: '100%', opacity: 0 }} />
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { this.popUp.hide() }}>
                <Text style={{ fontSize: 15 }}>取消</Text>
              </TouchableOpacity>

            </View>
          </PopUp>


          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={isdata}
              bounces={true}
              refreshControl={
                <RefreshControl
                  tintColor={'red'}
                  titleColor={'brown'}
                  title={'正在刷新......'}
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <View style={{}}>

                  <ScrollView style={{}}>

                    <ImageBackground style={{ width: '100%' }} source={{ uri: item.toux.uri }}>
                      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>

                        <TouchableWithoutFeedback style={{ justifyContent: 'flex-end', marginTop: 10, }}
                          onPress={() => {
                            this.props.navigation.push("用户个人中心",{
                              username: item.username
                          });
                          }}
                        >
                          <Feather name={"sun"} size={30} style={{ color: '#4F4F4F' }} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback style={{ justifyContent: 'flex-end', marginLeft: 5, marginTop: 10, }}
                          onPress={() => {
                            this.props.navigation.push("设置");
                          }}
                        >
                          <AntDesign name={"bells"} size={27} style={{ color: '#4F4F4F' }} />
                        </TouchableWithoutFeedback>





                        <TouchableWithoutFeedback style={{ justifyContent: 'flex-end', marginTop: 10, }}
                          onPress={() => {
                            this.props.navigation.push("设置");
                          }}
                        >
                          <AntDesign name={"setting"} size={30} style={{ color: '#4F4F4F' }} />
                        </TouchableWithoutFeedback>

                      </View>



                      <View style={{ backgroundColor: "#333333", width: width, marginTop: 220, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderTopColor: '#BEBEBE', borderWidth: 0.3, elevation: 60, marginBottom: 2 }}>
                        <TouchableWithoutFeedback style={{ width: 80, height: 80, marginTop: -30, marginLeft: 30, borderRadius: 400, borderWidth: 0.3, elevation: 60 }}
                          onPress={() => { this.popUp.show() }}>

                          <Image source={{ uri: item.toux.uri }} style={{ resizeMode: 'cover', width: 80, height: 80, borderRadius: 400 }} />
                          {this.state.image ? this.renderAsset(this.state.image) : null}
                          {this.onclik_changetoux()}

                          {/* {this.state.images? this.state.images.map((i) => (
                            <View key={i.uri}>{this.renderAsset(i)}</View>
                
                            ))
                        : null} */}

                        </TouchableWithoutFeedback>

                        <View style={{ marginLeft: 30 }}>
                          <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' ,color: 'white'}}>{item.name}</Text>
                          <Text style={{ fontSize: 15, color: '#7B7B7B', marginTop: 10 }}>浙里说账号：857857857</Text>
                          <TouchableWithoutFeedback onPress={() => Alert.alert('ok')}  onPress={() => {
                            this.props.navigation.push("个性签名");
                          }}>
                            <Text style={{ fontSize: 17, color: 'white', marginTop: 5 }}>{item.gexinqianming}</Text>
                          </TouchableWithoutFeedback>
                          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: "100%", marginTop: 10 }}>
                            <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 45, borderRadius: 8, marginRight: 10 }}>
                              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                                <Text>{(Math.floor((item.data % 100) / 10))}0后</Text>
                              </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 30, borderRadius: 8, marginRight: 10 }}>
                              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                <Text>{item.sex}</Text>
                              </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 70, borderRadius: 8, marginRight: 10 }}
                            onPress={() => {
                              this.props.navigation.push("认证");}}>
                              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                                <Text>作者认证</Text>
                              </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ backgroundColor: '#d0d0d0', opacity: 0.8, height: 25, width: 70, borderRadius: 8, marginRight: 10 }}
                            onPress={() => {
                              this.props.navigation.push("编辑个人资料");}}>
                              <View style={{ alignItems: 'center', justifyContent: 'center', padding: 4 }}>
                                <Text>编辑资料</Text>
                              </View>
                            </TouchableWithoutFeedback>
                          </View>
                          <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                              <Text style={{ fontWeight: 'bold', color: '#7B7B7B'}}>{item.dongtai}</Text>
                              <Text style={{ color: 'white', fontSize: 16 }}>动态</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                              <Text style={{ fontWeight: 'bold',color: '#7B7B7B' }}>{item.guanzhu}</Text>
                              <Text style={{ color: 'white', fontSize: 16 }}>关注</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                              <Text style={{ fontWeight: 'bold',color: '#7B7B7B' }}>{item.fensi}</Text>
                              <Text style={{ color: 'white', fontSize: 16 }}>粉丝</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ marginRight: 25 }}>
                              <Text style={{ fontWeight: 'bold', color: '#7B7B7B'}}>{item.shouchang}</Text>
                              <Text style={{ color: 'white', fontSize: 16 }}>点赞与收藏</Text>
                            </TouchableWithoutFeedback>

                          </View>


                        </View>

                        <View style={{ height: 0.9, backgroundColor: '#ADADAD', marginTop: 20 }} />
                        {/* <View style ={{height:600}}> */}
                        <Personalnavigation_night/>
                        {/* </View> */}


                      </View>





                    </ImageBackground>
                  </ScrollView>
                </View>
              )
              }>

            </FlatList>
          )
          }
        </ScrollView>

      </View>


    );
  }

  //修改头像
  onclik_changetoux() {
    const { navigation, route } = this.props;
    if (this.state.image.uri != "") {
      fetch('http://192.168.50.28:3000/change_toux', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: route.params.username,

          toux: this.state.image
        })
      })


    };
  }

}


