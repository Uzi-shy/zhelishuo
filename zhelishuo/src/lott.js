// import React, { Fragment,Component,useEffect, useState } from 'react';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Image,
//   Text,
//   StatusBar,
//   FlatList,
//   RefreshControl,
//   ActivityIndicator,
//   ListFooterComponent,
//   TouchableNativeFeedback,
//   Alert
// } from 'react-native';



// export default class wofabu extends Component{


//     onstar_navigation(){
//         this.props.navigation.navigate("发布");

//     };


//     render(){
        
//         return(
//             <View>
//                 <Text>这是一个可怜的小动画</Text>
//                 {this.onstar_navigation()}
//             </View>
//         );
//     }

// }

import React from 'react';
import LottieView from 'lottie-react-native';
import {View,TouchableOpacity,Text,StyleSheet, Platform,
  Image,
  Animated,
  Easing,} from 'react-native';
var one =1;

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        top: new Animated.Value(0), 
        opacity:new Animated.Value(0),
    };
    this._onPress = this._onPress.bind(this);
}


_onPress() {
    Animated.timing( 
        this.state.top,
        {
            toValue:0, 
            duration:0, 
        }
    ).start();
    Animated.timing(
      this.state.opacity,
      {
        toValue:1,
        // duration:200
      }
    ).start()
}
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(0, 400);
    this.animation.loop=true;
    
  }


      onstar_navigation(){
        this.props.navigation.navigate("发布");

    };



  render() {
    this._onPress();

    setTimeout(() => {
      this.onstar_navigation();

    },2500)
    

    return (
      
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{top:this.state.top,opacity:this.state.opacity,justifyContent:'center',alignItems:'center',height:130,width:130,borderRadius:400,backgroundColor:'#d0d0d0'}}>
                     <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        loop={false}
        source={require('../android/asserts/34051-nyt-tik.json')}
        style={{height:200,width:200}}
      />
                </Animated.View>
      {/* <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={this._onPress}>
                   
                        <Text style={{fontSize:30}}>Press me!</Text>
                </TouchableOpacity> */}
      </View>
    );
  }
}

