import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    StatusBar,
    ImageBackground,
    Keyboard,
    PanResponder

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import DatePicker from "react-native-datepicker";
import ImagePicker from 'react-native-image-crop-picker';
import PopUp from './PopUp';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

// import CityList from "./cityList";
// import AddressSelect from "./AddressSelect";
// import {ReactNavComponent, Widget} from 'rn-yunxi'
const { height, width } = Dimensions.get('window')




export default class gerenxx extends Component {




    constructor(props) {
        super(props);
        //   const {navigation} = this.props;
        //   let username = this.props.navigation.getParam("username"); 
        this.state = {
            image: null,
            username: '',
            searchname: '',
            searchgexinqianming: '',
            searchsex: '',
            searchbirthday: '',
            
            image: {
              uri: '',
              width: 0,
              height: 0,
              mime: 0,
            },
            images: null,
          
            text: '',
            data: 2020 - 1 - 1,
            time: '20:00',
            datatime: '1950-05-05 20:00',
            datatime1: '2019-05-05 20:00'
        };
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }
 //拍照剪切
 pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      cropperCircleOverlay:true,
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


    //   transitionTime = () => {
    //     let strtime = this.state.date;
    //     let date = new Date(strtime);
    //     let time = date.valueOf();
    //     console.log(this.state.date);//这里得到的时间格式是组件中定义的样式
    //     console.log('转换后的时间戳是：' + time);
    //   };
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e) => { console.log('onStartShouldSetPanResponder'); return true; },
            onMoveShouldSetPanResponder: (e) => { console.log('onMoveShouldSetPanResponder'); return true; },
            onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
            onPanResponderMove: (e) => console.log('onPanResponderMove'),
            onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
            onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
        });
    }


    _insertdate = () => {
        //    var navigation=this.props.navigation;
        // let {username} = this.props.navigation.params.username;
        // let {phonenumber} = this.props.phonenumber;
        // let {password} = route.params;
        // const { username } = route.params;
        // let username = this.props.getusername;
        fetch('http://10.0.2.2:3000/insertgerenxx', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                name: this.state.searchname,
                gexinqianming: this.state.searchgexinqianming,
                sex: this.state.searchsex,
                data: this.state.data,
                toux:this.state.image,
                dongtai: 0,
                fensi: 0,
                guanzhu: 0,
                shouchang: 0
            })
        })
        // promise=false;
        this.props.navigation.navigate('浙里说账号登录');
    };

    renderImage(image) {
        return (
          <View style={{height:80,width:80,borderRadius:400,backgroundColor:'white'}}>
           
          <Image
            style={{ width: 80, height: 80, resizeMode: 'contain',borderRadius:400 }}
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
        const { navigation, route } = this.props;

        // this.setState({username:route.params});
        // this.state.username=username;
        // let username = this.props.navigation.state.params.username;

        return (

            <View>
            
            <PopUp ref={ref=>this.popUp=ref}>
          <View style={{alignItems:'center',padding:10}}>
            <Text style={{fontSize:20,marginBottom:5}}>选择照片</Text>
            <View style={{height:0.5,backgroundColor:'black',width:'100%',marginVertical:10}}/>
            <TouchableOpacity style={{padding:5}} onPress={() => {this.pickSingleWithCamera(true),this.popUp.hide()}}>
              <Text style={{fontSize:20}}>拍照</Text>
              
            </TouchableOpacity>
            <View style={{height:0.5,backgroundColor:'black',width:'100%',marginVertical:10}}/>
            <TouchableOpacity style={{padding:5}} onPress={() =>{ this.pickSingle(true, true),this.popUp.hide()}}>
              <Text style={{fontSize:20}}>从相册中选择</Text>
              
            </TouchableOpacity>
            <View style={{height:0.5,backgroundColor:'black',width:'100%',marginVertical:10}}/>
            <View style={{height:10,width:'100%',opacity:0}}/>
            <TouchableOpacity style={{padding:5}} onPress={() => { this.popUp.hide() }}>
              <Text style={{fontSize:20}}>取消</Text>
            </TouchableOpacity>
            
         </View>
          </PopUp>
          
                <View style={[styles.top]}>

                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 30 }}>{route.params.username}个人信息</Text>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={{ width: "100%", height: "24%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                  
                    <TouchableWithoutFeedback style={{ width: 80, height: 80,  borderRadius: 400,  elevation: 60, }}
                        onPress={() =>{this.popUp.show()} }>
                         
                          {/* <Entypo name={'camera'} size={10} style={{marginLeft:60,marginTop:60,}}/> */}
                        {this.state.image ? this.renderAsset(this.state.image) : null}
                        
                        
         
                      </TouchableWithoutFeedback>
                      <Entypo style={{  marginLeft: 50, marginTop: -20 }} name={'camera'} size={20} color={'#999999'} />
                </View>


                <View style={{ backgroundColor: 'white', marginTop: 20, padding: 15 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ fontSize: 18 }}>昵称</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                        <TextInput style={{ position: 'absolute', marginLeft: 90, width: 280 }}
                            placeholder="输入昵称"
                            multiline={false}
                            underlineColorAndroid="#7B7B7B"
                            onChangeText={(text) => {
                                this.setState({ searchname: text });

                            }}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ fontSize: 18 }}>个性签名</Text>
                        <Text style={{ color: 'red' }}></Text>
                        <TextInput style={{ position: 'absolute', marginLeft: 90, width: 280 }}
                            placeholder="6-20位，区分大小写"
                            multiline={false}
                            underlineColorAndroid="#7B7B7B"
                            onChangeText={(text) => {
                                if (text != '') {
                                    this.setState({ searchgexinqianming: text });
                                } else {
                                    this.setState({ searchgexinqianming: "暂无" });
                                }
                            }}
                        ></TextInput>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                        <Text style={{ fontSize: 18 }}>性别</Text>
                        <Text style={{ color: 'red' }}>*</Text>
                        <RadioGroup style={{ flexDirection: 'row', marginLeft: 40 }}
                            onSelect={(index, value) => {
                                this.onSelect(index, value);
                                this.setState({ searchsex: value })
                            }
                            }
                            selrctedValue={this.state.searchsex}
                            underlineColorAndroid="#7B7B7B">
                            <RadioButton value={'男'} >
                                <Text>男</Text>
                            </RadioButton>
                            <RadioButton value={'女'}>
                                <Text>女</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>
                    <Text style={{ color: 'red', fontSize: 15, marginLeft: 80, marginBottom: 8 }}>（注册成功后，不可修改）</Text>


                    <View style={{ height: 0.5, width: 280, marginLeft: 90, backgroundColor: '#7B7B7B', marginTop: 8, marginBottom: 20 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                        <Text style={{ fontSize: 18 }}>生日</Text>
                        <Text style={{ color: 'red' }}>*</Text>

                        <DatePicker
                            style={{ position: 'absolute', marginLeft: 90, width: 280, }}
                            date={this.state.date}
                            mode="date"
                            placeholder="请选择你的生日"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2020-01-01"
                            confirmBtnText="确定"
                            cancelBtnText="取消"
                            onDateChange={(date) => {
                                console.log(date);
                                this.setState({ date: date });
                                this.setState({ username: route.params.username })
                                console.log(this.state.data)
                            }}
                        />
                        
                    </View>
                    <View style={{ flexDirection: 'row',  width: "100%", marginTop: 20,alignItems:'center',justifyContent:'center' }}>
                         <TouchableOpacity
                        style={{
                            backgroundColor: '#6C6C6C',
                            width: 250,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            borderColor: '#8E8E8E',
                            elevation: 4
                        }}
                        onPress={() => {
                            this._insertdate();
                        }}>
                        <Text style={{ fontSize: 20 }}>保存</Text>
                    </TouchableOpacity>
                    </View>




                    {/* <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:18}}>所在地区</Text>
                     <Text style={{color:'red'}}>*</Text> */}
                    {/* <TextInput  style={{position:'absolute',marginLeft:90,width:280}}
                           placeholder="请选择所在地区"
                           multiline={false}
                           underlineColorAndroid="#7B7B7B"
                        ></TextInput> */}
                    {/* <View>
                            <CityList></CityList>
                        </View> */}

                    {/* <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}} onPress={() => this.openAddressSelect()}>
                <Text >地址选择</Text>
            </TouchableOpacity> */}
                    {/* </View> */}

                </View>

               
                   


            




            </View>
        );
    }
    // openAddressSelect() {

    //     Widget.Popup.show( // 这边使用自己封装的modal嵌套地址选择器
    //         <AddressSelect
    //             commitFun={(area) => this.onSelectArea(area)}
    //             dissmissFun={() => Widget.Popup.hide()}
    //         />,
    //         {
    //             animationType: 'slide-up', backgroundColor: '#00000000', onMaskClose: () => {
    //             Widget.Popup.hide()
    //         }
    //         })
    // }

    // onSelectArea = (area) => {
    //     Log(area)
    // }

}
const styles = StyleSheet.create({
    top: {
        height: 90,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '6%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
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
})