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
import { PanResponder ,Animated, ImageBackground,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

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
                const positionx=this.state.pan.x.__getValue();
                const positionY=this.state.pan.y.__getValue();
                Animated.timing(this.state.opacity,{toValue:0}).start();


                if(positionY<-150){
                    Animated.timing(this.state.pan,{
                        toValue:{x:0,y:-900}
                    }).start(()=>{
                        this.state.pan.setValue({x:0,y:0});
                        this.state.scale.setValue(0.9);
                        this.state.translateY.setValue(44);
                        this.state.thirdScale.setValue(0.8);
                        this.state.thirdTranslateY.setValue(-50);
                        this.setState({index:getNextIndex(this.state.index)})
                    });
                }
                if(positionx<-150||positionx>180){
                    Animated.timing(this.state.pan,{
                        toValue:{x:-900,y:0}
                    }).start(()=>{
                        this.state.pan.setValue({x:0,y:0});
                        this.state.scale.setValue(0.9);
                        this.state.translateY.setValue(44);
                        this.state.thirdScale.setValue(0.8);
                        this.state.thirdTranslateY.setValue(-50);
                        this.setState({index:getNextIndex(this.state.index)})
                    });
                }
                // console.log(positionY);
                if(positionY>180){
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
                {/* <ImageBack source={{ uri:"http://121.196.27.141/img/dufu2.jpg"}}> */}
                <Image2 source={{ uri:"http://121.196.27.141/img/zhelikan/backgroundimage.jpg"}} style={{zIndex:-5,}}></Image2>
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
                toux={Projects[this.state.index].toux}
                author={Projects[this.state.index].author}
                text={Projects[this.state.index].text}
                pinglun={Projects[this.state.index].pinglun}
                pinglundate={Projects[this.state.index].pinglundate}
                dianzhan={Projects[this.state.index].dianzhan}
                zhuanfa={Projects[this.state.index].zhuanfa}
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
                    toux={Projects[getNextIndex(this.state.index)].toux}
                    author={Projects[getNextIndex(this.state.index)].author}
                    text={Projects[getNextIndex(this.state.index)].text}
                    pinglun={Projects[getNextIndex(this.state.index)].pinglun}
                    pinglundate={Projects[getNextIndex(this.state.index)].pinglundate}
                    dianzhan={Projects[getNextIndex(this.state.index)].dianzhan}
                    zhuanfa={Projects[getNextIndex(this.state.index)].zhuanfa}
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
                    toux={Projects[getNextIndex(this.state.index+1)].toux}
                    author={Projects[getNextIndex(this.state.index+1)].author}
                    text={Projects[getNextIndex(this.state.index+1)].text}
                    pinglun={Projects[getNextIndex(this.state.index)].pinglun}
                    pinglundate={Projects[getNextIndex(this.state.index)].pinglundate}
                    zhuanfa={Projects[getNextIndex(this.state.index)].zhuanfa}
                    dianzhan={Projects[getNextIndex(this.state.index)].dianzhan}
                    {...this.props}
                    />
                </Animated.View>
                {/* </ImageBack> */}
            </Container>
        );
    }
}

export default ProjectsScreen;

const  Image2 = styled.Image`
width:100%;
height:98%;
position:absolute;
  top:2;
`;

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
    flex:1
    justify-content:center;
    align-items:center;
    background:#D3D3D3;
`;

// const ImageBack=styled.ImageBackground`
// z-index:2;
// `;


const Text=styled.Text``;

