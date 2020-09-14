import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Alert
} from 'react-native'
import LeftCitySection from './liupai'
// import {
//     windowWidth,
// } from "../../commons/styles/common"
// import {ImagesKeys, Module, ThemeImage} from "../../theme/ThemeAdapter";
const width = Dimensions.get('window').width
 
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRightContent : [],//默认右边的数据
            data: [{
                "city": "田园诗派",
                "data": [{
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 陆游",
                    "appUrl": "",
                    "pic":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=252742683,1933559509&fm=26&gp=0.jpg",
                    "jieshao":"陆游（1125年11月13日－1210年1月26日 [1]  ），字务观，号放翁，汉族，越州山阴（今浙江绍兴）人，尚书右丞陆佃之孙，南宋文学家、史学家、爱国诗人。",
                    "shengping":"陆游是越州山阴（今浙江绍兴）人。他出身名门望族、江南藏书世家。高祖陆轸是宋真宗大中祥符年间进士，官至吏部郎中；祖父陆佃，师从王安石，精通经学，官至尚书右丞，所著《春秋后传》《尔雅新义》等是陆氏家学的重要典籍； [3]  父亲陆宰，通诗文、有节操，北宋末年曾任京西路转运副使。",
                    "diwei":"陆游具有多方面文学才能，尤以诗的成就为最，自言“六十年间万首诗” [89]  ，存世有九千三百余首，大致可以分为三个时期：46岁入蜀以前，偏于文字形式；入蜀到64岁罢官东归，是其诗歌创作的成熟期，也是诗风大变的时期，由早年专以“藻绘”为工变为追求宏肆奔放的风格，充满战斗气息及爱国激情；晚年蛰居故乡山阴后，诗风趋向质朴而沉实，表现出一种清旷淡远的田园风味，并不时流露着苍凉的人生感慨。"
                }, {
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 杜甫",
                    "appUrl": "",
                }, {
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 陆游",
                    "appUrl": "",
                }, {
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 李白",
                    "appUrl": "",
                }, {
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 杜甫",
                    "appUrl": "",
                }, {
                    "address": "武汉市黄陂前川",
                    "poet": "◐ 陆游",
                    "appUrl": "",
                },
                ],
            },{
                "city": "花间词派",
                "data": [{
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 孟浩然",
                    "appUrl": "",
                }, {
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 李清照",
                    "appUrl": "",
                },{
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 辛弃疾",
                    "appUrl": "",
                },{
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 苏轼",
                    "appUrl": "",
                },{
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 范仲淹",
                    "appUrl": "",
                },{
                    "address": "深圳湾春茧体育馆附近",
                    "poet": "◐ 辛弃疾",
                    "appUrl": "",
                },
                ],
            },{
                "city": "婉约派",
                "data": [{
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 马致远",
                    "appUrl": "",
                }, {
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 马玉",
                    "appUrl": "",
                },{
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 王远",
                    "appUrl": "",
                },{
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 马致远",
                    "appUrl": "",
                },{
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 马玉",
                    "appUrl": "",
                },{
                    "address": "北京市朝阳区霄云路50号",
                    "poet": "◐ 王远",
                    "appUrl": "",
                },
                ],
            },{
                "city": "浪漫主义",
                "data": [{
                    "address": "湖南省长沙市开福区东风路79号",
                    "poet": "◐ 高启",
                    "appUrl": "",
                }, {
                    "address": "湖南省长沙市开福区东风路79号",
                    "poet": "◐ 于谦",
                    "appUrl": "",
                },{
                    "address": "湖南省长沙市开福区东风路79号",
                    "poet": "◐ 刘宇",
                    "appUrl": "",
                },{
                    "address": "湖南省长沙市开福区东风路79号",
                    "poet": "◐ 刘基",
                    "appUrl": "",
                },{
                    "address": "湖南省长沙市开福区东风路79号",
                    "poet": "◐ 李东阳",
                    "appUrl": "",
                },
                ],
            },{
                "city": "现实主义",
                "data": [{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "poet": "◐ 龚自珍",
                    "appUrl": "",
                }, {
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曹雪芹",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曾国藩",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 吴伟业",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 龚自珍",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曹雪芹",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曾国藩",
                    "appUrl": "",
                },
                
                ],
            },{
                "city": "浙西派",
                "data": [{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "poet": "◐ 龚自珍",
                    "appUrl": "",
                }, {
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曹雪芹",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曾国藩",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 吴伟业",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 龚自珍",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曹雪芹",
                    "appUrl": "",
                },{
                    "address": "广西壮族自治区南宁市兴宁区朝阳路26号",
                    "mallName": "◐ 曾国藩",
                    "appUrl": "",
                },
                
                ],
            }, 
         ]
        }
    }
 
    _onMenuItemSelected(rightData) {//回调数据
        this.setState({
            showRightContent: rightData,
        })
    }
 
    _renderItem = ({item}) => (
            <TouchableOpacity
                onPress={()=>Alert.alert('ok')}>
                {/* <ImageBackground style={styles.itemImgBgStyle} source={require('./img/logo1.png')}> */}
                    <Text style={styles.titleStyle}>{item.poet}</Text>
                    {/* <Text style={styles.addressStyle}>{item.address}</Text> */}
                {/* </ImageBackground> */}
            </TouchableOpacity>
        )
 
    // doWhatYouLike (Item) {
    //    console.log(item)
    // }
 
    _keyExtractor = (item, index) => index.toString()
 
    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#E0E0E0'}}>
                <View style={[styles.containerStyle, styles.flexDirection]}>
                    <View style={styles.leftMenuStyle}>
                        <LeftCitySection
                            dataList={this.state.data}
                            onItemSelected={this._onMenuItemSelected.bind(this)}/>
                    </View>
                    <FlatList
                        extraData={this.state}
                        data={this.state.showRightContent}
                        scrollEnabled={true}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}/>
                </View>
           </View>
        )
    }
}
 
let styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    leftMenuStyle: {
 
    },
    itemImgBgStyle: {
        marginTop: 10,
        marginLeft: 11,
        width: width- 100 - 10 - 10,
        height: 122,
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 20,
        color: '#5B5B5B',
        marginTop: 25,
        lineHeight: 30,
        marginLeft:20
    },
    addressStyle: {
        fontSize: 12,
        color: 'white',
        marginTop: 5,
        lineHeight: 18,
    },
})
