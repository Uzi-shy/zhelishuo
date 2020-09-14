import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    FlatList,
    Image,
    Alert,
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PopUp from './Tankuang'
const { width, height } = Dimensions.get("window")


export default class Poet extends Component {
    static defaultProps = {
        multiList: [
            {
                "id": "0",
                "name": "9月2日",
                select: false
            },
            {
                "id": "1",
                "name": "9月3日",
                select: false
            },
            {
                "id": "2",
                "name": "9月4日",
                select: false
            },
            
        ]
    };


    constructor(props) {
        super(props);
        this.state = {
            multiData: this.props.multiList,
            selectMultiItem: [],
        }
    }
    //多选
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
    render() {
        return (

            <View  >



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 70, backgroundColor: 'white', elevation: 2 }}>
                    <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                        this.props.navigation.goBack()
                    }} />

                    <View style={{ marginRight: 15 }}>
                        <TouchableOpacity
                            onPress={() => { Alert.alert('分享+1') }}>
                            <AntDesign name={'sharealt'} size={23} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{height:630}}>
                    <View>
                        <View style={{ backgroundColor: 'white', padding: 20, flexDirection: 'row' }}>
                            <TouchableWithoutFeedback>
                                <Image source={require('../img/遗憾.jpg')} style={{ height: 220, width: 150, borderRadius: 10, marginRight: 25 }} />
                            </TouchableWithoutFeedback>
                            <View>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 15 }}>向史而新</Text>
                                <Text style={{ fontSize: 18, marginBottom: 120 }}>浙江百年水彩画作品展</Text>
                                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>免费</Text>
                            </View>
                        </View>

                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>2020.08.05 09:00 - 09.03 17:00</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <EvilIcons name={'location'} size={25} />
                                <Text style={{ fontSize: 18, marginBottom: 20, color: '#272727' }}>杭州 西湖区 浙江美术馆</Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>展览介绍</Text>
                            <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8 }} />
                            <Text style={{ lineHeight: 20, fontSize: 16 }}>&emsp;&emsp;2020年8月5日，“向史而新——浙江百年水彩画作品展”在位于杭州的浙江美术馆开展，展览共展出包括李叔同、林风眠、吴冠中等众多美术先驱创作的水彩画作品140余件，涵盖了风景、静物、人物等诸多题材。展览以中国水彩画所表现的民族性、时代性、观念性三个学术概念为起点，回望中国水彩画的发生和发展，思考中国水彩画与浙江的紧密联系，并希望以此展览对中国水彩画的未来发展有所启迪。</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' ,marginTop:10}}>展览作品</Text>
                            <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3642376305,872256515&fm=26&gp=0.jpg' }} />
                                <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599062021086&di=78be241097fa3d2b46757b67df79e3c1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181015%2F78149ec6fbb242448a60df9a30cafcbc.jpeg' }} />
                                <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738250302,931647034&fm=26&gp=0.jpg' }} />
                            </View>
                        </View></View>
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        
                </ScrollView>
                <View style={{ width: '100%', position: 'absolute', bottom: 1, alignItems: 'center', backgroundColor: 'white', padding: 20 }}>
                    <TouchableOpacity style={{ width: 200, borderRadius: 30, borderColor: 'black', borderWidth: 3, alignItems: 'center', padding: 5, marginBottom: 10 }}
                     onPress={() =>{this.popUp.show()} }
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>立即预约</Text>
                    </TouchableOpacity>
                   
                </View>
                <PopUp ref={ref=>this.popUp=ref}>
          <View style={{height:200,}}>
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',right:10,top:5}} onPress={() => { this.popUp.hide() }} >
          <AntDesign name={"closecircleo"} size={30}/> 
          </TouchableOpacity>
          <View style={{marginTop:20,marginLeft:18}}>
          <Text style={{fontSize:18,fontWeight:'700'}}>选择场次</Text>
          <View
                        style={{ flexDirection: "row" }}
                    >{this._renderMultiMark()}</View></View>
          <View style={{height:0.5,backgroundColor:'black',marginTop:10,marginBottom:10}} />
          <Text style={{marginTop:10,marginLeft:18,fontSize:18,fontWeight:'700'}}>选择人数</Text>
</View>
          </PopUp>




            </View>
        );
    }
}

const styles=StyleSheet.create({

    multiBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10


    },
    markRow: {
        width: 70,
        height: 28,
        lineHeight: 28,
        padding: 5,
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent:'center'
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