import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    ImageBackground,

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchPass: '',
        }
    };

    _onClickLogin = () => {
        var navigation=this.props.navigation; 
        fetch('http://10.0.2.2:3000/login', {
                    method: 'post',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      c: "test",
                      a: this.state.searchText,
                      b: this.state.searchPass
                    })
                  }).then(function (res) {
                    return res.json();
                }).then(function (json) {
                  if (json.code == "200") {
                    
                    alert("登录成功");
                    navigation.push('个人中心');
                  }else if (json.code == "400") {
                      alert("用户名或密码错误");
                  }
              })  
      };

    render() {
        return (
            <View style={[styles.container]}>
                <ImageBackground style={{width: '100%', height: '100%',alignItems:'center',}} source={require('E:/ad/zhelishuo/img/杜甫.jpg')}>
                <View style={[styles.top]}>
                    
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            {/* <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} /> */}
                        </View>
                        <Text style={{fontFamily:"yegenyou", color: "#000", fontSize: 30 }}>登录</Text>
                        <View>
                            {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
                        </View>
                    </View>
                </View>
                {/* 登陆框 */}
                <View style={[styles.userShopBox]}>
                    <View style={{}}>

                        <View style={[styles.inputBox]}>
                            <Text style={{ fontFamily:"yegenyou",position: "absolute", top: -30, fontSize: 20 }}>用户名</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='请输入账号'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ searchText: text });
                                    }} />
                            </View>
                        </View>

                        <View style={[styles.inputBox]}>
                            <Text style={{ fontFamily:"yegenyou",position: "absolute", top: -30, fontSize: 20 }}>密码</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.password}
                                    placeholder='请输入密码'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ searchPass: text });
                                    }} />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Alert.alert('您输入的账号为：' + this.state.searchText
                                  + "您输入的密码为：" + this.state.searchPass)
                                  this._onClickLogin();          
                              }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>登录</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "#000", fontSize: 15, marginTop: 20, marginLeft: "5%" }}>忘记密码</Text>
                            <Text style={{ color: "#000", fontSize: 15, marginTop: 20, marginRight: "5%" }}
                                onPress={() => {
                                    this.props.navigation.push("注册");
                                }}

                            >注册账号</Text>
                        </View>
                    </View>
                </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    top: {
        // position: "absolute",

        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '5%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
    imgBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
    },
    userShopBox: {
        width: "90%",
        marginTop: 20 * biLi,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        height: 325 * biLi,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
    },
    password: {
        width: "80%",
        backgroundColor: "#EFEFEF",
        marginTop: 5,
        marginLeft: 10,
    },
    input: {
        width: "80%",
        backgroundColor: "#EFEFEF",
        marginTop: 5,
        marginLeft: 10,
    },
    button: {
        height: 52 * biLi,
        width: 312 * biLi,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        marginLeft: "4%"
    },
    inputBox: {
        height: 64 * biLi,
        width: 346 * biLi,
        backgroundColor: "#EFEFEF",
        borderRadius: 3,
        marginTop: 40,
    }
})