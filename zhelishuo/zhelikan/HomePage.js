// import React from 'react';
// import { ImageBackground,StyleSheet, Alert,Image,Text, View,TextInput,ScrollView,TouchableHighlight,TouchableNativeFeedback} from 'react-native';
// import BetterBanner from 'react-native-better-banner';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {createAppContainer} from 'react-navigation';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import AntDesign from"react-native-vector-icons/AntDesign";
// import Feather from"react-native-vector-icons/Feather";
// import SimpleLineIcons from"react-native-vector-icons/SimpleLineIcons";
 
// import guanzhu from './guanzhu';
// import tuijian from './tuijian';
// import pictures from './pictures';
// import author from './author';
// import more from './more';
// import { BottomTabBar } from '@react-navigation/bottom-tabs';


// const Topna = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();

// function Home(){
  
//   return(
//     <Stack.Navigator mode="modal" headerMode="none">
//     <Stack.Screen name="浙里有料" component={Zheliyouliao}/>
//     <Stack.Screen name="诗歌" component={tuijian}/>
//     <Stack.Screen name="画作" component={pictures}/>
//     <Stack.Screen name="作者" component={author}/>
//     <Stack.Screen name="更多" component={more}/>

//     </Stack.Navigator>
// );
// }

// export default function App() {
  
  
//   return (
//     <NavigationContainer independent="true"> 
    
//       <Topna.Navigator initialRouteName="推荐                                            " >
        
//         <Topna.Screen name="                                          关注" component={guanzhu} />
//         <Topna.Screen name="推荐                                            " component={Home}    />
//       </Topna.Navigator>
    
//     </NavigationContainer>
    
//   );
// }

// function Zheliyouliao  ({navigation}){
  
//   return (
//     <View>
//       <ImageBackground style={{width: '100%', height: '100%'}} source={require('E:/ad/zhelishuo/img/杜甫.jpg')}>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={{marginVertical:50}}>{/* 按钮栏目 */}
        


//       {/* 整体1号 */}
//         <View style={{ width: 280, height: 450,backgroundColor:'white',borderRadius:12,justifyContent: 'space-between',marginHorizontal:50}}>
//           <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
//             <View style={{padding:5}}>
//             <Image       
//             source={require('E:/ad/zhelishuo/img/拉钩.gif')}
//             style={{width: 40, height: 40,borderRadius:400}}
//             />
//             </View>
//             <View style={{padding:5}}>
//               <Text style={{fontSize:18,fontWeight:"bold"}}>小黄</Text>
//               <Text>7月12日</Text>
//             </View>
//           </View>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.push('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('E:/ad/zhelishuo/img/a.jpg')} style={{width: '100%', height: 200}} />
//             </TouchableNativeFeedback>
//           </View>
//           <View>{/* 文字 */}
//           <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>春题湖上</Text>
//           <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}>【作者】白居易【朝代】唐     </Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 湖上春来似图画， 乱峰围绕水平铺。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
//           </View>
//           <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between'}}>{/* 功能栏*/}
//           <TouchableNativeFeedback onPress={()=>{Alert.alert("关注+1");}}>
//             <SimpleLineIcons name={'user-follow'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           <TouchableNativeFeedback onPress={()=>{ Alert.alert("评论+1");}}>
//           <Feather name={'message-square'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'like2'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           </View>
//         </View>



