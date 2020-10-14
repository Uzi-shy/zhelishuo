// import React, { Component } from 'react';
// import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
// import {
//     View,
//     Text,
//     Dimensions,
//     StyleSheet,
//     TouchableOpacity,
//     Platform,
//     FlatList,
//     Image,
//     Alert,Share
// } from 'react-native';
// import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import PopUp from './Tankuang'
// const { width, height } = Dimensions.get("window")


// export default class Poet extends Component {
//     static defaultProps = {
//         multiList: [
//             {
//                 "id": "0",
//                 "name": "9月2日",
//                 select: false
//             },
//             {
//                 "id": "1",
//                 "name": "9月3日",
//                 select: false
//             },
//             {
//                 "id": "2",
//                 "name": "9月4日",
//                 select: false
//             },
            
//         ]
//     };


//     constructor(props) {
//         super(props);
//         this.state = {
//             multiData: this.props.multiList,
//             selectMultiItem: [],
//         }
//     }
//     //多选
//       //多选
//       _selectMultiItemPress(item) {
//         if (item.select) {
//             this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
//                 return x === item.id;
//             }), 1);
//         } else {
//             this.state.selectMultiItem.push(item.id);
//         }
//         this.state.multiData[item.id].select = !item.select;
//         this.setState({ multiData: this.state.multiData });
//     }
//     //递交 选中 
//     _submitMultiPress() {
//         alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
//     }
//     //渲染多选标记
//     _renderMultiMark() {
//         let multiData = this.state.multiData;
//         let len = multiData.length;
//         let menuArr = [];
//         for (let i = 0; i < len; i++) {
//             let item = multiData[i];
//             if (item.select) {
//                 menuArr.push(
//                     //选中状态
//                     <TouchableOpacity
//                         onPress={() => this._selectMultiItemPress(item)}
//                         style={[styles.markRow, styles.markChecked]}>
//                         <Text style={styles.markCheckedText}>{item.name}</Text>
//                     </TouchableOpacity>
//                 )
//             } else {
//                 menuArr.push(

//                     // 未选中状态
//                     <TouchableOpacity
//                         onPress={() => this._selectMultiItemPress(item)}
//                         style={[styles.markRow, styles.markUnCheck]}>
//                         <Text style={styles.markUnCheckText}>{item.name}</Text>
//                     </TouchableOpacity>
//                 )
//             }
//         }

//         return (
//             //讲各类状态框输出到前端页面
//             <View style={styles.multiBox}>
//                 {menuArr}
//             </View>
//         );
//     }


//     onShare = async () => 
//   {
//     const { navigation, route } = this.props;
//     try {
//       const result = await Share.share({
//         message:route.params.title+route.params.leibie
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//     render() {
//         const { navigation, route } = this.props;
//         return (

//             <View  >



//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 70, backgroundColor: 'white', elevation: 2 }}>
//                     <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
//                         this.props.navigation.goBack()
//                     }} />

//                     <View style={{ marginRight: 15 }}>
//                         <TouchableOpacity
//                             onPress={() => { this.onShare() }}>
//                             <AntDesign name={'sharealt'} size={23} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <ScrollView style={{height:630}}>
//                     <View>
//                         <View style={{ backgroundColor: 'white', padding: 20, flexDirection: 'row' }}>
//                             <TouchableWithoutFeedback>
//                                 <Image source={{uri:route.params.pic}} style={{ height: 220, width: 150, borderRadius: 10, marginRight: 25 }} />
//                             </TouchableWithoutFeedback>
//                             <View>
//                 <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>{route.params.title}</Text>
//                 <Text style={{ fontSize: 14, marginBottom: 120 }}>{route.params.leibie}</Text>
//                                 <Text style={{ fontSize: 25, fontWeight: 'bold' }}>免费</Text>
//                             </View>
//                         </View>

