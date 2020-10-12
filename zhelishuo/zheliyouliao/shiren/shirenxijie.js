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
  Dimensions,
  AppRegistry,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
var pick="";

const renderCarousel = () => (
  <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
    <Image
      style={{ flex: 1 }}
      resizeMode="contain"
      source={{ uri: pick }}
    />
    {/* <View style={{ backgroundColor: '#6C7A89', flex: 1 }}/>
    <View style={{ backgroundColor: '#019875', flex: 1 }}/>
    <View style={{ backgroundColor: '#E67E22', flex: 1 }}/> */}
  </Carousel>
)

export default function xxx({route,navigation}){
    const { pic } = route.params;
    const { name } = route.params;
    const { jieshao } = route.params;
    const { shengping } = route.params;
    const { diwei } = route.params;
    const { zuoping } = route.params;
    const { zhu } =route.params;
    pick=pic;
        return(
            <View style={{marginBottom:30}}>



                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:"100%",height:60,backgroundColor:'white',elevation:1}}>
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
<ScrollView style={{padding:15}}>
<View style={{flexDirection:'row',marginBottom:20}}>
  <Lightbox springConfig={{tension: 15, friction: 7}} swipeToDismiss={false} renderContent={renderCarousel}>
    <Image source={{uri:pic}} style={{height:200,width:WINDOW_WIDTH/3,resizeMode:'cover',borderRadius:10,marginRight:10}}/>
    </Lightbox>


    <View>
    <Text style={{fontSize:25,fontWeight:'bold'}}>{name}</Text>
    <Text style={{fontSize:16,marginRight:10,width:180}}>{jieshao}</Text>
    </View>
</View>

<Text style={{fontSize:20,fontWeight:'bold',marginBottom:10}}>简介</Text>
<View style={{height:0.5,backgroundColor:'black',marginBottom:10}}/>
<Text style={{fontSize:18,fontWeight:'bold'}}>生平</Text>
<Text style={{fontSize:15,lineHeight:20}}>&emsp;&emsp;{shengping}</Text>
<Text style={{fontSize:18,fontWeight:'bold'}}>地位</Text>
<Text style={{fontSize:15,lineHeight:20}}>&emsp;&emsp;{diwei}</Text>
<Text style={{fontSize:18,fontWeight:'bold'}}>作品</Text>
{/* <View style={{height:0.5,width:"100%",backgroundColor:'black',marginVertical:5}}></View>
<Text style={{fontSize:16,lineHeight:20,width:100}}>{head1}</Text>
<Text style={{fontSize:13,lineHeight:20,color:'#5B5B5B',width:210}}>{zhu1}</Text> */}
<FlatList
          showsVerticalScrollIndicator={false}
          data={zuoping}

          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{}}>
              <View style={{height:0.5,width:"100%",backgroundColor:'black',marginVertical:5}}></View>
              <Text style={{fontSize:16,lineHeight:20,fontWeight:'600'}}>{item.head}</Text>
              <Text style={{fontSize:13,lineHeight:20,color:'#5B5B5B',width:230}}>{item.zhu}</Text> 
            </View>

          
)}

/>
<TouchableOpacity>
<Text style={{fontSize:16}}>...</Text>
</TouchableOpacity>
<View>
    <Image  style={{height:50,width:90,marginBottom:5}}/>
                        <Text></Text>
</View>

</ScrollView>

            </View>
        );
    }
