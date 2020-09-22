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
  TouchableOpacity,

  
} from 'react-native';
import Searchnv from './searchnavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import { text } from 'express';
var one=1;
export default class wofabu extends Component{
  constructor(props) {
    super(props);



    this.state = {
        
        searchText:"",
        
        
        times:0,
        
    }
};

//获取搜索
getsearchtimes(){
 
  
    fetch('http://192.168.50.28:3000/getsearchtimes'
    , {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
  .then(function (res) {return res.json();})
  .then((json)=> {
    
    this.setState({times:json.times});
    console.log(this.state.times)
    
  })
      .catch((error) => console.error(error))
};


    render(){
    //   if (one==1){
    //     this.insertsearchtext();
    //     this.getsearchtimes();
    //     one=one+1;
    // }


    
      
        return(
            <View style={{height:"100%",marginBottom:150}}>
                <View  style={{flexDirection:'row',height:50,width:'100%',marginTop:10,}}>
                        <View style={{height:40,width:300,flexDirection:'row',marginLeft:20,borderRadius:15,marginRight:20,padding:5,backgroundColor:'#d0d0d0'}}>
                        <AntDesign name={'search1'} size={30}  />
                        <TextInput
                          placeholder="点此输入(多打一个空格)"

                          onChangeText={(text) => {
                            if(text!=''){
                              this.setState({ searchText: text });
                              this.insertsearchtext();
                              this.getsearchtimes();

                            }
                              // this.setState({ searchText: text });
                              // this.insertsearchtext();
                              // this.getsearchtimes();
                              
                              
                           
                        }}
                          style={{height:30,padding:1,width:270,fontSize:15}}
                        >
                          
                        </TextInput>
                        <FontAwesome name={'microphone'} size={20}  style={{position:"absolute",right:10,top:10}}/>
                </View>
                
                <TouchableNativeFeedback onPress={()=>{ this.props.navigation.goBack()}}>
                <Text style={{fontSize:25}} >取消</Text>  
                </TouchableNativeFeedback>
                </View>
                <TouchableOpacity style={{flexDirection:"row"}}>
                      <Entypo name={'back-in-time'} size={20}  />
                      <Text style={{marginLeft:10}}>{this.state.searchText}</Text>
                      
                </TouchableOpacity>
                <View style={{alignItems:"center",backgroundColor:'#9D9D9D',width:"100%",marginTop:5,marginBottom:5}}>
                  
                  <Text >上一条搜索记录</Text>
                </View>
                <Searchnv st={this.state.searchText}/>
            </View>
        );
    }


    
    

    //搜索文本插入
insertsearchtext() {
  
  fetch('http://192.168.50.28:3000/searchtext',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchText: this.state.searchText,
        times:this.state.times+1,

      })
    })


    
};

}