const Projects=[
    {
        title:"《浮生六记》\n带我们把日子过成诗",
        image:[
            "http://121.196.27.141/img/zhelikan/fslj1.jpg",
           "http://121.196.27.141/img/zhelikan/fslj2.jpg",
            "http://121.196.27.141/img/zhelikan/fslj.jpg",
        ],
        
        author:"闲庭看花",
        toux:"http://121.196.27.141/img/girl.jpg",
        text:
        "《浮生六记》带我们把日子过成诗 ，\n作者[清]沈复。\n本书讲述了作者沈复与妻子芸娘从年少初识到婚后的甜蜜生活，两人情投意合，一起吟诗作画、赏花弄月、结伴出游、租炉煮茗、田园避暑...生活有滋有味。即使后期遭逢家庭变故，颠沛流离，依然相扶相依，不离不弃。\n芸娘是个很有生活情趣之人，愣是把把柴米油盐酱醋茶，过成了琴棋书画诗酒花，难怪林语堂先生称之为:“中国文学中最可爱 的女人”与芸寄届锡山华氏，时华夫人以两女从芸识字。乡居院旷，夏日逼人，劳教其家，作活花屏法甚妙。\n每屏一扇，用木梢二枝约长四五寸作矮条凳式，虛其中，横四挡，宽- -尺许，四角凿圆眼，插竹编方眼,屏约高六七尺，用砂盆种扁豆置屏中，盘延屏上，两人可移动。\n多编数屏，随意遮拦，恍如绿阴满窗，透风蔽日，纡回曲折，随时可更，故曰活花屏，有此- -法，即一切藤本香草随地可用。此真乡居之良法",  
        pinglun:4,dianzhan:12,zhuanfa:3,
        pinglundate:[
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"许三娘",
                words:"好，沈复写的针不戳",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/boy.jpg",
                name:"鲁人甲",
                words:"写到我心坎里了",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/zhelishuo/toux/toux2.jpg",
                name:"十二",
                words:"他俩夫妻感情真好啊，羡慕了",
                time:"10-4",
            },
            {
                toux:"http://121.196.27.141/img/zhelishuo/toux/toux12.jpg",
                name:"栗林同学",
                words:"在诗歌中生活，在生活中创作",
                time:"10-9",
            }
        ]
    },
    {
        title:"浙江山水",
        image:[
            "http://121.196.27.141/img/zhelikan/zjss1.png",
            "http://121.196.27.141/img/zhelikan/zjss2.png",
            "http://121.196.27.141/img/zhelikan/fslj1.jpg",
        ],
        author:"美丽人生",
        toux:"http://121.196.27.141/img/girl.jpg",
        text:
        "诗画浙江唐诗之路～古堰画乡 \n美丽的山水，风光无限好～～古堰画乡名不虚传。千年的香樟树，文昌阁，村落里嬉戏的孩童.",
        pinglun:1,dianzhan:2,zhuanfa:3,
        pinglundate:[
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"是张露露",
                words:"还有小船，夏天去不要太凉爽了",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"亚索儿",
                words:"哈撒给",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"十二",
                words:"来旅游不亏",
                time:"10-4",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"小林同学",
                words:"66666666",
                time:"10-9",
            }
        ]
    },
    {
        title:"醒时诗酒醉时歌",
        image:[
            "http://121.196.27.141/img/zhelikan/smc.jpg",
            "http://121.196.27.141/img/zhelikan/zjss1.png",
            "http://121.196.27.141/img/zhelikan/fslj1.jpg",
        ],
        
        author:"极简.",
        toux:"http://121.196.27.141/img/boy2.jpg",
        text:
        "宋】范仲淹\n"+
        "碧云天，黄叶地，秋色连波，波上寒烟翠。\n"+
        "山映斜阳天接水，芳草无情，更在斜阳外。\n"+
        "黯乡魂,追旅思,夜夜除非，好梦留人睡。\n"+
        "明月楼高休独倚，酒入愁肠，化作相思泪。\n"+
        "【注释】\n"+
        "①此调原为西域传入唐教坊曲。“苏幕遮”是当时高昌国语之音译。宋代词家 用此调是另度新曲。又名《云雾敛》、《鬓云松令》。双调，六十二字，上下片各五句四仄韵。②黯：形容心情忧郁。黯乡魂：用江淹《别赋》“黯然销魂”语。③追：追随，可引申为纠缠。旅思：羁旅之思。\n",
        pinglun:1,dianzhan:2,zhuanfa:3, 
        pinglundate:[
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"是张露露",
                words:"还有小船，夏天去不要太凉爽了",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"亚索儿",
                words:"哈撒给",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"十二",
                words:"来旅游不亏",
                time:"10-4",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"小林同学",
                words:"66666666",
                time:"10-9",
            }
        ]   
    },
    {
        title:"书籍推荐|徐志摩",
        image:[
            "http://121.196.27.141/img/zhelikan/xzm.jpg",
            "http://121.196.27.141/img/zhelikan/xzm1.jpg",
            "http://121.196.27.141/img/zhelikan/xzm2.jpg",
        ],
        
        author:"芳心.",
        toux:"http://121.196.27.141/img/boy2.jpg",
        text:
        "我不知道风是在那一个方向吹残破\n"+

        "正如我要在残破的意识里\n"+
        
        "重兴一个残破的天地\n",
        pinglun:1,dianzhan:2,zhuanfa:3,    
        pinglundate:[
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"是张露露",
                words:"还有小船，夏天去不要太凉爽了",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"亚索儿",
                words:"哈撒给",
                time:"8-10",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"十二",
                words:"来旅游不亏",
                time:"10-4",
            },
            {
                toux:"http://121.196.27.141/img/girl.jpg",
                name:"小林同学",
                words:"66666666",
                time:"10-9",
            }
        ]
    },
    
]