//         {/* 整体2号 */}
//         <View style={{ width: 280, height: 450,backgroundColor:'white',borderRadius:12,justifyContent: 'space-between',marginHorizontal:30}}>
//           <View style={{flexDirection: 'row'}}>{/* 用户信息栏 */}
//             <View style={{padding:5}}>
//             <Image       
//             source={require('E:/ad/zhelishuo/img/peiqi.jpg')}
//             style={{width: 40, height: 40,borderRadius:400}}
//             />
//             </View>
//             <View style={{padding:5}}>
//               <Text style={{fontSize:18,fontWeight:"bold"}}>猪头妹#</Text>
//               <Text>7月12日</Text>
//             </View>
//           </View>
//           <View>{/* 图片 */}
//             <TouchableNativeFeedback onPress={()=>{ navigation.push('诗歌'), Alert.alert("进入诗歌页面");}}>
//             <Image     source={require('E:/ad/zhelishuo/img/冬.jpg')} style={{width: '100%', height: 200}} />
//             </TouchableNativeFeedback>
//           </View>
//           <View>{/* 文字 */}
//           <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>春题湖上</Text>
//           <Text style={{fontSize:18,fontStyle:"italic",textAlign:"center"}}>【作者】白居易【朝代】唐     </Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 湖上春来似图画， 乱峰围绕水平铺。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
//           <Text style={{fontSize:15,fontStyle:"italic",textAlign:"center"}}> 松排山面千重翠， 月点波心一颗🐖。</Text>
//           </View>
//           <View style={{flexDirection: 'row' ,padding:10,justifyContent: 'space-between'}}>{/* 功能栏*/}
//           <TouchableNativeFeedback onPress={()=>{Alert.alert("关注+1");}}>
//             <SimpleLineIcons name={'user-follow'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           <TouchableNativeFeedback onPress={()=>{ Alert.alert("评论+1");}}>
//           <Feather name={'message-square'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           <TouchableNativeFeedback onPress={()=>{ Alert.alert("点赞+1");}}>
//            <AntDesign name={'like2'} size={30}/>
//           </TouchableNativeFeedback>
//           <Text>10086</Text>
//           </View>
//         </View>

        


      

        
      
        





        

        
//         </ScrollView>
//       </ImageBackground>
//     </View>

//   )
// }


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { PanResponder ,Animated} from 'react-native';



function getNextIndex(index){
    var nextIndex=index+1
    if(nextIndex>Projects.length-1){
        return 0;
    }
    return nextIndex;

}

class ProjectsScreen extends React.Component{
    constructor(props){
        super(props);
    }
    static navigationOptions={
        header:null
    };

    state = {
        pan: new Animated.ValueXY(),
        scale: new Animated.Value(0.9),
        translateY:new Animated.Value(44),
        thirdScale:new Animated.Value(0.8),
        thirdTranslateY:new Animated.Value(-50),
        index:0,
        opacity: new Animated.Value(0),
    };

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,

            onPanResponderGrant:()=>{
                Animated.spring(this.state.scale,{toValue:1}).start();
                Animated.spring(this.state.translateY,{toValue:0}).start();

                Animated.spring(this.state.thirdScale,{toValue:0.9}).start();
                Animated.spring(this.state.thirdTranslateY,{toValue:44}).start();
             
                Animated.timing(this.state.opacity,{toValue:1}).start();
            },
            
            onPanResponderMove: Animated.event([
                null,
                {dx:this.state.pan.x, dy:this.state.pan.y}
            ]),

