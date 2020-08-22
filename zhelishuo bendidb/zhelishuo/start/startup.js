// import React, {Component,useState} from 'react';
// import { View, Text, Button,Image, ImageBackground,TouchableNativeFeedback,TouchableWithoutFeedback } from 'react-native';
// import { StackActions, NavigationActions } from 'react-navigation'; 
// import BetterBanner from 'react-native-better-banner';






// export default function startup({navigation}) {
// //    navigationOptions = {
// //     header: null,  //隐藏顶部导航栏
// // };
  

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <View style={{flex:1}}>
//             <BetterBanner
//                 bannerComponents={[
//                     <View >
//                       <Image source={require('E:/ad/zhelishuo/img/春.jpg')} 
//                         style={{width: '100%',height: '100%',}}/>
//                     </View>,
//                     <View >
//                         <Image source={require('E:/ad/zhelishuo/img/夏.jpg')} 
//                         style={{width: '100%',height: '100%',}}/>
//                     </View>,
//                     <View >
//                         <Image source={require('E:/ad/zhelishuo/img/秋.jpg')} 
//                         style={{width: '100%',height: '100%',}}/>
//                     </View>,
//                     <View >
//                         <Image source={require('E:/ad/zhelishuo/img/冬.jpg')} 
//                         style={{width: '100%',height: '100%',}}/>
//                     </View>,
                    
                
//                     <View >
                    
//                        <ImageBackground 
                       
//                        source={require('E:/ad/zhelishuo/img/蓝色小山.jpg')} 
//                         style={{width: '100%',height: '100%',}}>
//                           <View style={{
//                             flex:1, 
//                             top:580,
//                             width: 100,
//                             height: 100,
//                             left:150 
//                             }}>
//                         {/* <Button
//                          title="开始体验"
//                          onPress={() => {
//                          this.props.navigation.dispatch(StackActions.reset({
//                                index: 0,
//                                actions: [
//                                NavigationActions.navigate({ routeName: 'MyModal' })
//                               ],
//                           }))
//                           }}/> */}
//                           <TouchableWithoutFeedback  
                                
//                                 style={{}}
                              
//                                     onPress={() =>navigation.navigate('Appp')}
//                                 >
//                                  <View style={{height:40,width:120,borderRadius:100,flexDirection:'row',backgroundColor:'white',opacity:0.8}}>
//                                  <Text style={{fontSize:17,color:'#272727',marginTop:10,marginLeft:15,fontWeight:'bold'}}>进入-浙里说</Text>
//                                   </View>
//                                   </TouchableWithoutFeedback>
//                             </View>
//                        </ImageBackground>
//                     </View>,
//                 ]}
                
//                 scrollInterval={10000}
//                 bannerHeight={660}

//             />
            
//         </View>



      
      
//       </View>
//     );
  
// }

import React from 'react';
import {
    Animated,
    Text,
    View,
    Easing,
    InteractionManager,
    Image,
    TouchableOpacity,
    StatusBar,
    TouchableNativeFeedback
} from 'react-native';
import Splash from './daojishi';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');


const img=[
    {pic:require('../img/春.jpg')},
    {pic:require('../img/夏.jpg')},
    {pic:require('../img/秋.jpg')},
    {pic:require('../img/冬.jpg')},
    {pic:require('../img/蓝色小山.jpg')},
]

//    const pc=img[Math.random(0,4)]
  var num=parseInt(Math.random() * (5) );;

   const pc=img[num]



  


  


class FadeView extends React.Component {
    state = {
        //二维坐标
        translateValue: new Animated.ValueXY({ x: 0, y: 0 })
    };


    
    

    


    componentDidMount() {
        Animated.timing(                  // 随时间变化而执行动画
            this.state.translateValue,
            {
                toValue: {
                    x: -50,
                    y: 50,
                },                   // 透明度最终变为1，即完全不透明
                duration: 10000,              // 让动画持续一段时间
                // delay:1000,
                // easing:Easing.bounce(20)
            }
        ).start();
    }
    render() {
        //使用专门的可动画化的View组件
        return (<Animated.View
            style={{
                ...this.props.style,
                transform: [
                    { translateX: this.state.translateValue.x },
                    { translateY: this.state.translateValue.y },
                ]
            }}>
            {this.props.children}
        </Animated.View>);
    }
}
// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default class MainFadeView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar
 
 backgroundColor='#ff0000'

 translucent={true}

 hidden={true}

 animated={true}/>

                <FadeView style={{ width: 600, height: 1000 }}>
                    <Image source={pc.pic}
                        style={{ width: 600, height: 800 }} />
                </FadeView>
                <TouchableNativeFeedback
                    style={{ backgroundColor: "red", height: 20, width: 20, }}
                    onPress={
                        setTimeout(()=>{
                        this.props.navigation.navigate('Appp')
                    },3000)
                    }>
                    <Splash />
                </TouchableNativeFeedback >
            </View>
        );
    }
}
