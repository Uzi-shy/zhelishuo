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
    Alert,

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


export default class spread extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addPicState: "flex",
            avatarSource: [],
            source: new Array(9),
            title: '',
            words: '',
        };
    }

    //点击头像
    clickHead() {
        ImagePicker.openPicker({
            width: 100,
            height: 100,
            cropping: true,
            cropperCircleOverlay: true,
        }).then(images => {
            source = images.map(item => { return item.path });
            console.log(source);
            // console.log(images);
            this._onClickSharetravel;
            this.setState({
                avatarSource: source
            });

        });
    }

    render() {
        return (
            <View style={[styles.container]}>

                <View style={{ backgroundColor: "#fff", marginTop: 20, width: '90%', marginLeft: '5%', paddingBottom: 10, borderRadius: 15 }}>

                    <TouchableWithoutFeedback >
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
                                    <AntDesign name='plus' size={50} color="#999999" onPress={() => {
                                        // 从本地相册选择单幅图像
                                        // 调用多个图像





                                        // ImagePicker.openPicker({
                                        //     // multiple: true,
                                        //     width: 400,
                                        //     height: 300,

                                        //     cropping: true,
                                        //     // showCropGuidelines :true
                                        //     multiple: true,
                                        //     maxFiles: 9,

                                        // }).then(images => {
                                        //     source = images.map(item => { return item.path });
                                        //     console.log(source);
                                        //     // console.log(images);
                                        //     this._onClickSharetravel;
                                        //     this.setState({
                                        //         avatarSource: source
                                        //     });

                                        // });

                                        ImagePicker.openPicker({
                                            width: 100,
                                            height: 100,
                                            cropping: true,
                                            cropperCircleOverlay: true,
                                        }).then(images => {
                                            source = images.map(item => { return item.path });
                                            console.log(source);
                                            // console.log(images);
                                            this._onClickSharetravel;
                                            this.setState({
                                                avatarSource: source
                                            });

                                        });
                                    }} />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* 定位 */}


                </View>
                <Avatar
                    size="large"
                    rounded
                    source={require('../img/a.jpg')}
                    onPress={() => {
                        ImagePicker.openPicker({
                            width: 100,
                            height: 100,
                            cropping: true,
                            cropperCircleOverlay: true,
                        }).then(images => {
                            source = images.map(item => { return item.path });
                            console.log(source);
                            // console.log(images);
                            this._onClickSharetravel;
                            this.setState({
                                avatarSource: source
                            });

                        });
                     }}
                    activeOpacity={0.7} />

            </View>
        )
    }

}

const styles = StyleSheet.create({
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