//                         <View style={{ padding: 20 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{route.params.date}</Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <EvilIcons name={'location'} size={25} onPress={() => {
//                         this.props.navigation.navigate("地图")
//                     }}/>
//                                 <Text style={{ fontSize: 18, marginBottom: 20, color: '#272727' }}>杭州 西湖区 浙江美术馆</Text>
//                             </View>
//                             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>展览介绍</Text>
//                             <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8 }} />
//                             <Text style={{ lineHeight: 20, fontSize: 16 }}>&emsp;&emsp;2020年8月5日，“向史而新——浙江百年水彩画作品展”在位于杭州的浙江美术馆开展，展览共展出包括李叔同、林风眠、吴冠中等众多美术先驱创作的水彩画作品140余件，涵盖了风景、静物、人物等诸多题材。展览以中国水彩画所表现的民族性、时代性、观念性三个学术概念为起点，回望中国水彩画的发生和发展，思考中国水彩画与浙江的紧密联系，并希望以此展览对中国水彩画的未来发展有所启迪。</Text>
//                             <Text style={{ fontSize: 20, fontWeight: 'bold' ,marginTop:10}}>展览作品</Text>
//                             <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8 }} />
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3642376305,872256515&fm=26&gp=0.jpg' }} />
//                                 <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599062021086&di=78be241097fa3d2b46757b67df79e3c1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181015%2F78149ec6fbb242448a60df9a30cafcbc.jpeg' }} />
//                                 <Image style={{ height: 100, width: 100, marginHorizontal: 10, borderRadius: 15 }} source={{ uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738250302,931647034&fm=26&gp=0.jpg' }} />
//                             </View>
//                         </View></View>
//                         <Text></Text> 
//                         <Text></Text> 
//                         <Text></Text> 
//                         <Text></Text> 
//                         <Text></Text> 
                        
//                 </ScrollView>
//                 <View style={{ width: '100%', position: 'absolute', bottom: 1, alignItems: 'center', backgroundColor: 'white', padding: 20 }}>
//                     <TouchableOpacity style={{ width: 200, borderRadius: 30, borderColor: 'black', borderWidth: 3, alignItems: 'center', padding: 5, marginBottom: 10 }}
//                      onPress={() =>{this.popUp.show()} }
//                     >
//                         <Text style={{ fontWeight: 'bold', fontSize: 20 }}>立即预约</Text>
//                     </TouchableOpacity>
                   
//                 </View>
//                 <PopUp ref={ref=>this.popUp=ref}>
//           <View style={{height:200,}}>
//           <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',right:10,top:5}} onPress={() => { this.popUp.hide() }} >
//           <AntDesign name={"closecircleo"} size={30}/> 
//           </TouchableOpacity>
//           <View style={{marginTop:20,marginLeft:18}}>
//           <Text style={{fontSize:18,fontWeight:'700'}}>选择场次</Text>
//           <View
//                         style={{ flexDirection: "row" }}
//                     >{this._renderMultiMark()}</View></View>
//           <View style={{height:0.5,backgroundColor:'black',marginTop:10,marginBottom:10}} />
//           <Text style={{marginTop:10,marginLeft:18,fontSize:18,fontWeight:'700'}}>选择人数</Text>
// </View>
//           </PopUp>




//             </View>
//         );
//     }
// }

// const styles=StyleSheet.create({

//     multiBox: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop:10


//     },
//     markRow: {
//         width: 70,
//         height: 28,
//         lineHeight: 28,
//         padding: 5,
//         marginRight: 10,
//         borderRadius: 8,
//         borderWidth: 1,
//         justifyContent:'center'
//     },
//     markChecked: {
//         backgroundColor: "#4F4F4F",
//         borderColor: "white",
//     },
//     markUnCheck: {
//         backgroundColor: "white",
//         borderColor: "#111",
//     },
//     markCheckedText: {
//         fontSize: 16,
//         color: "white",
//         textAlign: "center",
//         flexDirection: "row"
//     },
//     markUnCheckText: {
//         fontSize: 16,
//         color: "#000",
//         textAlign: "center",
//     },
// })

