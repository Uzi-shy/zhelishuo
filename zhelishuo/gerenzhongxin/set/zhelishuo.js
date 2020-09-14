import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class xx extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingVertical:10,backgroundColor:'white',elevation:2}}>
                    <TouchableOpacity>
                    <AntDesign name={'left'} size={25}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>关于浙里说</Text>
                    <Text>      </Text>
                </View>
                <View>
                    <Image style={{resizeMode:'cover',height:200,width:"100%"}} source={require('./img/logo2.png')}/>
                </View>
                <View style={{height:0.2,backgroundColor:'#BEBEBE'}}/>
                <View>
               <View style={{backgroundColor:'white',elevation:1,paddingHorizontal:15}}>
                   <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10}}>
                       <Text style={{fontSize:18}}>检查更新</Text>
                       <AntDesign name={'right'} size={25}/>
                   </TouchableOpacity>
               </View>
               <View style={{height:0.5,backgroundColor:'#7B7B7B'}}/>
               
               <View style={{backgroundColor:'white',elevation:3,paddingHorizontal:15}}>
                   <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10}}>
                       <Text style={{fontSize:18}}>检查新版本</Text>
                       <AntDesign name={'right'} size={25}/>
                   </TouchableOpacity>
               </View>
               <View style={{height:0.5,backgroundColor:'#7B7B7B'}}/>
               </View>
               <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
                   <Text style={{color:'#0080FF'}}>小欣欣&小黄黄</Text>
                   <Text style={{color:'#0080FF'}}>瓜山科技有限公司</Text>
               </View>
            </View>
        );
    }
}

