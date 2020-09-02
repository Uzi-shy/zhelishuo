import React, { Component } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, Button, View, TextInput, TouchableOpacity, Alert, Dimensions, AppRegistry, Keyboard, ScrollView } from "react-native";
import { Switch } from "react-native-gesture-handler";
import DialogSelected from './alertSelected';
import AntDesign from "react-native-vector-icons/Ionicons";


const { width, height } = Dimensions.get("window");
const selectedArr = ["拍照", "图库"];





export default class extends Component {
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
                "name": "作者",
                select: false
            },
            {
                id: 3,
                key: 3,
                "name": "其他",
                select: false
            },

        ]
    };

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '', value3: '' }
        this.label = { false: '关', true: '开' }
        this.state = { switch1Value: false }
        this.state = { switch2Value: false }
        this.showAlertSelected = this.showAlertSelected.bind(this);
        this.callbackSelected = this.callbackSelected.bind(this);
        this.state = {
            text: '',
            height: 0,
            multiData: this.props.multiList,
            selectMultiItem: []
        }

        // this.state={changeText:'所有人可见'};


        //   updateState=()=>{
        //     const changeText=this.state.changeText=='所有人可见' ?'私密' :'所有人可见'
        //     this.setState({changeText})
        //   }

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
    _submitMultiPress() {
        alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    }
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
        this.setState({ switch2Value: value })
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

    render() {

        return (

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
                        style={{ height: 80, width: width - 15, fontSize: 16, padding: 4 }}
                        placeholder="出处/作者（可无）"
                        underlineColorAndroid="#7B7B7B"
                        onChange={value3 => {
                            this.setState({
                                value3,
                            });
                        }}></TextInput>
                </View>




                <View style={styles.container}>
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
                    <Text>私密</Text>
                    <Switch
                        onValueChange={this.toggleSwitch2}
                        value={this.state.switch2Value}>
                    </Switch>



                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", width: "100%", }}>
                    <Text
                        onPress={this.updateState}
                        style={{ fontSize: 14, marginTop: 5, marginRight: 3 }}>所有人可见</Text>
                </View>

            </View>
        );
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
    container: {
        width: "95%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20, marginTop: 20
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

})
