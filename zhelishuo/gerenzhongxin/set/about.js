import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class xx extends Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:10,paddingVertical:10,backgroundColor:'white',elevation:2}}>
                   
                    <AntDesign name={'left'} style={{position:'absolute',left:10}} size={25} onPress={() => {
                this.props.navigation.goBack()
              }} />
                 
                    <Text style={{fontSize:30,fontFamily:"youran"}}>关于浙里说</Text>
                   
                </View>
                <View>
                    <Image style={{resizeMode:'cover',height:200,width:"100%"}} source={{uri:'http://121.196.27.141/img/logo_1.png'}}/>
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
               
               <View style={{backgroundColor:'white',elevation:1,paddingHorizontal:15}}>
                   <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10}}>
                       <Text style={{fontSize:18}}>检查新版本</Text>
                       <AntDesign name={'right'} size={25}/>
                   </TouchableOpacity>
               </View>
               {/* <View style={{height:0.5,backgroundColor:'#7B7B7B'}}/> */}
               </View>
               <View style={{alignItems:'center',justifyContent:'center',marginTop:200}}>
                   <Text style={{color:'#0080FF'}}>浙里说团队</Text>
                   <Text style={{color:'#0080FF'}}>浙里说科技有限公司</Text>
               </View>
            </View>
        );
    }
}

