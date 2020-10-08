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
                    pic1:'http://121.196.27.141/img/zheliyouliao/画作/陈清波《湖山春晓图》.jpg',
                    pic2:'http://121.196.27.141/img/zheliyouliao/画作/孙位《竹林七贤图》.jpg',
                    pic3:'http://121.196.27.141/img/zheliyouliao/画作/王振鹏《金明池图》.jpg',
                    hua:'•山水画',
                    wen:'以山川自然景观为主要描写对象的中国画。'
                },
                {
                    pic1:'http://121.196.27.141/img/zheliyouliao/画作/孙位《维摩图》.jpg',
                    pic2:'http://121.196.27.141/img/zheliyouliao/画作/孙位《高逸图》.jpg',
                    pic3:'http://121.196.27.141/img/zheliyouliao/画作/孙位《四皓弈棋图》.jpg',
                    hua:'•人物画',
                    wen:'以人物形象为主体的绘画之通称。'
                },
                {
                    pic1:'http://121.196.27.141/img/zheliyouliao/画作/李嵩《花篮图》.jpg',
                    pic2:'http://121.196.27.141/img/zheliyouliao/画作/林椿《葡萄草虫图》.jpg',
                    pic3:'http://121.196.27.141/img/zheliyouliao/画作/赵孟坚《岁寒三友图》.jpg',
                    hua:'•花鸟画',
                    wen:'以花、鸟、虫等为描绘对象的画。'
                },
                
            ],
            
            
        }
    }



    renderhua(){
        return(
            
        <FlatList 
        data={this.state.hua}
        keyExtractor={(item,index)=>index}
        renderItem={this.renderhuaItem}
        showsVerticalScrollIndicator={false}
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
        <Image style={{height:80,width:80,marginRight:8,borderRadius:5}} source={{uri:item.pic1}} />
            <Image style={{height:80,width:80,marginRight:8,borderRadius:5}} source={{uri:item.pic2}} />
            <Image style={{height:80,width:80,borderRadius:5}} source={{uri:item.pic3}} />
        </View>
        
          </View>
        );
      }


     

      render(){
          return(

              <View  style={{marginLeft:15,marginRight:15,marginBottom:130}}>
              <ScrollView style={{height:550}} showsVerticalScrollIndicator={false}>
                  {this.renderhua()}
                  </ScrollView>
              </View>
          );
      }

      

        }
    