import React, { Component } from 'react';
import  { ParallaxImage } from 'react-native-snap-carousel';
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
    PixelRatio,
    DeviceEventEmitter
} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PopUp from './Tankuang'
import ShopCarCell from './ShopCarCell'
import ListView from 'deprecated-react-native-listview';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get("window");
var carList = require('./money.json');

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
            {
                "id": "3",
                "name": "9月5日",
                select: false
            },
            
        ]
    };

    

    


    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged: (r1,r2)=>{r1 != r2},
            // sectionHeaderHasChanged: (s1,s2)=>{s1 != s2}
          });
      
          carList.forEach((entity, i)=>{
            entity.count = 0;
          });
        this.state = {
            multiData: this.props.multiList,
            selectMultiItem: [],
            dataSource: ds.cloneWithRows(carList),
            totalPrice: 0,
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

    onShare = async () => 
    {
      const { navigation, route } = this.props;
      try {
        const result = await Share.share({
          message:route.params.title+route.params.leibie
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    render() {
        const { navigation, route } = this.props;




        const renderCarousel = () => (
            <Carousel style={{ width: width, height: height }}>
              <Image
                style={{ flex: 1 }}
                resizeMode="contain"
                source={{ uri: route.params.pic }}
              />
              {/* <Image
                style={{ flex: 1 }}
                resizeMode="contain"
                source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3642376305,872256515&fm=26&gp=0.jpg' }}
              />
              <Image
                style={{ flex: 1 }}
                resizeMode="contain"
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599062021086&di=78be241097fa3d2b46757b67df79e3c1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181015%2F78149ec6fbb242448a60df9a30cafcbc.jpeg' }}
              />
              <Image
                style={{ flex: 1 }}
                resizeMode="contain"
                source={{ uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3738250302,931647034&fm=26&gp=0.jpg' }}
              /> */}
              
            </Carousel>
          )

        return (

            <View  >



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", height: 60, backgroundColor: 'white', elevation: 1,padding:10}}>
                    <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                        this.props.navigation.goBack()
                    }} />

                    <View >
                        <TouchableOpacity
                            onPress={() =>{ this.onShare() }}>
                            <AntDesign name={'sharealt'} size={23} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{height:height-60}} showsVerticalScrollIndicator={false}>
                    <View style={{width:width}}>
                        <View style={{ backgroundColor: 'white', padding: 20, flexDirection: 'row',width:width }}>
                            <Lightbox springConfig={{tension: 15, friction: 7}} swipeToDismiss={false} renderContent={renderCarousel}>
                                <Image source={{uri:route.params.pic}} style={{ height: 200, width: 150, borderRadius: 10, marginRight: 20 }} />
                            </Lightbox>
                            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,width:150 }}>{route.params.title}</Text>
                <Text style={{ fontSize: 14,width:150  }}>{route.params.leibie}</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold',position:'absolute',bottom:0 }}>{route.params.money}</Text>
                            </View>
                        </View>

                        <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{route.params.date}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <EvilIcons name={'location'} size={25} onPress={() => {
                        this.props.navigation.navigate("地图",
                        {
                            title:route.params.title,
                            leibie:route.params.leibie,
                            location:route.params.location

                        }
                        )
                    }}/>
                                <Text style={{ fontSize: 18, marginBottom: 20, color: '#272727' }}>{route.params.location}</Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>展览介绍</Text>
                            <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8 }} />
                <Text style={{ lineHeight: 20, fontSize: 16 }}>&emsp;&emsp;{route.params.jieshao}</Text>
                            
                            <View style={{ backgroundColor: 'black', height: 0.5, marginTop: 8, marginBottom: 8,marginTop:10 }} />
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Image style={{ height: 250, width:120, marginHorizontal: 10, borderRadius: 5 }} source={{uri:route.params.pic1}} />
                                <Image style={{ height: 250, width:120, marginHorizontal: 10, borderRadius: 5 }} source={{uri:route.params.pic2}} />
                                <Image style={{ height: 250, width:120, marginHorizontal: 10, borderRadius: 5 }} source={{uri:route.params.pic3}} />
                            </ScrollView>
                        </View></View>
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        <Text></Text> 
                        
                </ScrollView>
                <View style={{ width: '100%', position: 'absolute', bottom: 0, alignItems: 'center', backgroundColor: 'white', padding: 20 }}>
                    <TouchableOpacity style={{ width: 200, borderRadius: 30, borderColor: 'black', borderWidth: 3, alignItems: 'center', padding: 5, marginBottom: 25 }}
                     onPress={() =>{this.popUp.show()} }>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>立即预约</Text>
                    </TouchableOpacity>
                   
                </View>
                <PopUp ref={ref=>this.popUp=ref}>
          <View style={{height:390}}>
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-end',right:10,top:5}} onPress={() => { this.popUp.hide() }} >
          <AntDesign name={"closecircleo"} size={30}/> 
          </TouchableOpacity>
          <View style={{marginTop:20,marginLeft:20}}>
              <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <Text style={{fontSize:16,fontWeight:'700',marginRight:5}}>场次</Text>
          <Text style={{fontSize:12,color:'#5B5B5B'}}>场地时间均为演出当地时间</Text></View>
          <View
                        style={{ flexDirection: "row",marginBottom:5 }}
                    >{this._renderMultiMark()}</View>
                    <Text>10:00-22:00</Text>
                    </View>
          <View style={{height:0.5,backgroundColor:'black',marginTop:10,marginBottom:10}} />
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <Text style={{marginTop:10,marginLeft:20,fontSize:16,fontWeight:'700',marginRight:5}}>数量</Text>
          <Text style={{color:'#5B5B5B',fontSize:12}}>每个账户限购6张</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,marginLeft:10,alignItems:'center'}}>
          <ListView style={{marginTop: 10,}}
                    renderRow={this._renderRow.bind(this)}
                    dataSource={this.state.dataSource}
                    // contentInset={{top: 0, left: 0, bottom: 40, right: 0}}
          >
          </ListView>
             
          </View>
          <View style={{height:0.5,width:width,backgroundColor:'black',position:'absolute',bottom:70}}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,position:'absolute',bottom:26,right:4}}>
          {/* <Text style={{color:'red',position:'absolute',left:10,bottom:10}}>{' '+  + this.state.totalPrice}</Text> */}
              <TouchableOpacity style={{width:100,height:40,backgroundColor:'#3C3C3C',borderRadius:20,alignItems:'center',justifyContent:'center',marginLeft:210}}>
                  <Text>确定</Text>
              </TouchableOpacity>
          </View>
</View>
          </PopUp>




            </View>
        );

        
    }

    componentDidMount() {

        DeviceEventEmitter.addListener('_removeGood', this._removeGood.bind(this));
        DeviceEventEmitter.addListener('_addGood', this._addGood.bind(this));
      }
    
      componentWillUnmount() {
        // this.subscription.remove();
      }

       //渲染界面
  _renderRow(rowData) {
    return (
        <ShopCarCell entity={rowData}/>
    )
  }
   //逻辑处理
   _removeGood(entity) {

    let totalPrice = this.state.totalPrice - parseInt(entity.money);

    this.setState({
      totalPrice: totalPrice
    })
  }

  _addGood(entity) {
    let totalPrice = this.state.totalPrice + parseInt(entity.money);
    this.setState({
      totalPrice: totalPrice
    })
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
    bottomStyle:{
        position:'absolute',
        bottom:0,
        height:35,
        width:width,
        backgroundColor:'rgba(255,255,255,0.9)',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      bottomRightStyle:{
        backgroundColor:'red',
        width:80,
        height:40,
        justifyContent:'center',
        alignItems:'center'
      }
})