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
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'

export default class wofabu extends Component{
    _renderItem = (item) => {
		return (
            <View style={{marginLeft:20,marginBottom:15}}>
			<TouchableOpacity style={{flexDirection:'row',marginBottom:5,marginTop:5,padding:5,alignItems:'center'}} >
				<Image source={{uri:item.item.toux}} style={{height:50,width:50,borderRadius:400,marginRight:15}}/>		
					<Text style={{fontSize:20}}>{item.item.user}</Text>
			</TouchableOpacity>
            <TouchableOpacity style={{width:"60%"}}>
        <Text style={{marginBottom:10,fontSize:17}}>{item.item.tiezi}</Text>
        <Image source={{uri:item.item.pic}} style={{height:180,resizeMode:'cover'}} />
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8,marginRight:15}}>
        <View style={{flexDirection:'row',marginLeft:5}}>
          <TouchableOpacity onPress={()=>{Alert.alert("点赞+1");}}>
            <Ionicons name={'md-heart-outline'} size={21}/>
          </TouchableOpacity>
          <Text style={{marginRight:10}}>{item.item.good}</Text>      
            </View>
        

        <View style={{flexDirection:'row',marginLeft:5}}>
          <TouchableOpacity onPress={()=>{ Alert.alert("评论+1");}}>
          <EvilIcons name={'comment'} size={27}/>
          </TouchableOpacity>
          <Text style={{marginRight:10}}>{item.item.pinglun}</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:5}}>
          <TouchableOpacity onPress={()=>{ Alert.alert("收藏+1");}}>
           <AntDesign name={'staro'} size={20}/>
          </TouchableOpacity>
      <Text>{item.item.shouc}</Text>
          </View>

          <View style={{flexDirection:'row',marginLeft:5}}>
          <TouchableOpacity onPress={()=>{Alert.alert("转发+1");}}>
            <Fontisto name={'share-a'} size={21}/>
          </TouchableOpacity>
          <Text style={{marginRight:10}}>{item.item.share}</Text>      
            </View>
</View>
            </View>
		)
    };

    _separator = () => {
		return <View style={{height:0.5, width:'100%',backgroundColor:'#7b7b7b'}}/>
	};

    render(){
        const data=[

            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'44'
            },
            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1671636840,3657579619&fm=26&gp=0.jpg',
                user:'小欣欣',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'33'
            },
            {
                toux:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3454843111,408121797&fm=26&gp=0.jpg',
                user:'小红红',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55',
            },
            {
                toux:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3841377910,1249074638&fm=26&gp=0.jpg',
                user:'小帆帆',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
                user:'小闻闻',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'77'
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1213264833,772204269&fm=26&gp=0.jpg',
                user:'小小小',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'
            },
            {
                toux:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1747080659,590047825&fm=26&gp=0.jpg',
                user:'小闻闻',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'
            },
            {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:"55"
            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'

            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'
            },
             {
                toux:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4069061260,1168198131&fm=26&gp=0.jpg',
                user:'小黄黄',
                tiezi:'此情无计可消除，才下眉头，又上心头。',
                pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3288752787,3119891481&fm=26&gp=0.jpg',
                good:'99',
                pinglun:'999',
                shouc:'20',
                share:'55'
            },
        ]
    
        return(
<View>
            {/* // <ImageBackground source={require('../img/杜甫.jpg')} style={{width:'100%',marginBottom:45,opacity:0.9}}> */}
                <View ItemSeparatorComponent={this._separator}/>
				<View style={{}}>
					<FlatList
						ItemSeparatorComponent={this._separator}
						renderItem={this._renderItem}
						data={data}
					>
					</FlatList>
				</View>


                
            {/* // </ImageBackground> */}
            </View>
        )
    }


}