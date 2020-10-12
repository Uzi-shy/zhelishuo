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
import Ionicons from 'react-native-vector-icons/Ionicons'



export default function xxx({route,navigation}){
  const { name } = route.params;
  const { poet } = route.params;
  const { zhushi } = route.params;
  const { picture } = route.params;
  const { shangxi } = route.params;
  const { yiwen } = route.params;
  const { quanwen } = route.params;


  
  
        return(
            <View style={{marginBottom:80}}>





            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:50,backgroundColor:'white',elevation:2}}>
            <AntDesign name={'left'} size={25} color={'#000'}  onPress={() => {
                                navigation.goBack()
                            }} />
                            <View style={{flexDirection:'row'}}>
                            <View style={{marginRight:10}}>
          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name={'md-heart-outline'} size={23}/>
          </TouchableOpacity>  
            </View>
            <View style={{marginRight:8}}>
          <TouchableOpacity onPress={()=>{ }}>
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


<ScrollView style={{marginLeft:15,marginRight:15,}} showsVerticalScrollIndicator={false} >
          <View style={{alignItems:'center',padding:15}}>
              <Text style={{fontWeight:'bold',fontSize:25,lineHeight:40}}>{name}</Text>
              <Text style={{lineHeight:42}}>{poet}</Text>
              <Text style={{fontSize:20,textAlign:"center",lineHeight:40,width:333,fontWeight:'600'}}>{quanwen}</Text>
          </View>

          <View>
          <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:10}}>译文</Text>
          <View style={{height:0.3,width:"100%",backgroundColor:'#5B5B5B',marginTop:8,marginBottom:8}} />
          <Text style={{fontSize:15}}>{yiwen}</Text>
          </View>

          <View>
          <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:10}}>注释</Text>
          <View style={{height:0.3,width:"100%",backgroundColor:'#5B5B5B',marginTop:8,marginBottom:8}} />
          <Text style={{fontSize:15}}>{zhushi}</Text>
          </View>

          <View>
          <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:10}}>赏析</Text>
          <View style={{height:0.3,width:"100%",backgroundColor:'#5B5B5B',marginTop:8,marginBottom:8}} />
          <Text style={{fontSize:15}}>{shangxi}</Text>
          </View>

          <View>
          <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:10}}>朗诵</Text>
          <View style={{height:0.3,width:"100%",backgroundColor:'#5B5B5B',marginTop:8,marginBottom:8}} />
          <Text style={{fontSize:15}}></Text>
          <View style={{padding:10}}>
            <TouchableOpacity>
              <AntDesign name={"sound"} size={20}/>
            </TouchableOpacity>
            </View>
          </View>

        <View>
        <Text style={{fontSize:17,fontWeight:'bold',marginBottom:10,marginTop:10}}>相关图片</Text>
        <View style={{height:0.3,width:"100%",backgroundColor:'#5B5B5B',marginTop:8,marginBottom:8}} />
        <Image source={{uri:picture}} style={{resizeMode:'cover',height:220,width:400}} />
        </View>




        </ScrollView>
          
          
          
          
          
          
          </View>
        );
    }

