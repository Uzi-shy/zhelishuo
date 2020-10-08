import React, { Component, useState } from 'react';
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
    Keyboard

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width, height } = Dimensions.get("window");
var loginstate=false;


export default class Search extends Component {



    constructor(props) {
        super(props);



        this.state = {
            searchidentity: '用户',
            searchText: '',
            searchPass: '',
        }
    };





    //判断登录状态
    _onstarjudgeLogin = () => {

        var navigation = this.props.navigation;
        fetch('http://192.168.50.30:3000/judgelogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.code == "200") {

                alert("登录成功" + json.username);
                if(json.username=='huangfan'){
                    navigation.navigate('发布', {
                        username: json.username
                    });
                }
                else{
                    navigation.navigate('发布', {
                    username: json.username
                });
                }
            } else if (json.code == "400") {
                //   alert("上次登录已退出，请重新登录");
            }
        })
    };



    //判断账户类型
    _onstarjudgeidentity() {
        var navigation = this.props.navigation;
        if (this.state.searchidentity == "用户" && this.state.islogin == true) {
            navigation.navigate('发布', {
                username: this.state.searchText
            });
        } else if (this.state.searchidentity == "管理员") {
            navigation.navigate('发布', {
                username: this.state.searchText
            });
        }

    };

    //保持登录状态  
    _onClicksaveloginstate = () => {
        fetch('http://192.168.50.30:3000/savelogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: this.state.searchText,
                password: this.state.searchPass
            })
        })

    };

    //登录
    _onClickLogin() {
        // var navigation = this.props.navigation;
        // var {searchlogin}=this.state;


        fetch('http://192.168.50.30:3000/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                username: this.state.searchText,
                password: this.state.searchPass
            })
        })
            .then(function (res) {
                return res.json();
            })

            .then(function (json) {
                if (json.code == "200") {
                    alert("登录成功");

                } else if (json.code == "400") {
                    alert("用户名或密码错误");
                }
            }).catch((error) => console.error(error))
            .finally(() => {
                this.setState({ islogin: true });
            });
    };
    tapBackground = () => {
        Keyboard.dismiss();
    }


    judge() {
        this._onstarjudgeLogin();
    };

    render() {
        this._onstarjudgeLogin();
        this.judge();
        return (
            <View style={[styles.container]}>

                <View style={[styles.top]}>

                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            {/* <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} /> */}
                        </View>
                        <Text style={{ fontFamily: "yegenyou", color: "#000", fontSize: 30 }}>登录</Text>
                        <View>
                            {/* <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.popToTop();
                            }} /> */}
                        </View>
                    </View>
                </View>




                {/* 登陆框 */}
                <ImageBackground style={{ height: height - 100, width: width }} source={require('../img/dufu.jpg')}>
                    <TouchableWithoutFeedback onPress={this.tapBackground}>
                        <View style={{ width: "90%", alignItems: 'center', backgroundColor: "white", height: "65%", marginTop: 20, marginHorizontal: 20, borderRadius: 20, elevation: 10 }}>

                            <View style={[styles.inputBox]}>
                                <Text style={{ fontFamily: "yegenyou", marginLeft: 27, fontSize: 20 }}>{this.state.searchidentity}名</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome style={{ alignItems: "center", marginLeft: 27, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder='请输入账号'
                                        placeholderTextColor='#999999'

                                        onChangeText={(text) => {
                                            this.setState({ searchidentity: '用户' })
                                            this.setState({ searchText: text });
                                            if (text == 'huangfan') {
                                                this.setState({ searchidentity: '管理员' })
                                            }


                                        }} />
                                </View>
                            </View>

                            <View style={[styles.inputBox]}>
                                <Text style={{ fontFamily: "yegenyou", marginLeft: 27, fontSize: 20 }}>密码</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome style={{ alignItems: "center", marginLeft: 27, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                    <TextInput
                                        style={styles.password}
                                        placeholder='请输入密码'
                                        placeholderTextColor='#999999'
                                        secureTextEntry={true}
                                        onChangeText={(text) => {
                                            this.setState({ searchPass: text });
                                        }} />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        Alert.alert('您输入的账号为：' + this.state.searchText
                                            + "您输入的密码为：" + this.state.searchPass)

                                        this._onClicksaveloginstate();
                                        this._onClickLogin();
                                        this._onstarjudgeidentity();
                                        // this.props.navigation.push('个人中心');         
                                    }}>
                                    <Text style={{ fontSize: 20, color: "#fff" }}>登录</Text>
                                </TouchableOpacity></View>
                            
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
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
    imgBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
    },

    password: {
        width: "75%",
        backgroundColor: "#EFEFEF",
        marginTop: 7,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 10
    },
    input: {
        width: "75%",
        backgroundColor: "#EFEFEF",
        marginTop: 7,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 10
    },
    button: {
        height: 50,
        width: width - 80,
        alignItems: "center",

        backgroundColor: "#333",
        padding: 10,
        marginTop: 60,
        borderRadius: 10,
    },
    inputBox: {
        height: 60,
        width: width,

        borderRadius: 3,
        marginTop: 20,
    }
})