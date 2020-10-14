import React, { Fragment,Component,useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ListFooterComponent,
  TouchableNativeFeedback,
  Alert,
  TouchableOpacity,

} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function xxx({route,navigation}){
    const { nm } = route.params;
    const { poet } = route.params;
    const { theme } = route.params;
    const { image } = route.params;
    const { yongbi } = route.params;
    const { goutu } = route.params;
    const { dianping } = route.params;
    const { jiesao} =route.params;
  
  
        return(
<View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:50,backgroundColor:'white',elevation:2}}>
            <AntDesign name={'left'} size={25} color={'#000'}  onPress={() => {
                                navigation.goBack()
                            }} />
                            <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
          <TouchableOpacity >
            <Ionicons name={'md-heart-outline'} size={23}/>
          </TouchableOpacity>  
            </View>
            <View style={{marginRight:8}}>
          <TouchableOpacity >
           <AntDesign name={'staro'} size={22}/>
          </TouchableOpacity>
          </View>
          <View style={{marginRight:15}}>
            <TouchableOpacity 
            onPress={()=>{}}>
            <AntDesign name={'sharealt'} size={23}/>
            </TouchableOpacity>
            </View>
                                

                            </View>
            
          </View>


<ScrollView style={{marginLeft:15,marginRight:15,marginBottom:50}}  showsVerticalScrollIndicator={false}>
    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:25,fontWeight:'bold',marginBottom:10,marginTop:10}} selectable={true}>{nm}</Text>
        <Image source={{uri:image}} style={{height:200,width:300,resizeMode:'cover',marginBottom:10}} />
        <Text style={{fontSize:16,marginBottom:10,lineHeight:20}}>&emsp;&emsp;{jiesao}</Text>
    </View>
    <Text style={{fontSize:22,fontWeight:'700',marginBottom:8}}>赏析</Text>
    <View style={{backgroundColor:'#4F4F4F',height:0.5,width:"100%",marginLeft:10,marginRight:10,marginBottom:5}} />
    <Text style={{fontSize:20,fontWeight:'700',marginBottom:5,marginTop:5}}>主题</Text>
    <Text style={{fontSize:16,marginBottom:10,lineHeight:20}}>&emsp;&emsp;{theme}</Text>
    <Text style={{fontSize:20,fontWeight:'700',marginBottom:5}}>构图</Text>
    <Text style={{fontSize:16,marginBottom:10,lineHeight:20}}>&emsp;&emsp;{goutu}</Text>
    <Text style={{fontSize:20,fontWeight:'700',marginBottom:5}}>用笔</Text>
    <Text style={{fontSize:16,marginBottom:10,lineHeight:20}}>&emsp;&emsp;{yongbi}</Text>
    <Text style={{fontSize:20,fontWeight:'700',marginBottom:5}}>名家点评</Text>
    <Text style={{fontSize:16,marginBottom:10,lineHeight:20}}>&emsp;&emsp;{dianping}</Text>
    <Text style={{fontSize:20,fontWeight:'700',marginBottom:5}}>作者简介</Text>
    <Text style={{fontSize:16,marginBottom:5,lineHeight:20}}>&emsp;&emsp;{poet}</Text>
          </ScrollView>
          </View>
        );
    }