            onPanResponderRelease:()=>{
                const positionY=this.state.pan.y.__getValue();
                Animated.timing(this.state.opacity,{toValue:0}).start();

                // console.log(positionY);
                if(positionY>200){
                    Animated.timing(this.state.pan,{
                        toValue:{x:0,y:1000}
                    }).start(()=>{
                        this.state.pan.setValue({x:0,y:0});
                        this.state.scale.setValue(0.9);
                        this.state.translateY.setValue(44);
                        this.state.thirdScale.setValue(0.8);
                        this.state.thirdTranslateY.setValue(-50);
                        this.setState({index:getNextIndex(this.state.index)})
                    });
                }else{
                    Animated.spring(this.state.pan,{
                    toValue: {x:0,y:0}
                }).start();

                Animated.spring(this.state.scale,{toValue:0.9}).start();
                Animated.spring(this.state.translateY,{toValue:44}).start();
                


                Animated.spring(this.state.thirdScale,{toValue:0.8}).start();
                Animated.spring(this.state.thirdTranslateY,{toValue:-50}).start();
            
            
            }

                
            }
        });
    }

    render(){
        return(
            <Container>
                <AnimatedMask style={{opacity:this.state.opacity}}/>
                <Animated.View
                style={{
                    transform:[
                        { translateX:this.state.pan.x},
                        { translateY:this.state.pan.y}
                    ]
                }}
                {...this._panResponder.panHandlers}
                >
                <Project 
                title={Projects[this.state.index].title}
                image={Projects[this.state.index].image}
                author={Projects[this.state.index].author}
                text={Projects[this.state.index].text}
                canOpen={true}
                {...this.props}
                />

                </Animated.View>
                <Animated.View style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    zIndex:-1,
                    width:"100%",
                    height:"100%",
                    justifyContent:"center",
                    alignItems:"center",
                    transform:[{scale:this.state.scale},
                        {translateY:this.state.translateY}]

                }}>
                    <Project 
                    title={Projects[getNextIndex(this.state.index)].title}
                    image={Projects[getNextIndex(this.state.index)].image}
                    author={Projects[getNextIndex(this.state.index)].author}
                    text={Projects[getNextIndex(this.state.index)].text}
                    {...this.props}
                    />
                </Animated.View>
                <Animated.View 
                style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    zIndex:-3,
                    width:"100%",
                    height:"100%",
                    justifyContent:"center",
                    alignItems:"center",
                    transform:[{scale:this.state.thirdScale},
                        {translateY:this.state.thirdTranslateY}]

                }}>
                    <Project 
                    title={Projects[getNextIndex(this.state.index+1)].title}
                    image={Projects[getNextIndex(this.state.index+1)].image}
                    author={Projects[getNextIndex(this.state.index+1)].author}
                    text={Projects[getNextIndex(this.state.index+1)].text}
                    {...this.props}
                    />
                </Animated.View>
            </Container>
        );
    }
}

export default ProjectsScreen;

const Mask =styled.View`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.25);
  z-index:-3;
`;

const AnimatedMask=Animated.createAnimatedComponent(Mask);

const Container=styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background:#f0f3f5;
`;

const Text=styled.Text``;

const Projects=[
    {
        title:"醒时诗酒醉时歌",
        image:require("../img/zhelikan/smc.jpg"),
        author:"极简.",
        text:
        "宋】范仲淹\n"+
        "碧云天，黄叶地，秋色连波，波上寒烟翠。\n"+
        "山映斜阳天接水，芳草无情，更在斜阳外。\n"+
        "黯乡魂,追旅思,夜夜除非，好梦留人睡。\n"+
        "明月楼高休独倚，酒入愁肠，化作相思泪。\n"+
        "【注释】\n"+
        "①此调原为西域传入唐教坊曲。“苏幕遮”是当时高昌国语之音译。宋代词家 用此调是另度新曲。又名《云雾敛》、《鬓云松令》。双调，六十二字，上下片各五句四仄韵。②黯：形容心情忧郁。黯乡魂：用江淹《别赋》“黯然销魂”语。③追：追随，可引申为纠缠。旅思：羁旅之思。\n"
    },
    {
        title:"rainbow",
        image:require("../img/a.jpg"),
        author:"小😀黄",
        text:
        "啊巴阿巴阿巴阿巴巴啵啵啵啵啵啵................"
    },
    {
        title:"Price Tag3",
        image:require("../img/c.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code..........57676768..........."
    },
    {
        title:"Price Tag4",
        image:require("../img/spring.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code..........57676768..........."
    },
    {
        title:"Price Tag5",
        image:require("../img/summer.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code..........57676768..........."
    },
    {
        title:"Price Tag6",
        image:require("../img/pig.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code..........57676768..........."
    },
    {
        title:"Price Tag7",
        image:require("../img/winter.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code..........57676768..........."
    },
    {
        title:"Price Tag8",
        image:require("../img/winter.jpg"),
        author:"小红的大作",
        text:
        "Thanks to Design+Code.......21412156........"+
        "Thanks to Design+Code.......21412156........"+
        "Thanks to Design+Code.......21412156........"
    },
    {
        title:"猪头妹",
        image:require("../img/ztm.jpg"),
        author:"天才少年",
        text:
        "寻人启事：\n"+
        "图中姑娘年芳13\n"+
        "体态特征：无下巴\n"
    },
]

