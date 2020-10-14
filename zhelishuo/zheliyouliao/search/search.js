import React, { Fragment,Component,useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import Searchnv from './searchnavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default class wofabu extends Component{
    render(){
        return(
            <View style={{height:"100%",marginBottom:150}}>
                <View  style={{flexDirection:'row',height:50,width:'100%',marginTop:10,}}>
                        <View style={{height:40,width:300,flexDirection:'row',marginLeft:20,borderRadius:15,marginRight:20,padding:5,backgroundColor:'#d0d0d0'}}>
                        <AntDesign name={'search1'} size={30}  />
                        <TextInput
                          placeholder="点此输入"
                          
                          style={{height:30,padding:1,width:270,fontSize:15}}
                        ></TextInput>
                        
                </View>
                <TouchableNativeFeedback onPress={()=>{ this.props.navigation.goBack()}}>
                <Text style={{fontSize:25}} >取消</Text>  
                </TouchableNativeFeedback>
                </View>
                <View style={{backgroundColor:'#9D9D9D',height:0.5,width:"100%",marginTop:5,marginBottom:5}}/>
                <Searchnv/>
            </View>
        );
    }

}