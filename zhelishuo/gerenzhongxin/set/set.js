import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, Button, View, TextInput, TouchableOpacity, Alert, Dimensions, AppRegistry, Keyboard, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RotationGestureHandler, TouchableHighlight, ScrollView } from "react-native-gesture-handler";


export default class extends Component {

  _onClickexitloginstate = () => {
    fetch('http://192.168.50.28:3000/exitlogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    })

  };



  render() {
    return (

      <ScrollView style={{ marginBottom: 50 ,backgroundColor:'#F0F0F0'}}>
        <View style={{ height: 90, width: "100%", backgroundColor: "white",elevation:2 }}>
          <View style={{ flex: 0.7, marginTop: '6%', flexDirection: "row", width: "90%", justifyContent: "space-between", alignItems: "center", }}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                this.props.navigation.goBack()
              }} />
            </View>
            <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 30 }}>设置</Text>
            <View>
              {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
            </View>
          </View>
        </View>
        {/* <View style={{ backgroundColor: '#E0E0E0', width: "100%", height: 220 ,}}>
          <Image source={require("../../img/logo_1.png")} style={{ resizeMode: 'cover', width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', }} />
        </View> */}


        <View style={{ marginTop:15,paddingHorizontal:15,backgroundColor:'white'}}>
        <View style={{}}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between',paddingVertical:15,alignItems:'center' }} onPress={() => {this.props.navigation.navigate('账号安全');}}>
              <Text style={{ fontSize: 20 }}>编辑资料</Text>
              <View>

              </View>

              <AntDesign name={'right'} size={25} color={'#000'} />

            </TouchableOpacity >
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D' }} />
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between',paddingVertical:15,alignItems:'center' }} 
            onPress={() => {this.props.navigation.navigate('账号安全');}}>
              <Text style={{ fontSize: 20 }}>账号与安全</Text>
              <View>

              </View>

              <AntDesign name={'right'} size={25} color={'#000'} />

            </TouchableOpacity >
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D' }} />
          </View>
          <View style={{}}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical:15,alignItems:'center' }}
            onPress={() => {this.props.navigation.navigate('屏蔽设置');}}>
              <Text style={{ fontSize: 20 }}>屏蔽设置</Text>
              <View>

              </View>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D',  }} />
          </View>
          <View style={{  }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical:15,alignItems:'center'  }}
            onPress={() => {this.props.navigation.navigate('通知设置');}}>
              <Text style={{ fontSize: 20 }}>通知设置</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D',}} />
          </View>
          <View style={{ }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical:15,alignItems:'center'  }}
            onPress={() => {this.props.navigation.navigate('通用设置');}}>
              <Text style={{ fontSize: 20 }}>通用设置</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D',}} />
          </View>
          <View style={{ }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical:15,alignItems:'center'  }}
            onPress={() => {this.props.navigation.navigate('评价反馈');}}>
              <Text style={{ fontSize: 20 }}>评价反馈</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D',  }} />
          </View>
          <View style={{ }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' , paddingVertical:15,alignItems:'center' }}
            onPress={() => {this.props.navigation.navigate('关于浙里说');}}>
              <Text style={{ fontSize: 20 }}>关于浙里说</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', }} />
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 40, marginRight: 40, marginBottom: 20,marginTop:15 }}>
          <TouchableOpacity style={{ borderColor: 'black',  borderRadius: 20, padding: 6,backgroundColor:'#E0E0E0',elevation:2 }}
            onPress={() => {
              this._onClickexitloginstate();
              this.props.navigation.popToTop();
            }}
          >
            <Text style={{ fontSize: 27, color: 'black' }}>退出登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderColor: 'black', borderRadius: 20, padding: 6,backgroundColor:'#E0E0E0',elevation:2 }}
          onPress={() => {
            this._onClickexitloginstate();
            this.props.navigation.popToTop();
          }}
          >
            <Text style={{ fontSize: 27, color: 'black' }}>切换账号</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}