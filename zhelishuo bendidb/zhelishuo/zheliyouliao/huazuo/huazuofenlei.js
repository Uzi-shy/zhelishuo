import React, {Component } from 'react';

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
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class wofabu extends Component{
    constructor(props){
        super(props);
        this.state={

            hua:[
                {
                    pic:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1152528217,35824656&fm=26&gp=0.jpg',
                    hua:'•山水画',
                    wen:'以山川自然景观为主要描写对象的中国画。'
                },
                {
                    pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598776419050&di=342ac10d04f54d3bc09af3c46a2e2553&imgtype=0&src=http%3A%2F%2Fbpic.wotucdn.com%2F12%2F60%2F10%2F58b3OOOPIC02.jpg',
                    hua:'•人文画',
                    wen:'也称“士大夫写意画”、“士夫画”，古代艺术教育内容。泛指中国封建社会中文人、士大夫的绘画。别于民间和宫廷画院的绘画。'
                },
                {
                    pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1928883076,181270892&fm=11&gp=0.jpg',
                    hua:'•花鸟画',
                    wen:'以花、鸟、虫等为描绘对象的画。'
                }
            ],
            
            
        }
    }



    renderhua(){
        return(
        <FlatList 
        data={this.state.hua}
        keyExtractor={(item,index)=>index}
        renderItem={this.renderhuaItem}
        />
       );}

       renderhuaItem=({item})=>{
        return(
          <View > 
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:5}}>
           <Text style={{fontSize:25,fontWeight:'bold'}}>{item.hua}</Text>
           <View></View>
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate("分类细节")}}>
                <AntDesign name={'right'} size={25} />
            </TouchableOpacity>
           </View>
           <View style={{backgroundColor:'#3C3C3C',height:0.5,width:'100%',marginBottom:5,marginTop:5}} />
        <Text style={{marginTop:5,marginBottom:5,fontSize:20,width:'90%'}}>{item.wen}</Text>
        <View style={{flexDirection:'row',marginTop:5,marginBottom:5}}>
        <Image style={{height:80,width:80,marginRight:8,borderRadius:5}} source={{uri:item.pic}} />
            <Image style={{height:80,width:80,marginRight:8,borderRadius:5}} source={{uri:item.pic}} />
            <Image style={{height:80,width:80,borderRadius:5}} source={{uri:item.pic}} />
        </View>
        
          </View>
        );
      }


     

      render(){
          return(

              <View  style={{marginLeft:15,marginRight:15,marginBottom:220}}>
              
                  {this.renderhua()}
              
              </View>
          );
      }

      

        }
    