import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, Button, View, TextInput, TouchableOpacity, Alert, Dimensions, AppRegistry, Keyboard, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RotationGestureHandler, TouchableHighlight, ScrollView } from "react-native-gesture-handler";


export default class extends Component {

  _onClickexitloginstate = () => {
    fetch('http://10.0.2.2:3000/exitlogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    })

  };



  render() {
    return (

      <ScrollView style={{ marginBottom: 50 }}>
        <View style={{ height: 90, width: "100%", backgroundColor: "#FFFFFF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, elevation: 5, }}>
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
        <View style={{ backgroundColor: '#E0E0E0', width: "100%", height: 220 }}>
          <Image source={require("../img/logo1.png")} style={{ resizeMode: 'cover', width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', }} />
        </View>


        <View style={{ marginLeft: 30, marginTop: 20, marginRight: 30 }}>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>账号与安全</Text>
              <View>

              </View>

              <AntDesign name={'right'} size={25} color={'#000'} />

            </TouchableOpacity >
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>隐私</Text>
              <View>

              </View>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>通知设置</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>通用设置</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>评价反馈</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20 }}>关于浙里说</Text>
              <AntDesign name={'right'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: '#9D9D9D', marginTop: 6, }} />
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 40, marginRight: 40, marginBottom: 20 }}>
          <TouchableOpacity style={{ borderColor: 'black', borderWidth: 2, borderRadius: 20, padding: 6 }}
            onPress={() => {
              this._onClickexitloginstate();
              this.props.navigation.popToTop();
            }}
          >
            <Text style={{ fontSize: 27, color: 'black' }}>退出登录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderColor: 'black', borderWidth: 2, borderRadius: 20, padding: 6 }}>
            <Text style={{ fontSize: 27, color: 'black' }}>切换账号</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}