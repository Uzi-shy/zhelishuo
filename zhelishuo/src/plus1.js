import React, { Component } from 'react';
import {
    Animated,
    FlatList,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Alert, Button, TouchableOpacity, Dimensions, AppRegistry, Keyboard
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Plus2 from './plus2';
// import {storage} from '../../Accessories/storage/index';


import { Switch } from "react-native-gesture-handler";
import DialogSelected from './alertSelected';


const { width, height } = Dimensions.get("window");
const selectedArr = ["拍照", "图库"];
var promise = false;
var username = "";
var userstate = [];
var gerenxx = [];
export default class spread extends Component {



    static defaultProps = {
        multiList: [
            {
                id: 0,
                key: 0,
                "name": "诗歌",
                select: false
            },
            {
                id: 1,
                key: 1,
                "name": "画作",
                select: false
            },
            {
                id: 2,
                key: 2,
                "name": "诗人",
                select: false
            },
            {
                id: 3,
                key: 3,
                "name": "音乐",
                select: false
            },

        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            // username:"",
            addPicState: "flex",
            avatarSource: [],
            source: new Array(9),
            title: '',
            words: '',
            value1: '', value2: '', value3: '', switch1Value: false, switch2Value: false,
            text: '',
            height: 0,
            multiData: this.props.multiList,
            selectMultiItem: [],
            changeText: '所有人可见',
            author: '',
        };

        this.label = { false: '关', true: '开' }

        this.showAlertSelected = this.showAlertSelected.bind(this);
        this.callbackSelected = this.callbackSelected.bind(this);

    }


    updateState = () => {
        const changeText = this.state.changeText == '所有人可见' ? '私密' : '所有人可见'
        this.setState({ changeText: changeText });
    }





    //多选
    _selectMultiItemPress(item) {
        if (item.select) {
            this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
                return x === item.id;
            }), 1);
        } else {
            this.state.selectMultiItem.push(item.id);
        }
        this.state.multiData[item.id].select = !item.select;
        this.setState({ multiData: this.state.multiData });
    }
    //递交 选中 
    // _submitMultiPress() {
    //     alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    // }
    //渲染多选标记
    _renderMultiMark() {
        let multiData = this.state.multiData;
        let len = multiData.length;
        let menuArr = [];
        for (let i = 0; i < len; i++) {
            let item = multiData[i];
            if (item.select) {
                menuArr.push(
                    //选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markChecked]}>
                        <Text style={styles.markCheckedText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(

                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markUnCheck]}>
                        <Text style={styles.markUnCheckText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }
        }

        return (
            //讲各类状态框输出到前端页面
            <View style={styles.multiBox}>
                {menuArr}
            </View>
        );
    }




    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
    }
    toggleSwitch2 = (value) => {
        this.setState({ switch2Value: value });
        this.setState({ changeText: "私密" })
    }



    showAlertSelected() {
        this.dialog.show("请选择照片", selectedArr, '#333333', this.callbackSelected);
    }
    // 回调
    callbackSelected(i) {
        switch (i) {
            case 0: // 拍照
                this.takePhoto();
                break;
            case 1: // 图库
                this.pickMultiple();
                break;
        }
    }
    // componentDidMount() {
    //     storage.load('userInfo', (data) => {
    //         this.setState({
    //             user_id:data.user_id,
    //             username:data.username,
    //             PersonalSignature:data.PersonalSignature,
    //             head:data.head,
    //             token:data.token
    //         })
    //         let url = "http://192.168.56.1:3000/api/travels/travel/"
    //         let head = { uri: image.path, type: 'multipart/form-data', name: 'image.png' };
    //       })
    //     }

    //判断登录状态
    _onstarjudgeLogin = () => {

        var navigation = this.props.navigation;
        fetch('http://10.0.2.2:3000/judgelogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.code == "200") {

                alert("用户" + json.username + "已登录，可以发布");
                // navigation.navigate('用户个人中心',{
                //     username:json.username
                // });
                promise = true;
                username = json.username;
                userstate = json.userstate;
                


            } else if (json.code == "400") {
                alert("请先登录");
                promise = false;
            }
        })
        console.log("promise:"+promise);
    };

    //发布页获取个人信息
    _onstargetgerenxx = () => {
        fetch('http://10.0.2.2:3000/personal',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    username: username,
                })
            })
            .then((response) => response.json())
            .then((json) => {
                gerenxx = json.result;
                
            })
            .catch((error) => console.error(error))
            console.log("grxx:"+gerenxx);

    }


    //发布给管理员待审核
    _onClickpublish_to_administrator = () => {
        var navigation = this.props.navigation;
        fetch('http://10.0.2.2:3000/publish_to_administrator', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                userstate: userstate,
                gerenxx: gerenxx,
                title: this.state.title,
                words: this.state.words,
                pick: this.state.avatarSource,
                author: this.state.author,
                label: this.state.selectMultiItem,
                yuanchuang: this.state.switch1Value,
                simi: this.state.changeText,
                promise: false,
            })
        })

        // .then(function (res) {
        //     return res.json();
        // }).then(function (json) {
        //     if (json.errno == 0) {
        //         // navigation.navigate("bottomTab");
        //         alert("发布成功")
        //     } else if (json.errno == -1) {
        //         alert("发布失败")
        //     }
        //     // navigation.goBack();
        // })
    };
    render() {

        // this._onstarjudgeLogin();
        // this._onstargetgerenxx();
        
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.top_container]}>

                        <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: 'youran', marginTop: 24, marginLeft: 170 }}>在浙里说</Text>
                        <TouchableOpacity onPress={() => {
                            this._onstarjudgeLogin();
                            this._onstargetgerenxx();
                            if (gerenxx == []) {
                                alert("用户信息未输入，请再次点击")
                            }
                            // console.log("promis:"+promise);
                            if (promise == true) {
                                this._onstargetgerenxx();
                                this._onClickpublish_to_administrator();

                            } else {
                                alert("请先到个人中心登录");
                            }

                        }}>
                            <Text style={{
                                paddingHorizontal: 20,
                                backgroundColor: "black",
                                color: "#fff",
                                paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginTop: 25, marginRight: 5
                            }}>
                                发布
                              </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: 20, width: '90%', marginLeft: '5%', paddingBottom: 10, borderRadius: 15 }}>
                    <View style={{ width: '94%', height: 40, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="标题 "
                            onChangeText={(text) => {
                                this.setState({ title: text });
                            }}
                        />
                    </View>
                    <View style={{ width: '94%', height: 110, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="正文"
                            onChangeText={(text) => {
                                this.setState({ words: text });
                                console.log(this.state.words)
                            }}
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={() => {
                        // 从本地相册选择单幅图像
                        // 调用多个图像
                        ImagePicker.openPicker({
                            // multiple: true,
                            width: 400,
                            height: 400,
                            cropping: true,
                            // showCropGuidelines :true
                            multiple: true,
                            maxFiles: 9,
                        }).then(images => {
                            source = images.map(item => { return item.path });
                            console.log(source);
                            // console.log(images);
                            // this._onClickSharetravel;
                            this.setState({
                                avatarSource: source
                            });
                            console.log("sdsad d" + this.state.avatarSource)
                        });
                    }}>
                        <View>
                            <View style={{ width: '94%', flexWrap: "wrap", flexDirection: "row", marginLeft: '3%' }}>
                                {
                                    this.state.avatarSource.map((item) => {
                                        if (item.key == 9) {
                                            console.log(this.state.title)
                                        }
                                        return (
                                            <View style={{ width: '31%', marginLeft: '2%', flexDirection: "row" }}>
                                                {/* <Text>{item}</Text> */}
                                                <Image style={{ height: 72, width: '100%', backgroundColor: "yellow", marginTop: 10 }} source={{ uri: item }} />
                                            </View>
                                        )
                                    })
                                }

                                <View style={[styles.addPicBox, { display: this.state.addPicState }]}>
                                    <AntDesign name='plus' size={50} color="#999999" />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* 定位
                    <TouchableWithoutFeedback >
                        <View style={{ flexDirection: "row", alignSelf: 'flex-start', marginLeft: '3%', paddingVertical: 2, paddingHorizontal: 8, marginTop: 15, backgroundColor: "#2F3843", borderRadius: 15, width: "auto" }}>
                            <Ionicons name='md-location-sharp' size={20} color="#fff" />
                            <Text style={{ color: "#fff", textAlign: "center" }}>杭州</Text>
                        </View>
                    </TouchableWithoutFeedback> */}

                </View>
                <View style={{ position: "absolute", backgroundColor: "#2F3843", alignItems: "center", justifyContent: "space-around", flexDirection: "row", height: 50, width: '100%', bottom: 0, left: 0 }}>
                    {/* 获取图片，可能删除 */}
                    <FontAwesome name='photo' size={20} color="#fff"
                        onPress={() => {
                            // 从本地相册选择单幅图像
                            // 调用多个图像
                            ImagePicker.openPicker({
                                // multiple: true,
                                width: 400,
                                height: 400,
                                cropping: true,
                                // showCropGuidelines :true
                                multiple: true,
                                maxFiles: 9,
                            }).then(images => {
                                source = images.map(item => { return item.path });
                                console.log(source);
                                // console.log(images);
                                this._onClickSharetravel;
                                this.setState({
                                    avatarSource: source
                                });
                                console.log("sdsad d" + this.state.avatarSource)
                            });
                        }}

                    />


                </View>
                <View>
                    <View style={styles.xx}>

                        <DialogSelected ref={(dialog) => {
                            this.dialog = dialog;
                        }} />




                        {/* <View style={styles.xx2}>
    <TouchableWithoutFeedback
        activeOpacity={0.9}
        style={[styles.touchButton]}
        onPress={() => {
            alert('发布成功')
        }}>
        <Text style={styles.touchButtonText}>发布</Text>
    </TouchableWithoutFeedback>


</View> */}

                        {/* <View style={{ marginTop: 50 }}>
    <TouchableOpacity
        style={{ backgroundColor: '#d0d0d0', height: 80, width: 80, borderRadius: 10 }}
        onPress={() => {
            this.showAlertSelected();
        }}
    >
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text style={styles.photoText}>+添加图片</Text>
        </View>
    </TouchableOpacity>


</View> */}
                        <View >
                            {/* <TextInput
        style={{ height: 80, width: width - 15, fontSize: 16, padding: 4 }}
        placeholder="标题（可无）"
        underlineColorAndroid="#7B7B7B"
        onChange={
            value1 => {
                this.setState({
                    value1,
                });
            }
        }
        onContentSizeChange={this.onContentSizeChange}
        value={this.state.text}>

    </TextInput>
    <TextInput
        style={{ height: 120, width: width - 15, fontSize: 16, padding: 4 }}
        placeholder="正文"
        multiline={true}
        underlineColorAndroid="#7B7B7B"
        onChange={value2 => {
            this.setState({
                value2,
            });
        }}></TextInput> */}


                            <TextInput
                                style={{ position: "absolute", left: 10, height: 50, fontSize: 16, padding: 4 }}
                                placeholder="出处/作者（可无）"
                                underlineColorAndroid="#7B7B7B"
                                onChangeText={(text) => {
                                    this.setState({ author: text });

                                }}></TextInput>
                        </View>




                        <View style={styles.container1}>
                            <Text>选择分类：</Text>
                            <ScrollView
                                style={{ flexDirection: "row" }}
                            >{this._renderMultiMark()}</ScrollView>




                        </View>




                        <View style={styles.xx5}>
                            <Text>我是原创:</Text>
                            <Switch
                                onValueChange={this.toggleSwitch1}
                                value={this.state.switch1Value}></Switch>


                        </View>
                        <View style={styles.xx6}>
                            <Text>{this.state.changeText}</Text>
                            <Switch
                                onValueChange={() => { this.toggleSwitch2(); this.updateState(); }}
                                value={this.state.switch2Value}

                            >
                            </Switch>



                        </View>




                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    textInputStyle: { height: 80, width: width - 15, fontSize: 16, padding: 4 }
    ,
    touchButtonText: {
        position: "absolute",
        right: 0,
        fontSize: 15

    },
    touchable: {
        borderColor: "black", borderWidth: 0.5, marginRight: 5, width: 40, height: 20, padding: 2, alignItems: 'center', justifyContent: 'center'
    },

    xx: {
        height: height,
        alignItems: 'center',

    },
    xx1: {

        marginTop: 20
    },

    xx2: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container1: {

        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20, marginTop: 60
        //   position:"absolute",
        //     right:0,


    },



    xx5: {
        width: "95%",
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    xx6: {
        width: "95%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    multiBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 100,


    },
    markRow: {
        width: 45,
        height: 28,
        lineHeight: 28,
        padding: 5,
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 0.6,
    },
    markChecked: {
        backgroundColor: "#4F4F4F",
        borderColor: "white",
    },
    markUnCheck: {
        backgroundColor: "white",
        borderColor: "#111",
    },
    markCheckedText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        flexDirection: "row"
    },
    markUnCheckText: {
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#efefef",
    },
    top: {
        height: 78,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 8,
        justifyContent: "center",
        alignContent: "center",
    },
    top_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center"
    },
    addPicBox: {
        height: 72,
        width: 72,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderRadius: 15,
        borderWidth: 4,
        borderColor: "#ccc",
        marginLeft: '2%',
        marginTop: 10,
        marginLeft: 15,
    },
});